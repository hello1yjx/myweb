const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "assets", "app.js"), "utf8");
const nodes = {
  "[data-hotspots-preview]": { innerHTML: "" },
  "[data-hotspot-list]": { innerHTML: "" },
  "[data-post-list]": { innerHTML: "" },
  "[data-post-filter]": { value: "", addEventListener() {} },
  "[data-post-detail]": { innerHTML: "" }
};
const description = {
  setAttribute(name, value) {
    this[name] = value;
  }
};
const context = {
  document: {
    title: "",
    addEventListener() {},
    querySelectorAll() {
      return [];
    },
    querySelector(selector) {
      return selector === 'meta[name="description"]' ? description : nodes[selector] || null;
    }
  },
  window: { location: { search: "" } },
  URLSearchParams
};

vm.createContext(context);
vm.runInContext(`${appSource};globalThis.__siteData=siteData;`, context);

const data = context.__siteData;
const publishedPosts = data.posts.filter((post) => post.published !== false);
const checks = [];
const orderViolations = data.hotspots
  .map((item, index) => ({ index, previous: data.hotspots[index - 1], current: item }))
  .filter((item) => item.index > 0 && item.previous.date < item.current.date);
const sourceCounts = data.hotspots.reduce((counts, item) => {
  counts.set(item.sourceUrl, (counts.get(item.sourceUrl) || 0) + 1);
  return counts;
}, new Map());
const duplicateSources = [...sourceCounts.entries()].filter(([, count]) => count > 1);
const articleFiles = fs.readdirSync(path.join(root, "articles")).filter((name) => name.endsWith(".html"));
const requiredPostFields = [
  "id",
  "title",
  "date",
  "category",
  "readTime",
  "excerpt",
  "tags",
  "intro",
  "audience",
  "format",
  "roadmap",
  "officialLinks",
  "curatedLinks",
  "downloadIdeas"
];
const requiredHotspotFields = ["date", "tag", "title", "summary", "why", "sourceLabel", "sourceUrl", "articleIdea"];
const publicRiskTerms = [
  "monetization",
  "广告位",
  "联盟入口",
  "适合承接",
  "后续可以补",
  "资源导航页",
  "赞助入口"
];

function check(name, condition) {
  checks.push({ name, passed: Boolean(condition) });
}

check("post IDs are unique", new Set(data.posts.map((item) => item.id)).size === data.posts.length);
check(
  "all posts have required fields",
  data.posts.every((item) =>
    requiredPostFields.every((field) => item[field] && (!Array.isArray(item[field]) || item[field].length))
  )
);
check("public app data avoids ad-planning terms", publicRiskTerms.every((term) => !appSource.includes(term)));
check("hotspots remain latest-first", orderViolations.length === 0);
check("all hotspots have required fields", data.hotspots.every((item) => requiredHotspotFields.every((field) => item[field])));
check("hotspot source URLs are unique", new Set(data.hotspots.map((item) => item.sourceUrl)).size === data.hotspots.length);
check("one static article exists per published post", articleFiles.length === publishedPosts.length);
check(
  "unpublished static articles are removed",
  data.posts.filter((post) => post.published === false).every((post) => !articleFiles.includes(`${post.id}.html`))
);
check(
  "all published articles have crawlable metadata, sources, and substantial body",
  publishedPosts.every((post) => {
    const articleSource = fs.readFileSync(path.join(root, "articles", `${post.id}.html`), "utf8");
    const articleBody = (articleSource.match(/<article class="article-body">([\s\S]*?)<\/article>/) || ["", ""])[1]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, "");
    const chineseCharacters = (articleBody.match(/[\u3400-\u9fff]/g) || []).length;
    return articleSource.includes(`<title>${post.title} |`) &&
      articleSource.includes(`rel="canonical"`) &&
      articleSource.includes(`application/ld+json`) &&
      articleSource.includes(post.officialLinks[0].url) &&
      chineseCharacters >= 500;
  })
);

context.injectHomePage();
check(
  "homepage preview renders newest three hotspots",
  data.hotspots.slice(0, 3).every((item) => nodes["[data-hotspots-preview]"].innerHTML.includes(item.title)) &&
    !nodes["[data-hotspots-preview]"].innerHTML.includes(data.hotspots[3].title)
);

context.injectHotspotsPage();
check("hotspots page renders newest five items", data.hotspots.slice(0, 5).every((item) => nodes["[data-hotspot-list]"].innerHTML.includes(item.title)));

const hotspotsPage = fs.readFileSync(path.join(root, "hotspots.html"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
check("hotspots archive is accessible but not indexed", hotspotsPage.includes('name="robots" content="noindex,follow"') && !sitemap.includes("/hotspots.html"));

context.injectPostsPage();
check("posts page links the newest two static articles", publishedPosts.slice(0, 2).every((item) => nodes["[data-post-list]"].innerHTML.includes(`articles/${item.id}.html`)));
check("unpublished posts stay out of posts page", data.posts.filter((post) => post.published === false).every((item) => !nodes["[data-post-list]"].innerHTML.includes(`articles/${item.id}.html`)));

for (const post of publishedPosts.slice(0, 2)) {
  context.window.location.search = `?id=${post.id}`;
  context.injectPostDetail();
  check(`${post.id} detail renders`, nodes["[data-post-detail]"].innerHTML.includes(post.title) && nodes["[data-post-detail]"].innerHTML.includes(post.officialLinks[0].url));

  const articlePath = path.join(root, "articles", `${post.id}.html`);
  const articleSource = fs.readFileSync(articlePath, "utf8");
  check(`${post.id} static article exists`, fs.existsSync(articlePath));
  check(`${post.id} static article has unique SEO`, articleSource.includes(`<title>${post.title} |`) && articleSource.includes(`articles/${post.id}.html`));
  check(`${post.id} static article contains source and body`, articleSource.includes(post.officialLinks[0].url) && articleSource.includes("<article"));
}

const failed = checks.filter((item) => !item.passed);
for (const item of checks) {
  console.log(`${item.passed ? "PASS" : "FAIL"} ${item.name}`);
}

if (failed.length) {
  for (const item of orderViolations) {
    console.log(`ORDER ${item.previous.date} ${item.previous.title} -> ${item.current.date} ${item.current.title}`);
  }
  for (const [sourceUrl, count] of duplicateSources) {
    console.log(`DUPLICATE ${count} ${sourceUrl}`);
  }
  process.exitCode = 1;
}
