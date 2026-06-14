const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "assets", "app.js");
const version = "20260614-hotspots";
const siteUrl = "https://hello1yjx.github.io";

function loadSiteRuntime() {
  const context = {
    document: {
      addEventListener() {},
      querySelectorAll() {
        return [];
      },
      querySelector() {
        return null;
      }
    },
    window: { location: { pathname: "/", search: "" } },
    URLSearchParams
  };

  vm.createContext(context);
  vm.runInContext(
    `${fs.readFileSync(appPath, "utf8")};globalThis.__siteData=siteData;`,
    context
  );
  return context;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function normalizeText(value) {
  return String(value)
    .split(/\r?\n/)
    .map((line) => line.replace(/[ \t]+$/, ""))
    .join("\n");
}

function replaceRegion(fileName, marker, content) {
  const filePath = path.join(root, fileName);
  const start = `<!-- ${marker}_START -->`;
  const end = `<!-- ${marker}_END -->`;
  const source = fs.readFileSync(filePath, "utf8");
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (!pattern.test(source)) {
    throw new Error(`Missing ${marker} markers in ${fileName}`);
  }

  fs.writeFileSync(
    filePath,
    normalizeText(source.replace(pattern, `${start}\n${content.trim()}\n${end}`)),
    "utf8"
  );
}

function articleTemplate(runtime, post, relatedPosts) {
  const { __siteData: data } = runtime;
  const canonical = `${siteUrl}/articles/${post.id}.html`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: data.site.author,
      url: `${siteUrl}/about.html`
    },
    publisher: {
      "@type": "Organization",
      name: data.site.name,
      url: `${siteUrl}/`
    },
    mainEntityOfPage: canonical,
    inLanguage: "zh-CN"
  }).replaceAll("<", "\\u003c");

  const officialSource = post.officialLinks[0];
  const relatedLinks = relatedPosts
    .map((item) => `<a href="${item.id}.html">${escapeHtml(item.title)}</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(post.title)} | ${escapeHtml(data.site.name)}</title>
  <meta name="description" content="${escapeAttribute(post.excerpt)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <script type="application/ld+json">${jsonLd}</script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6621999105936318" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/styles.css?v=${version}">
</head>
<body>
  <header class="site-header">
    <div class="page-shell site-header__inner">
      <a class="brand" href="../index.html" aria-label="返回首页">
        <span class="brand-mark" aria-hidden="true"><img src="../assets/images/brand-learning-code.svg" alt="" width="42" height="42"></span>
        <span class="brand-copy"><strong>${escapeHtml(data.site.name)}</strong><span>${escapeHtml(data.site.tagline)}</span></span>
      </a>
      <nav class="site-nav">
        <a href="../index.html">首页</a>
        <a href="../posts.html">教程</a>
        <a href="../resources.html">资源下载</a>
        <a href="../hotspots.html">AI 专区</a>
        <a href="../editorial.html">内容标准</a>
        <a href="../contact.html">联系</a>
      </nav>
    </div>
  </header>

  <main class="page-shell section">
    <header class="detail-hero">
      <span class="pill">${escapeHtml(post.category)}</span>
      <h1>${escapeHtml(post.title)}</h1>
      <div class="detail-hero__meta">
        <time datetime="${post.date}">${runtime.formatDate(post.date)}</time>
        <span>${escapeHtml(post.readTime)}</span>
        <span>作者：${escapeHtml(data.site.author)}</span>
      </div>
      <p>${escapeHtml(post.excerpt)}</p>
    </header>
    <div class="article-layout">
      <article class="article-body">
        <div class="inline-promo">
          <p class="label">来源与增量价值</p>
          <h3>本文基于官方资料整理，并补充适用场景、限制条件和实践检查步骤。</h3>
          <p>首要来源：<a href="${escapeAttribute(officialSource.url)}" target="_blank" rel="noreferrer">${escapeHtml(officialSource.label)}</a>。事实以原始来源为准，本站建议需结合自己的环境验证。</p>
        </div>
        ${runtime.buildArticleBody(post)}
        <div class="inline-promo">
          <p class="label">更正与更新</p>
          <h3>发现版本变化、来源失效或事实错误时，请通过联系页反馈。</h3>
          <p>本站会核对一手来源后更新内容，不使用无来源转载填充文章。</p>
          <a class="button button--secondary" href="../editorial.html">查看内容标准</a>
        </div>
      </article>
      <aside class="article-sidebar">
        <div class="sidebar-card">
          <p class="label">本页标签</p>
          <div class="tag-row">${post.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </div>
        <div class="sidebar-card">
          <p class="label">继续阅读</p>
          ${relatedLinks}
        </div>
        <div class="sidebar-card sidebar-card--accent">
          <p class="label">作者与方法</p>
          <h3>了解本站如何选题、核验来源与处理更正。</h3>
          <a class="button button--dark" href="../about.html">关于作者</a>
        </div>
      </aside>
    </div>
  </main>

  <footer class="footer">
    <div class="page-shell footer__inner">
      <div><strong>${escapeHtml(data.site.name)}</strong><p>${escapeHtml(data.site.tagline)}</p></div>
      <div>
        <a href="../editorial.html">内容标准</a><br>
        <a href="../privacy.html">隐私政策</a><br>
        <a href="../contact.html">联系</a>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function buildSitemap(posts) {
  const corePages = [
    ["", "1.0"],
    ["posts.html", "0.9"],
    ["resources.html", "0.9"],
    ["hotspots.html", "0.8"],
    ["projects.html", "0.7"],
    ["about.html", "0.7"],
    ["editorial.html", "0.7"],
    ["contact.html", "0.5"],
    ["privacy.html", "0.5"]
  ];

  const core = corePages
    .map(([page, priority]) => `  <url><loc>${siteUrl}/${page}</loc><lastmod>2026-06-14</lastmod><priority>${priority}</priority></url>`)
    .join("\n");
  const articles = posts
    .map((post) => `  <url><loc>${siteUrl}/articles/${post.id}.html</loc><lastmod>${post.date}</lastmod><priority>0.8</priority></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${core}
${articles}
</urlset>
`;
}

function main() {
  const runtime = loadSiteRuntime();
  const data = runtime.__siteData;
  const posts = data.posts.filter((post) => post.published !== false);
  const articlesDir = path.join(root, "articles");
  fs.mkdirSync(articlesDir, { recursive: true });

  const publishedIds = new Set(posts.map((post) => post.id));
  for (const file of fs.readdirSync(articlesDir).filter((name) => name.endsWith(".html"))) {
    const target = path.resolve(articlesDir, file);
    if (path.dirname(target) !== articlesDir) {
      throw new Error(`Refusing to remove unexpected article path: ${target}`);
    }
    if (!publishedIds.has(path.basename(file, ".html"))) {
      fs.rmSync(target);
    }
  }

  posts.forEach((post, index) => {
    const related = posts.filter((item) => item.id !== post.id).slice(index < 4 ? 4 : 0, index < 4 ? 8 : 4);
    fs.writeFileSync(
      path.join(articlesDir, `${post.id}.html`),
      normalizeText(articleTemplate(runtime, post, related)),
      "utf8"
    );
  });

  replaceRegion("posts.html", "STATIC_POSTS", posts.map(runtime.buildPostCard).join(""));
  replaceRegion("hotspots.html", "STATIC_HOTSPOTS", data.hotspots.map(runtime.buildHotspotCard).join(""));

  const resourceNode = { innerHTML: "" };
  runtime.document.querySelector = (selector) => selector === "[data-resource-list]" ? resourceNode : null;
  runtime.injectResourcesPage();
  replaceRegion("resources.html", "STATIC_RESOURCES", resourceNode.innerHTML);

  replaceRegion("index.html", "STATIC_HOME_HOTSPOTS", data.hotspots.slice(0, 3).map(runtime.buildHotspotCard).join(""));
  replaceRegion("index.html", "STATIC_HOME_RECOMMENDATIONS", posts.filter((post) => post.featured).slice(0, 4).map(runtime.buildPostCard).join(""));
  replaceRegion("index.html", "STATIC_HOME_LATEST", posts.slice(4, 8).map(runtime.buildLatestItem).join(""));

  fs.writeFileSync(path.join(root, "sitemap.xml"), buildSitemap(posts), "utf8");
  console.log(`Generated ${posts.length} static articles and refreshed crawlable page content.`);
}

main();
