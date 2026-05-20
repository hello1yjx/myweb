const siteData = {
  site: {
    name: "Lumen Forge",
    tagline: "把个人成长、建站实践和工具推荐做成可持续的个人品牌。",
    author: "Avery Lin",
    email: "18922729798@163.com",
    github: "https://github.com/hello1yjx/myweb",
    newsletter: "#newsletter",
    bio: "我记录个人网站搭建、内容经营、效率系统和实用工具，希望帮更多人更稳地开始自己的线上表达。",
    heroStats: [
      { value: "12+", label: "深度文章" },
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
      id: "github-pages-brand-blog",
      title: "用 GitHub Pages 搭出能长期经营的个人品牌博客",
      date: "2026-05-12",
      category: "建站指南",
      readTime: "8 分钟",
      excerpt: "从结构、视觉到内容规划，梳理一套既适合写作也方便后续变现的博客骨架。",
      tags: ["GitHub Pages", "个人品牌", "博客搭建"],
      featured: true,
      body: `
        <p>很多人做博客时会先陷进主题、框架和插件选择，但真正重要的是先定清楚网站要服务什么目标。对于个人品牌博客来说，首页不只是文章入口，还应该承担身份介绍、信任建立和转化引导的职责。</p>
        <p>我更推荐把首页做成“品牌博客混合型”：首屏先讲你是谁、在写什么、能帮到谁；接着展示最新内容和精选资源；最后再放项目、合作和订阅入口。这样既不会过分商业化，也给后续广告与联盟推荐留出了自然位置。</p>
        <h2>一个更稳的结构</h2>
        <p>首页可以拆成五层：首屏介绍、信任卡片、最新文章、精选资源、项目与合作入口。访客先感知你的方向，再进入内容，最后看到推荐与合作模块，心理路径更顺。</p>
        <pre><code>首页 = 品牌说明 + 内容更新 + 资源推荐 + 项目背书 + 联系转化</code></pre>
        <p>文章页则尽量专注阅读体验。广告或联盟推荐不应该打断理解节奏，最好出现在段落间空隙较大的位置，或者放到文末“延伸阅读 / 推荐工具”区域。</p>
      `
    },
    {
      id: "content-pillars-for-creators",
      title: "个人博客最稳的 3 条内容支柱：经验、工具、复盘",
      date: "2026-05-08",
      category: "内容策略",
      readTime: "6 分钟",
      excerpt: "如果你不知道该写什么，先固定三类内容，再慢慢打磨自己的表达风格。",
      tags: ["内容运营", "写作", "个人成长"],
      featured: true,
      body: `
        <p>一个人长期更新博客，最大的难题通常不是不会写，而是不知道该持续写什么。最实用的方法不是追热点，而是先固定几个稳定输出的内容支柱。</p>
        <p>我最推荐的三个方向是：经验总结、工具推荐、成长复盘。经验总结能建立专业感，工具推荐容易连接联盟变现，成长复盘则让读者更愿意持续关注你。</p>
        <h2>为什么是这三类</h2>
        <p>它们分别对应了信任、实用性和陪伴感。信任让人愿意继续读，实用性带来收藏与分享，陪伴感则让读者愿意回来。</p>
      `
    },
    {
      id: "affiliate-links-that-feel-natural",
      title: "联盟推荐不惹人反感的关键：先给判断标准，再给产品",
      date: "2026-05-03",
      category: "变现思路",
      readTime: "5 分钟",
      excerpt: "比起直接放购买按钮，更重要的是帮读者理解为什么这个工具适合他。",
      tags: ["联盟营销", "资源推荐", "信任建立"],
      featured: false,
      body: `
        <p>读者反感的不是推荐本身，而是没有上下文的推荐。真正有效的联盟内容，应该先讲场景、问题和选择标准，再给出推荐对象。</p>
        <p>比如推荐建站工具时，不要只写“这是我在用的”。更好的方式是说明：适合谁、不适合谁、什么时候值得花钱、有哪些替代方案。这种写法更像帮助判断，而不是单纯导流。</p>
      `
    },
    {
      id: "minimal-seo-for-static-blogs",
      title: "静态博客够用的 SEO 清单：先把基础做好",
      date: "2026-04-29",
      category: "增长优化",
      readTime: "7 分钟",
      excerpt: "不用一开始就做很重的技术 SEO，标题、描述、结构和链接关系先做好就很够用。",
      tags: ["SEO", "静态网站", "博客优化"],
      featured: false,
      body: `
        <p>静态博客的 SEO 起点其实比很多人想象中更高，因为页面快、结构清晰、部署稳定。真正需要优先处理的是标题层级、描述文案、内部链接和可读性，而不是一开始就把自己埋进复杂工具里。</p>
        <p>对于个人博客来说，每篇文章有独立标题、简洁描述、清晰段落和相关推荐，已经足够打下很好的基础。</p>
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
