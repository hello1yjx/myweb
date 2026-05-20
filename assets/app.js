const siteData = {
  site: {
    name: "Lumen Forge",
    tagline: "分享高点击教程、资料整理和可持续变现的内容型博客。",
    author: "Avery Lin",
    email: "18922729798@163.com",
    github: "https://github.com/hello1yjx/myweb",
    newsletter: "#newsletter",
    bio: "这里重点整理高搜索需求的建站教程、编程入门、AI 工具和高效办公资料，让新手也能快速找到真正有用的内容。",
    heroStats: [
      { value: "10", label: "高点击选题" },
      { value: "8", label: "精选工具" },
      { value: "5", label: "展示项目" }
    ],
    valueCards: [
      {
        title: "建站实战",
        text: "从 GitHub Pages 到内容结构、SEO 和页面优化，专门写给想开始的人。 "
      },
      {
        title: "效率工具",
        text: "挑真正值得长期用的工具，避免信息过载，用体验和场景来做推荐。 "
      },
      {
        title: "成长记录",
        text: "公开复盘写作、学习和个人品牌经营过程，让读者看到真实路径。 "
      }
    ]
  },
  posts: [
    {
      id: "github-pages-blog-tutorial",
      title: "零基础 GitHub Pages 搭建博客教程：从创建仓库到成功上线",
      date: "2026-05-20",
      category: "建站指南",
      readTime: "12 分钟",
      excerpt: "适合新手程序员、学生和内容创作者的一篇完整上手教程，覆盖仓库创建、页面结构、发布与常见问题。",
      tags: ["GitHub Pages", "博客搭建", "零基础"],
      featured: true,
      body: `
        <p>这篇文章适合完全没有博客经验的读者，目标是用最少的概念，让你从 0 到 1 把 GitHub Pages 博客发上网。内容结构可以分成：准备工作、创建仓库、写首页、绑定 Pages、排查访问问题。</p>
        <p>建议在正文里搭配截图和示例代码，因为新手最怕“看懂了但做不出来”。每一步最好都给一个可复制的例子，让读者能跟着完成。</p>
        <h2>受众与形式</h2>
        <p>受众主要是新手程序员、学生和内容创作者，形式建议做成图文教程，必要时补一段演示视频。这样停留时间会更高，收藏和分享也更自然。</p>
        <h2>广告与联盟建议</h2>
        <p>文章中段可以放博客模板、域名或主机类联盟推荐；文章底部适合放 AdSense 广告和“继续阅读”入口，让流量继续留在站内。</p>
      `
    },
    {
      id: "hexo-next-theme-guide",
      title: "Hexo / NexT 博客主题完整配置指南：从基础设置到个性化美化",
      date: "2026-05-19",
      category: "博客主题",
      readTime: "11 分钟",
      excerpt: "把最常用的 Hexo 与 NexT 配置拆成清晰步骤，适合博客爱好者快速照着调。",
      tags: ["Hexo", "NexT", "博客主题"],
      featured: true,
      body: `
        <p>Hexo / NexT 相关内容一直很稳，因为它覆盖了“想搭博客但不想从头写前端”的用户群。文章可以按安装、主题配置、菜单设置、评论系统、SEO、美化插件几个部分拆开写。</p>
        <p>如果能补充短视频或 GIF 演示，用户会更愿意停留，也更容易理解配置前后的差异。</p>
        <h2>变现思路</h2>
        <p>这类文章适合在底部放模板下载、付费插件、图标库或托管服务的联盟链接。读者已经投入精力配置博客，转化意愿通常会更高。</p>
      `
    },
    {
      id: "python-beginner-series",
      title: "Python 入门教程系列：语法、练习代码和学习路径一次整理",
      date: "2026-05-18",
      category: "编程入门",
      readTime: "13 分钟",
      excerpt: "把 Python 初学者最常遇到的语法、练习与学习顺序整理成可连载的系列内容。",
      tags: ["Python", "新手教程", "练习代码"],
      featured: true,
      body: `
        <p>Python 系列很适合做成长线内容。你可以把它拆成变量、判断、循环、函数、文件处理、实战小项目几个章节，每篇文末再引到下一篇，形成自然回访。</p>
        <p>这类内容适合图文教程加 PDF 下载，尤其是初学者会很喜欢“练习题 + 参考答案 + 汇总笔记”这种形式。</p>
        <h2>广告与联盟建议</h2>
        <p>每个章节底部可以放编程书籍、在线课程、IDE 插件或学习平台的联盟广告。因为用户已经进入学习状态，相关资源点击率通常不低。</p>
      `
    },
    {
      id: "vscode-ai-plugins-guide",
      title: "VS Code 插件使用指南：Codex、AI 编程工具和效率插件推荐",
      date: "2026-05-17",
      category: "效率工具",
      readTime: "9 分钟",
      excerpt: "整理最值得新手程序员安装的 VS Code 插件，并说明适合场景、安装方式和使用技巧。",
      tags: ["VS Code", "AI 工具", "插件推荐"],
      featured: true,
      body: `
        <p>这类内容非常适合用图文加 GIF，读者可以直接看到插件装完后的效果。建议结构按“适合谁、解决什么问题、怎么安装、使用时要注意什么”来写。</p>
        <p>如果你把 AI 工具、代码格式化、主题美化、Git 协作分别拆成几个小节，文章会更清晰，也更利于搜索引擎抓取。</p>
        <h2>广告位建议</h2>
        <p>可以放插件官网、开发工具、付费 AI 订阅或键盘类硬件联盟链接，文章底部再接 AdSense，会比较自然。</p>
      `
    },
    {
      id: "study-materials-pdf-collection",
      title: "高效学习资料整理：热门 PDF 合集下载与分类指南",
      date: "2026-05-16",
      category: "资料整理",
      readTime: "8 分钟",
      excerpt: "把常见的学习资料按考试、编程、效率和办公场景分类，方便学生和自学者快速找到入口。",
      tags: ["PDF 合集", "学习资料", "学生资源"],
      featured: false,
      body: `
        <p>资料整理类内容很容易获得点击，因为用户目标非常明确：想快速找到可用资源。建议按用途分类，比如编程入门、考证资料、英语学习、办公模板等。</p>
        <p>文章结构要尽量清晰，少讲抽象理念，多给目录和下载说明。每一类资料最好都补一句适合谁、为什么值得看。</p>
        <h2>转化建议</h2>
        <p>PDF 下载按钮旁边很适合放赞助按钮、网盘会员、学习平台或电子书工具的联盟推荐，但文案要偏“补充资源”，不要太强推。</p>
      `
    },
    {
      id: "git-github-complete-manual",
      title: "Git / GitHub 完整操作手册：常用命令、协作流程和报错排查",
      date: "2026-05-15",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "从最常见的提交、分支、推送，到多人协作和冲突解决，适合编程初学者长期收藏。",
      tags: ["Git", "GitHub", "命令手册"],
      featured: false,
      body: `
        <p>Git / GitHub 是编程新手早晚都会碰到的门槛内容，很适合写成“手册型文章”。结构上建议先写常用命令，再写分支协作、Pull Request 和常见报错。</p>
        <p>这类内容适合大量示例命令，因为读者通常不是来看概念，而是想快速解决眼前问题。</p>
        <h2>广告与联盟建议</h2>
        <p>文章底部适合挂 AdSense，也可以顺带推荐 Git/GitHub 相关图书、课程或代码托管进阶服务。</p>
      `
    },
    {
      id: "frontend-beginner-roadmap",
      title: "前端开发入门教程：HTML、CSS、JavaScript 学习路线和示例代码",
      date: "2026-05-14",
      category: "前端入门",
      readTime: "14 分钟",
      excerpt: "把前端新手最常见的学习顺序、代码示例和练习建议整理成一篇可反复查看的路线图。",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
      body: `
        <p>前端入门系列很适合做搜索流量入口。建议先给一张学习路线图，再分章节讲 HTML 结构、CSS 样式和 JavaScript 交互，让读者知道先学什么、后学什么。</p>
        <p>这类内容最好带代码示例和可下载的小练习项目，用户会更有完成感，也更容易收藏。</p>
        <h2>广告建议</h2>
        <p>代码下载按钮附近适合放编辑器、UI 模板、图标库或在线课程的联盟入口，和内容关联度会很高。</p>
      `
    },
    {
      id: "common-programming-errors-fixes",
      title: "快速解决常见编程报错技巧：从错误信息到排查思路",
      date: "2026-05-13",
      category: "问题排查",
      readTime: "7 分钟",
      excerpt: "适合学生和程序员收藏的一篇报错速查内容，把高频报错按现象、原因和解决办法整理清楚。",
      tags: ["报错排查", "编程技巧", "调试"],
      featured: false,
      body: `
        <p>报错类内容的优势是搜索需求非常强，尤其适合用“问题 - 原因 - 解决方法”的结构来写。每个错误都尽量给一个最短解决路径，别让读者再去猜。</p>
        <p>如果你能把 Python、前端、Git 三类常见报错分成小节，整篇文章会更有实用性，也更容易拿到长尾流量。</p>
        <h2>商业化建议</h2>
        <p>侧边栏适合长期放工具推荐、学习书籍和调试插件广告，因为读者在这类页面的需求通常很即时。</p>
      `
    },
    {
      id: "ai-tools-practical-tutorials",
      title: "AI 工具实用教程合集：ChatGPT、MidJourney 与常见 AI 应用场景",
      date: "2026-05-12",
      category: "AI 工具",
      readTime: "9 分钟",
      excerpt: "把新手最常用的 AI 工具按用途做成教程合集，适合做持续更新和资源整合。",
      tags: ["ChatGPT", "MidJourney", "AI 教程"],
      featured: false,
      body: `
        <p>AI 工具类内容特别适合做合集，因为工具更新快、用户需求广。你可以按写作、图片生成、编程辅助、办公效率四个方向来整理，这样更容易持续扩充。</p>
        <p>教程内容里最好多用场景举例，比如“写简历”“做 PPT”“写代码注释”，让新手知道自己能马上拿它做什么。</p>
        <h2>广告与联盟位</h2>
        <p>这类文章适合推荐工具官网、付费套餐、插件市场和系统化课程，联盟相关性通常很强。</p>
      `
    },
    {
      id: "office-templates-share",
      title: "高效办公资料模板分享：Word、Excel、PowerPoint 常用模板与使用指南",
      date: "2026-05-11",
      category: "办公模板",
      readTime: "8 分钟",
      excerpt: "适合学生和职场人的模板资源整合内容，既能带下载，也能带使用教程和场景说明。",
      tags: ["Word 模板", "Excel 模板", "PPT 模板"],
      featured: false,
      body: `
        <p>办公模板类内容有很强的分享属性，尤其适合学生、实习生和职场新人。文章里不要只给下载链接，最好补一句每种模板适合什么场景，比如汇报、简历、排班、数据整理等。</p>
        <p>如果你能把模板分成“学习场景”和“办公场景”两大类，读者会更容易找到需要的东西。</p>
        <h2>变现建议</h2>
        <p>模板下载区旁边可以放办公软件、教育平台或云盘会员的联盟推荐，这会比单独放广告更自然。</p>
      `
    }
  ],
  resources: [
    {
      name: "GitHub Pages",
      category: "建站工具",
      badge: "免费起步",
      description: "适合个人博客和项目展示，部署简单，和 GitHub 工作流结合顺手。",
      pitch: "如果你想先低成本开始，GitHub Pages 是最轻松的入口之一。",
      cta: "查看官方文档",
      link: "https://pages.github.com/"
    },
    {
      name: "Cloudflare",
      category: "域名与加速",
      badge: "推荐",
      description: "适合托管 DNS、基础加速和网站安全配置，个人站很够用。",
      pitch: "当你开始重视访问速度和稳定性时，它会是很稳的一层基础设施。",
      cta: "了解服务",
      link: "https://www.cloudflare.com/"
    },
    {
      name: "Plausible Analytics",
      category: "网站分析",
      badge: "轻量分析",
      description: "隐私友好的访问统计工具，界面干净，适合不想把站点做得太重的人。",
      pitch: "如果你只想知道哪些内容被看见，而不是追求复杂报表，它很合适。",
      cta: "查看产品",
      link: "https://plausible.io/"
    },
    {
      name: "Notion",
      category: "写作工作流",
      badge: "效率工具",
      description: "适合管理选题池、写作大纲和内容排期，让博客更新更稳定。",
      pitch: "对个人创作者来说，先把写作系统搭起来，比换主题更重要。",
      cta: "访问官网",
      link: "https://www.notion.so/"
    }
  ],
  projects: [
    {
      id: "starter-blog-kit",
      title: "Starter Blog Kit",
      summary: "面向新手创作者的静态博客起步模板，重点放在内容结构和转化布局。",
      stack: "HTML / CSS / JavaScript",
      status: "可演示",
      link: "#",
      body: `
        <p>这个项目聚焦于“快速开始又能长期扩展”的个人博客骨架。它把首页、文章页、资源推荐和项目展示统一到一套品牌系统里，方便未来增加广告、联盟推荐和订阅模块。</p>
      `
    },
    {
      id: "tool-library",
      title: "Tool Library",
      summary: "一个按场景整理的效率工具清单，强调使用建议而不是单纯罗列。",
      stack: "静态页面 / 内容策划",
      status: "持续更新",
      link: "#",
      body: `
        <p>我把自己常用的工具按用途做了分类，既能做内容推荐页，也能作为联盟转化页面。重点不是数量，而是每个工具适合什么场景。</p>
      `
    },
    {
      id: "creator-dashboard",
      title: "Creator Dashboard",
      summary: "把文章进度、资源库和发布节奏整理成一个轻量创作者面板。",
      stack: "前端原型",
      status: "概念项目",
      link: "#",
      body: `
        <p>这是一个内部使用的内容管理原型，帮助追踪哪些主题值得持续写、哪些资源更适合推荐，以及哪些页面需要优化。</p>
      `
    }
  ]
};

