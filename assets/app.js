const siteData = {
  site: {
    name: "学习资源库",
    tagline: "分享知识 · 提升自己 · 成就未来",
    author: "Avery Lin",
    email: "18922729798@163.com",
    github: "https://github.com/hello1yjx/hello1yjx.github.io",
    bio: "专注整理高质量教程、实用资料和效率工具，帮助新手更快完成从学习到实践的每一步。",
    heroStats: [
      { value: "200+", label: "优质教程" },
      { value: "1000+", label: "实用资源" },
      { value: "50+", label: "项目实战" },
      { value: "10W+", label: "学习用户" }
    ]
  },
  categories: [
    { code: "</>", title: "编程开发", meta: "编程语言 / 前端 / 后端", count: "120+ 教程", tone: "blue" },
    { code: "BK", title: "学习资料", meta: "电子书 / 笔记 / 文档", count: "2000+ 资源", tone: "green" },
    { code: "TL", title: "实用工具", meta: "开发 / 设计 / 效率", count: "300+ 工具", tone: "violet" },
    { code: "PR", title: "项目实战", meta: "实战项目 / 源码分享", count: "50+ 项目", tone: "orange" },
    { code: "AI", title: "AI 人工智能", meta: "AI 工具 / 教程 / 提示词", count: "100+ 教程", tone: "rose" },
    { code: "DS", title: "设计资源", meta: "模板 / 素材 / 图标", count: "1000+ 资源", tone: "cyan" }
  ],
  posts: [
    {
      id: "github-pages-blog-tutorial",
      title: "GitHub Pages 从入门到部署完整教程",
      date: "2026-05-20",
      category: "教程",
      readTime: "12 分钟",
      views: "1.2k",
      comments: 24,
      excerpt: "从创建仓库、上传网页到开启 GitHub Pages，适合新手快速上线第一个个人网站。",
      tags: ["GitHub Pages", "建站", "零基础"],
      featured: true,
      accent: "github",
      body: `
        <p>GitHub Pages 是新手搭建静态网站最轻的入口之一。你只需要一个 GitHub 仓库，就能把 HTML、CSS 和 JavaScript 页面发布到公网。</p>
        <p>完整流程可以拆成四步：准备项目文件、创建仓库、推送代码、开启 Pages。每一步都建议保留截图和可复制命令，方便读者跟着完成。</p>
        <h2>适合谁</h2>
        <p>适合学生、内容创作者和刚开始学前端的新手。它不需要服务器成本，也不需要先学习复杂部署系统。</p>
        <h2>广告与资源位</h2>
        <p>文章中段可以放博客模板、域名服务或学习课程推荐；底部适合放 AdSense 和下一篇教程入口。</p>
      `
    },
    {
      id: "python-beginner-series",
      title: "Python 入门教程：从零基础到项目实战",
      date: "2026-05-19",
      category: "编程开发",
      readTime: "13 分钟",
      views: "2.3k",
      comments: 38,
      excerpt: "把变量、判断、循环、函数和练习项目串成一条新手能跟完的学习路线。",
      tags: ["Python", "练习代码", "新手教程"],
      featured: true,
      accent: "python",
      body: `
        <p>Python 很适合做系列教程，因为语法友好、应用场景广。建议从变量、数据类型、条件判断、循环、函数、文件处理这些基础知识开始。</p>
        <p>每一章最好配一个小练习，例如成绩统计、文件整理、网页信息提取。读者完成练习后，会更容易继续进入项目实战。</p>
        <h2>资料搭配</h2>
        <p>可以提供练习代码、PDF 笔记和参考答案。章节底部适合放编程书籍、课程或 IDE 插件联盟推荐。</p>
      `
    },
    {
      id: "vscode-ai-plugins-guide",
      title: "VS Code 必备插件推荐，提高开发效率",
      date: "2026-05-18",
      category: "工具",
      readTime: "9 分钟",
      views: "856",
      comments: 19,
      excerpt: "整理代码格式化、Git 协作、AI 编程、主题美化等高频插件，并说明适合场景。",
      tags: ["VS Code", "AI 工具", "插件推荐"],
      featured: true,
      accent: "vscode",
      body: `
        <p>插件推荐文章要避免单纯罗列，最好按场景来写：写代码、调试、Git 协作、AI 辅助、界面美化。这样读者能直接按自己的需求安装。</p>
        <p>每个插件都可以包含用途、适合人群、安装方式和注意事项。配合截图或 GIF 会更容易获得停留时间。</p>
        <h2>推荐位建议</h2>
        <p>可以在插件列表底部加入开发工具、AI 编程订阅或键盘硬件的推荐位。</p>
      `
    },
    {
      id: "hexo-next-theme-guide",
      title: "Hexo 博客搭建与优化完整指南",
      date: "2026-05-17",
      category: "教程",
      readTime: "11 分钟",
      views: "1.5k",
      comments: 21,
      excerpt: "从主题配置、菜单、评论系统到 SEO 优化，把 Hexo 博客配置成可长期使用的站点。",
      tags: ["Hexo", "NexT", "博客主题"],
      featured: true,
      accent: "hexo",
      body: `
        <p>Hexo / NexT 适合希望快速搭建博客、又想保留较多自定义空间的用户。文章可以按安装、主题配置、页面结构、评论系统和 SEO 拆成几个清晰部分。</p>
        <p>这类教程非常适合补充截图和配置片段，读者通常会边看边改。</p>
        <h2>变现位置</h2>
        <p>底部可以放模板下载、付费主题、图标库或托管服务的联盟链接。</p>
      `
    },
    {
      id: "ai-tools-practical-tutorials",
      title: "2026 最新 AI 工具大全：提升效率的必备神器",
      date: "2026-05-16",
      category: "AI 工具",
      readTime: "9 分钟",
      views: "3.1k",
      comments: 45,
      excerpt: "精选写作、绘图、编程、办公场景里的常用 AI 工具，帮新手快速找到合适入口。",
      tags: ["ChatGPT", "AI 工具", "效率"],
      featured: false,
      accent: "ai",
      body: `
        <p>AI 工具合集要按场景组织，而不是按工具名堆砌。建议分成写作、图片生成、编程辅助、办公效率、学习总结几类。</p>
        <p>每个工具都写清楚适合谁、解决什么问题、免费版够不够用，这比单纯写功能列表更有价值。</p>
        <h2>推荐位</h2>
        <p>适合接工具官网、付费套餐、提示词课程和插件市场相关联盟链接。</p>
      `
    },
    {
      id: "frontend-beginner-roadmap",
      title: "前端开发入门教程：HTML、CSS、JavaScript 学习路线",
      date: "2026-05-15",
      category: "编程开发",
      readTime: "14 分钟",
      views: "2.8k",
      comments: 32,
      excerpt: "把前端新手最常见的学习顺序、代码示例和练习建议整理成路线图。",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
      accent: "frontend",
      body: `
        <p>前端入门内容适合用路线图展开。先讲 HTML 结构，再讲 CSS 布局与样式，最后进入 JavaScript 交互。</p>
        <p>每一阶段都给出一个小页面练习，会比只讲概念更容易让读者获得成就感。</p>
        <h2>下载资源</h2>
        <p>代码包、练习题和 UI 模板可以放在章节底部，形成自然的资料下载入口。</p>
      `
    },
    {
      id: "study-materials-pdf-collection",
      title: "免费编程电子书大全：2026 最新整理",
      date: "2026-05-14",
      category: "学习资料",
      readTime: "8 分钟",
      views: "4.2k",
      comments: 67,
      excerpt: "按编程入门、前端、Python、Git 和办公技能分类整理 PDF 与学习资料。",
      tags: ["PDF 合集", "电子书", "学习资料"],
      featured: false,
      accent: "books",
      body: `
        <p>资料合集的价值在于分类清楚。建议按照编程入门、前端开发、Python、Git、办公效率等场景整理，而不是把链接堆在一起。</p>
        <p>每个资料旁边补一句适合谁、先读哪一章，会让页面更像有判断的推荐。</p>
        <h2>打赏与广告位</h2>
        <p>下载按钮旁适合放赞助入口、云盘会员或学习平台推荐。</p>
      `
    },
    {
      id: "common-programming-errors-fixes",
      title: "快速解决常见编程报错技巧：从错误信息到排查思路",
      date: "2026-05-13",
      category: "问题排查",
      readTime: "7 分钟",
      views: "1.9k",
      comments: 28,
      excerpt: "把常见报错按现象、原因和解决办法整理成速查内容。",
      tags: ["报错排查", "调试", "编程技巧"],
      featured: false,
      accent: "debug",
      body: `
        <p>报错类文章适合用“问题 - 原因 - 解决方法”的固定结构，读者能快速定位自己遇到的情况。</p>
        <p>高频方向包括 Git 推送失败、依赖安装失败、路径错误、语法错误和页面资源加载失败。</p>
      `
    },
    {
      id: "git-github-complete-manual",
      title: "Git / GitHub 完整操作手册：常用命令与协作流程",
      date: "2026-05-12",
      category: "开发工具",
      readTime: "10 分钟",
      views: "2.1k",
      comments: 31,
      excerpt: "从提交、分支、推送、冲突处理到 Pull Request，整理成新手可收藏的操作手册。",
      tags: ["Git", "GitHub", "命令手册"],
      featured: false,
      accent: "git",
      body: `
        <p>Git / GitHub 手册适合做成长尾流量页面。命令要配解释，也要给常见错误的处理方式。</p>
        <p>建议加入“第一次推送仓库”“更新网站”“解决冲突”几个真实场景。</p>
      `
    },
    {
      id: "office-templates-share",
      title: "高效办公资料模板分享：Word、Excel、PowerPoint 常用模板",
      date: "2026-05-11",
      category: "办公模板",
      readTime: "8 分钟",
      views: "1.6k",
      comments: 22,
      excerpt: "整理学生和职场人常用的文档、表格、演示模板，并附使用场景说明。",
      tags: ["Word 模板", "Excel 模板", "PPT 模板"],
      featured: false,
      accent: "office",
      body: `
        <p>办公模板内容适合按场景组织，例如简历、汇报、计划表、数据统计、课程展示等。</p>
        <p>下载区可以配合办公工具、云盘服务和教育平台推荐。</p>
      `
    }
  ],
  resources: [
    { name: "Python 爬虫实战项目源码", category: "源码", metric: "2.5k", link: "posts.html", description: "适合 Python 入门后练手的实战项目资料。" },
    { name: "前端面试题库合集", category: "题库", metric: "2.1k", link: "posts.html", description: "按 HTML、CSS、JavaScript 和框架基础整理。" },
    { name: "Java 核心知识点整理 PDF", category: "PDF", metric: "1.8k", link: "resources.html", description: "适合复习基础语法和面向对象知识。" },
    { name: "Vue3 项目实战模板", category: "模板", metric: "1.6k", link: "projects.html", description: "可作为前端项目展示和练习起点。" },
    { name: "1000+ 编程电子书合集", category: "电子书", metric: "1.5k", link: "resources.html", description: "按学习阶段分类整理的资料入口。" }
  ],
  projects: [
    {
      id: "starter-blog-kit",
      title: "学习资源库首页",
      summary: "把教程、资源、榜单和打赏入口整合成一个内容资源站首页。",
      stack: "HTML / CSS / JavaScript",
      status: "已上线",
      link: "index.html",
      body: `<p>首页围绕学习资源门户重组，适合后续持续发布教程、资料下载和工具推荐。</p>`
    },
    {
      id: "resource-map",
      title: "资源导航页",
      summary: "把建站、编程、AI 和办公资料分组整理，方便新手快速找到入口。",
      stack: "内容策划 / 静态页面",
      status: "持续更新",
      link: "resources.html",
      body: `<p>资源页用于承接下载、联盟推荐和赞助合作。</p>`
    },
    {
      id: "hotspot-tracker",
      title: "AI 热点专区",
      summary: "每天筛选可扩写成文章的 AI、编程和工具动态。",
      stack: "内容运营",
      status: "人工精选",
      link: "hotspots.html",
      body: `<p>热点页用于发现新选题，保持网站持续更新。</p>`
    }
  ],
  hotspots: [
    {
      title: "AI 编程助手继续成为开发者学习入口",
      date: "2026-05-28",
      source: "AI 工具观察",
      summary: "适合扩写成 VS Code + AI 编程插件教程，承接工具推荐和实战案例。",
      tags: ["AI 编程", "VS Code", "效率工具"]
    },
    {
      title: "GitHub Pages 仍是新手建站低成本选择",
      date: "2026-05-27",
      source: "建站趋势",
      summary: "可以继续补充自定义域名、ads.txt、AdSense 验证和静态站 SEO 内容。",
      tags: ["GitHub Pages", "AdSense", "建站"]
    },
    {
      title: "办公模板与资料合集搜索需求稳定",
      date: "2026-05-26",
      source: "内容选题池",
      summary: "适合做 Word、Excel、PPT 模板下载页，旁边放打赏和工具推荐位。",
      tags: ["办公模板", "资料下载", "SEO"]
    }
  ]
};

