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
const checks = [];
const orderViolations = data.hotspots
  .map((item, index) => ({ index, previous: data.hotspots[index - 1], current: item }))
  .filter((item) => item.index > 0 && item.previous.date < item.current.date);
const sourceCounts = data.hotspots.reduce((counts, item) => {
  counts.set(item.sourceUrl, (counts.get(item.sourceUrl) || 0) + 1);
  return counts;
}, new Map());
const duplicateSources = [...sourceCounts.entries()].filter(([, count]) => count > 1);
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
  "downloadIdeas",
  "monetization"
];
const requiredHotspotFields = ["date", "tag", "title", "summary", "why", "sourceLabel", "sourceUrl", "articleIdea"];

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
check("hotspots remain latest-first", orderViolations.length === 0);
check("all hotspots have required fields", data.hotspots.every((item) => requiredHotspotFields.every((field) => item[field])));
check("hotspot source URLs are unique", new Set(data.hotspots.map((item) => item.sourceUrl)).size === data.hotspots.length);

context.injectHomePage();
check(
  "homepage preview renders newest three hotspots",
  data.hotspots.slice(0, 3).every((item) => nodes["[data-hotspots-preview]"].innerHTML.includes(item.title)) &&
    !nodes["[data-hotspots-preview]"].innerHTML.includes(data.hotspots[3].title)
);

context.injectHotspotsPage();
check("hotspots page renders newest five items", data.hotspots.slice(0, 5).every((item) => nodes["[data-hotspot-list]"].innerHTML.includes(item.title)));

context.injectPostsPage();
check("posts page links the newest two articles", data.posts.slice(0, 2).every((item) => nodes["[data-post-list]"].innerHTML.includes(`post.html?id=${item.id}`)));

for (const post of data.posts.slice(0, 2)) {
  context.window.location.search = `?id=${post.id}`;
  context.injectPostDetail();
  check(`${post.id} detail renders`, nodes["[data-post-detail]"].innerHTML.includes(post.title) && nodes["[data-post-detail]"].innerHTML.includes(post.officialLinks[0].url));
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