function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function buildPostCard(post) {
  return `
    <article class="content-card reveal">
      <div class="content-card__meta">
        <span>${post.category}</span>
        <span>${post.readTime}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="content-card__footer">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <a class="text-link" href="post.html?id=${post.id}">阅读全文</a>
      </div>
    </article>
  `;
}

function buildResourceCard(item) {
  return `
    <article class="resource-card reveal">
      <div class="resource-card__top">
        <span class="pill">${item.category}</span>
        <span class="resource-card__badge">${item.badge}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="resource-card__pitch">${item.pitch}</p>
      <a class="button button--secondary" href="${item.link}" target="_blank" rel="noreferrer"> ${item.cta} </a>
    </article>
  `;
}

function buildProjectCard(project) {
  return `
    <article class="project-card reveal">
      <div class="project-card__visual">
        <span>${project.status}</span>
      </div>
      <div class="project-card__body">
        <div class="content-card__meta">
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

function injectHomePage() {
  const stats = document.querySelector("[data-home-stats]");
  const values = document.querySelector("[data-home-values]");
  const featuredPosts = document.querySelector("[data-featured-posts]");
  const resources = document.querySelector("[data-featured-resources]");
  const projects = document.querySelector("[data-featured-projects]");

  if (stats) {
    stats.innerHTML = siteData.site.heroStats
      .map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`)
      .join("");
  }

  if (values) {
    values.innerHTML = siteData.site.valueCards
      .map(
        (item) => `
          <article class="value-card reveal">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `
      )
      .join("");
  }

  if (featuredPosts) {
    featuredPosts.innerHTML = siteData.posts
      .filter((post) => post.featured)
      .map(buildPostCard)
      .join("");
  }

  if (resources) {
    resources.innerHTML = siteData.resources.slice(0, 3).map(buildResourceCard).join("");
  }

  if (projects) {
    projects.innerHTML = siteData.projects.slice(0, 2).map(buildProjectCard).join("");
  }
}

