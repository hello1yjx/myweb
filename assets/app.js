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
      id: "openai-codex-role-plugins-sites-guide",
      title: "OpenAI Codex 新增角色插件、Sites 和注释：新手怎么看 AI 从写代码走向做完整工作",
      date: "2026-06-03",
      category: "AI 工具",
      readTime: "9 分钟",
      excerpt: "OpenAI 2026 年 6 月 2 日发布 Codex 更新，重点包括面向不同角色的插件、可分享的 Sites 预览，以及能直接在结果上修改和反馈的 annotations。对新手来说，这条更新适合用来理解 Codex 不只是写代码，而是在把报告、仪表盘、原型和轻量应用放进同一套工作流。",
      tags: ["OpenAI Codex", "效率工具", "AI Agent"],
      featured: true,
      intro: [
        "很多人第一次接触 AI 编程代理时，会把它理解成“帮我写几段代码”。OpenAI 2026 年 6 月 2 日的 Codex 更新把方向讲得更清楚：Codex 正在从纯开发工具扩展成面向不同岗位的工作工具。官方提到的新能力包括角色插件、Sites 预览和 annotations，分别对应“接上工具和流程”“把结果变成可分享页面”“直接在结果上指出要改哪里”。",
        "对个人站长和新手开发者来说，这条更新不只是产品新闻。它提醒我们以后整理资料、写文章、做小工具、生成仪表盘、准备演示材料，都可能进入同一条 AI 协作链路。真正要学的不是某个按钮，而是如何把输入、资料来源、修改意见、发布结果和人工复核串起来。"
      ],
      audience: [
        "想用 AI 辅助整理资料、写报告、做页面或做轻量应用的新手",
        "正在学习 Codex、插件、自动化工作流和知识型工具的开发者",
        "希望把个人站点内容、数据分析、原型设计和效率工具串起来的站长"
      ],
      format: [
        "适合整理成“插件 / Sites / annotations 三类能力怎么理解”的入门文章",
        "后续可以补一张 Codex 工作流图：资料输入、插件调用、结果生成、注释反馈、分享验证"
      ],
      roadmap: [
        "先把角色插件理解成预置工作流：它把某类岗位常用的应用、技能、说明和流程放在一起，减少从零写提示词的成本。",
        "再把 Sites 理解成可分享结果：不是只把代码放在本机，而是把交互页面或轻量应用交给团队查看。",
        "最后理解 annotations：当结果不准确、样式不合适或逻辑需要调整时，最好直接在结果上标注问题，让代理围绕具体位置修改。"
      ],
      officialLinks: [
        {
          label: "OpenAI：Codex for every role, tool, and workflow",
          url: "https://openai.com/index/codex-for-every-role-tool-workflow/",
          note: "本次角色插件、Sites 和 annotations 更新的原始来源。"
        },
        {
          label: "OpenAI：Codex is becoming a productivity tool for everyone",
          url: "https://openai.com/index/codex-for-knowledge-work/",
          note: "配套说明 Codex 如何从开发者工具扩展到知识工作和自动化场景。"
        }
      ],
      curatedLinks: [
        "不要把插件看成万能模板。它更像一套起步配置，仍然需要你提供真实资料、约束和验收标准。",
        "Sites 适合分享低风险原型、内部工具和演示页面；涉及账号、支付、客户数据的内容仍要谨慎处理。",
        "annotations 的价值在于减少“重新描述一遍”的成本。新手可以先练习在具体段落、表格、按钮或图表上给修改意见。"
      ],
      downloadIdeas: [
        "可以整理一份 Codex 任务拆分检查表",
        "可以补一个“什么时候用插件，什么时候直接写提示词”的对照表"
      ],
      monetization: "适合承接 AI 办公、自动化工作流、轻量应用搭建、数据分析和内容生产类资源位；也可以和本站的建站教程、AI 编程、效率工具专题互相推荐。",
      extraSections: [
        {
          title: "新手先试的三个低风险任务",
          items: [
            "把一篇资料整理成文章提纲，并要求 Codex 保留来源链接。",
            "把一个 Excel 或表格需求整理成仪表盘草稿，先在本地或测试环境验证。",
            "把个人站点的一个资源页做成交互原型，再用 annotations 标注需要修改的地方。"
          ]
        },
        {
          title: "开始前要写清楚的边界",
          items: [
            "哪些资料可以使用，哪些资料不能进入模型或插件。",
            "结果要给谁看，是内部草稿、公开页面，还是只做个人备忘。",
            "哪些动作需要人工确认，例如发布、删除、访问付费数据源和改生产配置。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-sandboxes-agent-safety-guide",
      title: "GitHub Copilot 沙箱公测：新手怎么让 AI 代理在更可控的环境里运行命令",
      date: "2026-06-03",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 2026 年 6 月 2 日 Changelog 宣布，GitHub Copilot 的本地和云端 sandboxes 进入 public preview。Copilot 可以在受隔离的本机环境或 GitHub 托管的临时 Linux 云环境中运行工具和命令，这让新手更容易理解 AI 代理为什么需要权限边界。",
      tags: ["GitHub Copilot", "沙箱", "AI Agent"],
      featured: true,
      intro: [
        "AI 编程代理越来越常见，但很多新手最容易忽略的问题是：当代理开始运行命令、改文件、访问网络时，它已经不只是“给建议”的聊天工具了。GitHub 2026 年 6 月 2 日宣布 Copilot 的本地和云端 sandboxes 进入 public preview，正好把这个问题摆到台面上。",
        "GitHub 的说明里有两个重点：本地沙箱可以限制 Copilot 发起的 shell 命令对文件系统、网络和系统能力的访问；云端沙箱则通过 `copilot --cloud` 启动一个 GitHub 托管的、临时的 Linux 环境。对新手来说，最实用的理解是：把 AI 代理放进受控环境，不等于完全没有风险，但能让试错、并行任务和命令执行更容易管理。"
      ],
      audience: [
        "正在尝试 GitHub Copilot CLI、云端代理或桌面代理的新手开发者",
        "希望让 AI 代理帮忙跑测试、执行脚本、修改项目，但担心权限过大的站长",
        "维护团队仓库、需要给代理执行命令设边界的开发者和管理员"
      ],
      format: [
        "适合整理成“本地沙箱 / 云端沙箱 / 适合交给代理的任务边界”的资源文章",
        "后续可以补一张代理执行路径图：提示词、工具调用、沙箱策略、命令输出、人工确认"
      ],
      roadmap: [
        "先理解本地沙箱：它限制的是 Copilot 在当前会话里发起的命令执行，让代理不能随意触碰无关文件、网络或系统能力。",
        "再理解云端沙箱：它把任务放到 GitHub 托管的临时 Linux 环境中，适合并行运行、跨设备继续和减少本机资源占用。",
        "最后建立任务分级：文档整理、测试运行、低风险脚本可以更自动；删除、覆盖、密钥、生产配置和付费资源必须人工确认。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Cloud and local sandboxes for GitHub Copilot",
          url: "https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/",
          note: "本次本地和云端 Copilot sandboxes public preview 的原始来源。"
        },
        {
          label: "Microsoft Build 2026",
          url: "https://news.microsoft.com/build-2026/",
          note: "Build 2026 官方汇总页，包含 GitHub Copilot、代理和开发平台相关发布入口。"
        }
      ],
      curatedLinks: [
        "沙箱不是让代理完全可信，而是给代理执行命令时增加隔离层和策略边界。",
        "第一次试用时，建议选择没有生产数据的小仓库，让代理只跑测试、读错误日志或改一个小问题。",
        "团队使用时要同步关注策略、身份、日志和成本：代理能做什么、谁批准、执行结果在哪里看，都要提前约定。"
      ],
      downloadIdeas: [
        "可以整理一份 AI 代理沙箱执行检查表",
        "可以补一个“适合云端沙箱 / 适合本地沙箱 / 必须人工处理”的任务分类表"
      ],
      monetization: "适合承接 GitHub Copilot、AI 编程代理、云开发环境、代码安全、DevOps 和团队研发规范类资源位；也适合和本站的 GitHub Pages、开发工具、问题排查专题联动。",
      extraSections: [
        {
          title: "适合先放进沙箱的任务",
          items: [
            "运行测试、lint 或构建命令，并把失败原因整理成清单。",
            "在临时环境里复现一个 bug，记录命令、日志和最小复现步骤。",
            "让代理尝试一个小修复，再由人工检查 diff 和运行结果。"
          ]
        },
        {
          title: "仍然不建议直接自动化的动作",
          items: [
            "删除大量文件、覆盖数据库、改生产环境变量或操作真实支付配置。",
            "把长期有效的密钥、Token、客户数据或私人文件交给代理处理。",
            "在没有日志、没有回滚方案、没有人工复核的仓库里运行复杂自动化。"
          ]
        }
      ]
    },
    {
      id: "vercel-ai-gateway-qwen37-plus-agent-guide",
      title: "Vercel AI Gateway 接入 Qwen 3.7 Plus：新手怎么看多模态代理模型进入建站工作流",
      date: "2026-06-02",
      category: "AI 工具",
      readTime: "9 分钟",
      excerpt: "Vercel 在 2026 年 6 月 1 日的 Changelog 中宣布，来自 Alibaba 的 Qwen 3.7 Plus 已可通过 Vercel AI Gateway 使用。官方描述它面向 GUI、CLI、编码、效率工作流和视觉代理任务，适合新手理解“模型能力”和“统一网关”怎样一起进入实际项目。",
      tags: ["Vercel AI Gateway", "Qwen", "AI Agent"],
      featured: true,
      intro: [
        "最近 AI 建站和 AI 编程工具的一个明显趋势是：开发者不只是在聊天窗口里调用模型，而是把模型放进自己的应用、脚本、自动化测试和代理工作流里。Vercel 2026 年 6 月 1 日的更新把 Qwen 3.7 Plus 加入 AI Gateway，正好可以作为新手理解这个趋势的一个入口。",
        "这条更新的重点不是“又多了一个模型名字”，而是模型和调用入口的组合。Vercel 表示 Qwen 3.7 Plus 统一视觉和语言能力，并覆盖 GUI、CLI、编码、效率工作流、全模态输入和视觉代理任务。对做网站或小工具的人来说，更实用的理解是：以后同一个应用里可能需要根据任务选择不同模型，并通过统一网关观察成本、失败重试、延迟和可用性。"
      ],
      audience: [
        "想把 AI 模型接入个人网站、后台工具或自动化脚本的新手",
        "正在学习 Vercel、AI SDK、模型网关和多模型调用方式的前端开发者",
        "关注国内模型进入海外开发平台、希望比较 Qwen、MiniMax、OpenAI 等模型入口的站长"
      ],
      format: [
        "适合整理成“模型能力 / 调用入口 / 新手试用边界”的资源文章",
        "后续可以补一张 AI 应用调用链图：前端请求、服务端 SDK、AI Gateway、模型提供商、日志与成本看板"
      ],
      roadmap: [
        "先把 AI Gateway 理解成统一模型入口：应用代码不直接分散绑定很多供应商，而是通过一个网关调用、记录和切换。",
        "再看 Qwen 3.7 Plus 的定位：它不是只做文本补全，而是更强调多模态输入、GUI/CLI 操作、编码和代理任务。",
        "最后从低风险场景试起：例如让模型解释截图、辅助复现一个 UI 问题、生成小段代码或整理网页内容，不要一开始就让它直接处理敏感业务数据。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Qwen 3.7 Plus now available on AI Gateway",
          url: "https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway",
          note: "说明 Qwen 3.7 Plus 已加入 Vercel AI Gateway，并给出 AI SDK 调用入口。"
        },
        {
          label: "Vercel AI Gateway",
          url: "https://vercel.com/ai-gateway",
          note: "适合继续了解统一模型 API、用量跟踪、成本、重试和故障转移能力。"
        }
      ],
      curatedLinks: [
        "不要只看模型参数，先看它能不能进入你的实际开发链路：SDK 是否容易接入、失败时能否重试、用量和成本能否看清楚。",
        "多模态代理模型更适合有“看图、读界面、写代码、调用工具”组合需求的任务，例如 UI 检查、表单流程测试和截图问题分析。",
        "新手试用时建议保留人工复核：模型可以帮你找问题、写初稿、生成测试想法，但最终发布、删除数据和改生产配置仍要人工确认。"
      ],
      downloadIdeas: [
        "可以整理一份 AI Gateway 模型试用记录表",
        "可以补一个“哪些任务适合交给多模态代理模型”的清单"
      ],
      monetization: "适合承接 AI SDK、Vercel、模型网关、国内大模型、AI 建站和自动化测试类资源位；也可以和本站的建站教程、开发工具、效率工具专题互相推荐。",
      extraSections: [
        {
          title: "第一次试用先看三件事",
          items: [
            "调用方式是否清楚：官方页面是否给出了 SDK 示例和模型入口。",
            "成本是否可观察：你能不能看到请求量、失败重试和模型用量。",
            "任务边界是否明确：是否只让模型处理低风险输入，并保留人工确认。"
          ]
        },
        {
          title: "适合新手做的小实验",
          items: [
            "把一张网页截图交给模型，让它指出可能的布局问题。",
            "给一个简单 bug 描述，让模型生成复现步骤和测试思路。",
            "让模型比较两段提示词输出，记录哪一种更稳定、更容易复核。"
          ]
        }
      ]
    },
    {
      id: "vercel-blob-oidc-agent-security-guide",
      title: "Vercel Blob 支持 OIDC：新手为什么要少用长期 Token，让函数和代理更安全",
      date: "2026-06-02",
      category: "建站工具",
      readTime: "8 分钟",
      excerpt: "Vercel 2026 年 6 月 1 日宣布 Blob 支持 OIDC authentication，新项目默认使用短期、自动轮换的 Vercel-issued OIDC token，不再需要长期保存 BLOB_READ_WRITE_TOKEN。对新手建站和 AI 代理工作流来说，这是一次很实用的凭据安全提醒。",
      tags: ["Vercel Blob", "OIDC", "建站安全"],
      featured: true,
      intro: [
        "很多新手第一次做网站上传功能、资源库或后台管理时，会把存储服务的长期 Token 放进环境变量，然后长期不再检查。这个做法简单，但风险也很直接：一旦 Token 泄露，别人可能在很长时间内继续访问或修改你的存储内容。",
        "Vercel 在 2026 年 6 月 1 日的 Changelog 中宣布，Vercel Blob 支持 OIDC authentication，并且新连接项目默认使用这种方式。官方说明里最关键的一点是：Vercel-issued OIDC tokens 是短期的，并会自动轮换，因此不再需要长期的 BLOB_READ_WRITE_TOKEN。对正在接入 AI 代理、CLI 自动化或上传功能的新手来说，这条更新值得认真看。"
      ],
      audience: [
        "正在用 Vercel Blob 做图片、附件、静态资源或上传功能的新手站长",
        "希望让 CLI、脚本或 AI 代理访问私有存储，但又不想长期暴露 Token 的开发者",
        "正在学习环境变量、OIDC、短期凭据和最小权限原则的前端或全栈新手"
      ],
      format: [
        "适合整理成“长期 Token 的问题 / OIDC 的好处 / 升级检查清单”的教程",
        "后续可以补一张凭据流转图：Vercel Function、OIDC token、Blob 操作、CLI 和代理任务"
      ],
      roadmap: [
        "先理解风险：长期 Token 像一把长期有效的钥匙，泄露后需要手动轮换，否则风险会持续存在。",
        "再理解 OIDC：让平台按需要发放短期、自动轮换的凭据，减少你手动保存和分发密钥的机会。",
        "最后检查工作流：函数、CLI 和代理都应该只拿到当前任务需要的权限，尤其不要把生产存储 Token 粘贴进聊天窗口或日志里。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Vercel Blob now supports OIDC authentication",
          url: "https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication",
          note: "说明 Blob OIDC 默认设置、短期 token、升级方式，以及 CLI 如何读取同一组环境变量。"
        },
        {
          label: "Vercel Blob",
          url: "https://vercel.com/blob",
          note: "适合继续了解 Vercel Blob 的定位、存储场景和产品入口。"
        }
      ],
      curatedLinks: [
        "如果你的项目还在长期保存 BLOB_READ_WRITE_TOKEN，先确认是否能升级到 OIDC，并记录升级前后的环境变量变化。",
        "AI 代理可以帮你运行 CLI、列文件或上传测试文件，但它不应该看到与任务无关的生产密钥。",
        "短期凭据不是万能安全方案，仍然需要配合最小权限、日志脱敏、分环境管理和人工审批。"
      ],
      downloadIdeas: [
        "可以整理一份 Vercel Blob OIDC 升级检查表",
        "可以补一个“AI 代理访问存储服务前要确认什么”的安全清单"
      ],
      monetization: "适合承接 Vercel、对象存储、网站上传、AI 代理安全、环境变量管理和全栈部署类资源位；也可以和本站的建站、自动化发布、开发工具专题形成连载。",
      extraSections: [
        {
          title: "升级前先确认",
          items: [
            "项目是否已经使用最新版 @vercel/blob。",
            "Blob store 是否已经在 Vercel 控制台里切换到 OIDC。",
            "本地 CLI、部署函数和代理任务是否还依赖旧的长期 Token。"
          ]
        },
        {
          title: "给 AI 代理的边界",
          items: [
            "只允许它在测试项目或低风险目录里操作存储。",
            "让它执行前先列出计划使用的命令和目标资源。",
            "涉及删除、覆盖和生产数据读取时，必须停下来等人工确认。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-code-review-actions-minutes-guide",
      title: "GitHub Copilot Code Review 开始消耗 Actions minutes：新手怎么读懂 AI 代码审查成本",
      date: "2026-06-01",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 早前在 Changelog 中说明，从 2026 年 6 月 1 日起，每次 Copilot code review 会同时按 AI Credits 计入 Copilot 用量；私有仓库使用 GitHub-hosted runners 时，还会消耗 GitHub Actions minutes。本文把它整理成新手能看懂的成本和权限清单。",
      tags: ["GitHub Copilot", "Code Review", "Actions"],
      featured: true,
      intro: [
        "AI 代码审查正在从“多一个智能评论入口”变成真正会进入账单和 CI 资源的开发流程。GitHub 在 2026 年 4 月 27 日提前公告，从 2026 年 6 月 1 日起，Copilot code review 的计费方式会发生变化：Copilot 本身的使用会计入 AI Credits；如果审查运行在私有仓库并使用 GitHub-hosted runners，还会消耗 GitHub Actions minutes。",
        "对新手来说，重点不是记住复杂账单名词，而是理解 AI 代码审查背后的运行方式。它不是凭空在网页上发表评论，而是一个会读取仓库上下文、运行在 runner 上、再把结果反馈到 Pull Request 的自动化流程。只要它进入自动化流程，就需要看预算、权限、触发条件和仓库类型。"
      ],
      audience: [
        "刚开始在 Pull Request 中使用 GitHub Copilot code review 的开发者",
        "维护私有仓库、个人网站或小团队项目，担心 AI 工具产生额外成本的站长",
        "想理解 AI Credits、GitHub Actions minutes 和 runner 设置关系的新手"
      ],
      format: [
        "适合做成“会产生什么成本 / 在哪里检查 / 先怎么限流”的清单",
        "后续可以补一张从 PR 触发到 runner 执行再到账单记录的流程图"
      ],
      roadmap: [
        "先区分仓库类型：公共仓库和私有仓库在 Actions minutes 上的影响不同。",
        "再区分两类用量：Copilot 的 AI Credits 是模型与代理能力用量，Actions minutes 是 runner 执行资源用量。",
        "最后检查组织或个人账号的预算、runner 设置和 code review 触发范围，避免把所有 PR 都无差别交给代理审查。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot code review billing change",
          url: "https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/",
          note: "说明 2026 年 6 月 1 日起 Copilot code review 如何计入 AI Credits 和 GitHub Actions minutes。"
        },
        {
          label: "GitHub Blog：Copilot individual plans and flex allotments",
          url: "https://github.blog/news-insights/company-news/github-copilot-individual-plans-introducing-flex-allotments-in-pro-and-pro-and-a-new-max-plan/",
          note: "适合继续理解 2026 年 6 月 1 日后个人套餐、base credits、flex allotment 和 Max 计划。"
        }
      ],
      curatedLinks: [
        "把 AI code review 看成一次自动化工作流：触发、读取上下文、运行 runner、返回评论都可能对应到用量或权限。",
        "私有仓库更需要先做预算和触发范围控制；公共仓库虽然 Actions minutes 仍免费，但 Copilot 用量本身也要关注。",
        "如果团队刚开始试用，建议先在低风险仓库或少量 PR 上观察评论质量、耗时和用量，再扩大到关键项目。"
      ],
      downloadIdeas: [
        "可以整理一份 Copilot code review 成本检查表",
        "可以补一个 PR 审查触发策略模板：哪些分支、哪些标签、哪些作者需要自动审查"
      ],
      monetization: "适合承接 GitHub Copilot、CI/CD、代码审查、团队研发规范和 AI 编程培训类资源位；也可以和本站 GitHub Pages、自动化发布、AI 编程专题互相推荐。",
      extraSections: [
        {
          title: "先记住三个判断问题",
          items: [
            "这个 PR 在公共仓库还是私有仓库？",
            "审查使用的是 GitHub-hosted runner、larger runner，还是 self-hosted runner？",
            "账号或组织有没有设置 Copilot 与 Actions 的预算提醒？"
          ]
        },
        {
          title: "不建议一开始就自动化的场景",
          items: [
            "涉及生产密钥、客户数据或合规材料的私有仓库。",
            "没有测试、没有分支保护、也没有人工复核习惯的仓库。",
            "PR 数量很高但评论质量还没有经过抽样验证的团队工作流。"
          ]
        }
      ]
    },
    {
      id: "qwen-code-017-terminal-agent-workflow-guide",
      title: "Qwen Code v0.17.0：新手怎么看终端 AI 编程代理的协作、桌面能力和上下文压缩",
      date: "2026-06-01",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "QwenLM/qwen-code 在 v0.17.0 中加入飞书 Channel adapter、open-computer-use MCP 零配置内置、遥测基础能力和上下文压缩重构，并在 5 月 31 日 nightly 继续修复 rewind 场景。本文把它整理成适合新手观察终端 AI 代理演进的资源指南。",
      tags: ["Qwen Code", "AI Agent", "终端工具"],
      featured: true,
      intro: [
        "国内开源 AI 编程代理正在快速补齐工程化能力。QwenLM/qwen-code 的 GitHub Releases 显示，v0.17.0 包含飞书 Channel adapter、skill-based RT 优化的遥测基础、open-computer-use MCP 零配置内置、上下文压缩重构等变化；随后 2026 年 5 月 31 日的 nightly 继续修复 rewind 场景下“compressed turn”误报。",
        "这些更新对新手的价值不在于立刻追每个版本，而在于看清终端 AI 代理正在往哪里走：它不仅要会写代码，还要能接入团队协作渠道、处理桌面操作、记录必要的运行信号，并在长会话里安全压缩上下文。理解这些方向，后面选择 Codex、Claude Code、Qwen Code 或其他代理工具时就不会只看模型名字。"
      ],
      audience: [
        "想了解国内开源 AI 编程代理的新手开发者",
        "经常在终端、Git、VS Code 和聊天工具之间切换的小团队成员",
        "维护个人站点或自动化脚本，希望观察 AI 代理长期任务能力的站长"
      ],
      format: [
        "适合做成“版本更新点 + 新手理解方式 + 适用场景”的资源文章",
        "后续可以补一张终端代理、协作渠道、MCP、桌面操作和上下文管理的关系图"
      ],
      roadmap: [
        "先把 Qwen Code 理解成终端里的 AI 编程代理，而不是只会问答的聊天窗口。",
        "再把 v0.17.0 的能力分成四类：协作渠道、桌面操作、运行观测和长会话上下文。",
        "最后用一个低风险项目试用：让代理读项目、改一个小问题、跑检查、总结失败原因，而不是一开始就交给它复杂生产任务。"
      ],
      officialLinks: [
        {
          label: "Qwen Code GitHub Releases",
          url: "https://github.com/QwenLM/qwen-code/releases",
          note: "v0.17.0、5 月 30 日和 5 月 31 日 nightly 的原始发布记录。"
        },
        {
          label: "Qwen Code Docs：Overview",
          url: "https://qwenlm.github.io/qwen-code-docs/en/users/overview",
          note: "适合继续了解 Qwen Code 的定位、认证方式和基础使用入口。"
        }
      ],
      curatedLinks: [
        "飞书 Channel adapter 说明终端代理正在尝试进入团队协作渠道，后续不一定只停留在本机命令行。",
        "open-computer-use MCP 零配置内置说明桌面操作会成为代理能力的一部分，但这也意味着权限和安全边界更重要。",
        "上下文压缩和 rewind 修复看起来不像炫酷功能，却直接影响长任务能不能稳定继续。新手应该把稳定性当成选择代理工具的核心指标。"
      ],
      downloadIdeas: [
        "可以整理一份终端 AI 代理试用清单",
        "可以补一个“适合交给代理 / 需要人工确认”的任务边界表"
      ],
      monetization: "适合承接 AI 编程工具、终端效率、团队协作、自动化脚本和开源项目教程类资源位；也适合与本站每日热点自动更新流程形成案例联动。",
      extraSections: [
        {
          title: "v0.17.0 值得新手观察的四类变化",
          items: [
            "协作入口：飞书 Channel adapter 让代理有机会进入团队消息流。",
            "桌面能力：open-computer-use MCP 内置降低了试用桌面操作的门槛。",
            "运行观测：遥测基础能力有助于后续分析代理是否真的提升效率。",
            "长会话稳定性：上下文压缩和 rewind 修复决定长任务能否可靠接续。"
          ]
        },
        {
          title: "第一次试用建议",
          items: [
            "只在测试仓库或个人项目里运行，不要直接操作生产仓库。",
            "把允许修改的目录、可以运行的命令和需要停止汇报的边界写清楚。",
            "要求代理在结束时列出改了什么、跑了哪些检查、哪些地方仍需人工判断。"
          ]
        }
      ]
    },
    {
      id: "openai-codex-windows-remote-control-guide",
      title: "OpenAI Codex 支持 Windows Computer Use 和远程控制：新手怎么把本机代理用稳",
      date: "2026-05-31",
      category: "AI 工具",
      readTime: "9 分钟",
      excerpt: "OpenAI 在 2026 年 5 月 29 日的 ChatGPT Release Notes 中更新 Codex：Codex app 支持 Windows Computer Use，用户还可以从手机或 Mac 远程查看进度、继续线程并处理提示。本文把它整理成适合新手理解本机 AI 代理的入门指南。",
      tags: ["OpenAI Codex", "Computer Use", "远程控制"],
      featured: true,
      intro: [
        "AI 编程代理正在从“帮我改代码”变成“看见我的开发环境、点击应用、运行服务并等待我远程接管”的工作流。OpenAI 2026 年 5 月 29 日的发布说明把这个变化讲得很清楚：Codex app 现在支持 Windows Computer Use，并且可以让用户从 iOS、Android、Mac 继续查看和控制同一条 Codex 线程。",
        "对新手来说，这个热点不只是多了一个按钮，而是提醒我们重新整理本机代理的使用边界：项目文件、shell、应用服务器和本地上下文仍然在 Windows 主机上；远程端更适合看进度、回复提示和做方向调整。把这个边界想清楚，才能既提高效率，又避免把账号、文件和系统权限交给不清楚的任务。"
      ],
      audience: [
        "第一次尝试让 AI 代理操作本机应用、浏览器或桌面工具的新手",
        "想在外出时继续查看 Codex 任务进度、回复确认提示的开发者",
        "维护个人站点、脚本或小型项目，希望让 AI 帮忙测试和调试的站长"
      ],
      format: [
        "适合做成“能做什么 / 不能做什么 / 先确认什么”的清单",
        "后续可以补一张本机代理、远程控制和代码托管平台的角色关系图"
      ],
      roadmap: [
        "先把 Windows 机器看作真正的工作主机，项目文件、终端、应用服务器和本地上下文都在这里。",
        "再把手机、Mac 或 ChatGPT 端看作远程驾驶位，用来查看进度、继续线程、回复提示和调整方向。",
        "最后给每类任务设边界：测试和调试可以开放更多操作，涉及账号、支付、生产数据时必须停下来人工确认。"
      ],
      officialLinks: [
        {
          label: "OpenAI Help：ChatGPT Release Notes",
          url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
          note: "本次 Codex Windows Computer Use、远程控制和 Profiles 更新的原始来源。"
        },
        {
          label: "OpenAI Developers：Computer Use",
          url: "https://developers.openai.com/codex/app/computer-use",
          note: "适合继续了解 Codex app 里 Computer Use 的入口和使用方式。"
        },
        {
          label: "OpenAI Developers：Remote connections",
          url: "https://developers.openai.com/codex/remote-connections",
          note: "适合查看远程连接、接管和跨设备继续工作的官方说明。"
        }
      ],
      curatedLinks: [
        "不要把远程控制理解成“手机在跑代码”。真正执行项目的仍然是 Windows 主机，远程端只是继续同一条工作线程。",
        "第一次使用时，优先选择低风险任务，例如打开本地预览、跑测试、复现界面问题、整理错误日志。",
        "把高风险动作写进提示里的禁止清单：不要操作真实支付、不要改生产配置、不要访问无关私人文件。"
      ],
      downloadIdeas: [
        "可以整理一份 Codex 本机代理安全确认表",
        "可以补一个“适合远程接管 / 必须回到电脑前处理”的任务对照表"
      ],
      monetization: "适合承接 AI 编程工具、远程开发、桌面自动化、代码测试和开发效率课程类资源位；也可以和本站 AI 编程、开发工具专题交叉推荐。",
      extraSections: [
        {
          title: "新手最适合先试的三个任务",
          items: [
            "让 Codex 打开本地预览页面，复现一个样式或交互问题。",
            "让 Codex 在终端运行静态检查，把失败命令、错误位置和建议修复列出来。",
            "外出时从手机查看任务是否卡在确认提示，再决定继续、暂停或要求它总结当前状态。"
          ]
        },
        {
          title: "使用前先写清楚的边界",
          items: [
            "哪些目录可以读取和修改，哪些目录绝对不要碰。",
            "哪些命令可以自动运行，哪些命令必须先征得人工确认。",
            "遇到登录页、支付页、真实用户数据或生产密钥时，必须停止并汇报。"
          ]
        }
      ]
    },
    {
      id: "claude-code-local-skills-plugins-guide",
      title: "Claude Code 本地 skills 和插件自动加载：新手怎么把重复工作流沉淀成工具",
      date: "2026-05-31",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "Anthropic 在 Claude Code v2.1.157 中加入本地 .claude/skills 插件自动加载，并提供 claude plugin init <name> 脚手架。对新手来说，这是把常用提示、检查清单和团队流程从聊天记录整理成可复用工具的好入口。",
      tags: ["Claude Code", "Plugins", "Skills"],
      featured: true,
      intro: [
        "很多人用 AI 编程工具时，会反复粘贴同一段要求：怎么提交、怎么跑检查、怎么写报告、怎么处理安全边界。Claude Code 2026 年 5 月 29 日的 v2.1.157 发布说明把这个习惯往工具化推进了一步：.claude/skills 目录中的插件可以自动加载，不再必须依赖 marketplace；同时新增了 claude plugin init <name> 来脚手架化创建插件。",
        "这对新手很重要，因为它说明 AI 工具的效率提升不只来自更强模型，还来自把稳定流程变成可复用、可版本化、可审查的本地能力。你可以先从一个很小的技能开始，例如“发布前检查静态站”“整理今日热点来源”“提交前列出风险”，再逐步把它变成团队共享的插件。"
      ],
      audience: [
        "每天重复执行同一套检查、提交或写作流程的新手开发者",
        "想把团队规范沉淀到 AI 编程工具里的站长、学生和小团队负责人",
        "正在了解 Claude Code plugins、skills、agents 和 marketplace 区别的用户"
      ],
      format: [
        "适合做成目录结构示例 + 适用场景清单",
        "后续可以补一个最小 SKILL.md 模板"
      ],
      roadmap: [
        "先从重复出现的提示里挑一个稳定流程，例如每日内容更新、提交前检查或文档生成。",
        "再把流程拆成输入、步骤、验证和失败处理，写进一个小的 SKILL.md。",
        "最后再考虑是否需要插件化：个人自用可以放在本地 skills，团队共享再进入 marketplace 或项目配置。"
      ],
      officialLinks: [
        {
          label: "Claude Code GitHub Releases：v2.1.157",
          url: "https://github.com/anthropics/claude-code/releases",
          note: "本次本地 .claude/skills 自动加载、plugin init 和 /plugin 自动补全更新的原始来源。"
        },
        {
          label: "Claude Code Docs：Extend Claude with skills",
          url: "https://code.claude.com/docs/en/skills",
          note: "适合继续理解 SKILL.md、技能目录、触发方式和支持文件。"
        },
        {
          label: "Claude Code Docs：Discover and install plugins",
          url: "https://code.claude.com/docs/en/discover-plugins",
          note: "适合查看 marketplace、安装范围、自动更新和插件安全提示。"
        }
      ],
      curatedLinks: [
        "如果一段提示只是偶尔用一次，先不要做成 skill。真正值得沉淀的是稳定、重复、有明确验收标准的流程。",
        "个人目录适合放自己的写作和检查习惯；项目目录适合放团队共同遵守的构建、测试、发布流程。",
        "插件能力更强，也更需要信任边界。安装第三方插件前，要看它包含哪些 skills、agents、hooks 或 MCP server。"
      ],
      downloadIdeas: [
        "可以整理一份 Claude Code skill 选题清单",
        "可以补一个本地插件安全审查表"
      ],
      monetization: "适合承接 AI 编程培训、团队研发规范、自动化工作流、插件开发和效率工具类资源位；也适合放进本站开发工具专题长期更新。",
      extraSections: [
        {
          title: "哪些流程最适合先做成 skill",
          items: [
            "每天都要做，并且步骤稳定的内容更新、检查或汇总任务。",
            "需要固定输出格式的报告、文章、PR 描述或学习笔记。",
            "容易遗漏边界的流程，例如安全检查、部署前验证和来源核对。"
          ]
        },
        {
          title: "本地 skill 和 marketplace 插件怎么区分",
          items: [
            "本地 skill 更像个人或项目里的工作手册，适合先快速试错。",
            "插件可以打包 skills、agents、hooks 和 MCP server，适合更完整的能力分发。",
            "marketplace 方便发现和安装，但安装前必须检查来源、范围和可能执行的本地能力。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-ai-adoption-metrics-guide",
      title: "GitHub Copilot 指标新增 AI 采用阶段：新手怎么看团队从补全走向多智能体",
      date: "2026-05-30",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 在 2026 年 5 月 29 日更新 Copilot usage metrics API，新增 ai_adoption_phase 字段，把用户使用情况分成 Code first、Agent first 和 Multi-agent 等阶段。本文把它整理成适合新手理解 AI 编程采用度的资源型指南。",
      tags: ["GitHub Copilot", "AI 指标", "团队效率"],
      featured: true,
      intro: [
        "很多人判断 AI 编程工具有没有用，只看“有多少人打开过 Copilot”。但真正影响团队效率的，不只是活跃人数，而是大家到底停留在代码补全、单个代理任务，还是已经开始同时使用代码审查、云端代理、CLI 和桌面应用。",
        "GitHub 2026 年 5 月 29 日的 Changelog 给 Copilot usage metrics API 增加了 AI 采用阶段。对新手来说，这不是一个复杂的企业报表名词，而是一个很实用的观察框架：先看团队有没有把 AI 用在基础编码，再看有没有进入代理式开发，最后再看是否具备多智能体协作的习惯。"
      ],
      audience: [
        "正在学习 GitHub Copilot、代码补全和 AI 编程代理的新手开发者",
        "想给团队整理 AI 工具使用情况，但不知道看哪些指标的小团队负责人",
        "维护个人站点或开源项目，想理解 AI 编程工具演进方向的站长"
      ],
      format: [
        "适合做成概念解释 + 指标字段速查表",
        "后续可以补一张“Code first / Agent first / Multi-agent”对照图"
      ],
      roadmap: [
        "先理解活跃用户数只是起点，不能代表 AI 已经真正进入开发流程。",
        "再区分代码补全、IDE agent mode、Copilot cloud agent、Copilot code review、Copilot CLI 和 Copilot app 各自代表的使用层级。",
        "最后把指标和培训动作连起来：补全用得多就加强代码审查，代理用得多就加强任务拆分、验证和回滚流程。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot usage metrics API adds cohorts for AI adoption",
          url: "https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption/",
          note: "本次更新的原始来源，说明 ai_adoption_phase 和 totals_by_ai_adoption_phase。"
        },
        {
          label: "GitHub Docs：Copilot usage metrics",
          url: "https://docs.github.com/en/rest/copilot/copilot-usage",
          note: "适合继续查看 Copilot 用量指标 API 的权限和字段说明。"
        }
      ],
      curatedLinks: [
        "新手可以把 Phase 1 理解成“AI 帮我写代码”，把 Phase 2 理解成“AI 帮我完成一个开发任务”，把 Phase 3 理解成“多个 AI 工作入口一起进入开发流程”。",
        "不要只追求阶段越高越好。多智能体使用越多，对任务边界、测试、代码审查和权限控制的要求也越高。",
        "个人开发者也能借这个框架自查：我只是用补全，还是已经让 AI 帮我开 issue、改代码、跑测试、整理 PR？"
      ],
      downloadIdeas: [
        "可以整理一份 AI 编程采用阶段自查表",
        "可以补一个 Copilot 指标字段中文速查表"
      ],
      monetization: "适合承接 GitHub Copilot、团队研发效率工具、AI 编程课程和代码审查工具类资源位；也适合放到本站 AI 编程专题里长期更新。",
      extraSections: [
        {
          title: "三个阶段可以怎么理解",
          items: [
            "Code first：主要用代码补全或 IDE agent mode，重点还是写代码本身。",
            "Agent first：开始使用一个 GitHub 侧代理入口，比如云端代理、代码审查或 CLI。",
            "Multi-agent：同时使用两个以上 GitHub 代理入口，或已经使用 GitHub Copilot app。"
          ]
        },
        {
          title: "团队看这个指标时别忽略的事",
          items: [
            "阶段只是采用度，不直接等于代码质量。",
            "代理任务越多，越需要保留来源、测试结果和人工审查。",
            "培训计划应该按阶段拆，不要让刚接触补全的人直接处理高风险自动化任务。"
          ]
        }
      ]
    },
    {
      id: "vercel-sandbox-docker-agent-testing-guide",
      title: "Vercel Sandbox 支持运行 Docker：AI 代理开发环境怎么跑 Redis、Postgres 和容器测试",
      date: "2026-05-30",
      category: "开发环境",
      readTime: "10 分钟",
      excerpt: "Vercel 在 2026 年 5 月 29 日宣布 Sandbox 支持安装和运行 Docker。对使用 AI 代理写代码、跑测试和预览应用的新手来说，这意味着隔离环境里可以启动 Redis、Postgres 等容器化依赖，而不必污染本机。",
      tags: ["Vercel", "Docker", "AI Agent"],
      featured: true,
      intro: [
        "AI 代理真正参与开发后，最容易卡住的地方往往不是写代码，而是环境：项目需要 Redis、Postgres、队列、浏览器或系统包，本机装起来麻烦，临时环境又经常丢状态。Vercel Sandbox 之前已经强调持久化，现在继续把 Docker 放进沙箱，意味着代理可以在更接近真实项目的隔离环境里验证代码。",
        "根据 Vercel 2026 年 5 月 29 日的 Changelog，Sandbox 现在支持安装并运行 Docker。代理可以构建容器、安装系统包、修改文件，同时不直接碰宿主机环境。对个人站长和新手开发者来说，这类能力适合理解成“给 AI 一个可丢弃、可恢复、能跑依赖的工作台”。"
      ],
      audience: [
        "正在用 AI 编程代理跑测试、改后端或调试全栈项目的新手",
        "想预览带数据库、缓存或后台服务的应用，但不想污染本机环境的开发者",
        "维护静态站、全栈小项目或自动化脚本的个人站长"
      ],
      format: [
        "适合做成流程图 + 最小示例代码",
        "后续可以补“AI 代理安全运行命令的检查清单”"
      ],
      roadmap: [
        "先把 Sandbox 理解成隔离执行环境，不要把它当成本机的永久替代品。",
        "再从最小依赖开始，例如启动一个 Redis 容器并让测试连接它。",
        "最后把 Docker 和持久化结合起来：长期任务可以复用安装结果，高风险任务仍然单独开新环境。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Run Docker containers inside Vercel Sandbox",
          url: "https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox",
          note: "本次 Docker 支持的原始来源，包含安装 Docker 和运行 Redis 的示例。"
        },
        {
          label: "Vercel Sandbox 文档",
          url: "https://vercel.com/docs/vercel-sandbox",
          note: "适合继续查看 Sandbox 的创建、端口、持久化和系统规格说明。"
        },
        {
          label: "Docker Docs",
          url: "https://docs.docker.com/",
          note: "适合补充容器基础概念和常用命令。"
        }
      ],
      curatedLinks: [
        "不要让 AI 代理在本机直接随意安装服务。能放进沙箱的依赖，优先放进隔离环境里试。",
        "Docker 很适合跑临时依赖，比如 Redis、Postgres、Elasticsearch 或本地预览服务。",
        "每次让代理跑容器前，都应该明确任务边界：需要哪些端口、哪些数据可以丢弃、哪些命令不允许执行。"
      ],
      downloadIdeas: [
        "可以整理一份 AI 代理沙箱执行检查表",
        "可以补一份 Docker 测试依赖最小命令清单"
      ],
      monetization: "适合承接云开发平台、Docker 入门课程、AI 编程代理、数据库托管和开发环境管理工具类资源位；也可以和本站建站、部署、代码质量专题交叉推荐。",
      extraSections: [
        {
          title: "新手最适合先试的 3 个场景",
          items: [
            "跑一个需要 Redis 的测试套件，验证代码逻辑是否依赖缓存服务。",
            "启动一个临时 Postgres 容器，检查迁移脚本和种子数据能否正常执行。",
            "构建并预览一个容器化应用，确认 Dockerfile 在部署前没有明显问题。"
          ]
        },
        {
          title: "给 AI 代理的安全提示可以这样写",
          items: [
            "只在 sandbox 内安装 Docker 和系统包，不要修改宿主机环境。",
            "容器只使用测试数据，不连接真实生产数据库。",
            "运行完成后输出命令、端口、测试结果和仍需人工确认的风险。"
          ]
        }
      ]
    },
    {
      id: "vscode-122-agent-byok-responsive-guide",
      title: "VS Code 1.122 新手指南：Agents 窗口、离线 BYOK 和设备模拟怎么用",
      date: "2026-05-29",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "VS Code 1.122 在 2026 年 5 月 28 日发布，带来更集中化的 Agents 体验、无需 GitHub 登录的离线 BYOK 模式，以及浏览器工具里的设备模拟能力。本文把它整理成适合新手判断是否升级和怎么试用的路线。",
      tags: ["VS Code", "AI 编程", "开发效率"],
      featured: true,
      intro: [
        "如果你平时用 VS Code 写代码，AI 功能的变化已经不只是“补全一行代码”。从 1.122 版本开始，VS Code 把代理式体验、模型选择和浏览器调试进一步放到同一个开发环境里，适合新手把它理解成“编辑器正在变成一个能执行任务的工作台”。",
        "这次值得关注的三件事是：专门的 Agents 窗口继续强化多任务协作；BYOK 模式可以在离线场景下使用，不再要求 GitHub 登录；浏览器工具新增设备模拟，方便检查移动端布局。对个人站长来说，这些功能都能直接服务建站、调试和内容维护。"
      ],
      audience: [
        "正在用 VS Code 写网页、Python 或个人项目的新手开发者",
        "想尝试 AI 编程，但又不想一开始绑定完整云端账号流程的人",
        "需要反复检查移动端页面效果的个人站长和前端学习者"
      ],
      format: [
        "适合做成图文指南 + 设置路径截图",
        "后续可以补一段“用 Agents 修一个静态站页面”的实战演示"
      ],
      roadmap: [
        "先升级或查看 VS Code 1.122 发布说明，确认自己关心的功能是否已经可用。",
        "再从 Agents 窗口开始试一个小任务，例如解释报错、整理文件或生成测试清单。",
        "最后用浏览器工具的设备模拟检查页面，尤其是首页、文章页和导航在手机视口下是否正常。"
      ],
      officialLinks: [
        {
          label: "VS Code 1.122 Release Notes",
          url: "https://code.visualstudio.com/updates/v1_122",
          note: "本次更新的官方发布说明，包含 Agents、BYOK 与浏览器工具更新。"
        },
        {
          label: "VS Code Copilot 文档入口",
          url: "https://code.visualstudio.com/docs/copilot/overview",
          note: "适合继续理解编辑器里的 AI 编程工作流。"
        }
      ],
      curatedLinks: [
        "新手不要一上来把所有任务都交给 Agent，先选一个低风险任务，例如生成检查清单或解释配置。",
        "BYOK 更适合已经知道自己要用哪个模型的人；完全新手可以先用默认体验熟悉流程。",
        "设备模拟适合配合静态站维护使用：每次改首页、导航和文章卡片后，都应该看一眼移动端。"
      ],
      downloadIdeas: [
        "可以补一份 VS Code AI 功能试用清单",
        "可以整理个人网站移动端检查表"
      ],
      monetization: "适合承接 VS Code 插件、AI 编程课程、前端调试工具和静态站模板类资源位；也可以放到本站“开发工具”系列入口里继续扩展。",
      extraSections: [
        {
          title: "新手建议先试的 3 个场景",
          items: [
            "让 Agent 解释一个已有项目的目录结构，而不是直接改代码。",
            "让它根据当前页面列出移动端检查项，再由你手动确认。",
            "用 BYOK 或模型选择功能前，先记录任务类型、模型成本和结果质量。"
          ]
        },
        {
          title: "适合加入正文的检查顺序",
          items: [
            "先看更新说明，确认功能入口和限制。",
            "再用一个小项目测试 Agents 窗口是否适合自己的工作流。",
            "最后用设备模拟检查页面，不要只看桌面端。"
          ]
        }
      ]
    },
    {
      id: "microsoft-learn-mcp-agent-grounding-guide",
      title: "让 AI 编程代理先查官方文档：Microsoft Learn MCP Server 新手入门",
      date: "2026-05-29",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "Microsoft ISE 在 2026 年 5 月 28 日介绍了 Microsoft Learn MCP Server：它把代理工具直接连到最新官方文档，减少模型凭旧知识写出过时代码的风险。",
      tags: ["MCP", "Microsoft Learn", "AI Agent"],
      featured: true,
      intro: [
        "AI 编程代理最容易出问题的地方，不一定是不会写代码，而是它把旧版本 API、过期参数或博客里的片段当成当前答案。对新手来说，最稳的办法不是盲目换模型，而是先让工具查到权威、最新、可追溯的文档。",
        "Microsoft ISE 2026 年 5 月 28 日的文章介绍了 Microsoft Learn MCP Server：开发者工具可以通过 MCP 协议直接检索 Microsoft Learn、Azure 文档和 Microsoft 365 文档，而且官方强调它不需要安装和认证。这个方向很适合扩展成“给 AI 工具接官方资料源”的入门教程。"
      ],
      audience: [
        "正在尝试 Cursor、VS Code、Codex 或其他 AI 编程代理的新手",
        "需要查 Azure、Microsoft 365 或 Microsoft Learn 官方文档的开发者",
        "担心 AI 生成过时代码、错误参数或不可靠链接的个人站长"
      ],
      format: [
        "适合做成概念解释 + 工具配置清单",
        "后续可以补一篇“常见 MCP Server 怎么选”的横向对比"
      ],
      roadmap: [
        "先理解 MCP 的角色：它不是模型，而是让模型能使用外部资料和工具的协议。",
        "再把官方文档源接入到自己的开发工具里，让代理回答前先检索。",
        "最后保留来源链接和版本信息，避免把一次生成结果当成永久正确答案。"
      ],
      officialLinks: [
        {
          label: "Microsoft ISE：Grounding agentic developer tools in Microsoft Learn",
          url: "https://devblogs.microsoft.com/ise/improve-your-agentic-developer-tools-by-grounding-in-microsoft-learn/",
          note: "本次 Microsoft Learn MCP Server 的官方说明。"
        },
        {
          label: "Microsoft Learn",
          url: "https://learn.microsoft.com/",
          note: "微软官方技术文档入口。"
        },
        {
          label: "Model Context Protocol",
          url: "https://modelcontextprotocol.io/",
          note: "理解 MCP 概念和生态的官方入口。"
        }
      ],
      curatedLinks: [
        "凡是涉及云服务、SDK、权限和计费的内容，优先让 AI 工具引用官方文档。",
        "如果生成结果没有来源链接，不要直接复制到生产项目里。",
        "MCP 适合做成长期资源页：按官方文档、搜索、数据库、浏览器和文件系统分组。"
      ],
      downloadIdeas: [
        "可以整理一份 AI 编程资料源检查清单",
        "可以补 MCP Server 分类表和适用场景 PDF"
      ],
      monetization: "适合承接 AI 编程工具、云开发课程、开发者文档整理服务和团队知识库工具类推荐。",
      extraSections: [
        {
          title: "什么时候最需要官方文档 grounding",
          items: [
            "使用 Azure、Microsoft 365、GitHub、Vercel 这类频繁更新的平台能力时。",
            "代码里涉及权限、认证、计费、部署和安全设置时。",
            "你看到 AI 回答里出现旧参数、旧截图或说法互相矛盾时。"
          ]
        },
        {
          title: "可以放在教程里的判断清单",
          items: [
            "回答里有没有原始来源链接。",
            "来源是不是官方文档、官方博客或权威 changelog。",
            "文档日期和功能状态是否匹配当前项目。",
            "生成结果是否还能被本地测试或静态检查验证。"
          ]
        }
      ]
    },
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
      date: "2026-06-02",
      tag: "AI 工具",
      title: "OpenAI Codex 发布角色插件、Sites 预览和 annotations",
      summary: "OpenAI 6 月 2 日发布 Codex 更新，宣布面向数据分析、创意生产、产品设计、销售、公开股票投资和投行等场景的角色插件，并介绍可分享互动网站和应用的 Sites 预览，以及可在结果上直接给反馈的 annotations。",
      why: "Codex 正在从写代码工具扩展到知识工作和轻量应用生产，新手需要理解插件、可分享结果和人工反馈如何组成一条完整工作流。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/codex-for-every-role-tool-workflow/",
      articleIdea: "选题：OpenAI Codex 新增角色插件、Sites 和注释：新手怎么看 AI 从写代码走向做完整工作"
    },
    {
      date: "2026-06-02",
      tag: "AI 编程",
      title: "GitHub Copilot 本地和云端 sandboxes 进入 public preview",
      summary: "GitHub 6 月 2 日 Changelog 宣布，Copilot 可在本地受限沙箱和 GitHub 托管的临时 Linux 云端沙箱中执行工具和命令。本地会话可用 `/sandbox enable`，云端任务可通过 `copilot --cloud` 启动。",
      why: "AI 代理开始运行命令、改文件和访问网络后，隔离、策略、身份和日志会变成基础设施问题；新手试用代理前应先理解权限边界。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/",
      articleIdea: "选题：GitHub Copilot 沙箱公测：新手怎么让 AI 代理在更可控的环境里运行命令"
    },
    {
      date: "2026-06-02",
      tag: "开发工具",
      title: "GitHub Copilot SDK 正式 GA，可把代理运行时嵌入自己的工具",
      summary: "GitHub 6 月 2 日 Changelog 宣布 Copilot SDK general availability，支持 Node.js/TypeScript、Python、Go、.NET、Rust 和 Java，可通过稳定 API 调用 Copilot 的规划、工具调用、文件编辑、流式输出和多轮会话能力。",
      why: "开发者工具正在从“接一个模型 API”转向“嵌入完整代理运行时”，做内部工具、CI/CD 助手和客户侧 AI 功能时，需要关注认证、MCP、OpenTelemetry 和自定义工具。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/",
      articleIdea: "候选：GitHub Copilot SDK GA 新手指南：什么时候需要代理运行时，而不是普通模型调用"
    },
    {
      date: "2026-06-02",
      tag: "AI 编程",
      title: "GitHub Copilot CLI 刷新终端体验，加入 rubber duck、定时提示和语音输入",
      summary: "GitHub 6 月 2 日 Changelog 介绍 Copilot CLI 在 Build 2026 的更新：rubber duck、prompt scheduling 和 voice input 已可用，新的实验性终端界面支持 issue、pull request 和 gist 标签页，并改进可访问性。",
      why: "AI 编程工具正在靠近真实终端工作流：不只是回答问题，还会复查方案、安排重复任务、接受语音输入，并在同一界面查看仓库上下文。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/",
      articleIdea: "候选：Copilot CLI 新终端体验怎么用：从 rubber duck 到定时提示的入门清单"
    },
    {
      date: "2026-06-02",
      tag: "代码安全",
      title: "Anthropic 扩大 Project Glasswing，让更多关键基础设施组织试用 Claude Mythos Preview",
      summary: "Anthropic 6 月 2 日宣布扩大 Project Glasswing，约 150 个新组织将在满足安全要求后获得 Claude Mythos Preview 访问权限。官方称早期约 50 个伙伴已用该模型扫描代码库，并发现超过 10,000 个高危或严重安全缺陷。",
      why: "AI 代码安全正在进入“发现漏洞更快，验证和修复更难”的阶段。对开发者和站长来说，自动扫描结果必须配合披露、复现、修复和人工安全流程。",
      sourceLabel: "Anthropic",
      sourceUrl: "https://www.anthropic.com/news/expanding-project-glasswing",
      articleIdea: "候选：AI 漏洞扫描新手观察：为什么发现问题后，验证和修复才是关键"
    },
    {
      date: "2026-06-01",
      tag: "AI 编程",
      title: "GitHub Copilot 用量计费全面生效，并加入用户级预算控制",
      summary: "GitHub 6 月 1 日 Changelog 说明，Copilot 各计划开始按 GitHub AI Credits 计量；Copilot code review 也会消耗 Actions minutes。组织和企业现在可以设置用户级预算，现有 Student、Pro、Pro+ 用户也可以升级到 Copilot Max。",
      why: "AI 编程工具正在从“功能更新”进入“成本和权限治理”阶段，新手需要同时理解模型用量、runner 资源、预算提醒和计划差异。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/",
      articleIdea: "候选：GitHub Copilot usage-based billing 新手检查清单：预算、AI Credits 和 runner 怎么看"
    },
    {
      date: "2026-06-01",
      tag: "AI 编程",
      title: "GitHub Copilot auto 会向个人非企业用户提供 evaluation models",
      summary: "GitHub 6 月 1 日 Changelog 表示，个人非企业用户可以访问 evaluation models，并且这些模型可能被 Copilot auto model selection 选中；如果不想在 auto 中使用 evaluation models，可以到 Copilot settings 关闭。",
      why: "模型自动选择越来越常见，新手不能只看“auto”两个字，还要知道模型来源、实验性质、设置入口和关闭方式。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-01-evaluation-models-in-auto-for-individual-plans/",
      articleIdea: "候选：Copilot auto model selection 新手指南：什么时候信任自动选择，什么时候手动指定模型"
    },
    {
      date: "2026-06-01",
      tag: "AI 工具",
      title: "Vercel AI Gateway 接入 Alibaba Qwen 3.7 Plus",
      summary: "Vercel 6 月 1 日 Changelog 宣布，Qwen 3.7 Plus 已可通过 AI Gateway 使用。官方描述它统一视觉和语言能力，覆盖 GUI、CLI、编码、效率工作流、全模态输入和视觉代理任务，并可在 AI SDK 中调用。",
      why: "国内模型继续进入海外开发平台的统一网关，新手可以借这条更新理解多模型调用、成本观察、重试和代理任务编排。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway",
      articleIdea: "选题：Vercel AI Gateway 接入 Qwen 3.7 Plus：新手怎么看多模态代理模型进入建站工作流"
    },
    {
      date: "2026-06-01",
      tag: "建站工具",
      title: "Vercel Blob 支持 OIDC authentication，新项目默认减少长期 Token 依赖",
      summary: "Vercel 6 月 1 日 Changelog 宣布 Blob 支持 OIDC authentication，新连接项目默认使用短期、自动轮换的 Vercel-issued OIDC token；升级后，Vercel CLI 也能读取相同环境变量来访问私有 store。",
      why: "AI 代理、CLI 和函数都可能接触存储服务，短期凭据与自动轮换能降低长期 Token 泄露风险，是新手建站安全的实用更新。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication",
      articleIdea: "选题：Vercel Blob 支持 OIDC：新手为什么要少用长期 Token，让函数和代理更安全"
    },
    {
      date: "2026-06-01",
      tag: "部署工具",
      title: "Vercel Elastic Build Machines 会自动保护接近 OOM 的构建",
      summary: "Vercel 6 月 1 日 Changelog 表示，Elastic Build Machines 会监控构建内存使用：内存密集但速度快的构建不会被降级，接近 OOM 时可自动升级到更高 tier，OOM 失败后的下一次部署也会自动使用更高 tier。",
      why: "现代前端项目、AI 生成页面和大依赖构建很容易碰到内存瓶颈，新手要把部署失败看成资源配置和构建画像问题，而不只是代码错了。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/elastic-build-machines-now-protect-against-out-of-memory-builds",
      articleIdea: "候选：Vercel 构建 OOM 排查清单：怎么判断是代码、依赖还是机器规格问题"
    },
    {
      date: "2026-06-01",
      tag: "AI 编程",
      title: "GitHub Copilot Code Review 今日起同时计入 AI Credits 和 Actions minutes",
      summary: "GitHub 4 月 27 日提前公告的计费变化在 2026 年 6 月 1 日生效：每次 Copilot code review 都会计入 Copilot AI Credits；私有仓库使用 GitHub-hosted runners 运行审查时，还会消耗 GitHub Actions minutes。公共仓库 Actions minutes 仍免费。",
      why: "AI 代码审查从功能尝鲜进入真实成本管理，新手和团队需要把 agentic review 当成有 runner、预算和权限的自动化流程。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/",
      articleIdea: "选题：GitHub Copilot Code Review 开始消耗 Actions minutes：新手怎么读懂 AI 代码审查成本"
    },
    {
      date: "2026-06-01",
      tag: "开发大会",
      title: "Microsoft Build 2026 将在 6 月 2 日开场，官方直播聚焦 AI 开发工具和平台",
      summary: "Microsoft News 的 Build 2026 页面显示，微软将在太平洋时间 6 月 2 日 9:30 开始官方 live blog，介绍面向开发者及更广泛用户的 AI-powered tools and platforms 更新。",
      why: "接下来 24 小时内，Microsoft、GitHub、Azure、Windows 相关 AI 开发工具可能集中发布，适合作为本周建站、AI 编程和开发工具专题的重点观察入口。",
      sourceLabel: "Microsoft News",
      sourceUrl: "https://news.microsoft.com/build-2026/",
      articleIdea: "选题：Microsoft Build 2026 新手关注清单：AI 开发工具更新应该先看什么"
    },
    {
      date: "2026-05-31",
      tag: "国内开源",
      title: "Qwen Code v0.17.0 与 5 月 31 日 nightly 继续补齐终端代理工作流",
      summary: "QwenLM/qwen-code 的 GitHub Releases 显示，v0.17.0 包含飞书 Channel adapter、遥测基础能力、open-computer-use MCP 零配置内置、上下文压缩重构等更新；5 月 31 日 nightly 继续修复 rewind 场景下的 compressed turn 误报。",
      why: "国内开源 AI 编程代理正在把终端、协作渠道、桌面操作和长会话上下文管理串起来，新手可以借它理解代理不是单一聊天窗口，而是一套持续迭代的开发工作流。",
      sourceLabel: "Qwen Code GitHub Releases",
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases",
      articleIdea: "选题：Qwen Code v0.17.0 新手观察：终端 AI 编程代理如何补齐协作、桌面能力和上下文压缩"
    },
    {
      date: "2026-05-31",
      tag: "AI 编程",
      title: "Claude Code v2.1.159 确认无用户侧变化，v2.1.158 的 Auto mode 上云仍是重点",
      summary: "Claude Code 5 月 31 日 v2.1.159 只写明是内部基础设施改进、没有用户侧变化；前一版 v2.1.158 则把 Auto mode 扩展到 Bedrock、Vertex 和 Foundry 上的 Opus 4.7/4.8，需要通过 CLAUDE_CODE_ENABLE_AUTO_MODE=1 启用。",
      why: "这类更新提醒新手区分“最新版本”和“值得学习的用户侧能力”：真正要理解的是 Auto mode、托管模型平台和本地工具调用之间的权限边界。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases",
      articleIdea: "选题：Claude Code Auto mode 上云后，新手该怎样理解模型、权限和工具调用"
    },
    {
      date: "2026-05-29",
      tag: "AI 工具",
      title: "OpenAI Codex app 支持 Windows Computer Use 与跨设备远程控制",
      summary: "OpenAI 在 ChatGPT Release Notes 中更新 Codex：Windows 用户现在可以使用 Codex app 的 Computer Use，也可以从手机或 Mac 远程查看进度、继续线程、接管工作，并用 Profiles 区分不同账户和配置。",
      why: "AI 编程代理正在从云端任务扩展到本机桌面和跨设备协作，新手需要理解本机权限、远程接管和任务边界，而不是把它当成普通聊天工具。",
      sourceLabel: "OpenAI Help",
      sourceUrl: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      articleIdea: "选题：OpenAI Codex 支持 Windows Computer Use 和远程控制：新手怎么把本机代理用稳"
    },
    {
      date: "2026-05-29",
      tag: "开发工具",
      title: "Claude Code 本地 .claude/skills 插件可自动加载",
      summary: "Claude Code v2.1.157 的发布说明显示，本地 .claude/skills 中的插件现在可自动加载，新增 claude plugin init <name> 脚手架，并改进 /plugin 自动补全、agents 设置和 worktree 切换体验。",
      why: "这让重复提示、检查清单和团队流程更容易从聊天记录沉淀成可复用工具，适合扩成 Claude Code skills 与 plugins 的新手入门文章。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases",
      articleIdea: "选题：Claude Code 本地 skills 和插件自动加载：新手怎么把重复工作流沉淀成工具"
    },
    {
      date: "2026-05-29",
      tag: "AI 编程",
      title: "GitHub Copilot usage metrics API 新增 AI 采用阶段",
      summary: "GitHub Changelog 显示，Copilot usage metrics API 现在会按 28 天滚动窗口把用户划分到 Code first、Agent first、Multi-agent 等 AI 采用阶段，并提供企业和组织级汇总。",
      why: "这让团队不只看 Copilot 活跃人数，还能判断开发者是否从代码补全进入代理式开发和多智能体协作，适合扩成 AI 编程采用度入门文章。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption/",
      articleIdea: "选题：GitHub Copilot 指标新增 AI 采用阶段：新手怎么看团队从补全走向多智能体"
    },
    {
      date: "2026-05-29",
      tag: "AI 平台",
      title: "Claude Managed Agents 的 webhooks、多智能体编排和自托管沙箱登陆 AWS",
      summary: "Anthropic 的 Claude Platform release notes 显示，Claude Managed Agents 的 webhooks、多智能体编排和 self-hosted sandboxes 现已可在 Claude Platform on AWS 使用，并配套新增 IAM actions 和托管策略。",
      why: "托管代理正在进入更标准的云权限体系，新手可以借此理解 AI Agent 不只是聊天入口，还涉及 webhooks、沙箱、IAM 和团队治理。",
      sourceLabel: "Claude Platform Release Notes",
      sourceUrl: "https://platform.claude.com/docs/en/release-notes/overview",
      articleIdea: "选题：Claude Managed Agents on AWS：为什么 AI 代理也需要 IAM 和沙箱"
    },
    {
      date: "2026-05-29",
      tag: "开发环境",
      title: "Vercel Sandbox 支持运行 Docker，代理可在隔离环境里启动容器依赖",
      summary: "Vercel 宣布 Sandbox 支持安装和运行 Docker，代理可以在不触碰宿主机的情况下构建容器、安装系统包、启动 Redis 或 Postgres 等测试依赖。",
      why: "AI 代理写代码后还需要跑测试和预览，Docker in Sandbox 能把依赖验证放进隔离工作台，很适合新手理解代理开发环境。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox",
      articleIdea: "选题：Vercel Sandbox 支持运行 Docker：AI 代理开发环境怎么跑 Redis、Postgres 和容器测试"
    },
    {
      date: "2026-05-29",
      tag: "开发环境",
      title: "Vercel Sandboxes 开放 8080 端口作为 ingress domain",
      summary: "Vercel Changelog 显示，Sandboxes 现在允许打开并绑定 8080 端口作为 ingress domain，原控制端口已迁移到 23456。",
      why: "很多新手预览本地 Web 服务默认就会用 8080，沙箱支持该端口后，代理启动临时预览、HTTP 服务和演示应用会更顺手。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/port-8080-is-now-available-in-vercel-sandboxes",
      articleIdea: "选题：AI 代理预览 Web 服务时，为什么 8080 端口很重要"
    },
    {
      date: "2026-05-29",
      tag: "建站工具",
      title: "Vercel Functions invocation 计费改为按 unit，更适合按实际调用量理解成本",
      summary: "Vercel 宣布 Pro 和新 Enterprise 客户的 Function invocations 从套餐式计费转向 per-unit pricing，Pro 价格为每次调用 0.0000006 美元，并在当前账期结束后生效。",
      why: "个人站长和小团队使用 serverless functions 时，调用次数会直接影响成本。把计费单位讲清楚，适合扩成建站成本入门内容。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog",
      articleIdea: "选题：建站新手怎么看 serverless 调用计费：从 Vercel Functions per-unit pricing 说起"
    },
    {
      date: "2026-05-28",
      tag: "开发工具",
      title: "VS Code 1.122 发布：Agents、离线 BYOK 和浏览器设备模拟继续增强",
      summary: "VS Code 1.122 发布说明显示，本次更新强化了 Agents 窗口，BYOK 模式可在离线场景使用且不要求 GitHub 登录，并在浏览器工具中加入设备模拟能力。",
      why: "这直接影响新手写代码、调试网页和尝试 AI 编程工具的入口，适合扩成“VS Code AI 功能怎么逐步上手”的资源文章。",
      sourceLabel: "Visual Studio Code Release Notes",
      sourceUrl: "https://code.visualstudio.com/updates/v1_122",
      articleIdea: "选题：VS Code 1.122 新手指南：Agents 窗口、离线 BYOK 和设备模拟怎么用"
    },
    {
      date: "2026-05-28",
      tag: "AI 编程",
      title: "Microsoft Learn MCP Server 让代理工具直接检索官方文档",
      summary: "Microsoft ISE 介绍 Microsoft Learn MCP Server，可让 AI 开发工具检索 Microsoft Learn、Azure 和 Microsoft 365 官方文档，并强调不需要安装和认证。",
      why: "这类 grounding 能减少 AI 代理凭旧知识写过时代码的风险，很适合写成“让 AI 先查官方资料再回答”的新手教程。",
      sourceLabel: "Microsoft ISE Dev Blog",
      sourceUrl: "https://devblogs.microsoft.com/ise/improve-your-agentic-developer-tools-by-grounding-in-microsoft-learn/",
      articleIdea: "选题：让 AI 编程代理先查官方文档：Microsoft Learn MCP Server 新手入门"
    },
    {
      date: "2026-05-28",
      tag: "AI 编程",
      title: "Claude Opus 4.8 在 GitHub Copilot 和 Vercel AI Gateway 中开放",
      summary: "GitHub Changelog 宣布 Claude Opus 4.8 面向 Copilot Pro+、Business 和 Enterprise 用户逐步开放；Vercel 同日宣布可通过 AI Gateway 使用 anthropic/claude-opus-4.8。",
      why: "模型选择正在成为 AI 编程工具的日常配置项，新手需要理解入口、权限、计费倍数和 API 网关之间的关系。",
      sourceLabel: "GitHub Changelog / Vercel Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot/",
      articleIdea: "选题：GitHub Copilot 和 AI Gateway 里怎么选择高阶编程模型"
    },
    {
      date: "2026-05-29",
      tag: "国内开源",
      title: "Qwen Code 连续发布 5 月 28-29 日 nightly，继续打磨终端 AI 编程代理",
      summary: "QwenLM/qwen-code 的 GitHub Releases 显示，项目在 5 月 28 日和 5 月 29 日连续发布 nightly 版本，包含 TUI、遥测、飞书通道、技能优化等改动。",
      why: "这是国内开源 AI 编程代理持续迭代的信号，适合后续观察它如何从命令行工具扩展到团队协作和多通道工作流。",
      sourceLabel: "Qwen Code GitHub Releases",
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases",
      articleIdea: "选题：Qwen Code 新手观察：终端里的 AI 编程代理正在补哪些能力"
    },
    {
      date: "2026-05-28",
      tag: "代码质量",
      title: "CodeQL 2.25.5 改进 GitHub Actions 查询准确性",
      summary: "GitHub 发布 CodeQL 2.25.5，提到 C/C++、Java/Kotlin 和 GitHub Actions 查询准确性改进，并扩展了 poisonable_steps 查询对复合 action metadata 的覆盖。",
      why: "供应链和 CI 配置正在成为代码安全的一部分，适合给新手解释为什么 workflow、action 和依赖也需要被扫描。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-05-28-codeql-2-25-5-improves-accuracy-for-github-actions-and-more/",
      articleIdea: "选题：为什么 GitHub Actions 也要做代码扫描：从 CodeQL 查询说起"
    },
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