function formatDate(value) {
  return new Date(value).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function buildPostCard(post, index = 0) {
  return `
    <article class="article-card reveal">
      <a class="article-card__media article-card__media--${post.accent}" href="post.html?id=${post.id}">
        <span class="article-card__badge">${index === 0 ? "置顶" : post.category}</span>
        <strong>${post.title.split("：")[0]}</strong>
      </a>
      <div class="article-card__body">
        <div class="meta-row">
          <span>${post.category}</span>
          <span>${post.views}</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
        </div>
        <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
      </div>
    </article>
  `;
}

function buildLatestItem(post) {
  return `
    <article class="latest-item reveal">
      <a class="latest-thumb latest-thumb--${post.accent}" href="post.html?id=${post.id}">
        <span>${post.category}</span>
      </a>
      <div>
        <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="meta-row">
          <span>${post.category}</span>
          <span>${post.views}</span>
          <span>${post.comments} 评论</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
        </div>
      </div>
    </article>
  `;
}

function buildResourceCard(item) {
  return `
    <article class="resource-card reveal">
      <div class="resource-card__top">
        <span class="pill">${item.category}</span>
        <span>${item.metric}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a class="button button--secondary" href="${item.link}">查看资源</a>
    </article>
  `;
}

function buildProjectCard(project) {
  return `
    <article class="project-card reveal">
      <div class="project-card__visual"><span>${project.status}</span></div>
      <div class="project-card__body">
        <div class="meta-row">
          <span>${project.stack}</span>
          <span>${project.status}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <a class="text-link" href="project.html?id=${project.id}">查看详情</a>
      </div>
    </article>
  `;
}

function buildHotspotCard(item) {
  return `
    <article class="hotspot-card reveal">
      <div class="meta-row">
        <span>${item.source}</span>
        <time datetime="${item.date}">${formatDate(item.date)}</time>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `;
}

function injectHomePage() {
  const stats = document.querySelector("[data-home-stats]");
  const categories = document.querySelector("[data-home-categories]");
  const recommendations = document.querySelector("[data-recommendations]");
  const latest = document.querySelector("[data-home-latest]");
  const tags = document.querySelector("[data-home-tags]");
  const rank = document.querySelector("[data-download-rank]");
  const featuredResources = document.querySelector("[data-featured-resources]");
  const featuredProjects = document.querySelector("[data-featured-projects]");
  const hotspotsPreview = document.querySelector("[data-hotspots-preview]");

  if (stats) {
    stats.innerHTML = siteData.site.heroStats.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join("");
  }

  if (categories) {
    categories.innerHTML = siteData.categories.map((item) => `
      <a class="category-card category-card--${item.tone} reveal" href="posts.html?q=${encodeURIComponent(item.title)}">
        <span>${item.code}</span>
        <strong>${item.title}</strong>
        <em>${item.meta}</em>
        <small>${item.count}</small>
      </a>
    `).join("");
  }

  if (recommendations) {
    recommendations.innerHTML = siteData.posts.slice(0, 4).map(buildPostCard).join("");
  }

  if (latest) {
    latest.innerHTML = siteData.posts.slice(4, 8).map(buildLatestItem).join("");
  }

  if (tags) {
    tags.innerHTML = [...new Set(siteData.posts.flatMap((post) => post.tags))].slice(0, 14).map((tag) => `<a href="posts.html?q=${encodeURIComponent(tag)}">${tag}</a>`).join("");
  }

  if (rank) {
    rank.innerHTML = siteData.resources.map((item, index) => `
      <a href="${item.link}">
        <span>${index + 1}</span>
        <strong>${item.name}</strong>
        <em>${item.metric}</em>
      </a>
    `).join("");
  }

  if (featuredResources) {
    featuredResources.innerHTML = siteData.resources.slice(0, 3).map(buildResourceCard).join("");
  }

  if (featuredProjects) {
    featuredProjects.innerHTML = siteData.projects.slice(0, 2).map(buildProjectCard).join("");
  }

  if (hotspotsPreview) {
    hotspotsPreview.innerHTML = siteData.hotspots.slice(0, 3).map(buildHotspotCard).join("");
  }
}

function injectPostsPage() {
  const container = document.querySelector("[data-post-list]");
  const filterInput = document.querySelector("[data-post-filter]");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") || "";

  const render = (query = "") => {
    const normalized = query.trim().toLowerCase();
    const filtered = siteData.posts.filter((post) => {
      const haystack = [post.title, post.category, post.excerpt, post.tags.join(" ")].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });

    container.innerHTML = filtered.length
      ? filtered.map(buildPostCard).join("")
      : `<div class="empty-state">没有找到匹配内容，换个关键词试试。</div>`;
    revealOnScroll();
  };

  if (filterInput) {
    filterInput.value = initialQuery;
    filterInput.addEventListener("input", (event) => render(event.target.value));
  }
  render(initialQuery);
}

function injectPostDetail() {
  const detail = document.querySelector("[data-post-detail]");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const post = byId(siteData.posts, params.get("id")) || siteData.posts[0];

  detail.innerHTML = `
    <header class="detail-hero">
      <span class="pill">${post.category}</span>
      <h1>${post.title}</h1>
      <div class="meta-row">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span>${post.readTime}</span>
        <span>${post.views} 浏览</span>
        <span>${siteData.site.author}</span>
      </div>
      <p>${post.excerpt}</p>
    </header>
    <div class="article-layout">
      <article class="article-body">
        ${post.body}
        <div class="inline-promo">
          <p class="label">延伸资源</p>
          <h3>继续从资料入口进入下一步</h3>
          <p>这篇内容可以继续延伸到资源下载、工具推荐和项目实战。需要完整资料时，先看资源推荐页。</p>
          <a class="button button--secondary" href="resources.html">查看资源推荐</a>
        </div>
      </article>
      <aside class="article-sidebar">
        <div class="side-panel">
          <h3>本页标签</h3>
          <div class="tag-row">${post.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <div class="side-panel">
          <h3>热门阅读</h3>
          <div class="side-link-list">
            ${siteData.posts.slice(0, 5).map((item) => `<a href="post.html?id=${item.id}">${item.title}</a>`).join("")}
          </div>
        </div>
        <div class="side-panel side-panel--community">
          <h3>支持本站</h3>
          <p>如果内容帮到你，可以在联系页扫码打赏。</p>
          <a class="button button--primary" href="contact.html">去打赏</a>
        </div>
      </aside>
    </div>
  `;
}

function injectResourcesPage() {
  const container = document.querySelector("[data-resource-list]");
  if (!container) return;
  container.innerHTML = `
    <section class="section">
      <div class="resource-grid">${siteData.resources.map(buildResourceCard).join("")}</div>
    </section>
  `;
}

function injectProjectsPage() {
  const container = document.querySelector("[data-project-list]");
  if (!container) return;
  container.innerHTML = siteData.projects.map(buildProjectCard).join("");
}

function injectProjectDetail() {
  const detail = document.querySelector("[data-project-detail]");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const project = byId(siteData.projects, params.get("id")) || siteData.projects[0];

  detail.innerHTML = `
    <header class="detail-hero">
      <span class="pill">项目展示</span>
      <h1>${project.title}</h1>
      <div class="meta-row">
        <span>${project.stack}</span>
        <span>${project.status}</span>
      </div>
      <p>${project.summary}</p>
    </header>
    <section class="project-detail-grid">
      <div class="project-showcase">
        <div class="project-showcase__screen">${project.title}</div>
      </div>
      <div class="side-panel">
        <p class="label">项目说明</p>
        ${project.body}
        <a class="button button--secondary" href="${project.link}">访问项目</a>
      </div>
    </section>
  `;
}

function injectHotspotsPage() {
  const list = document.querySelector("[data-hotspot-list]");
  if (!list) return;
  list.innerHTML = siteData.hotspots.map(buildHotspotCard).join("");
}

function setGlobalContent() {
  document.querySelectorAll("[data-site-name]").forEach((node) => {
    node.textContent = siteData.site.name;
  });

  document.querySelectorAll("[data-site-tagline]").forEach((node) => {
    node.textContent = siteData.site.tagline;
  });

  document.querySelectorAll("[data-site-bio]").forEach((node) => {
    node.textContent = siteData.site.bio;
  });

  document.querySelectorAll("[data-site-email]").forEach((node) => {
    node.textContent = siteData.site.email;
    node.setAttribute("href", `mailto:${siteData.site.email}`);
  });

  document.querySelectorAll("[data-site-github]").forEach((node) => {
    node.setAttribute("href", siteData.site.github);
  });
}

function bindMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("site-nav--open", !expanded);
  });
}

function bindSearch() {
  document.querySelectorAll("[data-site-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("q")?.toString().trim();
      if (query) {
        window.location.href = `posts.html?q=${encodeURIComponent(query)}`;
      }
    });
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setGlobalContent();
  bindMenu();
  bindSearch();
  injectHomePage();
  injectPostsPage();
  injectPostDetail();
  injectResourcesPage();
  injectProjectsPage();
  injectProjectDetail();
  injectHotspotsPage();
  revealOnScroll();
});