function injectPostsPage() {
  const container = document.querySelector("[data-post-list]");
  const filterInput = document.querySelector("[data-post-filter]");

  if (!container) return;

  const render = (query = "") => {
    const normalized = query.trim().toLowerCase();
    const filtered = siteData.posts.filter((post) => {
      const haystack = [post.title, post.category, post.excerpt, post.tags.join(" ")].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });

    container.innerHTML = filtered.length
      ? filtered.map(buildPostCard).join("")
      : `<div class="empty-state">没有找到匹配内容，换个关键词试试。</div>`;
  };

  render();

  if (filterInput) {
    filterInput.addEventListener("input", (event) => render(event.target.value));
  }
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
      <div class="detail-hero__meta">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span>${post.readTime}</span>
        <span>${siteData.site.author}</span>
      </div>
      <p>${post.excerpt}</p>
    </header>
    <div class="article-layout">
      <article class="article-body">
        ${post.body}
        <div class="inline-promo">
          <p class="label">延伸资源</p>
          <h3>把推荐位做成“补充判断”的内容，而不是硬塞广告。</h3>
          <p>如果这篇文章对你有帮助，可以继续看资源推荐页，我把建站、统计和内容工具按场景整理好了。</p>
          <a class="button button--secondary" href="resources.html">查看资源推荐</a>
        </div>
      </article>
      <aside class="article-sidebar">
        <div class="sidebar-card">
          <p class="label">本页标签</p>
          <div class="tag-row">
            ${post.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <div class="sidebar-card">
          <p class="label">热门阅读</p>
          ${siteData.posts
            .slice(0, 3)
            .map((item) => `<a href="post.html?id=${item.id}">${item.title}</a>`)
            .join("")}
        </div>
        <div class="sidebar-card sidebar-card--accent">
          <p class="label">合作入口</p>
          <h3>接受轻量站点搭建与内容结构咨询</h3>
          <a class="button button--dark" href="contact.html">联系我</a>
        </div>
      </aside>
    </div>
  `;
}

function injectResourcesPage() {
  const container = document.querySelector("[data-resource-list]");
  if (!container) return;
  container.innerHTML = siteData.resources.map(buildResourceCard).join("");
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
      <div class="detail-hero__meta">
        <span>${project.stack}</span>
        <span>${project.status}</span>
      </div>
      <p>${project.summary}</p>
    </header>
    <section class="project-detail-grid">
      <div class="project-showcase">
        <div class="project-showcase__screen">项目预览占位</div>
      </div>
      <div class="sidebar-card">
        <p class="label">项目说明</p>
        ${project.body}
        <a class="button button--secondary" href="${project.link}">访问项目</a>
      </div>
    </section>
  `;
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

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 60, 320)}ms`;
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setGlobalContent();
  bindMenu();
  injectHomePage();
  injectPostsPage();
  injectPostDetail();
  injectResourcesPage();
  injectProjectsPage();
  injectProjectDetail();
  revealOnScroll();
});
