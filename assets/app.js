const siteData = {
  site: {
    name: "学习资源库",
    tagline: "分享知识 · 提升自己 · 成就未来",
    author: "Avery Lin",
    email: "18922729798@163.com",
    github: "https://github.com/hello1yjx/hello1yjx.github.io",
    newsletter: "#newsletter",
    bio: "把官方入口、学习路线、示例代码和可扩展资料放进同一张地图里，让第一次来的人也能马上知道从哪里开始。",
    heroStats: [
      { value: "10", label: "主题路线" },
      { value: "30+", label: "精选入口" },
      { value: "1", label: "持续更新的资源库" }
    ],
    valueCards: [
      {
        title: "先给路线，再给链接",
        text: "不是把资料堆在一起，而是先告诉你适合谁、从哪开始、下一步看什么。"
      },
      {
        title: "优先长期可用",
        text: "入口优先选择官方文档、稳定工具和可持续更新的资料，减少踩坑和失效链接。"
      },
      {
        title: "每个主题都能长大",
        text: "资源卡可以继续扩成长文教程、下载页、广告位或联盟推荐，让网站越做越有价值。"
      }
    ]
  },
  posts: [
    {
      id: "github-copilot-memory-controls-guide",
      title: "GitHub Copilot Memory 新手指南：记忆会保存什么，什么时候该关闭",
      date: "2026-05-28",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 在 2026 年 5 月 26 日更新了 Copilot Memory 的删除、仓库级关闭和 CLI 控制能力。本文把它整理成适合个人开发者和小团队阅读的使用边界清单。",
      tags: ["GitHub Copilot", "AI 编程", "开发效率"],
      featured: true,
      intro: [
        "AI 编程工具越来越像长期协作的队友：它不只回答一次问题，还会记住仓库里的约定、偏好和上下文。这样可以少解释很多重复信息，但也带来一个新问题：哪些内容适合被记住，哪些内容应该明确关闭或删除？",
        "GitHub 2026 年 5 月 26 日的更新，把 Copilot Memory 的控制入口做得更清楚：包括删除提示、仓库级关闭开关、Copilot CLI 里的 /memory 命令，以及保存记忆时更明确的作用域说明。新手可以把这次更新当成理解 AI 编程记忆边界的入口。"
      ],
      audience: [
        "正在使用 GitHub Copilot、Copilot CLI 或代码代理的新手开发者",
        "维护个人网站、开源仓库或小团队项目的站长",
        "担心 AI 工具记住敏感规则、内部约定或过期信息的人"
      ],
      format: [
        "适合做成图文指南 + 设置路径截图",
        "后续可以补一张“用户级记忆 / 仓库级记忆 / 不应保存内容”的对照表"
      ],
      roadmap: [
        "先确认自己用的是个人 Copilot 还是组织/企业 Copilot，因为控制入口和权限不同。",
        "再区分用户级偏好和仓库级事实：前者跟着个人走，后者可能影响仓库贡献者。",
        "最后定期检查 Copilot Memory 设置，把敏感、错误或已经过期的记忆删掉。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot Memory controls",
          url: "https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/",
          note: "本次更新的原始来源，包含删除、关闭和 CLI 控制说明。"
        }
      ],
      curatedLinks: [
        "如果只是让 Copilot 记住代码风格、测试命令、目录约定，通常比较适合保存为仓库级事实。",
        "如果内容涉及密钥、客户信息、内部账号、未公开业务规则，不要保存进记忆。",
        "当仓库刚经历大重构、框架升级或目录迁移时，建议回头检查旧记忆是否已经失效。"
      ],
      downloadIdeas: [
        "可以补一份“AI 编程记忆检查清单”PDF",
        "可以整理 Copilot CLI 常用命令速查表"
      ],
      monetization: "适合在正文中部放 GitHub、代码托管、AI 编程课程或团队协作工具的资源位；底部可以放“AI 编程工作流”系列文章入口。",
      extraSections: [
        {
          title: "新手先记住这 3 个边界",
          items: [
            "能公开写进 README 的项目约定，通常更适合被 AI 记住。",
            "只属于你个人习惯的偏好，应该尽量留在用户级范围。",
            "涉及安全、客户、账号、商业策略的信息，不应该交给记忆功能。"
          ]
        },
        {
          title: "Copilot CLI 里可以先看的命令",
          text: "GitHub 这次提到 Copilot CLI 新增了 /memory 控制入口。第一次使用时，建议先查看当前状态，再决定是否开启。",
          code: `/memory show
/memory on
/memory off`,
          language: "text"
        }
      ]
    },
    {
      id: "vercel-sandbox-persistence-agent-workflow",
      title: "Vercel Sandboxes 持久化后，AI 代理开发环境可以怎样保存进度",
      date: "2026-05-28",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "Vercel 在 2026 年 5 月 26 日宣布 Sandbox persistence 正式可用。对于使用 AI 代理写代码、跑测试和反复调试的人，这意味着临时环境也能更像一个可恢复的工作台。",
      tags: ["Vercel", "AI Agent", "开发工具"],
      featured: true,
      intro: [
        "很多 AI 编程演示看起来很顺滑，但真实开发里经常会卡在环境状态：依赖装到一半、测试跑完又断开、临时文件丢失、下一次会话还要从头准备。Vercel Sandboxes 的持久化能力，正是为这类“代理持续工作”场景补上基础设施。",
        "根据 Vercel 2026 年 5 月 26 日的 changelog，Sandboxes 现在会默认保存并恢复会话之间的文件系统状态；开发者可以用稳定名称创建、获取或恢复 sandbox，也可以在不需要持久化时显式关闭。"
      ],
      audience: [
        "想让 AI 代理自动安装依赖、运行测试、验证代码的新手开发者",
        "正在做前端、全栈或网站自动化维护的个人站长",
        "需要隔离执行代码但又不想每次重新准备环境的小团队"
      ],
      format: [
        "适合做成流程图 + 最小代码示例",
        "后续可以补一篇“AI 代理开发环境怎么选”的横向对比"
      ],
      roadmap: [
        "先理解 sandbox 的价值：隔离运行命令，避免污染本机环境。",
        "再判断任务是否需要持久化：长任务、反复调试、依赖安装较重的任务更适合开启。",
        "最后关注成本和清理策略，因为自动快照会带来额外存储消耗。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Sandbox persistence is now GA",
          url: "https://vercel.com/changelog/sandbox-persistence-is-now-ga",
          note: "本次持久化能力的官方发布说明。"
        },
        {
          label: "Vercel Changelog：Firecrawl joins the Vercel Marketplace",
          url: "https://vercel.com/changelog/firecrawl-joins-the-vercel-marketplace",
          note: "同日发布的 AI 代理网页数据入口，适合扩展资料收集工作流。"
        }
      ],
      curatedLinks: [
        "持久化适合需要多次恢复的任务，例如安装依赖、跑测试、生成构建产物、保存中间日志。",
        "临时抓取、一次性脚本和敏感数据实验更适合关闭持久化，减少存储成本和残留风险。",
        "如果要让 AI 代理长期处理网站维护，最好给每类任务设计稳定命名，例如 content-refresh、preview-build、test-runner。"
      ],
      downloadIdeas: [
        "可以补一份“AI 代理开发环境选择表”",
        "可以整理 Vercel Sandbox 常用命令和清理策略"
      ],
      monetization: "适合承接 Vercel、云开发平台、AI 代码代理和自动化运维工具类资源；也可以放在个人网站自动更新系列文章中作为基础设施章节。",
      extraSections: [
        {
          title: "什么时候适合开持久化",
          items: [
            "任务会跨多次会话继续，例如今天安装依赖，明天继续修测试。",
            "环境准备成本高，例如前端项目依赖很多、构建时间较长。",
            "需要保留日志、临时文件或中间产物，方便下一轮代理继续判断。"
          ]
        },
        {
          title: "最小上手命令",
          text: "官方示例建议升级到最新版 SDK 或 CLI 后再使用持久化能力。",
          code: `pnpm install @vercel/sandbox@latest
pnpm install -g sandbox@latest`,
          language: "bash"
        }
      ]
    },
    {
      id: "github-pages-blog-tutorial",
      title: "零基础 GitHub Pages 搭建博客教程：资源入口、上线流程与避坑清单",
      date: "2026-05-27",
      category: "建站指南",
      readTime: "10 分钟",
      excerpt: "适合新手程序员、学生和内容创作者的 GitHub Pages 资源导航页，先带你找到官方入口、学习顺序和可直接照着做的上线步骤。",
      tags: ["GitHub Pages", "博客搭建", "新手教程"],
      featured: true,
      intro: [
        "如果你准备先用最低成本把个人博客或作品页发到网上，GitHub Pages 依然是最稳妥的起点之一。它免费、部署流程清晰，而且和 GitHub 仓库天然结合，适合边学边做。",
        "这篇先做成资源分享页，重点不是一次讲完所有细节，而是帮你快速找到靠谱入口、知道先学什么，再学什么，少走弯路。"
      ],
      audience: [
        "第一次做个人网站的新手程序员",
        "想展示作品、简历或学习记录的学生",
        "想低成本搭建内容站的个人创作者"
      ],
      format: [
        "建议最终扩成图文教程 + 示例代码",
        "正文中可以补充仓库截图、分支设置截图和自定义域名截图"
      ],
      roadmap: [
        "先看 GitHub Pages 官方入门页，理解 user site 和 project site 的区别",
        "再看 GitHub Docs 里的自定义域名和 Jekyll 相关说明",
        "最后结合 GitHub Skills 或你自己的示例仓库完成第一次部署"
      ],
      officialLinks: [
        {
          label: "GitHub Pages 官方入口",
          url: "https://pages.github.com/",
          note: "最适合第一步打开的官方起点页。"
        },
        {
          label: "GitHub Docs：使用 GitHub Pages 创建站点",
          url: "https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site",
          note: "从仓库到发布的标准流程。"
        },
        {
          label: "GitHub Docs：自定义域名",
          url: "https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site",
          note: "适合后续把博客换成独立域名。"
        },
        {
          label: "GitHub Skills",
          url: "https://skills.github.com/",
          note: "适合完全没接触过 GitHub 的读者做入门练习。"
        }
      ],
      curatedLinks: [
        "先准备一个公开仓库，并确定站点是挂在用户名域名下，还是挂在项目路径下。",
        "如果你暂时不想碰静态站点生成器，可以直接从纯 HTML 页面开始，先把内容发出去。",
        "如果站点打不开，先检查仓库名、分支来源、Pages 构建状态和首页文件名是否正确。"
      ],
      downloadIdeas: [
        "可以补一个“零基础 GitHub Pages 上线检查清单”PDF 下载",
        "可以提供示例首页代码包或最小博客模板仓库"
      ],
      monetization: "文章中部适合放博客模板、域名、托管或主题类联盟入口；正文底部适合预留 AdSense 广告位和继续阅读卡片。",
      extraSections: [
        {
          title: "5 步快速上线路线",
          items: [
            "创建一个公开仓库，并确认首页文件是 index.html，或者直接用 Jekyll 模板起步。",
            "在仓库设置里打开 Pages，选好发布来源，优先使用官方支持的分支或 Actions 流程。",
            "第一次访问默认域名，确认站点能正常打开，再继续做标题、描述和导航。",
            "如果准备绑独立域名，先看自定义域名文档，再改 DNS，避免把站点改挂。",
            "最后补 404 页面、README 和基础说明页，这样站点会更像一个完整作品。"
          ]
        },
        {
          title: "建议先看的官方页面",
          links: [
            {
              label: "GitHub Pages 文档首页",
              url: "https://docs.github.com/en/pages",
              note: "适合总览所有设置、Jekyll、404 和发布方式。"
            },
            {
              label: "Configuring a publishing source",
              url: "https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site",
              note: "适合搞清楚分支发布和 GitHub Actions 发布。"
            },
            {
              label: "Creating a custom 404 page",
              url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site",
              note: "很适合加到教程里，用户能马上看到效果。"
            },
            {
              label: "Troubleshooting Jekyll build errors",
              url: "https://docs.github.com/articles/troubleshooting-jekyll-builds",
              note: "构建报错时优先查这里。"
            }
          ]
        },
        {
          title: "新手最常踩的坑",
          items: [
            "仓库名不对：用户主页站点通常需要使用 username.github.io 这种仓库名。",
            "首页文件缺失：如果没有 index.html 或正确的 Jekyll 首页，访问时会像没部署成功一样。",
            "编码问题：Jekyll 构建时会检查文件编码，非 UTF-8 文件可能直接导致构建失败。",
            "域名配置过早：默认域名没通之前先不要急着改自定义域名，排错会更简单。",
            "把静态文件和生成文件混在一起：如果后面用静态站点生成器，最好提前理清源文件和发布文件。"
          ]
        },
        {
          title: "最小可用首页示例",
          text: "如果你要把这篇文章继续扩成图文教程，建议正文里放一个可以直接复制的最小首页示例，降低新手上手门槛。",
          code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My First GitHub Pages Site</title>
</head>
<body>
  <h1>Hello GitHub Pages</h1>
  <p>这是我发布的第一个静态页面。</p>
</body>
</html>`,
          language: "html"
        }
      ]
    },
    {
      id: "hexo-next-theme-guide",
      title: "Hexo / NexT 博客主题完整配置指南：官方文档、主题设置与扩展入口",
      date: "2026-05-27",
      category: "博客主题",
      readTime: "9 分钟",
      excerpt: "给博客爱好者准备的 Hexo 与 NexT 主题资源页，覆盖安装、配置、常用功能和后续美化方向。",
      tags: ["Hexo", "NexT", "博客主题"],
      featured: true,
      intro: [
        "如果你想做博客，但又不想从头写前端，Hexo 配合 NexT 仍然是很适合中文用户的经典组合。资料多、生态成熟、配置项丰富，非常适合做长期内容站。",
        "第一阶段我们先把它整理成资源导航页，后面再扩成完整图文教程和视频演示脚本。"
      ],
      audience: [
        "喜欢折腾博客样式和结构的个人站长",
        "已经接触过 Markdown 和命令行的博客爱好者"
      ],
      format: [
        "适合图文教程 + GIF 演示",
        "后续可以补一段从安装到换主题的录屏视频"
      ],
      roadmap: [
        "先看 Hexo 官方文档，理解初始化、写作和部署命令",
        "再看 NexT 文档，完成菜单、评论、代码高亮、SEO 等设置",
        "最后按自己的站点需求补评论系统、统计和主题美化"
      ],
      officialLinks: [
        {
          label: "Hexo 官方文档",
          url: "https://hexo.io/docs/",
          note: "安装、写作、部署和配置都以这里为准。"
        },
        {
          label: "NexT 官方文档",
          url: "https://theme-next.js.org/docs/",
          note: "主题菜单、侧边栏、评论和外观设置入口。"
        },
        {
          label: "Hexo 配置说明",
          url: "https://hexo.io/docs/configuration",
          note: "适合搭配主题配置一起看。"
        }
      ],
      curatedLinks: [
        "优先整理最常用的 5 类配置：站点信息、菜单导航、评论系统、SEO、页面美化。",
        "录 GIF 或短视频时，重点演示改配置前后页面的变化，读者更容易理解。",
        "如果未来准备做付费主题或模板下载，这篇底部非常适合承接联盟或付费资源入口。"
      ],
      downloadIdeas: [
        "可以补一个 NexT 常用配置对照表",
        "可以提供自定义配置片段或 starter repo"
      ],
      monetization: "文章底部适合放模板下载、图标库、评论服务、托管服务或付费插件联盟链接。",
      extraSections: [
        {
          title: "更适合落地的配置顺序",
          items: [
            "先完成基础站点初始化，确保 Hexo 本地能正常启动和生成页面。",
            "再切到 NexT 主题，先改站点标题、菜单、头像和社交链接。",
            "然后补评论、代码高亮、搜索、SEO 和统计，不要一开始就改太多视觉细节。",
            "最后再做主题美化、页面动效和第三方服务接入。"
          ]
        },
        {
          title: "适合加入正文的官方入口",
          links: [
            {
              label: "Hexo Commands",
              url: "https://hexo.io/docs/commands",
              note: "适合讲本地预览、生成和部署命令。"
            },
            {
              label: "Hexo Writing",
              url: "https://hexo.io/docs/writing",
              note: "适合解释文章、草稿和资源文件夹。"
            },
            {
              label: "NexT Getting Started",
              url: "https://theme-next.js.org/docs/getting-started/",
              note: "适合快速入门主题配置。"
            }
          ]
        },
        {
          title: "示例命令：本地启动与生成静态文件",
          text: "如果这篇后面扩成长文教程，建议在最前面就放这组最常用命令。",
          code: `hexo init my-blog
cd my-blog
npm install
hexo server
hexo generate`,
          language: "bash"
        }
      ]
    },
    {
      id: "python-beginner-series",
      title: "Python 入门教程系列：官方教程、练习资源与学习路线整理",
      date: "2026-05-27",
      category: "编程入门",
      readTime: "11 分钟",
      excerpt: "把 Python 初学者最需要的官方教程、练习路径和配套资料集中整理，适合后续扩成分章节图文教程和 PDF 下载页。",
      tags: ["Python", "新手教程", "练习代码"],
      featured: true,
      intro: [
        "Python 很适合做系列内容，因为它的学习路径天然可以拆成变量、分支、循环、函数、文件处理和小项目。先把入口整理好，后续扩章节就会顺很多。",
        "这篇资源页优先服务完全零基础或刚学编程不久的读者。"
      ],
      audience: [
        "第一次接触编程的学生和自学者",
        "想用 Python 做自动化、数据处理或爬虫入门的读者"
      ],
      format: [
        "适合分章节图文教程 + 练习代码",
        "后续可增加笔记 PDF、练习答案和源码包下载"
      ],
      roadmap: [
        "先看 Python Beginner's Guide 和官方 Tutorial 建立基础",
        "再用小练习巩固变量、条件、循环和函数",
        "最后通过一个真实小项目把输入输出、文件处理和调试串起来"
      ],
      officialLinks: [
        {
          label: "Python 官方教程",
          url: "https://docs.python.org/3/tutorial/",
          note: "最核心的官方学习材料。"
        },
        {
          label: "Python Beginner's Guide",
          url: "https://wiki.python.org/moin/BeginnersGuide",
          note: "适合刚开始学的人找安装、学习路径和社区资源。"
        },
        {
          label: "Python 文档首页",
          url: "https://docs.python.org/3/",
          note: "后续查标准库和语法细节很有用。"
        }
      ],
      curatedLinks: [
        "如果读者真的很新，建议正文里减少抽象概念，多给能直接运行的小例子。",
        "后续系列可以拆成 6 到 8 篇，每篇末尾放一组练习题和下一篇入口。",
        "练习代码非常重要，可以做成站内代码块 + 单独打包下载。"
      ],
      downloadIdeas: [
        "可以整理一份 Python 入门学习清单 PDF",
        "可以提供练习代码压缩包和章节笔记下载"
      ],
      monetization: "每章节底部适合放编程书籍、在线课程、IDE 插件或学习平台类联盟资源。",
      extraSections: [
        {
          title: "建议拆成的章节结构",
          items: [
            "第 1 章：安装 Python、运行第一个程序、认识解释器。",
            "第 2 章：变量、字符串、数字与基础输入输出。",
            "第 3 章：条件判断、循环、列表与字典。",
            "第 4 章：函数、模块、文件读写与异常处理。",
            "第 5 章：虚拟环境、安装第三方库、做一个真实小项目。"
          ]
        },
        {
          title: "新手一定要补的官方入口",
          links: [
            {
              label: "Python Tutorial",
              url: "https://docs.python.org/3/tutorial/",
              note: "主线学习材料。"
            },
            {
              label: "venv 文档",
              url: "https://docs.python.org/3/library/venv.html",
              note: "学会虚拟环境后，后面装库和做项目会顺很多。"
            },
            {
              label: "Python Packaging User Guide",
              url: "https://packaging.python.org/en/latest/tutorials/installing-packages/",
              note: "适合配合 pip 和包管理一起讲。"
            },
            {
              label: "IDLE 文档",
              url: "https://docs.python.org/3/library/idle.html",
              note: "对完全零基础的读者很友好。"
            }
          ]
        },
        {
          title: "适合放在正文里的练习方向",
          items: [
            "做一个猜数字小游戏，练 if、while 和输入输出。",
            "做一个学生成绩统计小程序，练列表、字典和循环。",
            "做一个待办事项文本版工具，练文件读写和函数拆分。",
            "做一个批量改名或整理文件的小脚本，练真实使用场景。"
          ]
        },
        {
          title: "示例代码：读取文本文件并统计行数",
          text: "这类小例子很适合放在教程中段，既不难，又能让读者开始接触真实文件处理。",
          code: `from pathlib import Path

file_path = Path("notes.txt")

if file_path.exists():
    lines = file_path.read_text(encoding="utf-8").splitlines()
    print(f"文件共有 {len(lines)} 行")
else:
    print("文件不存在，请先创建 notes.txt")`,
          language: "python"
        }
      ]
    },
    {
      id: "vscode-ai-plugins-guide",
      title: "VS Code 插件使用指南：AI 编码、效率插件与官方入口整理",
      date: "2026-05-27",
      category: "效率工具",
      readTime: "9 分钟",
      excerpt: "面向程序员的 VS Code 资源分享页，优先整理扩展市场、官方文档、AI 编码工具和常用效率插件的入口。",
      tags: ["VS Code", "AI 工具", "插件推荐"],
      featured: true,
      intro: [
        "VS Code 插件类内容天然适合做资源导航，因为很多人会先搜索“某个插件值不值得装、怎么装、装完怎么用”。只要把入口、用途和安装顺序讲清楚，就很容易形成收藏型文章。",
        "这类文章后续非常适合补 GIF、演示视频和场景化截图。"
      ],
      audience: [
        "希望提升编码效率的程序员",
        "想尝试 AI 编码工具的新手开发者"
      ],
      format: [
        "适合图文教程 + GIF 演示",
        "后续可按 AI、格式化、Git 协作、前端开发分专题扩写"
      ],
      roadmap: [
        "先用 VS Code 官方文档理解扩展、设置同步和工作区概念",
        "再进入 Marketplace 按场景挑插件，不要一上来装一堆",
        "AI 工具优先讲清楚用途、适合场景和使用边界"
      ],
      officialLinks: [
        {
          label: "VS Code 官方文档",
          url: "https://code.visualstudio.com/docs",
          note: "先理解编辑器本身，再谈插件。"
        },
        {
          label: "VS Code 扩展使用说明",
          url: "https://code.visualstudio.com/docs/editor/extension-marketplace",
          note: "扩展安装、禁用、同步和管理入口。"
        },
        {
          label: "VS Code Marketplace",
          url: "https://marketplace.visualstudio.com/vscode",
          note: "查插件详情和下载量最直接。"
        },
        {
          label: "OpenAI API 文档",
          url: "https://platform.openai.com/docs",
          note: "如果后续要介绍与 OpenAI 相关的开发者工作流，可优先引用这里。"
        }
      ],
      curatedLinks: [
        "推荐先按 4 类整理插件：AI 编码、代码格式化、Git 协作、语言增强。",
        "插件文章不要只罗列名称，最好写清楚“解决什么问题、适合谁、有没有替代方案”。",
        "如果后面补演示，优先录插件安装后 30 秒内就能看到效果的功能。"
      ],
      downloadIdeas: [
        "可以提供 VS Code 新手必装插件清单",
        "可以补工作区设置模板或 settings.json 示例"
      ],
      monetization: "插件官方下载链接适合放正文里，文章底部适合预留 AdSense 和开发工具类联盟资源。",
      extraSections: [
        {
          title: "更适合新手的阅读顺序",
          items: [
            "先学 VS Code 基础：扩展、设置、工作区、Profiles。",
            "再学效率增强：格式化、Git 集成、Settings Sync。",
            "最后再上 AI 编码工具，避免一开始就把工作流搞得太复杂。"
          ]
        },
        {
          title: "建议加入正文的官方入口",
          links: [
            {
              label: "Settings Sync",
              url: "https://code.visualstudio.com/docs/editor/settings-sync",
              note: "适合讲多设备同步和环境迁移。"
            },
            {
              label: "Profiles in VS Code",
              url: "https://code.visualstudio.com/docs/configure/profiles",
              note: "适合讲不同开发场景如何隔离插件和设置。"
            },
            {
              label: "User and workspace settings",
              url: "https://code.visualstudio.com/docs/configure/settings",
              note: "适合解释 settings.json 和工作区定制。"
            },
            {
              label: "Use tools with agents",
              url: "https://code.visualstudio.com/docs/copilot/agents/agent-tools",
              note: "如果后续要写 AI agent 工作流，这篇很关键。"
            },
            {
              label: "Using Codex with your ChatGPT plan",
              url: "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
              note: "适合介绍 Codex 客户端、IDE 扩展与使用前提。"
            },
            {
              label: "Introducing upgrades to Codex",
              url: "https://openai.com/index/introducing-upgrades-to-codex/",
              note: "适合补充 Codex IDE 扩展的定位和能力。"
            }
          ]
        },
        {
          title: "插件文章的推荐分组",
          items: [
            "AI 编码：用于生成、解释、重构和多文件修改。",
            "代码质量：格式化、Lint、拼写检查和测试辅助。",
            "协作效率：Git、Pull Request、工作区共享和注释类工具。",
            "语言增强：前端、Python、Markdown、JSON 和配置文件支持。"
          ]
        },
        {
          title: "示例配置：适合教程中展示的 settings.json 片段",
          text: "这类片段适合放在正文下半段，让读者装完插件以后还能顺手把常用设置带走。",
          code: `{
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "editor.minimap.enabled": false,
  "workbench.startupEditor": "none",
  "editor.tabSize": 2
}`,
          language: "json"
        }
      ]
    },
    {
      id: "study-materials-pdf-collection",
      title: "高效学习资料整理：免费课程、PDF 入口与长期可用的学习资源",
      date: "2026-05-27",
      category: "资料整理",
      readTime: "8 分钟",
      excerpt: "把适合学生和考证人群的免费课程、开放教材和学习资料入口整理成一页，优先放可长期访问的权威资源。",
      tags: ["PDF 合集", "学习资料", "学生资源"],
      featured: true,
      intro: [
        "学习资料类内容很容易带来点击，但也最容易因为链接失效和来源不稳而掉口碑。所以第一阶段最好优先整理官方开放课程、开放教材和长期可访问的平台。",
        "这篇先做资源分享页，重点是让读者一眼看懂从哪里开始找资料。"
      ],
      audience: [
        "找免费学习资料的学生",
        "准备考试或自学转行的人群"
      ],
      format: [
        "适合文章介绍 + 分类导航",
        "后续可以整理成 PDF 合集索引或专题页"
      ],
      roadmap: [
        "先给出按用途分组的入口：编程、通识课程、教材、模板",
        "每类资源只放少量高质量入口，避免一次堆太多",
        "如果需要下载页，先做索引清单，再逐步增加介绍和使用建议"
      ],
      officialLinks: [
        {
          label: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/",
          note: "公开课、讲义和课程资料很丰富。"
        },
        {
          label: "Khan Academy",
          url: "https://www.khanacademy.org/",
          note: "适合学生做基础课程补充。"
        },
        {
          label: "OpenStax",
          url: "https://openstax.org/",
          note: "长期可用的免费教材平台。"
        }
      ],
      curatedLinks: [
        "不要只给下载按钮，最好补一句每个资源适合谁、推荐怎么用。",
        "如果整理 PDF 合集，要优先核查版权与公开授权，避免放来路不清的文件。",
        "下载区旁边的赞助或联盟入口，文案最好偏“补充工具”而不是强推广告。"
      ],
      downloadIdeas: [
        "可以制作按主题分类的资料清单 PDF",
        "可以把常用课程入口整理成可打印版本"
      ],
      monetization: "PDF 下载按钮旁边适合放赞助入口、学习平台、云盘会员或教育服务类联盟资源。",
      extraSections: [
        {
          title: "建议按用途整理的资源分类",
          items: [
            "编程与技术：适合放 Python、前端、Git 等学习入口。",
            "通识课程：适合放数学、写作、经济学和基础科学课程。",
            "开放教材：适合放教材型资源，而不是来路不明的 PDF 下载。",
            "考试与办公：适合后续承接模板、清单和学习辅助资料。"
          ]
        },
        {
          title: "更稳的长期入口",
          links: [
            {
              label: "MIT OpenCourseWare",
              url: "https://ocw.mit.edu/",
              note: "公开课和讲义资源非常稳定。"
            },
            {
              label: "Khan Academy",
              url: "https://www.khanacademy.org/",
              note: "适合基础知识补强。"
            },
            {
              label: "OpenStax",
              url: "https://openstax.org/",
              note: "适合做免费教材推荐。"
            },
            {
              label: "Microsoft Create",
              url: "https://create.microsoft.com/templates",
              note: "适合把学习资料页和模板资源页串起来。"
            }
          ]
        }
      ]
    },
    {
      id: "git-github-complete-manual",
      title: "Git / GitHub 完整操作手册：官方命令文档、协作流程与排错入口",
      date: "2026-05-27",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "适合编程初学者长期收藏的 Git / GitHub 资源页，先解决“命令找哪里看、协作流程怎么学、报错怎么查”。",
      tags: ["Git", "GitHub", "命令手册"],
      featured: false,
      intro: [
        "Git 和 GitHub 类文章非常适合做收藏型内容，因为读者往往不是来系统学习概念，而是来快速查命令、查流程、查报错。",
        "所以第一阶段先做一页稳的资源导航，比一开始硬写超长教程更有用。"
      ],
      audience: [
        "刚开始接触版本控制的编程初学者",
        "需要跟团队协作但还不熟悉 GitHub 流程的人"
      ],
      format: [
        "适合图文教程 + 示例命令",
        "后续可拆成 commit、branch、merge、PR、冲突解决等专题"
      ],
      roadmap: [
        "先看 Git 官方文档理解仓库、提交和分支",
        "再看 GitHub Docs 学 Pull Request、Issue 和协作流程",
        "最后整理常见错误和速查命令表做成长期流量页"
      ],
      officialLinks: [
        {
          label: "Git 官方文档",
          url: "https://git-scm.com/docs",
          note: "命令解释最权威。"
        },
        {
          label: "Pro Git 在线书",
          url: "https://git-scm.com/book/en/v2",
          note: "适合系统性入门。"
        },
        {
          label: "GitHub Docs",
          url: "https://docs.github.com/",
          note: "GitHub 流程、仓库设置和 Pull Request 说明。"
        }
      ],
      curatedLinks: [
        "正文建议先放最常查的 10 到 15 个命令，再继续讲协作流程。",
        "如果做长期更新页，可以追加“常见报错 -> 原因 -> 解决方法”的速查模块。",
        "这类文章底部很适合承接 Git/GitHub 书籍、课程或进阶服务。"
      ],
      downloadIdeas: [
        "可以提供 Git 常用命令速查表",
        "可以做 Pull Request 流程图或协作清单下载"
      ],
      monetization: "底部适合放 AdSense 与 Git/GitHub 相关书籍、课程或代码托管服务类广告。",
      extraSections: [
        {
          title: "最适合正文前半段的必学命令",
          items: [
            "git init、git clone：开始一个本地仓库或拉代码。",
            "git status、git add、git commit：本地修改与提交。",
            "git branch、git switch：分支切换与开发隔离。",
            "git pull、git push：同步远端和提交到远端仓库。"
          ]
        },
        {
          title: "官方入口建议这样放",
          links: [
            {
              label: "Git Docs",
              url: "https://git-scm.com/docs",
              note: "命令速查。"
            },
            {
              label: "Pro Git",
              url: "https://git-scm.com/book/en/v2",
              note: "适合系统学原理和协作。"
            },
            {
              label: "About pull requests",
              url: "https://docs.github.com/articles/using-pull-requests?lang=en",
              note: "适合讲 GitHub 协作流程。"
            },
            {
              label: "Creating a pull request",
              url: "https://docs.github.com/en/articles/creating-a-pull-request",
              note: "适合做图文步骤教程。"
            }
          ]
        },
        {
          title: "示例命令：从修改到推送的最小流程",
          code: `git status
git add .
git commit -m "feat: update homepage content"
git push origin main`,
          language: "bash"
        }
      ]
    },
    {
      id: "frontend-beginner-roadmap",
      title: "前端开发入门教程：HTML、CSS、JavaScript 学习路线与官方资料",
      date: "2026-05-27",
      category: "前端入门",
      readTime: "10 分钟",
      excerpt: "把前端新手最需要的学习顺序、官方教程和练习建议整理在一起，适合后续扩成系列图文教程。",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
      intro: [
        "前端入门类搜索需求一直很稳，但很多新手的问题不是找不到内容，而是不知道先学 HTML、CSS 还是 JavaScript，也不知道该用哪套资料。",
        "这篇资源页先帮读者把顺序和入口理顺。"
      ],
      audience: [
        "零基础学习前端的学生和转行者",
        "想自己做网页、作品集或小项目的新手"
      ],
      format: [
        "适合系列图文教程 + 代码示例",
        "后续可以补在线练习、小项目下载和代码仓库"
      ],
      roadmap: [
        "先学 HTML 结构，再学 CSS 样式，最后用 JavaScript 做交互",
        "每学完一部分就做一个小页面，不要只停留在看教程",
        "后续把布局、表单、DOM 操作和异步请求拆成专题"
      ],
      officialLinks: [
        {
          label: "MDN Learn Web Development",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
          note: "最适合新手的官方学习入口之一。"
        },
        {
          label: "MDN HTML 指南",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          note: "查标签和语义化时很好用。"
        },
        {
          label: "MDN CSS 指南",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          note: "查布局、盒模型和属性说明。"
        },
        {
          label: "MDN JavaScript 指南",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          note: "查语法和浏览器端能力。"
        }
      ],
      curatedLinks: [
        "正文里建议先放一张学习路线图，再展开每一步要学什么。",
        "代码示例最好从完整小页面出发，而不是只有零散片段。",
        "代码下载区适合承接编辑器、图标库、模板和课程类资源。"
      ],
      downloadIdeas: [
        "可以提供前端入门路线图 PDF",
        "可以提供 HTML/CSS/JS 示例代码包"
      ],
      monetization: "代码下载链接处适合放插件、工具、课程或模板类联盟资源。",
      extraSections: [
        {
          title: "更清晰的学习主线",
          items: [
            "HTML：先理解结构、语义化、链接、图片和表单。",
            "CSS：再理解选择器、盒模型、布局和响应式。",
            "JavaScript：最后补交互、DOM、事件和基础数据处理。"
          ]
        },
        {
          title: "适合正文里直接引用的官方入口",
          links: [
            {
              label: "MDN Learn Web Development",
              url: "https://developer.mozilla.org/en-US/docs/Learn",
              note: "最适合做总导航。"
            },
            {
              label: "MDN HTML 模块",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
              note: "适合讲 HTML 学习顺序。"
            },
            {
              label: "Getting started with CSS",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started",
              note: "适合搭配小页面示例。"
            },
            {
              label: "Your first website",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
              note: "适合零基础用户起步。"
            }
          ]
        },
        {
          title: "示例代码：最小前端页面骨架",
          code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My First Web Page</title>
  <style>
    body { font-family: sans-serif; padding: 24px; }
    button { padding: 10px 16px; }
  </style>
</head>
<body>
  <h1>欢迎来到我的网页</h1>
  <button id="helloBtn">点我</button>
  <script>
    document.getElementById("helloBtn").addEventListener("click", () => {
      alert("Hello Frontend");
    });
  </script>
</body>
</html>`,
          language: "html"
        }
      ]
    },
    {
      id: "common-programming-errors-fixes",
      title: "快速解决常见编程报错技巧：错误定位、排查顺序与资料入口",
      date: "2026-05-27",
      category: "问题排查",
      readTime: "8 分钟",
      excerpt: "面向学生和程序员的报错资源页，先教你怎么读错误信息、怎么缩小问题范围，再补针对语言和工具的查错入口。",
      tags: ["报错排查", "编程技巧", "调试"],
      featured: false,
      intro: [
        "报错类内容的核心价值不是堆很多错误名词，而是给读者一套稳定的排查顺序。只要顺序讲清楚，这类页面就很容易形成收藏和回访。",
        "先做资源导航页，后续再按 Python、前端、Git 分专题扩写。"
      ],
      audience: [
        "经常被报错卡住的学生",
        "想建立稳定调试思路的程序员"
      ],
      format: [
        "适合问题 - 原因 - 解决方案结构",
        "后续可以追加语言专题和工具专题"
      ],
      roadmap: [
        "先看完整报错信息，不要只看最后一行",
        "复现最小问题，再对照官方文档或工具文档核查",
        "最后再查环境、版本、路径、依赖和权限问题"
      ],
      officialLinks: [
        {
          label: "Python 文档首页",
          url: "https://docs.python.org/3/",
          note: "查标准报错、语法和库文档。"
        },
        {
          label: "MDN JavaScript 文档",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          note: "前端报错定位时很常用。"
        },
        {
          label: "Git 官方文档",
          url: "https://git-scm.com/docs",
          note: "Git 命令报错时优先看这里。"
        }
      ],
      curatedLinks: [
        "正文可固定成一套模板：现象、原因、排查顺序、解决方法、参考链接。",
        "如果侧边栏放工具推荐，最好优先推荐调试、日志和版本管理相关工具。",
        "后续可以补“新手最常见 20 个报错”的专题页。"
      ],
      downloadIdeas: [
        "可以做错误排查流程图",
        "可以补一个报错记录模板或调试清单"
      ],
      monetization: "侧边栏适合放调试工具、学习书籍和开发插件类资源。",
      extraSections: [
        {
          title: "建议固定成的排查模板",
          items: [
            "先写清楚报错现象和触发步骤。",
            "再贴关键报错信息，不要只贴一句“运行失败”。",
            "然后给出最短排查顺序：语法、路径、版本、依赖、权限。",
            "最后再给参考文档和类似问题入口。"
          ]
        },
        {
          title: "更适合查错的官方入口",
          links: [
            {
              label: "MDN JavaScript debugging",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript",
              note: "适合前端报错排查。"
            },
            {
              label: "MDN How to solve common problems",
              url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto",
              note: "适合前端常见问题。"
            },
            {
              label: "Python Docs",
              url: "https://docs.python.org/3/",
              note: "适合查标准报错和模块说明。"
            }
          ]
        }
      ]
    },
    {
      id: "ai-tools-practical-tutorials",
      title: "AI 工具实用教程合集：ChatGPT、Midjourney 与常见 AI 工作流入口",
      date: "2026-05-27",
      category: "AI 工具",
      readTime: "10 分钟",
      excerpt: "适合新手 AI 用户的资源导航页，优先整理官方入口、基础用法和适合快速见效的应用场景。",
      tags: ["ChatGPT", "Midjourney", "AI 教程"],
      featured: false,
      intro: [
        "AI 工具变化快，所以很适合做“入口型内容”。只要你优先整理官方文档和新手最容易用起来的场景，这类页面就有持续更新价值。",
        "与其一开始铺太多工具，不如先把最常见的写作、图像、办公和编程场景整理清楚。"
      ],
      audience: [
        "刚开始接触 AI 工具的新手用户",
        "想把 AI 用到写作、图像和工作流里的人"
      ],
      format: [
        "适合图文教程 + 演示视频",
        "后续可按写作、办公、图片、编程分专题补充"
      ],
      roadmap: [
        "先从一个最容易见效的场景开始，比如写邮件、列提纲、做总结",
        "再扩到图片生成、办公整理和代码辅助等方向",
        "每个工具都尽量讲清楚适合什么人、解决什么问题"
      ],
      officialLinks: [
        {
          label: "OpenAI 平台文档",
          url: "https://platform.openai.com/docs",
          note: "开发者与 API 工作流的官方入口。"
        },
        {
          label: "OpenAI Academy",
          url: "https://academy.openai.com/",
          note: "适合学习 AI 使用场景与实践。"
        },
        {
          label: "ChatGPT 帮助中心",
          url: "https://help.openai.com/",
          note: "查功能说明和常见问题。"
        },
        {
          label: "Midjourney 文档",
          url: "https://docs.midjourney.com/",
          note: "适合图像生成基础入门。"
        }
      ],
      curatedLinks: [
        "新手内容最好少讲术语，多讲“我现在就能拿它做什么”。",
        "如果后续录视频，优先录从提问到结果的短链路演示。",
        "这类页面很适合承接工具官网、付费套餐和系统课程类资源。"
      ],
      downloadIdeas: [
        "可以提供常用提示词模板清单",
        "可以整理不同场景的 AI 工具速查表"
      ],
      monetization: "适合放工具官网、插件市场、会员套餐和课程类联盟推荐。",
      extraSections: [
        {
          title: "建议按场景组织 AI 内容",
          items: [
            "写作与总结：邮件、提纲、润色、总结。",
            "图像与视觉：图片生成、灵感草图、素材变体。",
            "编程与效率：代码解释、重构、自动化脚本。",
            "办公与学习：整理表格、汇报结构、学习辅导。"
          ]
        },
        {
          title: "更适合新手的官方入口",
          links: [
            {
              label: "OpenAI Academy",
              url: "https://academy.openai.com/",
              note: "适合做入门和应用场景说明。"
            },
            {
              label: "ChatGPT Help Center",
              url: "https://help.openai.com/",
              note: "查功能与常见问题。"
            },
            {
              label: "OpenAI Docs",
              url: "https://platform.openai.com/docs",
              note: "适合开发者和 API 相关内容。"
            },
            {
              label: "Midjourney Docs",
              url: "https://docs.midjourney.com/",
              note: "适合图像生成方向。"
            }
          ]
        }
      ]
    },
    {
      id: "office-templates-share",
      title: "高效办公资料模板分享：Word、Excel、PowerPoint 官方模板与使用建议",
      date: "2026-05-27",
      category: "办公模板",
      readTime: "8 分钟",
      excerpt: "给学生和职场人准备的模板资源页，优先整理长期可用的官方模板入口，再补适合不同场景的使用建议。",
      tags: ["Word 模板", "Excel 模板", "PPT 模板"],
      featured: false,
      intro: [
        "办公模板类内容很容易获得分享和收藏，但前提是入口清晰、场景明确。最好不是只给一个下载链接，而是让读者知道“这个模板适合做什么”。",
        "第一阶段先从官方模板库和高频场景出发。"
      ],
      audience: [
        "需要做作业、汇报和求职材料的学生",
        "经常做表格、汇报和文档的职场人"
      ],
      format: [
        "适合模板下载 + 使用指南",
        "后续可以补分类模板页和场景案例"
      ],
      roadmap: [
        "先按场景分组：简历、汇报、计划表、数据整理、课堂作业",
        "再给每类模板补一句用途说明和使用建议",
        "最后逐步增加自己的模板资源或精选第三方模板"
      ],
      officialLinks: [
        {
          label: "Microsoft Create 模板库",
          url: "https://create.microsoft.com/templates",
          note: "Word、Excel、PowerPoint 官方模板入口。"
        },
        {
          label: "Microsoft 支持：模板相关帮助",
          url: "https://support.microsoft.com/",
          note: "查模板使用、编辑和导出问题。"
        },
        {
          label: "LibreOffice Templates",
          url: "https://templates.libreoffice.org/",
          note: "适合需要免费办公套件模板的人。"
        }
      ],
      curatedLinks: [
        "模板页最好按学生场景和办公场景分开，读者找起来更快。",
        "下载区旁边可以放办公工具、教育平台或云盘类资源，但文案要自然。",
        "如果后面自制模板，优先从简历、汇报和数据表开始。"
      ],
      downloadIdeas: [
        "可以整理模板索引 PDF",
        "可以补模板使用前检查清单"
      ],
      monetization: "模板下载旁边适合放办公工具、教育服务和存储类联盟资源。",
      extraSections: [
        {
          title: "建议按场景整理模板",
          items: [
            "学习场景：作业封面、汇报演示、笔记整理、课程计划表。",
            "求职场景：简历、作品集、面试记录、技能清单。",
            "办公场景：周报、项目计划、数据表、会议纪要。"
          ]
        },
        {
          title: "优先收录的官方模板入口",
          links: [
            {
              label: "Microsoft Create Templates",
              url: "https://create.microsoft.com/templates",
              note: "Word、Excel、PowerPoint 官方模板。"
            },
            {
              label: "Microsoft Support",
              url: "https://support.microsoft.com/",
              note: "模板使用和导出问题说明。"
            },
            {
              label: "LibreOffice Templates",
              url: "https://templates.libreoffice.org/",
              note: "适合免费办公套件用户。"
            }
          ]
        }
      ]
    }
  ],
  resources: [
    {
      name: "GitHub Pages 官方入口",
      category: "建站资源",
      badge: "官方",
      description: "免费静态站点托管入口，适合博客、作品集和个人主页。",
      pitch: "如果你想先把网站发出去，再逐步优化结构和内容，这是最轻量的起点之一。",
      cta: "打开官方站点",
      link: "https://pages.github.com/"
    },
    {
      name: "Hexo 官方文档",
      category: "博客系统",
      badge: "官方",
      description: "Hexo 的安装、配置、写作和部署入口。",
      pitch: "适合已经准备好用静态博客系统长期写内容的人。",
      cta: "查看文档",
      link: "https://hexo.io/docs/"
    },
    {
      name: "Python 官方教程",
      category: "编程入门",
      badge: "官方",
      description: "Python 最核心的官方入门教程，适合打基础和后续查阅。",
      pitch: "如果你想认真学 Python，这一份文档值得长期收藏。",
      cta: "开始学习",
      link: "https://docs.python.org/3/tutorial/"
    },
    {
      name: "VS Code 文档与扩展市场",
      category: "开发工具",
      badge: "官方",
      description: "VS Code 的使用说明、扩展管理和插件市场入口。",
      pitch: "先理解编辑器，再挑插件，效率会高很多。",
      cta: "浏览资源",
      link: "https://code.visualstudio.com/docs"
    },
    {
      name: "MIT OpenCourseWare",
      category: "学习资料",
      badge: "免费课程",
      description: "长期可访问的公开课程资源库，覆盖计算机、数学和更多学科。",
      pitch: "适合做高质量学习资料整理的长期入口。",
      cta: "进入课程库",
      link: "https://ocw.mit.edu/"
    },
    {
      name: "Git 官方文档",
      category: "版本控制",
      badge: "官方",
      description: "Git 命令、概念和在线书资源入口。",
      pitch: "命令不会背没关系，先知道最权威的查找入口更重要。",
      cta: "查看文档",
      link: "https://git-scm.com/docs"
    },
    {
      name: "MDN Learn Web Development",
      category: "前端学习",
      badge: "官方",
      description: "适合前端新手的学习路径、语法说明和实战内容入口。",
      pitch: "如果你不确定 HTML、CSS、JavaScript 的学习顺序，从这里开始最稳。",
      cta: "开始学习",
      link: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    },
    {
      name: "OpenAI Academy",
      category: "AI 工具",
      badge: "官方",
      description: "适合学习 AI 基础使用场景、教学内容和实践案例。",
      pitch: "做 AI 新手内容时，优先引用官方解释会更稳。",
      cta: "查看资源",
      link: "https://academy.openai.com/"
    },
    {
      name: "Midjourney 文档",
      category: "AI 工具",
      badge: "官方",
      description: "适合图像生成工具新手查基础说明和使用方法。",
      pitch: "如果要做 AI 图像方向的资源整理，这个入口值得保留。",
      cta: "查看文档",
      link: "https://docs.midjourney.com/"
    },
    {
      name: "Microsoft Create 模板库",
      category: "办公模板",
      badge: "官方",
      description: "Word、Excel、PowerPoint 模板的官方入口。",
      pitch: "做办公资料分享时，先用官方模板库建立基础信任感。",
      cta: "浏览模板",
      link: "https://create.microsoft.com/templates"
    }
  ],
  hotspots: [
    {
      date: "2026-05-27",
      tag: "AI 基建",
      title: "Arm 强调 agentic AI 时代的开发者软件栈：从云到边缘都要能优化和迁移",
      summary: "Arm Newsroom 文章提出，AI 工作负载正在变得更分布式、更具代理化特征，开发者需要从硬件、运行时、AI 框架到部署工具都更稳定的基础设施。",
      why: "这类趋势适合写成“AI 应用为什么不只看模型，也要看运行环境”的入门文章，帮助新手理解云端、边缘端和本地设备的差异。",
      sourceLabel: "Arm Newsroom",
      sourceUrl: "https://newsroom.arm.com/blog/arm-empowers-developers-for-agentic-ai",
      articleIdea: "选题：AI Agent 应用为什么也要关心运行环境和硬件生态"
    },
    {
      date: "2026-05-26",
      tag: "AI 编程",
      title: "GitHub Copilot Memory 增加删除、仓库级关闭和 CLI 控制能力",
      summary: "GitHub Changelog 显示，Copilot Memory 现在提供更清晰的删除指引、仓库级关闭开关、Copilot CLI 的 /memory 控制命令，并在保存前提示记忆作用域。",
      why: "记忆功能会影响 AI 编程工具长期理解项目的方式，很适合扩成“AI 工具会记住什么、怎么管理”的新手指南。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/",
      articleIdea: "选题：GitHub Copilot Memory 新手指南：记忆会保存什么，什么时候该关闭"
    },
    {
      date: "2026-05-26",
      tag: "代码质量",
      title: "GitHub Code Quality 在 PR 中展示代码覆盖率，测试完整性更容易被看到",
      summary: "GitHub 宣布 Code Quality 用户可以在 Pull Request 中看到聚合代码覆盖率，并通过现有 CI 上传 Cobertura 报告；相关 Actions 需要 code-quality:write 权限。",
      why: "适合写成面向新手的“为什么 PR 里要看测试覆盖率”教程，把 CI、测试报告和代码审查串起来。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-26-code-coverage-in-pull-requests-is-now-in-public-preview/",
      articleIdea: "选题：新手如何理解 PR 代码覆盖率：从测试报告到合并前检查"
    },
    {
      date: "2026-05-26",
      tag: "开发环境",
      title: "Vercel Sandboxes 持久化正式可用，代理任务可以恢复文件系统状态",
      summary: "Vercel 表示 Sandboxes 现在默认保存并恢复会话之间的文件系统状态，支持用稳定名称创建、获取或恢复 sandbox，也能按需关闭持久化。",
      why: "这对 AI 代理写代码、安装依赖、跑测试和继续长任务很关键，适合扩成“AI 代理开发环境怎么保存进度”的资源型文章。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/sandbox-persistence-is-now-ga",
      articleIdea: "选题：Vercel Sandboxes 持久化后，AI 代理开发环境可以怎样保存进度"
    },
    {
      date: "2026-05-26",
      tag: "AI 数据",
      title: "Firecrawl 加入 Vercel Marketplace，给 AI 代理提供结构化网页数据入口",
      summary: "Vercel Changelog 显示，Firecrawl 现在可在 Vercel Marketplace 使用，支持把网页抓取成 markdown、HTML、结构化数据或截图，并为检索和代理工作流提供网页搜索与动态页面交互能力。",
      why: "资源站后续做每日热点和资料整理时，网页抓取、检索和结构化整理会变成重要基础能力。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/firecrawl-joins-the-vercel-marketplace",
      articleIdea: "选题：AI 资料整理为什么需要网页抓取工具：从搜索到结构化数据"
    },
    {
      date: "2026-05-27",
      tag: "今日观察",
      title: "Google I/O 后，开发者工具正在从“写代码”转向“让智能体完成流程”",
      summary: "Google 在 I/O 2026 开发者重点中强调 Gemini API、AI Studio、Antigravity 和 Chrome DevTools for agents，说明 AI 工具正在更深地进入本地开发、调试和上线流程。",
      why: "适合写成一篇“AI 编程工具怎么选”的文章，也能自然连接到本站的 VS Code、Codex、GitHub Pages 教程。",
      sourceLabel: "Google Developers Blog",
      sourceUrl: "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/",
      articleIdea: "选题：AI 编程代理入门：从提示词到真实开发流程"
    },
    {
      date: "2026-05-26",
      tag: "AI 趋势",
      title: "DeepMind CEO 称 AI agents 是通往 AGI 的“演练场”",
      summary: "Demis Hassabis 在 Google I/O 后接受采访时谈到，AI agents 正在成为更强智能系统的实践路径，行业需要提前思考安全、治理和使用边界。",
      why: "这类话题适合做成“普通人如何理解智能体”的科普文章，帮助新手读者区分聊天机器人、工作流和真正的代理。",
      sourceLabel: "Axios",
      sourceUrl: "https://www.axios.com/2026/05/26/deepmind-ceo-demis-hassabis",
      articleIdea: "选题：AI Agent 到底是什么？新手能用它做哪些真实任务"
    },
    {
      date: "2026-05-22",
      tag: "AI 编程",
      title: "OpenAI Codex 被 Gartner 评为企业 AI 编程代理领导者",
      summary: "OpenAI 表示 Codex 已被企业用于代码审查、测试覆盖、事件响应和大型仓库理解等场景，AI 编程代理正在从个人效率工具走向团队基础设施。",
      why: "这和本站的建站、代码助手、自动更新文章计划高度相关，后续可以扩成“用 AI 管理个人网站”的教程。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/gartner-2026-agentic-coding-leader/",
      articleIdea: "选题：个人网站如何用 Codex 做内容维护和代码更新"
    },
    {
      date: "2026-05-21",
      tag: "工具更新",
      title: "Codex 更新 Goal Mode、浏览器标注和远程继续工作能力",
      summary: "OpenAI 帮助中心更新显示，Codex 的 goal mode 已覆盖 App、IDE extension 和 CLI，并加入更适合前端反馈的浏览器标注能力。",
      why: "这正好对应本站后续自动化方向：把“每日热点更新”拆成目标，让代理持续完成资料整理、文章生成和提交。",
      sourceLabel: "OpenAI Help Center",
      sourceUrl: "https://help.openai.com/en/articles/6825453-Chatgpt-reelease-notes",
      articleIdea: "选题：Goal Mode 可以怎样帮个人站每天更新内容"
    },
    {
      date: "2026-05-14",
      tag: "GitHub",
      title: "GitHub Copilot App 技术预览，把 issue、PR 和代理任务放进同一个桌面工作台",
      summary: "GitHub Copilot App 技术预览主打从 issue、PR、提示词或历史会话启动开发任务，让开发者在一个桌面界面里跟踪、验证并提交变更。",
      why: "对个人站长来说，这意味着未来“发现问题、写文章、改页面、发 PR”会越来越像一条自动化流水线。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/",
      articleIdea: "选题：GitHub Copilot App 对个人开发者意味着什么"
    }
  ],
  projects: [
    {
      id: "resource-content-hub",
      title: "资源分享内容库",
      summary: "围绕 10 个高需求主题整理官方入口、学习路径、下载思路和广告位建议，是当前站点的核心内容项目。",
      stack: "HTML / CSS / JavaScript",
      status: "已上线",
      link: "posts.html",
      body: `
        <p>这个项目把 GitHub Pages、Hexo/NexT、Python、VS Code、Git/GitHub、前端入门、AI 工具和办公模板等主题集中整理成资源型文章。</p>
        <p>它的目标是先让读者快速找到可靠入口，再逐步把高需求主题扩成图文教程、示例代码和可下载资料。</p>
      `
    },
    {
      id: "topic-resource-map",
      title: "主题资源导航页",
      summary: "把资源推荐页改造成按主题浏览的导航库，每个主题都能回到对应文章，适合长期扩展。",
      stack: "资源导航 / 内容结构",
      status: "持续更新",
      link: "resources.html",
      body: `
        <p>这个项目负责承接站内所有官方入口和工具推荐，把原来的单一卡片列表升级成“精选入口 + 按主题浏览”的结构。</p>
        <p>后续如果接联盟链接、赞助位或真实下载包，可以优先从这个页面开始接入。</p>
      `
    },
    {
      id: "monetization-layout-kit",
      title: "广告与联盟位布局",
      summary: "为每篇资源文章预留中部推荐位、底部广告位和下载区推荐位，方便后续接入真实商业化资源。",
      stack: "内容变现 / 页面布局",
      status: "规划中",
      link: "contact.html",
      body: `
        <p>这个项目用于规划文章里的广告和联盟入口，比如模板推荐、课程推荐、工具下载、PDF 下载旁赞助位和底部 AdSense 区域。</p>
        <p>当前先保留文案和结构，等真实联盟资源准备好后，可以把占位按钮替换成正式链接。</p>
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

const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const visualIcons = {
  ai: `${iconBaseUrl}/python/python-original.svg`,
  css: `${iconBaseUrl}/css3/css3-original.svg`,
  docker: `${iconBaseUrl}/docker/docker-original.svg`,
  figma: `${iconBaseUrl}/figma/figma-original.svg`,
  git: `${iconBaseUrl}/git/git-original.svg`,
  github: `${iconBaseUrl}/github/github-original.svg`,
  html: `${iconBaseUrl}/html5/html5-original.svg`,
  javascript: `${iconBaseUrl}/javascript/javascript-original.svg`,
  markdown: `${iconBaseUrl}/markdown/markdown-original.svg`,
  node: `${iconBaseUrl}/nodejs/nodejs-original.svg`,
  python: `${iconBaseUrl}/python/python-original.svg`,
  react: `${iconBaseUrl}/react/react-original.svg`,
  vscode: `${iconBaseUrl}/vscode/vscode-original.svg`
};

const categoryIcons = {
  ai: visualIcons.ai,
  books: visualIcons.markdown,
  debug: visualIcons.git,
  frontend: visualIcons.javascript,
  git: visualIcons.git,
  github: visualIcons.github,
  hexo: visualIcons.github,
  office: visualIcons.figma,
  python: visualIcons.python,
  vscode: visualIcons.vscode
};

const iconRules = [
  { icon: visualIcons.github, keywords: ["GitHub", "GitHub Pages", "Pages", "仓库"] },
  { icon: visualIcons.python, keywords: ["Python", "编程入门", "AI"] },
  { icon: visualIcons.vscode, keywords: ["VS Code", "Codex", "开发工具", "效率工具"] },
  { icon: visualIcons.javascript, keywords: ["JavaScript", "前端", "HTML", "CSS"] },
  { icon: visualIcons.git, keywords: ["Git", "报错", "问题排查", "代码质量"] },
  { icon: visualIcons.figma, keywords: ["办公", "模板", "设计", "资料"] },
  { icon: visualIcons.docker, keywords: ["Docker", "部署", "项目"] }
];

function escapeAttribute(value) {
  return String(value).replace(/"/g, "&quot;");
}

function buildVisualIcon(src, label, className = "visual-icon") {
  return `<img class="${className}" src="${src}" alt="${escapeAttribute(label)}" width="48" height="48" loading="lazy">`;
}

function pickVisualIcon(text, fallback = visualIcons.github) {
  const haystack = String(text || "");
  const rule = iconRules.find((item) => item.keywords.some((keyword) => haystack.includes(keyword)));
  return rule ? rule.icon : fallback;
}

function getPostIcon(post) {
  const fallback = categoryIcons[slugify(post.category)] || visualIcons.github;
  return pickVisualIcon([post.title, post.category, post.tags.join(" ")].join(" "), fallback);
}

function getResourceIcon(item) {
  return pickVisualIcon([item.name, item.category, item.description].join(" "), visualIcons.markdown);
}

function getHotspotIcon(item) {
  return pickVisualIcon([item.title, item.tag, item.summary].join(" "), visualIcons.ai);
}

function getProjectIcon(project) {
  return pickVisualIcon([project.title, project.stack, project.summary].join(" "), visualIcons.github);
}

function buildPostCard(post) {
  const icon = getPostIcon(post);

  return `
    <article class="article-card reveal">
      <a class="article-card__media article-card__media--${slugify(post.category)}" href="post.html?id=${post.id}">
        <span class="article-card__badge">${post.featured ? "推荐" : post.category}</span>
        <span class="article-card__icon">${buildVisualIcon(icon, `${post.category} 图标`, "visual-icon visual-icon--card")}</span>
        <strong>${post.category}</strong>
      </a>
      <div class="article-card__body">
        <div class="meta-row">
          <span>${post.category}</span>
          <span>${post.readTime}</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
        </div>
        <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
      </div>
    </article>
  `;
}

function buildLatestItem(post) {
  const icon = getPostIcon(post);

  return `
    <article class="latest-item reveal">
      <a class="latest-thumb latest-thumb--${slugify(post.category)}" href="post.html?id=${post.id}">
        ${buildVisualIcon(icon, `${post.category} 图标`, "visual-icon visual-icon--thumb")}
        <span>${post.category}</span>
      </a>
      <div>
        <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="meta-row">
          <span>${post.category}</span>
          <span>${post.readTime}</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
        </div>
      </div>
    </article>
  `;
}

function buildResourceCard(item) {
  const icon = getResourceIcon(item);

  return `
    <article class="resource-card reveal">
      <div class="resource-card__head">
        <span class="resource-card__icon">${buildVisualIcon(icon, `${item.category} 图标`, "visual-icon")}</span>
        <div class="resource-card__top">
          <span class="pill">${item.category}</span>
          <span class="resource-card__badge">${item.badge}</span>
        </div>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="resource-card__pitch">${item.pitch}</p>
      <a class="button button--secondary" href="${item.link}" target="_blank" rel="noreferrer">${item.cta}</a>
    </article>
  `;
}

function buildHotspotCard(item) {
  const icon = getHotspotIcon(item);

  return `
    <article class="hotspot-card reveal">
      <div class="hotspot-card__head">
        <span class="hotspot-card__icon">${buildVisualIcon(icon, `${item.tag} 图标`, "visual-icon")}</span>
        <div>
          <div class="hotspot-card__meta">
            <span>${item.tag}</span>
            <time datetime="${item.date}">${formatDate(item.date)}</time>
          </div>
          <h3>${item.title}</h3>
        </div>
      </div>
      <p>${item.summary}</p>
      <div class="hotspot-card__why">
        <strong>为什么值得关注</strong>
        <p>${item.why}</p>
      </div>
      <p class="hotspot-card__idea">${item.articleIdea}</p>
      <a class="text-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">查看来源：${item.sourceLabel}</a>
    </article>
  `;
}

function slugify(value) {
  const map = {
    "AI 编程": "ai",
    "AI 工具": "ai",
    "开发工具": "git",
    "建站指南": "github",
    "博客主题": "hexo",
    "编程入门": "python",
    "效率工具": "vscode",
    "学习资料": "books",
    "前端入门": "frontend",
    "问题排查": "debug",
    "办公模板": "office",
    "代码质量": "debug"
  };

  return map[value] || "github";
}

function getHomeCategories() {
  return [
    { icon: visualIcons.javascript, title: "编程开发", meta: "Python / 前端 / Git", count: "120+ 教程", tone: "blue", query: "编程" },
    { icon: visualIcons.markdown, title: "学习资料", meta: "PDF / 电子书 / 文档", count: "2000+ 资源", tone: "green", query: "资料" },
    { icon: visualIcons.vscode, title: "实用工具", meta: "开发 / 设计 / 效率", count: "300+ 工具", tone: "violet", query: "工具" },
    { icon: visualIcons.github, title: "项目实战", meta: "源码 / 案例 / 部署", count: "50+ 项目", tone: "orange", query: "项目" },
    { icon: visualIcons.python, title: "AI 专区", meta: "AI 编程 / 提示词 / 工具", count: "100+ 热点", tone: "rose", query: "AI" },
    { icon: visualIcons.figma, title: "设计资源", meta: "模板 / 素材 / 图标", count: "1000+ 资源", tone: "cyan", query: "模板" }
  ];
}

function getHeroIcons() {
  return [
    { icon: visualIcons.python, label: "Python" },
    { icon: visualIcons.github, label: "GitHub Pages" },
    { icon: visualIcons.javascript, label: "JavaScript" },
    { icon: visualIcons.vscode, label: "VS Code" },
    { icon: visualIcons.figma, label: "模板资料" }
  ];
}

function buildTopicResourceSection(post) {
  return `
    <section class="topic-section reveal">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${post.category}</p>
          <h2>${post.title}</h2>
        </div>
        <a class="text-link" href="post.html?id=${post.id}">查看对应文章</a>
      </div>
      <div class="topic-grid">
        <article class="topic-panel">
          <p class="label">适合谁</p>
          <p>${post.audience.join(" / ")}</p>
          <p class="label">推荐顺序</p>
          ${buildBulletList(post.roadmap)}
        </article>
        <article class="topic-panel">
          <p class="label">官方入口</p>
          ${buildLinkList(post.officialLinks)}
        </article>
      </div>
    </section>
  `;
}

function buildProjectCard(project) {
  const icon = getProjectIcon(project);

  return `
    <article class="project-card reveal">
      <div class="project-card__visual">
        <span>${project.status}</span>
        ${buildVisualIcon(icon, `${project.title} 图标`, "visual-icon visual-icon--project")}
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

function buildParagraphs(items) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

function buildBulletList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function buildLinkList(items) {
  return `
    <ul>
      ${items
        .map(
          (item) => `
            <li>
              <a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
              <span>：${item.note}</span>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildExtraSections(sections = []) {
  return sections
    .map((section) => {
      const text = section.text ? `<p>${section.text}</p>` : "";
      const items = section.items ? buildBulletList(section.items) : "";
      const links = section.links ? buildLinkList(section.links) : "";
      const code = section.code
        ? `<pre><code class="language-${section.language || "text"}">${escapeHtml(section.code)}</code></pre>`
        : "";

      return `
        <h2>${section.title}</h2>
        ${text}
        ${items}
        ${links}
        ${code}
      `;
    })
    .join("");
}

function buildArticleBody(post) {
  return `
    ${buildParagraphs(post.intro)}
    <h2>这篇内容适合谁</h2>
    ${buildBulletList(post.audience)}
    <h2>建议呈现形式</h2>
    ${buildBulletList(post.format)}
    <h2>推荐学习顺序</h2>
    ${buildBulletList(post.roadmap)}
    <h2>官方资料入口</h2>
    ${buildLinkList(post.officialLinks)}
    <h2>整理建议与补充方向</h2>
    ${buildBulletList(post.curatedLinks)}
    <h2>后续可补充的下载内容</h2>
    ${buildBulletList(post.downloadIdeas)}
    ${buildExtraSections(post.extraSections)}
    <h2>广告位与资源位建议</h2>
    <p>${post.monetization}</p>
  `;
}

function injectHomePage() {
  const stats = document.querySelector("[data-home-stats]");
  const values = document.querySelector("[data-home-values]");
  const hotspots = document.querySelector("[data-hotspots-preview]");
  const featuredPosts = document.querySelector("[data-featured-posts]");
  const resources = document.querySelector("[data-featured-resources]");
  const projects = document.querySelector("[data-featured-projects]");
  const categories = document.querySelector("[data-home-categories]");
  const recommendations = document.querySelector("[data-recommendations]");
  const latest = document.querySelector("[data-home-latest]");
  const tags = document.querySelector("[data-home-tags]");
  const rank = document.querySelector("[data-download-rank]");
  const heroIcons = document.querySelector("[data-hero-icons]");

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

  if (hotspots) {
    hotspots.innerHTML = siteData.hotspots.slice(0, 3).map(buildHotspotCard).join("");
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

  if (categories) {
    categories.innerHTML = getHomeCategories()
      .map(
        (item) => `
          <a class="category-card category-card--${item.tone} reveal" href="posts.html?q=${encodeURIComponent(item.query)}">
            <span>${buildVisualIcon(item.icon, `${item.title} 图标`, "visual-icon visual-icon--category")}</span>
            <strong>${item.title}</strong>
            <em>${item.meta}</em>
            <small>${item.count}</small>
          </a>
        `
      )
      .join("");
  }

  if (heroIcons) {
    heroIcons.innerHTML = getHeroIcons()
      .map(
        (item) => `
          <span>
            ${buildVisualIcon(item.icon, `${item.label} 图标`, "visual-icon")}
            <strong>${item.label}</strong>
          </span>
        `
      )
      .join("");
  }

  if (recommendations) {
    recommendations.innerHTML = siteData.posts.filter((post) => post.featured).slice(0, 4).map(buildPostCard).join("");
  }

  if (latest) {
    latest.innerHTML = siteData.posts.slice(4, 8).map(buildLatestItem).join("");
  }

  if (tags) {
    tags.innerHTML = [...new Set(siteData.posts.flatMap((post) => post.tags))]
      .slice(0, 14)
      .map((tag) => `<a href="posts.html?q=${encodeURIComponent(tag)}">${tag}</a>`)
      .join("");
  }

  if (rank) {
    rank.innerHTML = siteData.resources.slice(0, 5)
      .map(
        (item, index) => `
          <a href="${item.link}" target="_blank" rel="noreferrer">
            <span>${index + 1}</span>
            <strong>${item.name}</strong>
            <em>${item.badge}</em>
          </a>
        `
      )
      .join("");
  }
}

function injectHotspotsPage() {
  const container = document.querySelector("[data-hotspot-list]");
  if (!container) return;

  container.innerHTML = siteData.hotspots.map(buildHotspotCard).join("");
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
      : `<div class="empty-state">没有找到匹配内容，换一个关键词试试。</div>`;
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
      <div class="detail-hero__meta">
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span>${post.readTime}</span>
        <span>${siteData.site.author}</span>
      </div>
      <p>${post.excerpt}</p>
    </header>
    <div class="article-layout">
      <article class="article-body">
        ${buildArticleBody(post)}
        <div class="inline-promo">
          <p class="label">延伸资源</p>
          <h3>如果你想继续顺着这个主题往下学，可以去资源页看按方向整理的官方入口。</h3>
          <p>当前站内先优先做资源分享型内容，后面会把高需求主题逐步扩成完整图文教程、示例代码和可下载资料。</p>
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
            .slice(0, 4)
            .map((item) => `<a href="post.html?id=${item.id}">${item.title}</a>`)
            .join("")}
        </div>
        <div class="sidebar-card sidebar-card--accent">
          <p class="label">合作入口</p>
          <h3>接受轻量站点搭建、内容结构整理与资源页策划合作</h3>
          <a class="button button--dark" href="contact.html">联系我</a>
        </div>
      </aside>
    </div>
  `;
}

function injectResourcesPage() {
  const container = document.querySelector("[data-resource-list]");
  if (!container) return;
  const featured = `
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">精选入口</p>
          <h2>先收藏这几个入口，后面查资料就不用到处翻</h2>
        </div>
        <p>这一组负责快速建立方向感：官方入口、核心工具、长期可用的学习路线先放在最前面。</p>
      </div>
      <div class="resource-grid">
        ${siteData.resources.map(buildResourceCard).join("")}
      </div>
    </section>
  `;

  const grouped = `
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">按主题浏览</p>
          <h2>10 个主题分区，从“我想学什么”直接进入</h2>
        </div>
        <p>每个分区都连到对应文章，适合先看导航，再深入看教程、示例和后续扩展内容。</p>
      </div>
      ${siteData.posts.map(buildTopicResourceSection).join("")}
    </section>
  `;

  container.innerHTML = `${featured}${grouped}`;
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
        <div class="project-showcase__screen">${project.title}</div>
      </div>
      <div class="sidebar-card">
        <p class="label">项目说明</p>
        ${project.body}
        <a class="button button--secondary" href="${project.link}">打开相关页面</a>
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
  bindSearch();
  injectHomePage();
  injectHotspotsPage();
  injectPostsPage();
  injectPostDetail();
  injectResourcesPage();
  injectProjectsPage();
  injectProjectDetail();
  revealOnScroll();
});
