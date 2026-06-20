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
      { value: "6", label: "原创下载包" },
      { value: "45", label: "新手专题" },
      { value: "持续", label: "更新与核验" }
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
        text: "每个主题都保留官方来源、实践步骤和核验说明，方便读者继续学习与复现。"
      }
    ]
  },
  posts: [
    {
      id: "cloudflare-temporary-accounts-agent-deploy-guide",
      title: "Cloudflare 临时账号：新手怎样让 AI Agent 先部署、再认领和验收 Worker",
      date: "2026-06-19",
      category: "AI 建站",
      readTime: "10 分钟",
      excerpt: "Cloudflare 在 2026 年 6 月 19 日推出面向 AI Agent 的 Temporary Accounts：没有 Cloudflare 登录态时，Agent 可以通过 Wrangler 的临时部署流程先把 Worker 发布到 60 分钟预览账号，再把 claim URL 交给人确认。新手重点不是“无账号上线”，而是学会给 Agent 建立可丢弃、可验收、可认领的部署闭环。",
      tags: ["Cloudflare Workers", "AI Agent", "Wrangler"],
      featured: true,
      intro: [
        "AI 编程助手越来越常做“写代码、部署、curl 验证、再修改”的闭环。问题在于，部署平台通常需要浏览器登录、OAuth 授权、复制 API token 或多因素认证。对坐在旁边的 copilot 来说，这只是打断；对后台运行的 Agent 来说，这往往会让任务卡住。Cloudflare 在 2026 年 6 月 19 日发布 Temporary Accounts for Agents，核心是让 Wrangler 在没有凭据时提示并支持临时部署。",
        "这件事对新手建站很实用，但也容易被误读。`wrangler deploy --temporary` 不是替代正式账号、CI/CD 或生产发布的万能入口；它更适合一次性原型、Agent 试跑、教学演示和第一次验证部署链路。正确用法是：让 Agent 先部署到临时预览账号，拿到 60 分钟内可认领的 claim URL，再由人检查代码、访问结果、资源范围和是否需要转为正式账号。"
      ],
      audience: [
        "正在用 Codex、Claude Code、GitHub Copilot、Qwen Code 等 Agent 写 Cloudflare Workers、API 或小型网站的开发者",
        "想让 Agent 自动完成部署和回归验证，但还不想把正式 Cloudflare token 交给临时任务的新手",
        "需要演示“写代码到线上预览”闭环的个人站长、教程作者和小团队"
      ],
      format: [
        "适合整理成“安装 Wrangler / 让 Agent 先普通 deploy / 按提示改用 temporary / 访问预览 / 决定是否认领”的试跑流程",
        "后续可以补一份 Agent 部署验收表，记录生成的 Worker、预览地址、claim 截止时间、人工复核人和是否删除或认领"
      ],
      roadmap: [
        "先更新 Wrangler，并确认任务确实适合临时部署。Cloudflare 文档要求使用支持临时部署的 Wrangler 版本；如果你已经有正式账号、生产项目或 CI/CD，就应继续用 `wrangler login`、API token 或现有部署流水线，不要为了省步骤把生产发布改成临时账号。",
        "给 Agent 一个很窄的部署任务。第一次不要让它接入数据库、支付、真实邮件或生产域名，只让它创建一个最小 Worker、静态响应或 demo API。提示词里可以要求它部署后自己访问预览 URL，并把响应内容、命令输出摘要和不确定点交回来。",
        "让 Agent 先尝试普通 `wrangler deploy`。如果当前环境没有 Cloudflare 凭据，Wrangler 会提示可以改用 `--temporary`。这一步很重要，因为 Agent 是从官方 CLI 输出里发现临时流程，而不是靠你提前把 token 或账号信息写进提示词。",
        "部署成功后做验收，而不是只看“已上线”。至少检查 Worker URL 是否能访问、返回内容是否和代码一致、是否创建了不该创建的资源、claim URL 的有效时间、以及代码仓库里有没有残留临时 token、日志或多余配置。",
        "最后决定认领、丢弃还是重做。如果 demo 值得保留，人在 60 分钟窗口内打开 claim URL，把临时账号转成自己的正式账号；如果只是一次试跑，允许它过期即可。不要把临时账号当成长期托管、生产域名绑定或自动化账单入口。"
      ],
      officialLinks: [
        {
          label: "Cloudflare Blog：Temporary Cloudflare Accounts for AI agents",
          url: "https://blog.cloudflare.com/temporary-accounts/",
          note: "发布 Temporary Accounts for Agents，说明 Agent 可通过 Wrangler 临时部署 Worker，并在 60 分钟窗口内由人认领。"
        },
        {
          label: "Cloudflare Docs：Claim deployments (temporary accounts)",
          url: "https://developers.cloudflare.com/workers/platform/claim-deployments/",
          note: "官方操作文档，说明适用场景、Wrangler 版本要求、`--temporary` 流程、claim URL 和生产场景限制。"
        },
        {
          label: "Cloudflare Docs：Workers deploy command",
          url: "https://developers.cloudflare.com/workers/wrangler/commands/workers/",
          note: "用于核对 `wrangler deploy --temporary` 在 Workers deploy 命令中的定位、限制和凭据行为。"
        },
        {
          label: "Cloudflare Docs：Wrangler",
          url: "https://developers.cloudflare.com/workers/wrangler/",
          note: "Wrangler 是 Cloudflare Developer Platform CLI，临时部署流程也建立在这个官方 CLI 入口上。"
        }
      ],
      curatedLinks: [
        "临时账号最适合“先让 Agent 证明它能部署并自检”，不适合绕过生产账号、权限审批或长期运维流程。",
        "对 Agent 来说，部署不是终点；它必须返回可访问地址、验证结果、命令摘要和需要人确认的 claim 信息。",
        "如果项目已经有正式 Cloudflare 凭据或 CI/CD，临时部署反而可能制造混乱，应继续使用可审计的正式部署链路。"
      ],
      downloadIdeas: [
        "可以整理一份 Agent 临时部署验收表，包含 Worker 名称、预览 URL、claim 截止时间、响应检查和人工决定",
        "可以补一个最小 Worker demo，让新手比较本地 dev、正式 deploy 与 temporary deploy 的边界"
      ],
      monetization: "适合与本站的 Cloudflare Agents SDK、Flue、Agent 浏览器自动化和建站部署检查表内容串联，帮助读者从写代码过渡到可验收的上线流程。",
      extraSections: [
        {
          title: "第一次试跑流程",
          items: [
            "新建一个空目录或 demo 仓库，不要复用生产站点目录。",
            "安装或更新 Wrangler，并让 Agent 读取官方文档确认当前命令。",
            "让 Agent 创建一个最小 Worker，例如返回一段纯文本或 JSON。",
            "要求 Agent 先运行普通 deploy；如果 Wrangler 提示无凭据，再按提示使用 temporary deploy。",
            "拿到预览地址后，让 Agent 自己访问一次，并把返回内容、HTTP 状态和 claim URL 摘要交给你。"
          ]
        },
        {
          title: "部署验收记录模板",
          text: "每次让 Agent 做临时部署，都建议留下这份短记录，避免几小时后忘记哪个预览来自哪次任务。",
          code: "任务目标：\nWorker 名称：\n预览 URL：\nclaim 截止时间：\nAgent 自检结果：\n人工复核结论：\n认领 / 丢弃 / 重做：",
          language: "text"
        },
        {
          title: "什么时候不要用临时账号",
          items: [
            "项目已经绑定生产域名、真实数据库、队列、KV、R2 或账单资源。",
            "团队要求所有部署都必须走 GitHub Actions、审批记录或变更单。",
            "Agent 需要长期维护同一个 Worker，而不是完成一次可丢弃预览。",
            "你无法在 60 分钟内检查 claim URL，也不确定部署出来的资源是否应该保留。"
          ]
        }
      ]
    },
    {
      id: "google-a2a-collaborative-agents-guide",
      title: "Google A2A 协作 Agent：新手怎样理解多智能体交接、边界和验收",
      date: "2026-06-18",
      category: "AI Agent",
      readTime: "10 分钟",
      excerpt: "Google Developers Blog 在 2026 年 6 月 18 日回顾 A2A 协议一周年，重点不只是“多个 Agent 能聊天”，而是让专门 Agent 在安全边界内承接任务、避免主 Agent 上下文污染，并通过标准协议分发工作负载。新手可以先从只读交接、身份边界和结果验收开始理解。",
      tags: ["A2A", "AI Agent", "Google"],
      featured: true,
      intro: [
        "很多人第一次听到多智能体协作，会把它想成“让几个聊天机器人互相对话”。真正落到工程里，问题更具体：主 Agent 不应该把所有内部数据库、专业模型、客户信息和工具调用都塞进自己的上下文；它应该能把一个明确任务交给更合适的专门 Agent，并且只拿回必要结果。这就是 Google 在 2026 年 6 月 18 日文章里强调的 A2A 场景：Agent 之间需要一种共同语言，既能交接任务，也能保持安全边界。",
        "A2A 的价值不在于替代 REST API 或 MCP。API 更像固定接口，MCP 更偏 Agent 调工具和数据源，而 A2A 关注 Agent 与 Agent 之间怎样发现、委派、协作和返回结果。对新手来说，第一步不是马上搭一个复杂的多 Agent 系统，而是把“什么时候该交接”“交给谁”“暴露什么信息”“如何验收结果”四个问题写清楚。"
      ],
      audience: [
        "正在用 Gemini CLI、GitHub Copilot、Claude Code、Codex 或内部 Agent 做研发自动化的开发者",
        "想把客服、数据分析、DevOps、文档检索等任务拆成多个专门 Agent，但担心权限和上下文失控的团队",
        "刚学习 MCP、A2A、ARD 等 Agent 协议，希望先建立正确边界感的新手"
      ],
      format: [
        "适合整理成“主 Agent 识别任务 / 专门 Agent 承接 / 最小上下文交接 / 结果验收 / 审计记录”的实践清单",
        "后续可以补一份 A2A 与 MCP 对照表，帮助读者判断某个需求是调工具、找资源，还是委派给另一个 Agent"
      ],
      roadmap: [
        "先判断任务是否真的需要另一个 Agent。读取一个文件、查一次文档、调用一个稳定 API，通常用普通工具或 MCP 就够了；需要专门 Agent 的场景通常包含专业流程、长任务、多步骤判断、敏感数据隔离或独立团队维护的能力。",
        "把交接内容写窄。主 Agent 不要把整段聊天历史、完整仓库、全部客户数据都转交出去，而是只提供任务目标、必要输入、权限范围、截止条件和输出格式。这样可以减少上下文污染，也能降低专门 Agent 看到无关敏感信息的概率。",
        "给专门 Agent 设置可验收输出。不要只说“帮我分析一下”，而是要求它返回结论、证据、使用的资源、未确认假设和下一步建议。涉及写入、发消息、下单、授权、部署等动作时，先让它产出计划和差异，再由人或主系统确认。",
        "用小场景试跑。可以从只读 DevOps 排查、文档问答、测试失败归因或数据报表说明开始；先记录每次交接的输入、接收方、返回结果和人工复核结论，再考虑引入自动触发、跨平台工单或生产系统写入。"
      ],
      officialLinks: [
        {
          label: "Google Developers Blog：How A2A is Building a World of Collaborative Agents",
          url: "https://developers.googleblog.com/how-a2a-is-building-a-world-of-collaborative-agents/",
          note: "说明 A2A 一周年进展，并用安全边界、零上下文污染、动态协作和工作负载分发解释协议价值。"
        },
        {
          label: "Agent2Agent Protocol GitHub Repository",
          url: "https://github.com/a2aproject/A2A",
          note: "A2A 官方开源仓库，包含协议说明、SDK 入口、Agent Discovery 与协作路线图。"
        },
        {
          label: "A2A Python SDK",
          url: "https://github.com/a2aproject/a2a-python",
          note: "官方 Python SDK，适合核对 1.0 兼容性、传输方式和服务端/客户端能力。"
        },
        {
          label: "A2A JavaScript SDK",
          url: "https://github.com/a2aproject/a2a-js",
          note: "官方 JavaScript SDK，适合前端或 Node.js 生态读者了解当前支持状态。"
        }
      ],
      curatedLinks: [
        "A2A 不是让主 Agent 变得更全能，而是让它知道什么时候应该把任务交给更合适的专门 Agent。",
        "多 Agent 协作的第一风险不是“不会调用”，而是边界过宽：把不该共享的数据、权限或长期凭据带进了交接流程。",
        "如果结果不能被人复核，或者无法解释使用了哪个专门 Agent 与哪些输入，那么这个协作流程还不适合自动化。"
      ],
      downloadIdeas: [
        "可以整理一份多 Agent 任务交接检查表，覆盖任务目标、输入范围、权限、输出格式、人工验收和回滚方式",
        "可以补一张 MCP / A2A / ARD 边界对照卡，帮助新手判断自己需要的是工具调用、能力发现还是 Agent 委派"
      ],
      monetization: "适合与本站的 MCP、ARD、Copilot agent finder、Cloudflare Agents SDK 和 Vercel Agent Stack 内容互相推荐，形成 AI Agent 基础协议学习路线。",
      extraSections: [
        {
          title: "第一次试跑的低风险任务",
          items: [
            "让主 Agent 把一个公开 issue 或错误日志交给专门排查 Agent，总结可能原因和需要补充的证据。",
            "让文档 Agent 只读取公开文档，返回相关段落、链接和不确定点，不允许写入仓库。",
            "让测试 Agent 复述失败用例、预期行为和复现步骤，不直接修改代码。",
            "让数据 Agent 返回查询计划和字段解释，先不要连接生产数据库或发送报表。",
            "每次试跑后记录输入、接收方、输出、人工复核结论和下一次是否扩大权限。"
          ]
        },
        {
          title: "交接记录模板",
          text: "新手可以先用这份最小记录，避免多 Agent 流程变成不可追踪的黑箱。",
          code: "任务目标：\n委派给哪个 Agent：\n传递了哪些输入：\n开放了哪些权限：\n期望输出格式：\n人工验收人：\n结论与后续动作：",
          language: "text"
        }
      ]
    },
    {
      id: "vercel-connect-agent-token-security-guide",
      title: "Vercel Connect 公测：新手怎样让 Agent 安全访问 Slack、GitHub 和外部服务",
      date: "2026-06-17",
      category: "建站安全",
      readTime: "10 分钟",
      excerpt: "Vercel 在 2026 年 6 月 17 日发布 Vercel Connect 公测，让应用和 Agent 通过 connector 在运行时获取短期、可收窄范围的 token，而不是把长期 provider secret 放进环境变量。对建站和 Agent 新手来说，这是一条更安全的外部服务接入路线。",
      tags: ["Vercel Connect", "Agent 安全", "OAuth"],
      featured: true,
      intro: [
        "当一个 Agent 需要访问 Slack、GitHub、Linear、Notion、Salesforce 或自定义 API 时，最常见的偷懒做法是把长期 token 写进环境变量。这样上线很快，但一旦 token 泄露、权限过宽或环境混用，风险也会一起放大。Vercel 在 2026 年 6 月 17 日发布 Vercel Connect 公测，思路是先注册 connector，再让代码在运行时按任务请求短期 token。",
        "这件事对个人站和小团队也有意义。很多建站工作流现在会接入 AI Agent：自动查 issue、读文档、发 Slack、建 Linear 卡片、读取 Notion 或触发 MCP server。新手不应该一开始就给 Agent 一个覆盖整个组织的长期密钥，而应该从单仓库、只读、预览环境、可撤销开始。"
      ],
      audience: [
        "正在把 Vercel、Next.js、AI SDK 或自建 Agent 接入 Slack、GitHub、Linear、Notion 等外部服务的开发者",
        "习惯把 API Key 放进环境变量，但希望减少长期凭据风险的个人站长和小团队",
        "想理解 OAuth、短期 token、环境隔离和权限收窄如何落到 Agent 工作流的新手"
      ],
      format: [
        "适合整理成“创建 connector / 按环境绑定 / 运行时取 token / 限定资源与权限 / 记录撤销方式”的安全接入步骤",
        "后续可以补一份 Agent 外部服务权限矩阵，按只读、评论、写入、部署、账单等风险等级分层"
      ],
      roadmap: [
        "先列清楚 Agent 需要访问哪个服务、为了完成什么任务、最低需要哪类权限。比如读取某个 GitHub 仓库内容只需要 contents:read，不应该顺手给整个组织写入权限。",
        "在 Vercel 中创建 connector，并把开发、预览、生产环境分开绑定。不要用开发环境泄露的 token 访问生产资源，也不要让测试 Agent 默认触达真实客户、真实账单或真实通知频道。",
        "让代码在运行时请求 token，而不是手写长期密钥。Vercel Connect 的重点是短期、按任务、可自动刷新和可撤销；如果某个 Agent 只执行一次只读检查，就不应该持有长期凭据。",
        "上线前做撤销和失败演练。确认可以撤销某个 connector 或它发出的所有 token，确认 401、权限不足、webhook 验证失败和服务不可用时，Agent 会停止并给出清楚说明，而不是无限重试或改用更宽权限。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Vercel Connect: Secure access to external services for your agents",
          url: "https://vercel.com/changelog/vercel-connect-secure-access-to-external-services-for-your-agents",
          note: "发布 Vercel Connect 公测，并说明 connector、短期 token、环境隔离、撤销和触发器能力。"
        },
        {
          label: "Vercel Docs：Connect",
          url: "https://vercel.com/docs/connect",
          note: "官方文档入口，说明 Vercel Connect 如何让 Agent 和服务注册 connector 并请求短期 token。"
        },
        {
          label: "Vercel Docs：Connect Tokens",
          url: "https://vercel.com/docs/connect/concepts/tokens",
          note: "用于核对 token 的短期凭据定位、subject、scope、resource 与 authorizationDetails 概念。"
        },
        {
          label: "Vercel Docs：Connect Quickstart",
          url: "https://vercel.com/docs/connect/quickstart",
          note: "适合新手按步骤创建第一个 connector，并在代码中请求 runtime provider token。"
        }
      ],
      curatedLinks: [
        "短期 token 不是万能安全保证；如果请求 token 的 Agent 没有任务边界，仍然可能拿到过宽权限。",
        "环境隔离要真实执行：开发、预览、生产使用不同 connector，生产 connector 不给本地实验和临时 Agent 使用。",
        "外部服务触发器要和日志、审批、速率限制一起设计，否则 Agent 很容易在消息风暴或 webhook 重放中失控。"
      ],
      downloadIdeas: [
        "可以整理一份 Agent 外部服务接入前检查表，包含服务、资源范围、权限、环境、撤销命令和失败处理",
        "可以补一个 GitHub 只读 connector 示例，演示怎样把 Agent 权限限制到单仓库 contents:read"
      ],
      monetization: "适合与本站的 Vercel Sandbox、skills.sh OIDC、Vercel Blob OIDC、Agent 权限安全清单和建站安全内容互相串联，帮助读者从功能接入过渡到凭据治理。",
      extraSections: [
        {
          title: "给新手的最小权限顺序",
          items: [
            "第一轮只连接测试项目和测试频道，不连接生产仓库、真实客户数据或账单系统。",
            "先给只读权限，确认 Agent 能正确读取、总结和停止，再考虑评论、创建工单或写入。",
            "把 connector 绑定到明确环境，生产 connector 只用于生产项目。",
            "记录谁创建了 connector、服务是什么、权限范围是什么、怎样撤销和谁负责复核。",
            "对 webhook 触发器设置去重、日志和速率限制，避免重复消息触发重复动作。"
          ]
        },
        {
          title: "接入记录模板",
          text: "每接入一个外部服务，都建议留下这份记录，后续排查和撤销会简单很多。",
          code: "服务名称：\nconnector 名称：\n绑定环境：\n资源范围：\n权限范围：\n触发方式：\n撤销方式：\n负责人：",
          language: "text"
        }
      ]
    },
    {
      id: "github-copilot-agent-finder-ard-guide",
      title: "GitHub Copilot agent finder 与 ARD：新手怎样给 AI Agent 选择可信工具、Skills 和 MCP 资源",
      date: "2026-06-17",
      category: "AI 编程",
      readTime: "10 分钟",
      excerpt: "GitHub 在 2026 年 6 月 17 日推出 Copilot agent finder，Google 同日公布 Agentic Resource Discovery（ARD）开放规范。它们共同指向一个变化：AI Agent 不应该把所有 MCP server、skills、agents 和工具一次性塞进上下文，而应该按任务发现、核验、安装和记录能力。",
      tags: ["GitHub Copilot", "ARD", "MCP"],
      featured: true,
      intro: [
        "很多人第一次给 AI 编程助手加能力时，会直接把一长串 MCP server、插件、skills 和内部工具都接上去。短期看起来省事，长期会让上下文变重、权限边界变模糊，也更难判断某个回答到底用了哪个能力。GitHub 在 2026 年 6 月 17 日发布 Copilot agent finder，核心思路是让你用自然语言描述任务，由 finder 在指定 registry 中搜索可用 AI 资源，返回排序后的候选，再按需拉取给 Copilot 使用。",
        "同一天，Google Developers Blog 公布 Agentic Resource Discovery（ARD）规范，目标是给工具、skills、MCP servers、agents 和其他可调用服务提供一种跨组织、跨框架的发布、发现和验证方式。对新手来说，重点不是马上追每个规范字段，而是把“发现能力”当成一个需要审计的流程：先说明任务，确认来源，限制权限，做只读试跑，再把最终采用的资源和原因写下来。"
      ],
      audience: [
        "已经在 GitHub Copilot、Claude Code、Codex、Qwen Code 或其他 Agent 工具里接入 MCP、skills、插件的开发者",
        "想给团队维护一组内部工具、模板、skills 或 agent registry，但担心上下文膨胀和权限失控的站长与管理员",
        "刚开始学习 AI Agent 生态，希望分清工具发现、安装、授权、验证和下线步骤的新手"
      ],
      format: [
        "适合整理成“描述任务 / 搜索候选 / 核验来源 / 最小授权 / 只读验收 / 记录决策”的接入流程",
        "后续可以补一份 Agent 资源评估表，记录资源名称、发布方、registry、权限、适用任务、测试结果和移除条件"
      ],
      roadmap: [
        "第一步先把任务写窄。不要从“帮我接入所有开发工具”开始，而是写成“读取这个仓库的 README 并找出部署命令”“检查最近一个失败的 CI job”“从内部文档中查 API 限制”。任务越窄，agent finder 或 ARD registry 返回的候选越容易判断，也越不容易装进无关工具。",
        "第二步核验候选来源。看 resource 是否来自你信任的组织、仓库或域名，是否有清晰的维护者、版本、文档、权限说明和问题反馈入口。ARD 的价值在于让资源可以被描述和发现，但发现不等于可信；真正接入前仍要看发布方、签名或域名绑定、开源仓库历史和最小权限边界。",
        "第三步只安装当前任务需要的一小组能力。让 Copilot 或其他 Agent 先使用一个候选完成只读任务，例如读取公开文件、列目录、查询文档或生成建议。不要在第一次试用时就授权写入仓库、创建部署、修改 DNS、发邮件或访问生产数据。",
        "第四步把结果写进团队记录。记录这次任务用了哪个 registry、选择了哪个资源、拒绝了哪些候选、开放了哪些权限、试跑输出是否可复现、什么时候需要升级或移除。以后再遇到类似任务，团队就不用重复猜测，也能解释为什么某个工具值得保留。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Agent finder for GitHub Copilot now available",
          url: "https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/",
          note: "说明 Copilot agent finder 可按自然语言任务搜索 registry，并按需加载排序后的 AI resources。"
        },
        {
          label: "Google Developers Blog：Announcing the Agentic Resource Discovery specification",
          url: "https://developers.googleblog.com/announcing-the-agentic-resource-discovery-specification/",
          note: "解释 ARD 解决“能力在哪里、该用哪个、怎样验证安全连接”的跨组织发现问题。"
        },
        {
          label: "ARD Specification GitHub Repository",
          url: "https://github.com/ards-project/ard-spec",
          note: "规范仓库包含 specification、schema、URN 命名指南和 conformance 工具，适合跟踪草案演进。"
        },
        {
          label: "Microsoft Command Line Blog：Agentic Resource Discovery specification",
          url: "https://commandline.microsoft.com/agentic-resource-discovery-specification-ard/",
          note: "微软侧说明 ARD 在 AI client 自动发现能力时的安全公共层定位。"
        }
      ],
      curatedLinks: [
        "把 agent finder 理解成“候选发现器”，不要把它当成“自动批准器”。排序靠前只说明它可能相关，不说明它一定适合你的仓库、权限模型和合规要求。",
        "registry 应该有退出机制。每个接入的工具都要能被禁用、降级或替换，尤其是会写入代码、发起部署、访问账单、读取私有数据的能力。",
        "团队内部资源最好给人和 Agent 都能读懂的说明：用途、示例任务、权限、失败模式、维护人、更新节奏。只写给模型看的描述很容易在人工排查时变成黑箱。"
      ],
      downloadIdeas: [
        "可以整理一份 Agent 资源接入前检查表，覆盖来源、权限、试跑、日志和移除条件",
        "可以补一个 MCP / Skill / Agent registry 评估模板，帮助团队记录为什么采用或拒绝某个资源"
      ],
      monetization: "适合与本站的 GitHub Copilot、Claude Code、Codex、Qwen Code、MCP 与 Agent 安全清单类内容互相串联，帮助读者建立稳定的工具接入方法。",
      extraSections: [
        {
          title: "第一次接入前的检查清单",
          items: [
            "确认任务是否真的需要外部资源，普通仓库搜索或命令行能解决的事不要额外授权。",
            "确认资源发布方、仓库、域名和文档是否匹配，避免从转载页面或不明镜像安装。",
            "先做只读任务，再逐步打开写入、部署、账单、邮件、工单等高风险能力。",
            "保留一次完整试跑记录：输入、候选、选择理由、输出、人工验收结论。",
            "给资源设置移除条件，例如连续失效、权限过宽、维护停止、输出不可解释或替代方案更稳定。"
          ]
        },
        {
          title: "团队记录模板",
          text: "下面不是规范字段，只是适合新手落地的最小记录。把它放进仓库文档或团队知识库，可以减少以后重复接入和重复排查。",
          code: "资源名称：\n来源 / registry：\n发布方与维护入口：\n适用任务：\n开放权限：\n首次只读试跑结果：\n人工验收人：\n升级或移除条件：",
          language: "text"
        }
      ]
    },
    {
      id: "cloudflare-flue-agents-sdk-production-guide",
      title: "Cloudflare Flue 与 Agents SDK：新手怎样理解 Agent 的框架、harness 和可恢复运行时",
      date: "2026-06-17",
      category: "AI 编程",
      readTime: "11 分钟",
      excerpt: "Cloudflare 在 2026 年 6 月 17 日介绍 Flue 如何构建在 Agents SDK 之上，并把 durable execution、sandboxed code execution、durable filesystem 和 dynamic workflows 作为 agent 平台底座开放给更多 harness 与框架。新手应该先分清框架、harness 和运行时，再做恢复、审批和沙箱测试。",
      tags: ["Cloudflare Agents", "Flue", "Durable Objects"],
      featured: true,
      intro: [
        "AI Agent 走向生产之后，问题不再只是“模型会不会写代码”。真正麻烦的是一次任务可能会持续几分钟甚至更久，中间要流式输出、调用工具、等待审批、运行代码、写入工作区、连接 Slack 或 GitHub，还可能遇到部署、进程重启、API 超时和连接断开。Cloudflare 在 2026 年 6 月 17 日的文章里，把这类问题拆成三层：框架负责项目结构和开发体验，harness 负责 agent loop，运行时平台负责状态、存储、计算和恢复。",
        "Flue 是这次文章里的第一个框架示例。它来自 Astro 团队，主张用声明式方式描述 agent 需要的模型、skills、sandbox 和说明，而不是让开发者手写完整编排循环。Cloudflare Agents SDK 则提供底层运行时能力：Durable Object 身份、本地状态、fibers 可恢复执行、沙箱代码执行、Browser、MCP、AI Gateway、Containers 等。对新手来说，最重要的是不要把这些词混在一起，而是逐层验证：任务能不能恢复，工具能不能限权，代码能不能被沙箱隔离，用户能不能看到明确状态。"
      ],
      audience: [
        "正在从本地 coding agent、脚本机器人或聊天机器人升级到长期运行 AI Agent 的开发者",
        "想理解 Flue、Cloudflare Agents SDK、Project Think、MCP、沙箱和 Durable Objects 分工的新手",
        "需要给 Slack、GitHub、Linear、Discord 或内部系统接入 Agent，但担心中断恢复、审批和日志的团队"
      ],
      format: [
        "适合整理成“先分层 / 再做最小 agent / 加只读工具 / 测试中断恢复 / 最后接入生产 channel”的学习路线",
        "后续可以补一份生产 Agent 验收表，专门检查 fibers、日志、沙箱、权限、成本和用户可见状态"
      ],
      roadmap: [
        "先分清三层。框架层决定项目结构、CLI、channel 和开发体验；harness 层决定模型怎样规划、调用工具、读结果、管理上下文；运行时层决定状态放在哪里、进程中断后怎样恢复、代码在哪里执行、工具凭据怎样隔离。排查问题时也按这三层定位，不要一开始就怀疑模型。",
        "用一个低风险任务试 Flue 或 Agents SDK。比如让 agent 读取公开 issue、总结 README、生成一个不写入生产系统的建议。先不要接账单、DNS、数据库写入和自动部署。等你能看清输入、工具调用、日志、输出和人工确认后，再逐步扩大任务。",
        "专门测试中断恢复。Cloudflare 的 fibers 文档说明 `runFiber()` 会登记任务，`stash()` 可保存中间状态，`onFiberRecovered()` 可在下一次激活时处理恢复。新手应模拟部署、重启或 Durable Object 回收，确认用户不会只看到永远转圈，也不会重复执行已经完成的写入动作。",
        "把沙箱和权限写进验收。LLM 生成代码时，应该只能访问你明确提供的 binding、文件和网络能力。涉及 GitHub、Slack、Linear、Cloudflare API 或内部接口时，先给只读 token 或测试环境 token；所有写入动作都要能被审批、日志记录和回滚。"
      ],
      officialLinks: [
        {
          label: "Cloudflare Blog：Bringing more agent harnesses and frameworks to Cloudflare, starting with Flue",
          url: "https://blog.cloudflare.com/agents-platform-flue-sdk/",
          note: "介绍 Flue 与 Agents SDK 的分层关系，以及 durable execution、code execution、filesystem 和 workflows 等平台能力。"
        },
        {
          label: "Flue Blog：Flue 1.0 Beta",
          url: "https://flueframework.com/blog/flue-1-0-beta/",
          note: "说明 Flue 1.0 Beta 的 agents、workflows、sandboxes、channels、observability 和数据库适配器等更新。"
        },
        {
          label: "Flue Docs：Getting Started",
          url: "https://flueframework.com/docs/getting-started/quickstart/",
          note: "用于核对 Flue 的基础定位、快速开始和可部署目标。"
        },
        {
          label: "Cloudflare Agents Docs：Build Agents on Cloudflare",
          url: "https://developers.cloudflare.com/agents/",
          note: "说明 Agents SDK 的 runtime、channels、harness、tools、state、routing、WebSockets、scheduling 和 recovery。"
        },
        {
          label: "Cloudflare Agents Docs：Durable execution with fibers",
          url: "https://developers.cloudflare.com/agents/runtime/execution/durable-execution/",
          note: "用于核对 `runFiber()`、`stash()` 和 `onFiberRecovered()` 的可恢复执行语义。"
        }
      ],
      curatedLinks: [
        "Agent 生产化的第一道门槛不是模型分数，而是失败后用户能不能知道发生了什么，以及系统能不能从上一次安全位置继续。",
        "框架让开发体验变简单，但不会自动替你设计权限边界。每一个 channel、connector、sandbox binding 和外部 API token 都要有用途说明和审计记录。",
        "可恢复执行必须和幂等设计一起考虑。恢复后继续执行不应该重复扣费、重复发消息、重复创建 issue 或重复写入数据库。"
      ],
      downloadIdeas: [
        "可以整理一份生产 Agent 最小验收清单，覆盖恢复、幂等、沙箱、审批、日志和成本",
        "可以补一个框架 / harness / runtime 分层对照表，帮助新手排查 Agent 问题"
      ],
      monetization: "适合与本站的 Cloudflare Agents SDK、Browser Run、Codemode、Vercel Sandbox、AI Gateway 和 Agent 安全类文章互相推荐，形成生产 Agent 学习路线。",
      extraSections: [
        {
          title: "最小验收顺序",
          items: [
            "先跑本地或测试环境，只接一个只读 channel 和一个只读工具。",
            "记录每次 prompt、工具调用、模型选择、审批结果和最终输出。",
            "模拟进程重启或部署中断，确认恢复后不会重复执行已完成动作。",
            "只把低风险任务接进真实 channel，再逐步添加写入能力。",
            "上线前设置成本上限、错误告警、人工接管方式和禁用开关。"
          ]
        },
        {
          title: "分层排查提示",
          text: "当 Agent 行为异常时，先判断问题属于哪一层。这样比笼统地说“模型不稳定”更容易复现和修复。",
          code: "框架层：项目结构、channel、CLI、配置是否正确\nharness 层：计划、工具选择、上下文管理、审批流程是否正确\n运行时层：状态、恢复、沙箱、凭据、网络和日志是否正确\n业务层：任务本身是否幂等，失败后是否能回滚",
          language: "text"
        }
      ]
    },
    {
      id: "cloudflare-agents-sdk-browser-codemode-recovery-guide",
      title: "Cloudflare Agents SDK v0.16.1：新手怎样把浏览器自动化、代码执行和恢复机制接进 AI Agent",
      date: "2026-06-17",
      category: "AI 编程",
      readTime: "11 分钟",
      excerpt: "Cloudflare Agents SDK v0.16.1 在 2026 年 6 月 16 日集中增强 Browser Run、Codemode、Think 子代理和连接恢复能力。新手不应只把它看成“多了几个工具”，而要先规划浏览器会话、审批暂停、执行日志、回放确定性和部署恢复边界。",
      tags: ["Cloudflare Agents", "Browser Run", "Codemode"],
      featured: true,
      intro: [
        "越来越多 AI Agent 不再只回答文本，而是要打开真实网页、调试前端、读取渲染后的内容、调用外部系统、创建 issue 或修改业务数据。问题在于：浏览器会话会中断，外部动作需要审批，代码执行要能审计，部署或 Durable Object 回收后还要继续恢复。Cloudflare 在 2026 年 6 月 16 日发布 Agents SDK v0.16.1，正是围绕这些“真实系统接入”问题做了一组更新。",
        "这次更新的重点包括：通过 Browser Run 暴露一个耐久的 `browser_execute` 工具，让模型用 CDP 操作真实浏览器；Codemode 使用 `createCodemodeRuntime`、connectors 和耐久执行日志，把外部工具调用放进可暂停、可审批、可回放的代码执行中；Think 子代理可以通过 `clientTools` 使用调用方提供的工具；同时还修复了 WebSocket 替换、聊天流重放、部署后恢复和大历史启动时的内存压力。"
      ],
      audience: [
        "正在学习 Cloudflare Workers、Durable Objects 或 Agents SDK 的新手开发者",
        "想让 AI Agent 检查网页、截图、调试前端或处理需要登录页面的建站作者",
        "需要把 GitHub、内部 API、审批和审计日志接进 Agent 工作流的团队"
      ],
      format: [
        "适合整理成“先做只读浏览器检查 / 再接 Codemode / 标出审批动作 / 验证中断恢复 / 最后接入子代理”的实验路线",
        "后续可以补一份 Agent 外部动作验收表，记录每个工具是否只读、是否需要审批、能否回放、是否有回滚方式"
      ],
      roadmap: [
        "第一步只做只读浏览器任务。给 Agent 绑定 Browser Run 后，先让它读取公开页面、抓取标题、检查控制台或生成截图，不要一开始就处理登录、支付、删除或发布操作。浏览器工具虽然可以执行 CDP 命令，但新手应把 `browser_execute` 用在可复现、低风险的页面检查上，并限制每轮最大步骤。",
        "第二步再接 Codemode。Codemode 的价值不是让模型随便写脚本，而是把“发现工具、读取类型、调用外部系统、等待审批、继续执行”放在同一个耐久运行时里。连接 GitHub、Stripe 或内部 API 前，先把 connector 的用途、可调用方法、哪些动作需要 `requiresApproval`、哪些动作支持回滚写清楚。",
        "第三步专门测试暂停和恢复。准备一个会触发审批的动作，让运行先暂停，再批准继续，确认已经完成的读取不会重复执行，批准后的动作才真正落地。涉及时间戳、随机数或外部状态时，用 `codemode.step()` 固定一次性结果，避免回放时分支变化导致执行失败。",
        "最后再扩大到子代理和生产恢复。Think 子代理可以使用调用方提供的 client tools，但工具边界要和父代理一样可解释；上线前还要模拟部署、Durable Object 休眠、连接断开和大历史恢复，确认用户看到的是可继续的状态，而不是重复执行或静默失败。"
      ],
      officialLinks: [
        {
          label: "Cloudflare Changelog：Agents SDK improves browser automation, code execution, and recovery",
          url: "https://developers.cloudflare.com/changelog/post/2026-06-16-agents-sdk-v0161/",
          note: "发布说明列出 Browser Run、Codemode、Think delegation、语音输出设备选择和恢复能力改进。"
        },
        {
          label: "Cloudflare Agents Docs：Browser tools",
          url: "https://developers.cloudflare.com/agents/tools/browser/",
          note: "用于核对 Browser Run 绑定、`browser_execute`、Quick Actions、Live View、session lifecycle 和记录能力。"
        },
        {
          label: "Cloudflare Agents Docs：Codemode",
          url: "https://developers.cloudflare.com/agents/model-context-protocol/protocol/codemode/",
          note: "说明 `createCodemodeRuntime`、connectors、审批暂停、abort-and-replay、snippets 和安全限制。"
        },
        {
          label: "Cloudflare Think Docs：Tools",
          url: "https://developers.cloudflare.com/agents/harnesses/think/tools/",
          note: "用于理解 Think 的工具合并顺序、client tools、workspace tools、code execution tool 和 browser tools 接入方式。"
        }
      ],
      curatedLinks: [
        "浏览器自动化最适合先从只读检查开始：打开页面、读取 DOM、截图、查看 console 和 network，比直接操作生产后台更适合新手验证。",
        "Codemode 把大量工具描述从提示词里移到沙箱内按需发现，但这不等于可以省略权限设计；真正需要人确认的动作仍要显式标记审批。",
        "耐久日志和回放能让暂停后继续执行，但前提是模型写出的代码在工具调用顺序上可确定。随机数、当前时间和并发调用都需要特别处理。"
      ],
      downloadIdeas: [
        "可以整理一份 Cloudflare Agent 浏览器自动化接入前检查清单",
        "可以补一个 Codemode connector 审批、回放和回滚能力盘点模板"
      ],
      monetization: "适合与本站的 AI Agent 安全清单、Cloudflare AI Gateway、Vercel Sandbox、GitHub Copilot 沙箱和前端调试类文章互相推荐。",
      extraSections: [
        {
          title: "第一次接入建议先做小闭环",
          items: [
            "只读取公开测试页面，不接真实账号和敏感后台。",
            "只开放一个浏览器工具和一个只读 connector，先观察模型会怎样发现和调用能力。",
            "为所有会写入、发布、创建、删除或扣费的动作加审批。",
            "每次运行保存输入、执行日志、审批结果、最终输出和人工验收结论。",
            "确认失败后用户能看到可解释状态，并能重新开始或继续，而不是让 Agent 静默重试。"
          ]
        },
        {
          title: "wrangler 绑定要先核对",
          text: "Browser Run 和 Codemode 都依赖运行时绑定。下面只是核对方向，实际项目仍要以官方文档和当前 SDK 版本为准。",
          code: "{\n  \"compatibility_flags\": [\"nodejs_compat\"],\n  \"browser\": { \"binding\": \"BROWSER\" },\n  \"worker_loaders\": [\n    { \"binding\": \"LOADER\" }\n  ]\n}",
          language: "json"
        }
      ]
    },
    {
      id: "vercel-functions-30-minute-ai-tasks-guide",
      title: "Vercel Functions 可运行 30 分钟：新手怎样给 AI 长任务设置超时、队列和验收边界",
      date: "2026-06-16",
      category: "建站实践",
      readTime: "10 分钟",
      excerpt: "Vercel Functions 的 Node.js 与 Python 运行时现在可在 Pro 和 Enterprise 团队中设置最长 30 分钟执行时间，适合长推理、流式 AI、OCR、媒体处理和复杂队列任务；但它仍是 beta 能力，需要 Fluid Compute，并且不应替代队列、幂等重试和成本监控。",
      tags: ["Vercel Functions", "AI 长任务", "Fluid Compute"],
      featured: true,
      intro: [
        "很多 AI 应用第一次上线时会把所有事情都塞进一个接口：接收文件、调用模型、等待工具结果、整理输出、再把结果返回给前端。原来的函数超时一到，用户只看到失败；开发者也很难判断是模型慢、第三方 API 慢，还是自己的代码没有拆分好。Vercel 在 2026 年 6 月 15 日宣布，Node.js 和 Python 运行时的 Vercel Functions 现在可以把执行时间设置到最长 30 分钟。",
        "这个变化对 AI 长任务很有用，但它不是“把所有后台任务都放进 HTTP 请求里”的许可。官方说明里同时写明：超过 800 秒的时长仍处于 beta，要求启用 Fluid Compute，目前仅覆盖 Node.js 与 Python，其他运行时还在后续支持中。新手更应该把它理解为一个需要明确边界的工具：哪些任务可以拉长，哪些任务应该进队列，哪些结果必须能重试、能追踪、能停止。"
      ],
      audience: [
        "正在用 Vercel 部署 Next.js、API Route、Python 函数或 AI 原型的新手开发者",
        "遇到长 LLM 推理、文档解析、OCR、媒体处理、浏览器自动化或队列处理超时的个人站作者",
        "希望把 AI 功能从演示推进到可观测、可控成本、可回滚上线流程的团队"
      ],
      format: [
        "适合整理成“判断是否需要长函数 / 设置 maxDuration / 拆分前台与后台 / 验证日志与成本 / 准备回退”的上线清单",
        "后续可以补一份长任务验收记录，记录输入规模、模型调用次数、总耗时、失败方式和用户可见状态"
      ],
      roadmap: [
        "先判断任务是不是必须留在同一个 Function 里。长 LLM 推理、几分钟流式响应、文档和媒体处理、OCR、网页抓取、浏览器自动化、Workflow 步骤或 Queue handler 都可能受益；但如果任务可以异步完成，仍应优先把用户请求、后台处理和结果通知拆开，避免用户一直等待同一个连接。",
        "只给需要的路径设置 `maxDuration`，不要全站一刀切改成 1800 秒。Next.js App Router 可以在 route 文件里导出 `maxDuration`；其他框架或 Python 函数可以在 `vercel.json` 的具体 function 路径下配置。超过 800 秒前先确认团队套餐、Fluid Compute、运行时和 beta 风险都满足要求。",
        "部署后用小输入和可控长输入各跑一次验收。检查函数日志、实际持续时间、模型 token 成本、第三方 API 等待时间、客户端断开后的行为、重复提交是否幂等，以及失败时用户能否看到明确状态；如果任何一项不可解释，就先不要把它放进关键生产路径。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Vercel Functions can now run up to 30 minutes",
          url: "https://vercel.com/changelog/vercel-functions-can-now-run-up-to-30-minutes",
          note: "说明 Node.js 与 Python 运行时最长 30 分钟、适用场景、`maxDuration` 示例、beta 与 Fluid Compute 要求。"
        },
        {
          label: "Vercel Docs：Configuring maximum duration for Vercel Functions",
          url: "https://vercel.com/docs/functions/configuring-functions/duration",
          note: "用于核对 App Router、函数路径和 `vercel.json` 中的最大执行时间配置方式。"
        },
        {
          label: "Vercel Docs：Fluid Compute",
          url: "https://vercel.com/docs/fluid-compute",
          note: "用于理解长函数背后的执行模型、等待 I/O 时的计费说明和适用限制。"
        },
        {
          label: "Vercel Docs：Workflows",
          url: "https://vercel.com/docs/workflows",
          note: "当任务需要持久化步骤、重试或更清晰的后台编排时，用来判断是否应该从单个函数拆出去。"
        }
      ],
      curatedLinks: [
        "30 分钟上限解决的是“函数还没有来得及完成”的问题，不自动解决任务状态、重复提交、取消、重试和用户通知问题。",
        "长函数最适合少数明确路径；如果每个接口都需要十几分钟，通常说明任务边界、队列或数据处理方式需要重新设计。",
        "Fluid Compute 可以降低等待 I/O 时的执行成本，但模型 token、第三方 API、数据库和对象存储费用仍然要单独监控。"
      ],
      downloadIdeas: [
        "可以整理一份 AI 长任务上线前验收清单",
        "可以补一份 Vercel Function、Workflow 和 Queue 的选型对照表"
      ],
      monetization: "适合与本站的 Vercel Drop、AI SDK HarnessAgent、AI Gateway、静态站上线检查清单和 Agent 安全清单互相推荐。",
      extraSections: [
        {
          title: "什么时候不该直接拉长 Function",
          items: [
            "任务没有用户必须实时等待的结果，只需要稍后通知或刷新状态。",
            "失败后需要自动重试、人工补偿或跨多个步骤恢复。",
            "输入大小差异很大，少数超大文件会拖慢整个服务。",
            "需要长时间持有外部资源，例如浏览器实例、数据库事务或第三方会话。",
            "团队还没有日志、告警、成本上限和幂等键。"
          ]
        },
        {
          title: "最小配置示例",
          text: "下面的重点不是照抄数值，而是只给确实需要长时间的路由单独设置上限，并在正文里的验收清单中验证它。",
          code: "export const maxDuration = 1800;\n\nexport async function POST(request: Request) {\n  return Response.json({ ok: true });\n}",
          language: "ts"
        }
      ]
    },
    {
      id: "claude-code-2178-permission-nested-skills-guide",
      title: "Claude Code v2.1.178 权限与嵌套 Skills：新手怎样回归测试 subagent、工作流和远程控制",
      date: "2026-06-16",
      category: "开发安全",
      readTime: "10 分钟",
      excerpt: "Claude Code v2.1.178 新增 `Tool(param:value)` 权限规则、嵌套 `.claude/skills` 加载、最近目录优先的 agent 与 workflow 解析，并加强自动模式下 subagent 启动前的分类检查；升级后应重点回归权限、嵌套配置、远程控制和后台会话。",
      tags: ["Claude Code", "Agent Skills", "权限治理"],
      featured: true,
      intro: [
        "编码 Agent 的风险很多时候不是来自它会不会写代码，而是来自它在什么目录里读取了什么规则、以什么模型启动了 subagent、哪些工具被允许、远程控制失败时有没有清楚提示。Claude Code v2.1.178 在这些边界上做了一组比较集中的更新，适合团队拿来做一次权限和工作流回归测试。",
        "这次更新增加了 `Tool(param:value)` 形式的权限匹配，可以用参数条件和 `*` 通配符约束工具调用；嵌套 `.claude/skills` 现在会在处理对应目录文件时加载，重名时用 `＜dir＞:＜name＞` 区分；嵌套 `.claude/` 里的 agent、workflow 和 output-style 冲突时，离工作目录最近的配置优先。自动模式也会在 subagent 启动前交给分类器判断，减少被 subagent 绕过审查的空档。"
      ],
      audience: [
        "已经在日常仓库中使用 Claude Code、skills、subagent 或远程控制的新手开发者",
        "需要在 monorepo、客户项目或团队模板中分目录管理 `.claude/` 配置的维护者",
        "关心模型选择、工具权限、后台任务和非交互运行安全边界的团队"
      ],
      format: [
        "适合整理成“升级前备份 / 检查权限规则 / 验证嵌套 skills / 测试 subagent / 回归远程控制”的升级路线",
        "后续可以补一份团队 Claude Code 配置审计表，记录每个目录的 skills、workflows、agents 和权限规则"
      ],
      roadmap: [
        "先在可回退仓库升级到 v2.1.178，并记录升级前的 `.claude/` 目录、托管设置、项目 settings、常用 skills 和远程控制状态。升级后先运行版本检查和 `/doctor`，不要一开始就让 Agent 修改重要分支。",
        "把原来过宽的权限规则拆成能解释的最小规则。重点测试 `Agent(model:opus)` 这类带参数的限制、带 `*` 的通配规则、MCP server 级规则，以及非交互运行中目录限定 skill 是否仍会触发权限提示。每条规则都要做一次“应该允许”和“应该拒绝”的实际请求。",
        "在 monorepo 或多项目目录中验证嵌套 `.claude/skills`、workflow 和 agent 的优先级。故意准备一个同名 skill，确认列表里是否出现目录前缀；在子目录保存 project-scope workflow，确认它写入最近的 `.claude/workflows/`，而不是顶层目录。",
        "最后再回归 subagent、后台会话和远程控制。检查自动模式下 subagent 是否会在启动前被审查，`ctrl+b` 后是否不会重启任务，`/bg` 会话是否不再卡在 Working，Remote Control 失败时是否能区分 gate、检查失败、过期权益或组织策略。"
      ],
      officialLinks: [
        {
          label: "Claude Code GitHub Release：v2.1.178",
          url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.178",
          note: "包含参数级权限规则、嵌套 skills、自动模式 subagent 检查、远程控制与后台会话修复的完整变更列表。"
        },
        {
          label: "Claude Code Docs：Settings",
          url: "https://docs.anthropic.com/en/docs/claude-code/settings",
          note: "用于理解全局、项目、托管设置和权限相关配置的作用范围。"
        },
        {
          label: "Claude Code Docs：Skills",
          url: "https://docs.anthropic.com/en/docs/claude-code/skills",
          note: "用于核对 skills 的目录、加载、触发、共享和可见性控制。"
        },
        {
          label: "Claude Code Docs：Common workflows",
          url: "https://docs.anthropic.com/en/docs/claude-code/common-workflows",
          note: "用于把升级验证落到探索、计划、测试、PR 和多会话协作这些日常场景。"
        }
      ],
      curatedLinks: [
        "参数级权限是更细的边界，不是一次配置后永远可靠的保证；每次新增工具、模型别名或 subagent 流程都要补测试。",
        "嵌套 skills 适合 monorepo，但也会让“当前目录到底加载了哪套规则”变得更重要，团队应统一命名和审计方式。",
        "远程控制和后台会话修复降低了误判成本，但升级后仍要看实际账号、daemon、Provider 环境变量和组织策略是否一致。"
      ],
      downloadIdeas: [
        "可以整理一份 Claude Code v2.1.178 升级回归测试清单",
        "可以补一个 `.claude/` 目录、skills、workflows 和权限规则盘点模板"
      ],
      monetization: "适合与本站的 Claude Code 模型白名单、Skills 插件、回退模型、安全模式、AI Agent 安全清单和团队规范类文章互相推荐。",
      extraSections: [
        {
          title: "升级回归测试清单",
          items: [
            "列出允许与禁止的模型、subagent 和 MCP server 工具。",
            "为每条关键权限准备一个应该通过和一个应该被拦截的请求。",
            "在根目录和子目录分别调用同名 skill，确认实际加载来源。",
            "保存 workflow 时检查目标目录是否符合最近 `.claude/workflows/` 规则。",
            "用真实账号测试 Remote Control 连接失败时的错误提示。"
          ]
        },
        {
          title: "权限规则示例要先当作测试用例",
          text: "发布说明里的重点是参数匹配能力。新手可以先把规则字符串写进回归清单，再按自己的 settings 结构落地。",
          code: "Agent(model:opus)\nAgent(model:*)\nTool(param:value)\nTool(param:*)",
          language: "text"
        }
      ]
    },
    {
      id: "vercel-drop-static-site-publish-guide",
      title: "Vercel Drop 拖拽发布：新手怎样先上线原型，再迁移到可持续的 Git 部署",
      date: "2026-06-15",
      category: "建站实践",
      readTime: "9 分钟",
      excerpt: "Vercel Drop 可以把文件、文件夹或 ZIP 直接拖进浏览器并发布到生产环境，适合原型和一次性站点；真正交付前还要检查根页面、资源路径、构建结果和环境变量，并在需要持续更新时连接 Git。",
      tags: ["Vercel Drop", "静态网站", "持续部署"],
      featured: true,
      intro: [
        "第一次发布个人站时，最容易卡住的往往不是 HTML 和 CSS，而是 Git、命令行、构建配置和部署平台之间的连接。Vercel Drop 把首次发布压缩成浏览器里的拖拽操作：准备文件、选择团队与项目名、点击 Deploy，就可以拿到公开网址。它适合快速分享原型、课程作业、静态导出结果和一次性演示。",
        "但“已经出现一个网址”不等于网站已经适合长期维护。Vercel Drop 每次上传都会创建新项目，不会自动更新已有项目，也不会因为代码修改而重新部署。本文把它放在完整建站流程里理解：先用 Drop 验证可发布结果，再检查根页面、资源路径、框架构建和敏感信息，最后根据更新频率迁移到 Git、CLI 或自动化部署。"
      ],
      audience: [
        "已经有静态页面、框架项目或设计工具导出文件，想尽快得到公开预览链接的新手",
        "不熟悉 Git 或命令行，但需要先验证文件结构、首页和线上资源是否正确的个人站作者",
        "准备把一次性原型继续维护为正式网站，需要判断何时改用 Git 持续部署的开发者"
      ],
      format: [
        "适合整理成“发布前检查 / 拖拽上传 / 验证线上结果 / 识别限制 / 连接 Git”的首次上线流程",
        "后续可以补一份静态站发布验收记录，保存网址、首页、资源路径、404、移动端和下一次更新方式"
      ],
      roadmap: [
        "上传前先整理一个可独立运行的发布目录。静态站应确认顶层是否有 `index.html`，并在本地直接打开或通过本地服务器检查图片、CSS、JavaScript 和站内链接；框架项目则要确认依赖清单、构建命令和输出目录完整，不要把密钥、`.env`、数据库导出或私人文件放进上传目录。",
        "进入 Vercel Drop 后拖入文件、文件夹或 ZIP，选择团队和项目名并部署。静态站顶层没有 `index.html` 时，按官方提示明确选择根页面；发布完成后从公开网址逐项检查首页、深层页面、图片与字体、移动端布局、浏览器控制台、404 路径和外部链接，记录实际部署结果而不是只看成功提示。",
        "根据更新方式决定下一步。一次性演示可以保留 Drop 项目；只要网站需要持续修复、多人协作、预览分支或每次提交自动上线，就连接 Git 仓库并设置正式发布流程。迁移后再做一次同样的线上验收，并删除不再使用的重复项目，避免网址、配置和维护责任分散。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Introducing Vercel Drop",
          url: "https://vercel.com/changelog/vercel-drop",
          note: "说明 Drop 支持静态站和框架项目、每次上传会创建新项目，以及后续可以连接 Git。"
        },
        {
          label: "Vercel Docs：Deploying with Vercel Drop",
          url: "https://vercel.com/docs/drop",
          note: "包含适用场景、上传步骤、根页面选择、限制和后续部署方式对比。"
        },
        {
          label: "Vercel Docs：Git integrations",
          url: "https://vercel.com/docs/git",
          note: "用于把一次性上传迁移为提交后自动生成预览与生产部署的持续流程。"
        }
      ],
      curatedLinks: [
        "Drop 最适合首次验证和一次性分享，不是现有项目的覆盖更新工具。官方明确说明每次拖拽都会创建新项目，长期维护时应尽早建立唯一仓库和明确发布入口。",
        "拖拽上传不会自动判断哪些文件属于敏感信息。发布目录应只包含可公开的源码、构建输入或构建产物；令牌、私钥、`.env` 和真实用户数据必须留在受控环境。",
        "部署成功提示只能证明平台完成了构建或上传。网站是否真正可用，仍要通过公开网址检查根页面、资源路径、深层链接、404、移动端、控制台错误和下一次更新流程。"
      ],
      downloadIdeas: [
        "可以整理一份静态站首次上线与公开网址验收清单",
        "可以补一份从一次性拖拽部署迁移到 Git 持续部署的项目交接记录"
      ],
      monetization: "适合与本站的静态站模板、Git/GitHub 入门、网站上线检查清单和持续部署文章互相推荐。",
      extraSections: [
        {
          title: "先判断哪种部署方式适合当前任务",
          items: [
            "一次性原型、静态导出或临时演示：优先使用 Drop，重点验证公开结果。",
            "每次提交都要自动上线：连接 Git，并使用预览部署与生产分支。",
            "本地脚本或 CI 需要主动发布：使用 Vercel CLI。",
            "多租户平台或程序化创建部署：评估 REST API，而不是让操作人员反复拖拽。"
          ]
        },
        {
          title: "公开网址至少检查这些结果",
          items: [
            "根路径是否打开正确首页，深层页面和返回首页链接是否可用。",
            "图片、CSS、JavaScript、字体和下载文件是否没有 404 或跨域错误。",
            "框架项目是否使用预期构建命令，运行时环境变量是否通过平台配置而不是上传文件提供。",
            "移动端、浏览器控制台、页面标题、描述和分享链接是否符合发布目标。",
            "下一次修改由谁完成、从哪里发布、旧项目是否需要删除或归档。"
          ]
        }
      ]
    },
    {
      id: "qwen-code-018-stable-agent-workflow-guide",
      title: "Qwen Code v0.18.0 稳定版：新手怎样组合 Skills、记忆、计划审批与后台任务",
      date: "2026-06-14",
      category: "AI 编程",
      readTime: "11 分钟",
      excerpt: "Qwen Code v0.18.0 把此前 nightly 中的 Skills 选择器、用户级自动记忆、计划审批、后台 Agent、统计面板与上下文压缩等能力带入稳定版；新手应先建立可审查的小任务流程，再逐步启用自动化能力。",
      tags: ["Qwen Code", "Coding Agent", "Agent Skills"],
      featured: true,
      intro: [
        "终端编码 Agent 的能力越来越多，但真正影响日常使用质量的往往不是单个按钮，而是怎样把长期指令、临时任务、审批边界、上下文管理和后台执行组合成一条可重复、可检查的工作流。一次开启全部自动化功能，反而容易让新手失去对改动范围和失败原因的判断。",
        "Qwen Code 在 2026 年 6 月 12 日发布 v0.18.0 稳定版。该版本包含 `/skills` 选择器、用户级自动记忆、`/fork` 后台 Agent、`/stats` 跨会话统计、`/compress-fast` 规则压缩、Plan Approval Gate、默认启用的 loop/cron 工具，以及自动模式自修改检查和工具输出截断等安全与稳定性改进。"
      ],
      audience: [
        "已经能使用终端命令，准备系统学习 Qwen Code 的新手",
        "希望把团队规范整理为 Skills、QWEN.md 与可审查任务流程的开发者",
        "需要评估后台 Agent、定时任务、自动记忆和权限边界的团队"
      ],
      format: [
        "适合整理成“升级稳定版 / 固定项目说明 / 选择 Skills / 先做计划 / 执行小任务 / 检查统计与记忆”的练习路线",
        "后续可以补一个同一测试仓库中对比前台任务、后台 Agent 和定时检查的验证记录模板"
      ],
      roadmap: [
        "先升级到 v0.18.0，并在可回退的练习仓库中运行 `/about`、`/skills`、`/memory` 与 `/stats`，确认版本、可用 Skills、记忆位置和当前统计。把必须长期遵守的构建命令、测试命令与代码约定写入项目根目录的 `QWEN.md`，不要把密钥或临时聊天内容写进去。",
        "第一次任务先使用 `/plan` 或计划审批功能，让 Agent 说明将读取、修改和验证哪些内容；只选择一个可以通过测试或明确文件差异验收的小任务。需要复用流程时再把稳定步骤整理成项目 Skill，并检查 Skill 声明的工具和路径范围。",
        "只有在前台任务稳定后，再尝试 `/fork`、`/loop` 或 cron 工具。为后台和定时任务限定仓库、命令、运行频率与停止条件，结束后检查实际 diff、测试结果、`/stats` 和自动记忆内容；发现错误或过期信息时及时编辑或删除记忆。"
      ],
      officialLinks: [
        {
          label: "Qwen Code GitHub Release：v0.18.0",
          url: "https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0",
          note: "包含稳定版的完整变更列表、功能新增、安全修复与对应 pull request。"
        },
        {
          label: "Qwen Code Docs：Agent Skills",
          url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/",
          note: "用于理解个人与项目 Skills 的目录、调用、测试和共享方式。"
        },
        {
          label: "Qwen Code Docs：Memory",
          url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/",
          note: "说明 QWEN.md、自动记忆、清理方式和相关命令。"
        },
        {
          label: "Qwen Code Docs：Commands",
          url: "https://qwenlm.github.io/qwen-code-docs/en/users/features/commands/",
          note: "用于核对 `/plan`、`/skills`、`/memory`、`/loop`、`/stats` 等命令。"
        }
      ],
      curatedLinks: [
        "稳定版不代表所有实验功能都适合直接用于重要仓库；Agent Team、后台任务和定时执行仍应先在可回退环境中验证。",
        "QWEN.md 适合存放明确、长期、团队可审查的规则；自动记忆是可编辑的辅助记录，不应被当作唯一事实来源。",
        "Skills、自动模式和计划审批能改善流程，但最终验收仍应以代码差异、测试结果、权限范围和人工复核为准。"
      ],
      downloadIdeas: [
        "可以整理一份 Qwen Code v0.18.0 首次升级与功能验收清单",
        "可以补一个 QWEN.md、项目 Skill、后台任务和记忆审查记录模板"
      ],
      monetization: "适合承接国产 AI、终端编码 Agent、Agent Skills、团队规范、开发效率和自动化安全类资源位；也可以与本站的 Qwen Code v0.17、Claude Code Skills 和 Agent 安全清单互相推荐。",
      extraSections: [
        {
          title: "建议按四层逐步启用",
          items: [
            "第一层：用 QWEN.md 固定构建、测试和代码约定。",
            "第二层：用 Skills 封装已经验证过的重复流程。",
            "第三层：用计划审批和默认审批模式控制每次任务的修改范围。",
            "第四层：确认前面三层稳定后，再启用后台 Agent、loop 或 cron。"
          ]
        },
        {
          title: "每次任务结束后的检查证据",
          items: [
            "检查 Agent 实际修改的文件、命令日志和测试结果。",
            "检查 `/stats` 是否出现异常的长会话、工具调用或资源消耗。",
            "检查自动记忆是否保存了错误、敏感或已经过期的信息。",
            "后台与定时任务必须确认已经结束，且没有继续修改仓库或重复触发。"
          ]
        }
      ]
    },
    {
      id: "claude-code-managed-model-allowlist-guide",
      title: "Claude Code v2.1.175 强化模型白名单：新手怎样避免默认模型绕过组织策略",
      date: "2026-06-14",
      category: "开发安全",
      readTime: "9 分钟",
      excerpt: "Claude Code v2.1.175 新增 `enforceAvailableModels` 托管设置，让 `availableModels` 白名单同时约束 Default 模型，并阻止用户或项目设置扩大组织允许范围；管理员应在测试设备上验证回退、子 Agent 与错误配置行为。",
      tags: ["Claude Code", "模型治理", "托管设置"],
      featured: true,
      intro: [
        "组织限制可用模型时，不能只隐藏模型选择器里的部分选项。如果 Default 别名最终解析到白名单之外的模型，或者用户与项目配置可以重新扩大列表，表面上的模型治理仍可能被绕过，进而影响费用、合规、数据处理范围和团队复现结果。",
        "Claude Code v2.1.175 新增托管设置 `enforceAvailableModels`。启用后，`availableModels` 白名单也会约束 Default 模型；当 Default 将解析到不允许的模型时，会回退到白名单中的第一个模型。用户或项目设置也不能扩大托管的 `availableModels` 列表。官方设置文档同时说明了无效安全字段的保守处理方式和 `claude doctor` 验证入口。"
      ],
      audience: [
        "需要理解 Claude Code 用户、项目与托管设置优先级的新手管理员",
        "希望统一主会话、子 Agent 和 advisor 可选模型范围的团队",
        "关心模型费用、合规、可复现性和错误策略回退的企业环境维护者"
      ],
      format: [
        "适合整理成“盘点模型 / 编写托管策略 / 测试 Default 回退 / 检查子 Agent / 运行 doctor / 分批发布”的治理路线",
        "后续可以补一个允许模型清单、回退结果、错误配置和版本要求的验收记录模板"
      ],
      roadmap: [
        "先列出组织真正允许使用的模型、适用团队和原因，并确认主会话、子 Agent 与 advisor 是否应遵循同一范围。不要直接从个人偏好复制列表；模型可用性、费用、地区和合规要求都可能不同。",
        "在测试设备的托管设置中配置 `availableModels` 与 `enforceAvailableModels`，再分别测试显式选择允许模型、显式选择禁止模型和使用 Default 的行为。确认 Default 回退到预期模型，并验证用户设置与项目设置不能扩大组织白名单。",
        "运行 `claude doctor` 检查策略来源与无效字段，在交互会话和无头任务中观察警告。特别测试空列表、拼写错误、版本不满足和子 Agent 场景；保留可工作的回退模型与恢复步骤，再按小范围、分批、可回滚方式部署。"
      ],
      officialLinks: [
        {
          label: "Claude Code GitHub Release：v2.1.175",
          url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.175",
          note: "说明 `enforceAvailableModels` 的新增行为和 Default 模型回退规则。"
        },
        {
          label: "Claude Code Docs：Settings",
          url: "https://code.claude.com/docs/en/settings",
          note: "用于核对设置作用域、优先级、托管设置路径、无效字段行为与 `claude doctor`。"
        }
      ],
      curatedLinks: [
        "`enforceAvailableModels` 是托管设置，目标是让组织白名单成为不能被用户或项目扩大的上限，而不是替代账号权限和供应商侧访问控制。",
        "白名单中的第一个模型可能成为 Default 的回退目标，因此列表顺序也属于需要测试和记录的策略行为。",
        "安全字段配置无效时会采取保守行为；部署前应在测试设备运行 `claude doctor`，避免错误策略意外阻断团队工作。"
      ],
      downloadIdeas: [
        "可以整理一份 Claude Code 模型白名单、Default 回退与子 Agent 验收清单",
        "可以补一个托管设置分批发布、版本要求和回滚记录模板"
      ],
      monetization: "适合承接 Claude Code、企业 AI 治理、模型路由、开发安全、合规与团队管理类资源位；也可以与本站的 Claude Code 安全模式、fallback model 和本地 Skills 文章互相推荐。",
      extraSections: [
        {
          title: "策略测试至少覆盖五种情况",
          items: [
            "用户显式选择白名单中的模型。",
            "用户尝试选择白名单之外的模型。",
            "Default 解析到允许模型与禁止模型时的实际结果。",
            "子 Agent 与 advisor 是否被同一白名单约束。",
            "白名单为空、字段类型错误或客户端版本过旧时怎样恢复。"
          ]
        },
        {
          title: "不要遗漏的治理证据",
          items: [
            "记录托管策略来源、允许模型列表和预期 Default 回退模型。",
            "记录测试设备上的版本、`claude doctor` 输出和实际选择结果。",
            "记录模型变化对费用、数据范围、输出质量和团队工作流的影响。",
            "为策略错误准备管理员可执行的回滚与紧急恢复步骤。"
          ]
        }
      ]
    },
    {
      id: "vercel-ai-sdk-harnessagent-beginner-guide",
      title: "AI SDK 7 引入 HarnessAgent：新手怎样用统一接口运行 Claude Code、Codex 与 Pi",
      date: "2026-06-13",
      category: "AI 编程",
      readTime: "10 分钟",
      excerpt: "Vercel AI SDK 7 的实验性 HarnessAgent 用统一接口连接 Claude Code、Codex 与 Pi，并统一处理沙箱、会话、权限、skills 和子 Agent；新手应先从可销毁沙箱和单一任务开始验证。",
      tags: ["AI SDK 7", "HarnessAgent", "Coding Agent"],
      featured: true,
      intro: [
        "模型 API 解决的是“怎样调用模型”，但真正的编码 Agent 还要管理会话、沙箱、权限确认、skills、上下文压缩、运行配置和子 Agent。不同工具各自提供这些能力，如果应用直接绑定某一个 harness，后续切换或比较 Claude Code、Codex 与 Pi 会产生大量适配工作。",
        "Vercel 在 2026 年 6 月 12 日发布 AI SDK 7 的实验性 `HarnessAgent`。开发者可以用统一 API 创建会话、流式执行任务并销毁环境，再通过更换 adapter 切换 Claude Code、Codex 或 Pi。官方同时说明，每个 harness 都在沙箱工作区运行，相关包目前位于 canary release，后续版本可能包含破坏性变化。"
      ],
      audience: [
        "已经会调用模型 API，想进一步理解编码 Agent 运行层的新手",
        "需要在 Claude Code、Codex 与 Pi 之间比较或切换的 TypeScript 开发者",
        "正在评估 Agent 沙箱、权限、会话生命周期与工具接入边界的团队"
      ],
      format: [
        "适合整理成“安装 canary / 选择 adapter / 创建沙箱 / 运行单一任务 / 检查结果 / 销毁会话”的入门路线",
        "后续可以补一个在同一测试仓库中切换两个 harness、比较输出与日志的最小示例"
      ],
      roadmap: [
        "先把 `HarnessAgent` 当作实验性 API，在可删除的示例仓库和独立沙箱里安装 AI SDK canary 与一个 harness adapter。不要第一次就连接生产凭据、重要仓库或不可回退的部署环境。",
        "创建 Agent 时明确选择 harness、沙箱、允许的 tools 与 skills；创建 session 后只交付一个容易验证的任务，例如修复一个已有失败测试。使用 `generate()` 或 `stream()` 收集结果，并检查实际代码差异、命令日志和测试结果。",
        "无论任务成功还是失败，都在 `finally` 中销毁 session。需要切换 harness 时只替换 adapter，并保持相同任务与验收条件做对照；正式采用前固定依赖版本，记录破坏性变化，并重新审查权限、费用和数据范围。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Program agent harnesses with AI SDK",
          url: "https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk",
          note: "包含 HarnessAgent 的定位、初始 adapters、沙箱示例与实验状态。"
        },
        {
          label: "AI SDK 7 Docs：AI SDK Harnesses",
          url: "https://ai-sdk.dev/v7/docs/ai-sdk-harnesses/overview",
          note: "用于查看当前 canary 安装方式、接口和 adapter 使用说明。"
        },
        {
          label: "Vercel Sandbox",
          url: "https://vercel.com/sandbox",
          note: "用于理解示例中隔离执行工作区的产品能力与边界。"
        }
      ],
      curatedLinks: [
        "`HarnessAgent` 统一的是 harness 接口，不代表不同工具的能力、权限行为、输出质量和费用完全相同。",
        "相关包处于实验阶段并通过 canary release 提供，版本之间可能发生破坏性变化，生产项目应固定版本并保留回退方案。",
        "沙箱能降低宿主环境风险，但仍要限制凭据、网络、工具和写入范围，并人工检查最终差异与测试结果。"
      ],
      downloadIdeas: [
        "可以整理一份编码 Agent harness 选型、权限与会话生命周期检查表",
        "可以补一个 Claude Code、Codex 与 Pi 同任务对照记录模板"
      ],
      monetization: "适合承接 AI SDK、Coding Agent、TypeScript、Agent 沙箱、开发者工具和工程效率类资源位；也可以与本站的 Agentic Workflows、Vercel Sandbox 和终端 AI 配置文章互相推荐。",
      extraSections: [
        {
          title: "第一次实验建议只比较四件事",
          items: [
            "同一个任务能否在不同 harness 中稳定启动并完成。",
            "工具、skills、沙箱和权限提示是否符合预期。",
            "最终代码差异、测试结果和日志是否容易审查。",
            "会话结束后环境、进程和临时凭据是否被正确清理。"
          ]
        },
        {
          title: "不要被统一接口隐藏的差异",
          items: [
            "不同 harness 支持的工具、子 Agent、上下文管理和权限流程可能不同。",
            "相同提示在不同 harness 与模型组合中可能产生不同修改范围。",
            "实验 API、adapter 和沙箱实现都会继续变化，升级前要阅读 changelog。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-code-review-controls-guide",
      title: "Copilot Code Review 新增组织级 Runner 与内容排除：新手怎样设定审查边界",
      date: "2026-06-13",
      category: "开发安全",
      readTime: "9 分钟",
      excerpt: "GitHub Copilot Code Review 新增组织级 Runner 默认值与锁定、内容排除支持，并移除仓库自定义指令的 4000 字符读取上限；团队应把运行环境、可见内容与审查规则分开配置和验证。",
      tags: ["GitHub Copilot", "代码审查", "内容排除"],
      featured: true,
      intro: [
        "把 AI 代码审查接入仓库后，团队不仅要关心它能发现什么，还要明确它在哪里运行、可以读取哪些内容、应遵循哪些审查规则。如果这些设置分散在每个仓库中，规模变大后容易出现 runner 不一致、敏感目录未排除或自定义规则没有完整生效的问题。",
        "GitHub 在 2026 年 6 月 12 日为 Copilot Code Review 发布三项控制：组织管理员可以设置并锁定默认 runner；代码审查开始遵守仓库、组织和企业级内容排除；位于 `.github` 下的 `copilot-instructions.md` 与 `*.instructions.md` 不再受 4000 字符读取上限限制。组织级 runner 配置在同时启用时也会应用于 Copilot cloud agent。"
      ],
      audience: [
        "准备为仓库启用 Copilot Code Review，希望先理解配置边界的新手",
        "需要统一多个仓库 runner、内容排除与审查指令的组织管理员",
        "担心敏感文件、无关生成文件或过长规则影响 AI 审查的开发团队"
      ],
      format: [
        "适合整理成“确定 runner / 排除内容 / 编写指令 / 发起测试 PR / 检查审查结果”的配置路线",
        "后续可以补一个组织默认值、仓库例外和验证证据记录模板"
      ],
      roadmap: [
        "先列出代码审查的运行要求：使用 GitHub-hosted、自托管还是 large runner，以及哪些仓库必须遵循统一默认值。组织管理员可在 Copilot 的 Runner type configuration 中设置默认 runner，并在需要时锁定，避免仓库单独覆盖。",
        "再按路径配置内容排除，把不应提供给 Copilot Code Review 的文件或目录排除，同时检查仓库、组织和企业规则是否叠加到预期范围。内容排除应作为数据范围控制的一部分，而不是替代仓库权限、密钥管理和人工审查。",
        "最后整理 `.github/copilot-instructions.md` 与 `*.instructions.md`。虽然 4000 字符读取上限已移除，规则仍应简短、明确、可验证。创建一个测试 PR，检查 runner、被排除内容和自定义指令是否实际生效，再逐步推广到其他仓库。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot code review new configurations and controls",
          url: "https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls/",
          note: "包含组织级 runner、内容排除与自定义指令读取上限变化。"
        },
        {
          label: "GitHub Docs：Exclude content from Copilot",
          url: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot",
          note: "用于配置路径规则并理解当前内容排除范围。"
        }
      ],
      curatedLinks: [
        "组织级 runner 默认值可以统一运行环境；锁定前应确认特殊仓库是否确实不需要单独配置。",
        "内容排除能限制 Copilot Code Review 使用指定路径，但不能代替最小权限、密钥扫描、分支保护和人工复核。",
        "取消字符上限不代表指令越长越好；规则之间冲突、描述模糊或无法验证，都会降低审查质量。"
      ],
      downloadIdeas: [
        "可以整理一份 Copilot Code Review runner、内容排除与指令配置清单",
        "可以补一个测试 PR 验证证据和组织推广记录模板"
      ],
      monetization: "适合承接 GitHub Copilot、代码审查、DevSecOps、企业治理、GitHub Actions 和开发者培训类资源位；也可以与本站的 Copilot CLI 安全审查、第三方 Agent 安全验证和 Agentic Workflows 文章互相推荐。",
      extraSections: [
        {
          title: "三类配置不要混在一起",
          items: [
            "Runner 配置决定 AI 代码审查在哪类执行环境中运行。",
            "内容排除决定 Copilot Code Review 不应使用哪些路径。",
            "自定义指令决定审查时应重点遵循哪些项目规则。"
          ]
        },
        {
          title: "测试 PR 应检查什么",
          items: [
            "实际使用的 runner 是否与组织默认值和锁定策略一致。",
            "被排除目录中的内容是否没有进入 Copilot 审查上下文。",
            "自定义指令中的关键规则是否在审查建议中得到体现。",
            "AI 建议是否仍经过测试、人工复核和现有合并门槛。"
          ]
        }
      ]
    },
    {
      id: "github-agentic-workflows-public-preview-guide",
      title: "GitHub Agentic Workflows 进入公测：新手怎样用 Markdown 安全自动化 issue、CI 与文档任务",
      date: "2026-06-12",
      category: "AI 编程",
      readTime: "10 分钟",
      excerpt: "GitHub Agentic Workflows 已进入 public preview，可把自然语言 Markdown 编译为标准 Actions YAML，用编码 Agent 处理 issue 分类、CI 失败分析和文档更新；新手应从只读、小范围、可审查任务开始。",
      tags: ["GitHub Actions", "Agentic Workflows", "自动化"],
      featured: true,
      intro: [
        "传统 GitHub Actions 擅长执行确定步骤，例如安装依赖、运行测试和部署网站；但 issue 内容并不整齐，CI 失败原因也经常需要阅读日志后再判断。GitHub Agentic Workflows 把编码 Agent 放进 Actions，让自动化可以处理需要理解上下文和做出判断的工程任务。",
        "GitHub 在 2026 年 6 月 11 日宣布 Agentic Workflows 进入 public preview。开发者使用自然语言 Markdown 描述任务，再由工具编译为标准 Actions YAML，因此仍可复用现有 runner group、仓库策略和 Actions 审批流程。官方列出的典型场景包括 issue 分类、CI 失败分析和文档更新。"
      ],
      audience: [
        "已经使用 GitHub Actions，想尝试把重复分析任务交给编码 Agent 的新手",
        "需要自动整理 issue、分析 CI 日志或维护文档，但希望保留人工审批的团队",
        "正在评估 Agent 权限、沙箱、输出审查和费用边界的仓库维护者"
      ],
      format: [
        "适合整理成“选低风险任务 / 写 Markdown / 编译工作流 / 检查权限 / 触发测试 / 审批输出”的入门路线",
        "后续可以补一个只给 issue 添加建议标签、不直接修改代码的最小练习仓库"
      ],
      roadmap: [
        "先选择容易验证、失败后影响较小的任务，例如为新 issue 建议标签、汇总 CI 失败日志或检查文档链接。不要把首次实验直接设为自动修改生产代码、自动合并 PR 或访问大量敏感数据。",
        "按照官方 quickstart 安装并升级 Agentic Workflows CLI，用自然语言 Markdown 描述目标、输入、允许访问的内容和期望输出，再编译为 Actions YAML。提交前检查生成的工作流、锁文件、触发条件和权限，确认没有获得任务之外的写入能力。",
        "运行后同时检查 Agent 日志、safe outputs、threat detection 结果和最终代码差异。即使工作流使用只读默认权限、沙箱与防火墙，仍应保留人工审批、测试和费用上限，并根据误判和失败记录逐步缩小或调整任务范围。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Agentic Workflows public preview",
          url: "https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/",
          note: "包含公测状态、适用任务、Markdown 编译方式和分层安全控制。"
        },
        {
          label: "GitHub Agentic Workflows：Quickstart",
          url: "https://gh.io/gh-aw-quickstart",
          note: "用于安装 CLI、创建并触发第一个 Agentic Workflow。"
        },
        {
          label: "GitHub Changelog：使用 GITHUB_TOKEN",
          url: "https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/",
          note: "说明怎样减少长期 PAT、启用组织计费并控制单次运行成本。"
        }
      ],
      curatedLinks: [
        "Agentic Workflows 目前处于 public preview，行为、配置和安全控制仍可能变化，重要仓库应从测试环境开始。",
        "自然语言 Markdown 最终会编译为 Actions YAML；真正执行的触发条件、权限和步骤必须像普通工作流一样审查。",
        "只读默认权限、沙箱、防火墙、safe outputs 和 threat detection 能降低风险，但不能替代人工审批、测试和业务规则检查。"
      ],
      downloadIdeas: [
        "可以整理一份 Agentic Workflow 首次上线权限与审批清单",
        "可以补一个 issue 分类、CI 日志分析和文档更新任务的风险分级模板"
      ],
      monetization: "适合承接 GitHub Actions、AI 编程、Agent 自动化、DevSecOps、CI/CD 和团队工程效率类资源位；也可以与本站的 Agent 沙箱、代码审查和 npm 安全文档互相推荐。",
      extraSections: [
        {
          title: "最适合第一次尝试的任务",
          items: [
            "只读取 issue 内容并建议标签或负责人，不直接关闭 issue。",
            "读取失败的 CI 日志并生成原因摘要，不自动修改保护分支。",
            "检查文档链接、版本说明和待更新段落，再通过 PR 交给人工审核。"
          ]
        },
        {
          title: "上线前必须检查的四个边界",
          items: [
            "触发条件是否可能被外部用户或不可信内容反复触发。",
            "工作流、工具和令牌是否只拥有完成任务所需的最小权限。",
            "Agent 输出是否必须经过 safe outputs、测试与人工审批。",
            "单次运行的模型、token、时间和组织费用是否设置了可接受上限。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-cli-settings-guide",
      title: "Copilot CLI 新增 /settings：新手怎样统一管理自动更新、会话同步与实验设置",
      date: "2026-06-12",
      category: "AI 编程",
      readTime: "8 分钟",
      excerpt: "GitHub Copilot CLI 新增统一的 /settings 命令，可通过搜索界面、行内命令或脚本管理配置，并在写入前进行 schema 校验；新手可用它减少手改配置文件造成的拼写和类型错误。",
      tags: ["GitHub Copilot CLI", "终端工具", "配置管理"],
      featured: true,
      intro: [
        "终端 AI 工具的配置越来越多：主题、自动更新、streamer mode、会话同步、实验功能和其他行为可能分散在不同命令或配置文件里。手动编辑虽然灵活，却容易写错键名、值类型或 JSON 结构，导致下一次会话出现难以定位的问题。",
        "GitHub 在 2026 年 6 月 11 日为 Copilot CLI 发布新的 `/settings` 命令。它把分散命令和原本需要手改文件的选项放到统一、由 schema 驱动的入口，并支持全屏搜索界面、行内设置、重置默认值与脚本调用。配置只有在解析并通过 schema 校验后才会写入。"
      ],
      audience: [
        "正在学习 GitHub Copilot CLI，希望更稳妥管理配置的新手",
        "需要在多台设备或多个会话中统一自动更新、同步和实验选项的开发者",
        "想通过脚本设置 CLI，但不希望直接拼接或覆盖配置文件的团队"
      ],
      format: [
        "适合整理成“升级 CLI / 浏览设置 / 搜索键名 / 修改与验证 / 重置默认值”的配置清单",
        "后续可以补一份常用设置变更记录与故障回退模板"
      ],
      roadmap: [
        "先运行 `copilot update` 升级 CLI，再执行 `/settings` 打开完整配置界面。使用搜索查找目标选项，阅读键名、说明和允许值，不要为了试用一次功能同时修改大量无关配置。",
        "简单设置可以使用行内形式，例如 `/settings autoUpdate true`；需要回退时使用 `/settings reset` 或对具体键重置默认值。复杂 JSON 容器可以交给 `$EDITOR`，但保存前仍应检查作用域和最终内容。",
        "设置写入后重新打开 `/settings` 核对结果，并启动一个低风险会话确认行为。对会话同步、实验功能和可能影响输出展示的选项，记录修改前后的值，出现异常时先回退单项而不是重装整个工具。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot CLI /settings",
          url: "https://github.blog/changelog/2026-06-11-copilot-cli-configure-everything-from-one-place-with-settings/",
          note: "包含三种使用方式、编辑器类型、schema 校验与升级命令。"
        },
        {
          label: "GitHub：Copilot CLI 仓库",
          url: "https://github.com/github/copilot-cli",
          note: "用于查看当前 CLI 使用说明、问题反馈和后续版本变化。"
        }
      ],
      curatedLinks: [
        "`/settings` 能减少手改文件错误，但不会自动判断某项配置是否适合你的隐私、费用或团队政策。",
        "行内设置适合单项、可验证的修改；批量脚本修改前应先在测试环境确认键名和允许值。",
        "实验功能和会话同步可能影响数据范围与使用体验，启用前应阅读说明并保留可回退记录。"
      ],
      downloadIdeas: [
        "可以整理一份 Copilot CLI 常用设置与回退记录表",
        "可以补一个终端 AI 工具配置变更审查清单"
      ],
      monetization: "适合承接 GitHub Copilot、终端效率、AI 编程、开发者培训和团队配置治理类资源位；也可以与本站的 Copilot CLI 安全审查和 Claude Code 故障排查文章互相推荐。",
      extraSections: [
        {
          title: "三种使用方式怎样选",
          items: [
            "不知道键名或想全面浏览时，直接运行 `/settings` 使用搜索界面。",
            "只修改一个明确设置时，使用 `/settings <key> <value>` 并立即验证。",
            "需要自动化配置时，在 `copilot -p` 调用中设置单项，并保留日志与回退步骤。"
          ]
        },
        {
          title: "配置异常时的排查顺序",
          items: [
            "确认 CLI 已升级到包含 `/settings` 的最新版本。",
            "检查最近修改的单个键和值类型，优先重置该项。",
            "重新打开设置界面确认文件已通过 schema 校验并正确写入。",
            "仍无法恢复时，再到官方仓库核对已知问题或提交最小复现。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-cli-security-review-guide",
      title: "Copilot CLI 加入 /security-review：新手怎样把 AI 安全审查放到提交前",
      date: "2026-06-11",
      category: "开发安全",
      readTime: "9 分钟",
      excerpt: "GitHub Copilot CLI 新增实验性 /security-review，可分析本地代码改动并给出高置信度安全发现；它适合做提交前补充检查，但不能替代测试、CodeQL、依赖与密钥扫描。",
      tags: ["GitHub Copilot CLI", "安全审查", "代码检查"],
      featured: true,
      intro: [
        "很多安全问题并不是上线后才出现，而是在一次看似普通的代码修改里被带入：拼接查询造成注入、输出未转义造成跨站脚本、路径参数没有限制，或敏感数据被写进不合适的位置。新手往往知道要看 diff，却不知道应该重点检查哪些风险。",
        "GitHub 在 2026 年 6 月 10 日为 Copilot CLI 发布实验性的 `/security-review`。该命令会分析当前本地改动，返回按严重性和置信度整理的发现与修复建议，重点覆盖注入、跨站脚本、不安全数据处理、路径遍历和弱加密等常见高影响问题。"
      ],
      audience: [
        "已经使用 GitHub Copilot CLI，希望在提交前增加一道安全检查的新手",
        "需要快速审查 AI 生成代码、脚本或小型 Web 项目的开发者",
        "想区分终端 AI 审查、CodeQL、Dependabot 与 secret scanning 职责的团队"
      ],
      format: [
        "适合整理成“检查 diff / 运行测试 / 执行安全审查 / 人工复核 / 再提交”的工作流清单",
        "后续可以补一个包含注入、路径遍历与密钥误提交风险的最小练习仓库"
      ],
      roadmap: [
        "先在 Copilot CLI 中开启 experimental mode，再在一个有未提交改动的测试项目里运行 `/security-review`。不要第一次就对重要生产改动完全依赖实验功能，先确认输出格式和检查范围。",
        "逐条核对发现对应的文件、代码路径、输入来源和真实可利用条件。优先处理高严重性、高置信度问题；对不确定项补测试或最小复现，不要因为 AI 给出建议就直接批量修改。",
        "安全审查通过后仍要运行现有测试，并继续使用 CodeQL、依赖扫描、密钥扫描和人工代码审查。提交前检查完整 diff，确认修复没有改变业务行为或引入新的权限问题。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Copilot CLI /security-review",
          url: "https://github.blog/changelog/2026-06-10-dedicated-security-review-command-now-available-in-copilot-cli/",
          note: "包含命令状态、检查范围、典型漏洞类别和启用方式。"
        },
        {
          label: "GitHub Copilot CLI：Experimental mode",
          url: "https://github.com/github/copilot-cli#experimental-mode",
          note: "用于确认怎样启用实验功能以及当前 CLI 使用说明。"
        },
        {
          label: "GitHub Docs：About code scanning with CodeQL",
          url: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
          note: "用于理解仓库级代码扫描与提交前轻量审查的区别。"
        }
      ],
      curatedLinks: [
        "`/security-review` 仍是 public preview 中的实验功能，输出和覆盖范围可能变化，不应作为唯一上线门槛。",
        "命令只分析本地代码改动并返回高置信度发现；没有报告问题不代表代码没有漏洞。",
        "修复建议也属于 AI 生成内容，应用后必须重新检查 diff、运行测试并验证真实风险是否消除。"
      ],
      downloadIdeas: [
        "可以整理一份提交前安全审查与人工复核清单",
        "可以补一个 AI 生成代码的测试、扫描和证据记录模板"
      ],
      monetization: "适合承接 GitHub Copilot、代码安全、DevSecOps、CodeQL、开发者培训和终端工具类资源位；也可以与本站的 Agent 沙箱、企业插件治理和 npm 安全文章互相推荐。",
      extraSections: [
        {
          title: "推荐的提交前顺序",
          items: [
            "先阅读完整 diff，确认修改范围与预期一致。",
            "运行项目现有测试、lint 和类型检查。",
            "执行 `/security-review`，逐条核对高置信度发现。",
            "完成修复后重新测试，再交给人工或仓库级扫描复核。"
          ]
        },
        {
          title: "它不能替代什么",
          items: [
            "不能替代针对业务权限、数据边界和攻击路径的人工威胁建模。",
            "不能替代依赖漏洞、密钥泄露与完整仓库历史的专用扫描。",
            "不能证明代码绝对安全，也不能代替生产环境监控和事件响应。"
          ]
        }
      ]
    },
    {
      id: "npm-v12-install-security-migration-guide",
      title: "npm v12 将默认阻止依赖脚本与远程依赖：新手升级前检查清单",
      date: "2026-06-11",
      category: "开发安全",
      readTime: "10 分钟",
      excerpt: "npm v12 预计于 2026 年 7 月发布，将默认关闭依赖安装脚本，并默认禁止 Git 与远程 URL 依赖；项目可先升级到 npm 11.16.0，根据警告建立可信允许列表。",
      tags: ["npm v12", "供应链安全", "Node.js"],
      featured: true,
      intro: [
        "`npm install` 不只会下载 JavaScript 文件。依赖可以自动运行 `preinstall`、`install`、`postinstall`，原生模块还可能隐式执行 `node-gyp rebuild`；项目也可能直接从 Git 仓库或远程 tarball 安装包。这些能力方便，但也扩大了供应链攻击和意外执行代码的范围。",
        "GitHub 在 2026 年 6 月 9 日预告，预计 7 月发布的 npm v12 会把多项自动行为改成显式选择：`allowScripts` 默认关闭，`--allow-git` 与 `--allow-remote` 默认设为 `none`。npm 11.16.0 或更高版本已经会显示相关警告，团队可以在正式升级前完成盘点。"
      ],
      audience: [
        "使用 Node.js、npm、前端框架或静态站点工具链的新手",
        "维护包含原生模块、安装脚本、Git 依赖或远程 tarball 的项目开发者",
        "需要让本地开发与 CI 在 npm v12 上稳定安装依赖的团队"
      ],
      format: [
        "适合整理成“升级 npm 11.16 / 查看警告 / 审核脚本 / 建立允许列表 / 验证 CI”的迁移清单",
        "后续可以补一个 package.json 依赖来源与安装脚本盘点模板"
      ],
      roadmap: [
        "先在独立分支或可回退环境升级到 npm 11.16.0 或更高版本，执行项目正常安装流程并保存警告。npm v12 尚未正式发布，不要根据预告直接修改所有生产环境。",
        "运行 `npm approve-scripts --allow-scripts-pending` 查看哪些包希望执行安装脚本。逐个核对包名、来源、用途和脚本内容，只批准确实需要且可信的依赖，并用 `npm deny-scripts` 明确拒绝其余项目。",
        "检查 `package.json` 和 lockfile 中的 Git、HTTPS tarball 与其他远程 URL 依赖，尽量改为可核验的注册表版本。最后在干净环境和 CI 中重新安装、构建与测试，并提交经过审查的允许列表配置。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Upcoming breaking changes for npm v12",
          url: "https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12",
          note: "包含预计发布时间、三个默认值变化和官方迁移步骤。"
        },
        {
          label: "npm Docs：npm approve-scripts",
          url: "https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts",
          note: "用于查看待批准脚本并建立可信依赖允许列表。"
        },
        {
          label: "npm Docs：allow-scripts config",
          url: "https://docs.npmjs.com/cli/v11/using-npm/config#allow-scripts",
          note: "用于理解项目、本地、全局安装与 npx 的脚本控制。"
        }
      ],
      curatedLinks: [
        "npm v12 目前预计在 2026 年 7 月发布，具体时间和最终行为仍应以正式 release notes 为准。",
        "安装脚本默认关闭会影响原生模块和隐式 `node-gyp rebuild`，不能只检查 package.json 中显式写出的脚本。",
        "不要为了消除警告一次批准所有包；允许列表应基于真实用途、可信来源和可重复测试。"
      ],
      downloadIdeas: [
        "可以整理一份 npm v12 安装脚本与远程依赖迁移清单",
        "可以补一个 Node.js 项目供应链依赖审查表"
      ],
      monetization: "适合承接 Node.js、npm、前端工程化、供应链安全、CI/CD 和开发者课程类资源位；也可以与本站的 GitHub 安全审查、Dependabot 和建站工具文章互相推荐。",
      extraSections: [
        {
          title: "升级前必须盘点的三类行为",
          items: [
            "依赖的 preinstall、install、postinstall 与隐式 node-gyp 构建。",
            "直接或间接引用的 Git 依赖。",
            "通过 HTTPS tarball 等远程 URL 引入的依赖。"
          ]
        },
        {
          title: "验证迁移是否完成",
          items: [
            "在无旧 node_modules 和缓存的干净环境执行安装。",
            "确认本地开发、构建、测试与部署流程全部通过。",
            "检查允许列表已提交，并让团队理解每个获批脚本的用途。"
          ]
        }
      ]
    },
    {
      id: "xcode-27-agentic-coding-beginner-guide",
      title: "Xcode 27 把 Agent 放进编辑器：新手怎样先审计划、再验证界面",
      date: "2026-06-09",
      category: "开发工具",
      readTime: "10 分钟",
      excerpt: "Apple 在 WWDC26 发布 Xcode 27 beta，加入可编辑计划、编辑器内 Agent 会话、模拟器操作、截图验证、插件与 MCP 扩展；新手应先把它当成需要审查和测试的协作工具。",
      tags: ["Xcode 27", "Coding Agents", "MCP"],
      featured: true,
      intro: [
        "AI 编程工具常见的问题不是“能不能写代码”，而是计划藏在聊天里、改动范围难确认、界面结果还要人工切到模拟器检查。Apple 在 WWDC26 发布的 Xcode 27 beta，把 Agent 的计划、代码改动、预览和验证流程进一步放进编辑器，让开发者可以在同一环境里审查和反馈。",
        "Apple 的 Xcode 27 beta release notes 显示，规划已成为 Agent 的一等能力，计划会以可编辑 Markdown 工件展示；Agent 还能启动模拟器、安装和运行 App、合成触摸事件并截取屏幕。Xcode 27 也增加 Agent 插件、skills、MCP 与 ACP 配置支持，以及控制 Agent 和子进程文件访问的新安全层。"
      ],
      audience: [
        "准备学习 iOS、macOS 或 Swift 开发，想了解 Xcode Agent 工作流的新手",
        "希望让 AI 辅助规划、改代码、运行模拟器并验证界面的 Apple 平台开发者",
        "需要评估 Agent 插件、MCP 工具和文件访问边界的团队"
      ],
      format: [
        "适合整理成“写需求 / 审计划 / 限定范围 / 运行验证 / 人工复核”的 Agent 使用清单",
        "后续可以补一个从空白 Swift 项目到模拟器截图验证的最小示例"
      ],
      roadmap: [
        "先把 Xcode 27 当作 beta 工具测试。它只会安装和运行在 Apple silicon Mac 上，并要求较新的 macOS；不要直接用它替换唯一的生产开发环境，先备份项目并确认现有构建流程可回退。",
        "开始任务时先要求 Agent 输出计划。检查要改哪些文件、会调用哪些工具、怎样验证结果，再批准执行；对计划中的模糊步骤直接添加批注，比让 Agent 一次性修改整个项目更容易复核。",
        "完成后让 Agent 运行构建、启动模拟器并截图，但不要只看它报告成功。开发者仍要检查代码差异、权限、界面状态、测试结果和已知 beta 问题，必要时在稳定版 Xcode 中再次验证。"
      ],
      officialLinks: [
        {
          label: "Apple Developer：Xcode 27 Beta Release Notes",
          url: "https://developer.apple.com/documentation/xcode-release-notes/xcode-27-release-notes",
          note: "包含 Agent 规划、模拟器验证、插件、安全层和系统要求等完整更新。"
        },
        {
          label: "WWDC26：What’s new in Xcode 27",
          url: "https://developer.apple.com/videos/play/wwdc2026/258/",
          note: "适合快速了解编辑器内 Agent、Device Hub、Localization、Organizer 和 Instruments。"
        },
        {
          label: "Apple Developer Releases：Xcode 27 beta",
          url: "https://developer.apple.com/news/releases/?id=06082026a",
          note: "官方 beta 下载与 release notes 入口。"
        }
      ],
      curatedLinks: [
        "Xcode 27 是 beta，Agent 功能与新 SDK 都可能存在已知问题，重要项目要保留稳定工具链和可回退分支。",
        "Agent 能启动模拟器和生成截图，不等于它理解所有交互、无障碍、性能与业务要求；关键路径仍需人工测试。",
        "插件、skills、MCP 和 ACP 会扩大工具能力，也会扩大权限面。安装前应确认来源、范围和文件访问策略。"
      ],
      downloadIdeas: [
        "可以整理一份 Xcode Agent 计划审查与界面验证清单",
        "可以补一个 Swift 项目 Agent 权限、插件和 MCP 评估模板"
      ],
      monetization: "适合承接 Apple 开发、Swift、Xcode、AI 编程助手、移动应用测试、开发者课程和 Mac 工具类资源位；也可以与本站的 Agent 沙箱、插件治理和代码审查文章互相推荐。",
      extraSections: [
        {
          title: "第一次试用建议",
          items: [
            "从可删除的示例项目开始，不要直接打开唯一的生产仓库。",
            "每个任务先审计划，再批准改动，并在提交前检查完整 diff。",
            "让 Agent 运行构建、模拟器和截图验证，同时保留人工验收。",
            "为插件和 MCP 设置最小权限，定期移除不用的扩展。"
          ]
        },
        {
          title: "需要特别注意的 beta 限制",
          items: [
            "Xcode 27 只在 Apple silicon Mac 上安装和运行。",
            "新 SDK、模拟器和测试工具可能影响现有项目兼容性。",
            "release notes 中的 known issues 应在升级前逐项检查。"
          ]
        }
      ]
    },
    {
      id: "claude-code-safe-mode-troubleshooting-guide",
      title: "Claude Code 2.1.169 增加安全模式：新手怎样排查插件、skills 和 MCP 冲突",
      date: "2026-06-09",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "Claude Code 2.1.169 新增 --safe-mode，可临时禁用 CLAUDE.md、插件、skills、hooks 和 MCP server，帮助判断卡顿或异常来自核心程序还是自定义配置。",
      tags: ["Claude Code", "安全模式", "故障排查"],
      featured: true,
      intro: [
        "终端 Agent 用久以后，项目说明、插件、skills、hooks 和 MCP server 会越来越多。当 Claude Code 启动变慢、工具没有加载、权限策略不生效或行为突然改变时，新手很难判断问题来自 Claude Code 本身，还是某个自定义配置。",
        "Anthropic 在北京时间 2026 年 6 月 9 日发布 Claude Code 2.1.169，新增 `--safe-mode` 与 `CLAUDE_CODE_SAFE_MODE`，可在排查时禁用 CLAUDE.md、插件、skills、hooks 和 MCP server。版本还新增 `/cd` 命令，并修复 Windows 上 `claude -p` 启动缓慢、Git Credential Manager 弹窗、企业 MCP 策略重连执行等问题。"
      ],
      audience: [
        "安装过多个插件、skills、hooks 或 MCP server，遇到启动和行为异常的 Claude Code 用户",
        "在 Windows、WSL 或企业托管环境中使用终端 Agent 的开发者",
        "需要区分核心程序故障与项目自定义配置问题的团队管理员"
      ],
      format: [
        "适合整理成“安全模式复现 / 恢复单项配置 / 定位冲突 / 更新版本 / 记录证据”的排查清单",
        "后续可以补一个插件、hook 和 MCP server 分组启用的最小诊断示例"
      ],
      roadmap: [
        "先保存当前工作并记录异常现象，包括启动耗时、错误文本、受影响项目和最近更新。不要一开始就删除配置，否则会失去复现问题的证据。",
        "使用 `claude --safe-mode` 启动并重复最小操作。如果问题消失，说明更可能来自 CLAUDE.md、插件、skills、hooks 或 MCP；如果仍存在，再检查版本、网络、登录状态和官方 troubleshooting 文档。",
        "最后逐组恢复自定义项，而不是一次全部开启。每恢复一组就重复测试，定位冲突后更新、修复或移除对应配置，并把可靠的最小复现和日志保留下来。"
      ],
      officialLinks: [
        {
          label: "Claude Code GitHub Release：v2.1.169",
          url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.169",
          note: "本次安全模式、/cd、Windows 修复与企业策略改进的原始发布说明。"
        },
        {
          label: "Claude Code Docs：Troubleshooting",
          url: "https://code.claude.com/docs/en/troubleshooting",
          note: "适合继续排查卡顿、资源占用、搜索和配置问题。"
        },
        {
          label: "Claude Code Docs：Settings",
          url: "https://code.claude.com/docs/en/settings",
          note: "适合核对插件、MCP、权限与托管设置。"
        }
      ],
      curatedLinks: [
        "安全模式是诊断入口，不是长期绕过配置问题的替代方案。确认冲突后仍应修复或移除有问题的自定义项。",
        "排查时不要删除包含团队规则的 CLAUDE.md 或托管策略；优先复制日志、记录版本并最小化复现。",
        "`/cd` 可以在不中断 prompt cache 的情况下移动会话目录，但切换后仍要重新确认当前工作区和权限范围。"
      ],
      downloadIdeas: [
        "可以整理一份 Claude Code 插件、skills、hooks 与 MCP 排查表",
        "可以补一个 Windows 终端 Agent 启动与权限问题记录模板"
      ],
      monetization: "适合承接 Claude Code、终端 Agent、MCP、插件治理、Windows 开发环境和 AI 编程课程类资源位；也可以与本站的回退模型、企业托管插件和 Agent 安全文章互相推荐。",
      extraSections: [
        {
          title: "推荐的最小排查顺序",
          items: [
            "记录版本、项目目录、错误信息和最近配置变化。",
            "用安全模式复现，判断问题是否来自自定义项。",
            "逐组恢复 CLAUDE.md、插件、skills、hooks 和 MCP。",
            "运行 `/doctor` 并对照官方 troubleshooting 文档。"
          ]
        },
        {
          title: "不要在排查时忽略权限",
          items: [
            "安全模式会关闭扩展能力，正常模式恢复后权限面也会恢复。",
            "企业托管 MCP 策略与项目本地设置应分别核对。",
            "日志和配置可能包含路径、仓库信息或凭据线索，分享前要脱敏。"
          ]
        }
      ]
    },
    {
      id: "cloudflare-ai-gateway-spend-limits-guide",
      title: "Cloudflare AI Gateway 增加费用上限：新手怎样给模型、团队和 Agent 控制预算",
      date: "2026-06-08",
      category: "AI 工具",
      readTime: "9 分钟",
      excerpt: "Cloudflare AI Gateway 现可按模型、提供商和自定义属性设置美元预算，达到上限后阻止请求或切换到备用模型；身份驱动预算与策略仍处于 closed beta。",
      tags: ["Cloudflare", "AI Gateway", "成本控制"],
      featured: true,
      intro: [
        "AI 应用刚开始测试时，每次调用只花一点钱，很容易忽略成本边界。等到团队、自动化和 Agent 都开始共享模型后，某个循环任务、昂贵模型或失控的 CI 流程就可能快速消耗预算。单靠月末账单很难判断费用来自哪个模型、应用或用户。",
        "Cloudflare 2026 年 6 月 5 日宣布 AI Gateway spend limits 进入 open beta，所有方案用户都可以按美元设置预算。限制可以组合模型、提供商和管理员定义的自定义属性，并使用固定或滚动的日、周、月窗口；达到上限后默认阻止后续请求，也可以通过 Dynamic Routes 切换到更便宜的备用模型。"
      ],
      audience: [
        "正在搭建 AI 聊天、内容生成、代码审查或 Agent 自动化的新手",
        "需要把多个模型提供商的日志、调用量和费用集中查看的开发者",
        "想给团队、应用或自动化任务设置预算边界的站长和管理员"
      ],
      format: [
        "适合整理成“记录现状 / 设置预算 / 选择阻止或回退 / 检查日志 / 调整额度”的上线清单",
        "后续可以补一个按应用名称区分费用并切换备用模型的最小示例"
      ],
      roadmap: [
        "先只做观察，不要一开始就设置过低的硬上限。把应用请求通过 AI Gateway 转发，确认模型、提供商、token 和费用日志完整，再按真实使用情况估算日、周或月预算。",
        "再按风险拆分预算。可以用模型和提供商限制昂贵调用，也可以让应用传递自定义属性，分别观察网站聊天、代码审查、内容生成和后台 Agent。自定义属性由应用提供，仍需防止错误或伪造数据。",
        "最后决定达到上限后的行为。关键任务可以通过 Dynamic Routes 切换到更便宜的备用模型，低优先级任务可以直接阻止；无论选择哪种方式，都要保留错误处理、日志和人工复核，避免静默降级影响结果质量。"
      ],
      officialLinks: [
        {
          label: "Cloudflare Blog：Your AI bill is out of control. Cloudflare can fix it now.",
          url: "https://blog.cloudflare.com/ai-gateway-spend-limits/",
          note: "本次费用上限、身份驱动预算和后续路由计划的原始公告。"
        },
        {
          label: "Cloudflare Docs：AI Gateway spend limits",
          url: "https://developers.cloudflare.com/ai-gateway/features/spend-limits/",
          note: "适合查看预算范围、时间窗口和达到上限后的行为配置。"
        },
        {
          label: "Cloudflare Docs：Dynamic Routes",
          url: "https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/",
          note: "适合继续了解达到预算后切换备用模型的路由方式。"
        }
      ],
      curatedLinks: [
        "费用上限按美元统计，不等于普通速率限制。速率限制控制请求频率，预算限制控制累计花费，两者应分别配置。",
        "达到上限后切换便宜模型可以保持服务可用，但模型能力、输出格式和工具调用行为可能改变，关键流程要做回归测试。",
        "身份驱动预算和策略目前仍是 closed beta。普通 spend limits 已进入 open beta，但上线前仍应在非关键环境验证。"
      ],
      downloadIdeas: [
        "可以整理一份 AI 应用预算与回退模型检查表",
        "可以补一个按应用、模型和环境拆分费用的配置模板"
      ],
      monetization: "适合承接 Cloudflare、AI Gateway、多模型 API、Agent 成本治理、云平台预算和建站运维类资源位；也可以与本站的模型路由、沙箱、OIDC 和 AI 编程代理文章互相推荐。",
      extraSections: [
        {
          title: "第一次设置预算建议",
          items: [
            "先用较高额度观察真实使用模式，再逐步收紧。",
            "为生产、测试、CI 和 Agent 使用不同的属性或网关。",
            "明确达到上限时是阻止请求、提醒人工，还是切换备用模型。",
            "定期检查高费用模型和异常任务，而不是只等月末账单。"
          ]
        },
        {
          title: "不要把预算控制当成质量控制",
          items: [
            "便宜模型不一定适合复杂重构、关键内容或高风险决策。",
            "模型降级后要验证输出结构、工具支持和失败处理。",
            "预算、权限、隐私和结果复核仍是四个独立问题。"
          ]
        }
      ]
    },
    {
      id: "google-colab-cli-agent-remote-compute-guide",
      title: "Google Colab CLI 发布：新手怎样让本地脚本和 AI Agent 使用远程 GPU",
      date: "2026-06-07",
      category: "开发工具",
      readTime: "9 分钟",
      excerpt: "Google 2026 年 6 月 5 日发布 Colab CLI，可从终端申请 CPU、GPU 或 TPU，远程执行本地 Python 脚本，下载结果并导出运行日志。它也附带 agent skill，但目前只支持 Linux 和 macOS。",
      tags: ["Google Colab", "CLI", "远程 GPU"],
      featured: true,
      intro: [
        "很多新手第一次需要 GPU 时，会在“本地电脑跑不动”和“云平台配置太复杂”之间卡住。Google 新发布的 Colab CLI 把 Colab 远程运行环境带进终端：你可以在本地写脚本，再通过命令申请 GPU、安装依赖、执行代码、下载产物，最后释放运行环境。",
        "Google Developers Blog 在 2026 年 6 月 5 日宣布 Colab CLI。官方仓库说明它支持 CPU、T4、L4、G4、H100、A100 和 TPU 等运行环境，也能执行 Python、Notebook 或标准输入代码，并导出 `.ipynb`、Markdown 和 JSONL 日志。需要注意的是，当前版本只支持 Linux 和 macOS，Windows 尚未支持。"
      ],
      audience: [
        "本地电脑缺少 GPU，但想学习模型训练、数据处理或机器学习的新手",
        "希望从终端或自动化脚本调用 Colab 远程算力的开发者",
        "想让 Codex、Claude Code 等终端 Agent 执行可回收远程任务的人"
      ],
      format: [
        "适合整理成“申请运行环境 / 安装依赖 / 执行脚本 / 下载结果 / 停止实例”的入门清单",
        "后续可以补一个在 Linux 或 macOS 上运行小型训练脚本的完整示例"
      ],
      roadmap: [
        "先安装 CLI 并从最小 CPU 会话开始。使用 `uv tool install google-colab-cli` 或 `pip install google-colab-cli`，运行 `colab new` 后，用简单 Python 输出验证认证、连接和会话状态。",
        "再把耗时脚本交给远程环境。需要加速器时使用 `colab new --gpu T4` 等命令，安装依赖后通过 `colab exec -f script.py` 执行；如果只是一次性任务，可以用 `colab run --gpu T4 script.py` 自动创建和释放环境。",
        "最后回收产物与证据。使用 `colab download` 下载模型或数据，用 `colab log` 导出可复查日志，并运行 `colab stop` 释放资源。不要把会话令牌、凭据或不需要的敏感数据交给 Agent。"
      ],
      officialLinks: [
        {
          label: "Google Developers Blog：Introducing the Google Colab CLI",
          url: "https://developers.googleblog.com/introducing-the-google-colab-cli/",
          note: "Colab CLI 发布公告，包含远程执行和 Agent 工作流示例。"
        },
        {
          label: "Google Colab CLI GitHub 仓库",
          url: "https://github.com/googlecolab/google-colab-cli",
          note: "适合查看安装方式、平台限制、命令列表和完整示例。"
        }
      ],
      curatedLinks: [
        "Colab CLI 当前只支持 Linux 和 macOS。Windows 用户不要直接照搬安装步骤，可以等待官方支持或在可控的 Linux 环境中测试。",
        "远程执行不等于自动保存所有内容。重要模型、数据和日志要显式下载或导出，并确认会话停止后哪些文件会消失。",
        "让 AI Agent 调用 CLI 前，先限制它能使用的命令、算力和数据范围，并保留日志与停止步骤，避免任务失控或资源持续占用。"
      ],
      downloadIdeas: [
        "可以整理一份 Colab CLI 远程任务执行检查表",
        "可以补一个一次性 GPU 脚本与结果下载示例"
      ],
      monetization: "适合承接 Google Colab、Python、机器学习入门、远程 GPU、AI Agent 自动化和云端开发环境类资源位；也可以与本站的沙箱、AI 编程代理和开发工具文章互相推荐。",
      extraSections: [
        {
          title: "第一次尝试建议只做五步",
          items: [
            "创建一个最小会话并确认状态。",
            "运行只输出环境信息的 Python 脚本。",
            "安装一个小型依赖并再次执行。",
            "导出日志和一个测试文件。",
            "停止会话并确认资源已释放。"
          ]
        },
        {
          title: "交给 Agent 前要设的边界",
          items: [
            "限定可申请的 GPU 类型、任务时长和下载目录。",
            "不要把长期凭据、隐私数据和生产数据直接放进远程会话。",
            "要求 Agent 返回命令、日志、产物路径和停止结果。"
          ]
        }
      ]
    },
    {
      id: "claude-code-fallback-model-permission-safety-guide",
      title: "Claude Code 2.1.166 增加回退模型：新手怎样兼顾可用性和权限安全",
      date: "2026-06-07",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "Claude Code 2.1.166 可配置最多三个回退模型，并加强 deny 规则与跨会话消息权限。更新也修复了 Windows PowerShell 命令验证可能长时间挂起的问题。",
      tags: ["Claude Code", "回退模型", "权限安全"],
      featured: true,
      intro: [
        "AI 编程代理执行长任务时，主模型过载或暂时不可用会让工作中断。直接无限重试不可靠，临时换模型又可能改变输出质量、成本和工具行为。Claude Code 2.1.166 新增 `fallbackModel` 设置，让用户可以按顺序配置最多三个回退模型，并把 `--fallback-model` 扩展到交互会话。",
        "这次更新同时加强了权限边界：deny 规则的工具名称位置支持 glob，`\"*\"` 可以拒绝全部工具；其他 Claude 会话通过 `SendMessage` 转发的消息不再携带用户权限，接收会话会拒绝被转发的权限请求，自动模式也会阻止这类请求。Windows 用户还获得了 PowerShell 命令验证挂起修复。"
      ],
      audience: [
        "使用 Claude Code 处理长任务、远程会话或后台 Agent 的开发者",
        "需要在模型可用性、成本、输出质量和权限边界之间做取舍的团队",
        "想理解回退模型为什么不能替代错误处理和人工复核的新手"
      ],
      format: [
        "适合整理成“主模型 / 回退顺序 / 禁止工具 / 跨会话权限 / 故障复核”的配置清单",
        "后续可以补一个低风险测试项目，用来比较主模型与回退模型的结果"
      ],
      roadmap: [
        "先把回退模型当作可用性策略，而不是质量保证。选择能力和工具支持相近的模型，记录顺序、成本和适用任务，并用一个可重复的小任务验证模型切换后的输出。",
        "再收紧工具权限。对不需要工具的会话使用明确 deny 规则；需要工具时按任务最小化开放，尤其要审查 Bash、文件写入、网络访问和 MCP。不要依赖跨会话消息替你批准权限。",
        "最后处理失败和复核。官方说明意外的非重试错误会在回退模型上重试一次，但认证、限流、请求大小和传输错误仍会直接返回。自动化应识别错误类型，而不是把所有失败都交给回退模型。"
      ],
      officialLinks: [
        {
          label: "Claude Code GitHub Release：v2.1.166",
          url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.166",
          note: "回退模型、deny 规则、跨会话权限和 Windows 修复的官方发布说明。"
        },
        {
          label: "Claude Code Docs：Settings",
          url: "https://code.claude.com/docs/en/settings",
          note: "适合继续查看用户、项目和托管设置的作用范围。"
        }
      ],
      curatedLinks: [
        "回退模型只能处理部分模型不可用问题。认证失败、限流、请求过大和网络传输错误仍需要单独处理。",
        "模型切换可能改变回答风格、推理深度、工具选择和成本。对关键任务要保留输入、输出和人工复核记录。",
        "跨会话消息不再携带用户权限是重要安全边界。不要设计成让一个 Agent 替另一个 Agent 自动批准高风险操作。"
      ],
      downloadIdeas: [
        "可以整理一份 Claude Code 回退模型与权限审查表",
        "可以补一个主模型失败后的自动化测试用例模板"
      ],
      monetization: "适合承接 Claude Code、AI 编程代理、模型路由、权限治理、Windows 开发环境和自动化可靠性类资源位；也可以与本站的沙箱、MCP、skills 和团队插件文章形成专题。",
      extraSections: [
        {
          title: "回退模型上线前先验证",
          items: [
            "主模型不可用时是否按预期切换。",
            "回退模型是否支持任务需要的工具和上下文。",
            "输出质量、速度和成本是否仍在可接受范围。",
            "失败日志是否能说明实际使用了哪个模型。"
          ]
        },
        {
          title: "权限规则要避免两个误区",
          items: [
            "不要因为配置了回退模型，就给所有模型开放相同的高风险工具。",
            "不要把跨会话消息视为用户确认；高风险操作仍需真实用户或受控策略批准。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-enterprise-managed-plugins-vscode-guide",
      title: "GitHub Copilot 企业托管插件进入 VS Code：团队怎样统一 agents、skills 和 MCP 配置",
      date: "2026-06-06",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 2026 年 6 月 5 日宣布，企业托管 Copilot 插件能力已从 CLI 扩展到 VS Code public preview。团队可以通过 .github-private 仓库统一发布插件市场、自动安装插件，并集中配置 agents、skills、hooks 和 MCP。",
      tags: ["GitHub Copilot", "VS Code", "企业插件"],
      featured: true,
      intro: [
        "当团队里的每个人都开始使用 AI 编程代理，问题很快会从“能不能用”变成“怎样让大家用同一套规则”。有人手动安装插件，有人漏掉内部 skill，有人的 MCP 配置已经过期，这些差异会让代理输出、权限边界和新成员上手速度都变得不可控。",
        "GitHub 2026 年 6 月 5 日宣布，enterprise-managed plugins 已支持 VS Code public preview。企业管理员可以在 `.github-private/.github/copilot/settings.json` 中定义额外插件市场和默认启用的插件；用户通过企业 Copilot 账号在 VS Code 或 Copilot CLI 登录时，客户端会自动拉取并应用这些设置。"
      ],
      audience: [
        "正在给团队统一 GitHub Copilot、VS Code 和 Copilot CLI 配置的管理员",
        "需要共享 custom agents、skills、hooks 或 MCP 配置的开发团队",
        "想理解 AI 编程工具为什么需要版本化配置和治理边界的新手"
      ],
      format: [
        "适合整理成“插件市场 / 默认插件 / hooks / MCP / 登录验证”的团队上线清单",
        "后续可以补一份最小 settings.json 示例和插件变更审查流程"
      ],
      roadmap: [
        "先盘点团队真正需要共享的能力。把通用编码规范、内部文档入口、固定工具和安全检查放进受控插件，不要把每个人的临时偏好都做成企业默认。",
        "再在企业的 `.github-private` 仓库里维护 `.github/copilot/settings.json`，通过 `extraKnownMarketplaces` 声明可信插件市场，通过 `enabledPlugins` 指定自动安装项。",
        "最后把插件更新当成代码变更审查。每次新增 agent、skill、hook 或 MCP 配置，都要检查来源、权限、网络访问和失败回滚，再让团队客户端自动同步。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Enterprise-managed plugins in VS Code in public preview",
          url: "https://github.blog/changelog/2026-06-05-enterprise-managed-plugins-in-vs-code-in-public-preview/",
          note: "本次 VS Code 企业托管插件 public preview 的原始公告。"
        },
        {
          label: "GitHub Docs：Configuring enterprise plugin standards for Copilot CLI",
          url: "https://docs.github.com/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards",
          note: "适合查看 `.github-private` 仓库位置、settings.json 字段和生效条件。"
        }
      ],
      curatedLinks: [
        "自动安装能减少新成员配置时间，但默认插件越多，代理可用能力和潜在权限也越多。先从少量、可解释、可审计的插件开始。",
        "插件可以携带 agents、skills、hooks 和 MCP 配置。团队审查时不能只看插件名称，还要查看它实际启用了哪些工具、命令和外部连接。",
        "这项能力目前仍是 public preview。上线前要准备回滚方式，并验证 VS Code 与 Copilot CLI 客户端版本、企业授权和 Usage billed to 选择是否正确。"
      ],
      downloadIdeas: [
        "可以整理一份企业 Copilot 插件上线检查表",
        "可以补一个最小 settings.json 模板和插件审查记录模板"
      ],
      monetization: "适合承接 GitHub Copilot 企业管理、VS Code 团队配置、AI 编程治理、MCP 安全和开发者入职流程类资源位；也可以与本站的 Copilot skills、沙箱和模型成本文章互相推荐。",
      extraSections: [
        {
          title: "团队首次上线建议",
          items: [
            "先选择一个低风险内部插件，在小团队验证自动安装和更新是否正常。",
            "明确插件维护人、版本来源、权限范围和故障回滚步骤。",
            "让使用者知道哪些设置由企业统一控制，哪些仍可以个人配置。"
          ]
        },
        {
          title: "审查插件时要看什么",
          items: [
            "插件来源仓库是否可信，更新是否经过代码审查。",
            "包含的 hooks、MCP 和命令是否会访问网络、文件或敏感系统。",
            "默认安装是否确实帮助大多数成员，而不是只服务少数场景。"
          ]
        }
      ]
    },
    {
      id: "vercel-skills-sh-api-oidc-security-guide",
      title: "skills.sh API 开放：新手怎样用 OIDC 搜索、审计和管理 AI skills",
      date: "2026-06-06",
      category: "开发工具",
      readTime: "9 分钟",
      excerpt: "Vercel 2026 年 6 月 5 日开放 skills.sh API，可查询超过 60 万个开源 skills，并读取详情、官方精选和安全审计结果。部署在 Vercel 的应用可使用项目 OIDC 短期令牌认证，不需要保存长期 API Key。",
      tags: ["skills.sh", "OIDC", "AI Skills"],
      featured: true,
      intro: [
        "AI agent 的 skill 可以把一套专业流程、规则和脚本打包复用，但数量变多后，单靠网页搜索和手动复制很难管理。你需要知道 skill 来自哪里、包含哪些文件、是否重复、有没有安全审计，以及更新后内容是否发生变化。",
        "Vercel 2026 年 6 月 5 日宣布 skills.sh API 可用。官方说明可以通过 API 搜索超过 60 万个开源 skills，读取 skill 详情、文件树、安装量、官方精选和多家安全伙伴的审计结果。Vercel 应用还可以使用项目 OIDC token 认证，由平台签发短期凭据，避免在环境变量里长期保存 API Key。"
      ],
      audience: [
        "正在做 AI agent、skill 市场、开发工具目录或内部插件平台的新手",
        "希望在安装 skill 前检查来源、文件内容和安全审计结果的开发者",
        "想理解 OIDC 短期令牌为什么比长期 API Key 更适合自动化调用的站长"
      ],
      format: [
        "适合整理成“搜索 / 详情 / 审计 / 安装前复核 / 更新检测”的 skill 管理清单",
        "后续可以补一个使用 Vercel Function 查询 skills.sh API 的最小示例"
      ],
      roadmap: [
        "先用搜索和官方精选接口缩小候选范围，不要只按安装量判断。记录稳定 id、来源仓库、installUrl 和是否为重复副本。",
        "再读取详情与审计接口，检查 SKILL.md、支持文件、内容 hash 和安全伙伴结果。审计通过不等于可以跳过人工复核，尤其要关注脚本、网络请求和凭据读取。",
        "最后配置 OIDC。调用时在请求处理函数内部获取短期 token，按 team 和 project 控制范围，处理 401、429 和 503，并且不要把本地 `.env.local` 提交到仓库。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：The skills.sh API is now available",
          url: "https://vercel.com/changelog/the-skills-sh-api-is-now-available",
          note: "本次 skills.sh API 发布的原始公告，包含 OIDC 和速率限制概要。"
        },
        {
          label: "skills.sh Docs：API Reference",
          url: "https://skills.sh/docs/api",
          note: "适合查看搜索、详情、官方精选、安全审计、错误处理和缓存规则。"
        },
        {
          label: "Vercel Docs：OpenID Connect Federation",
          url: "https://vercel.com/docs/oidc",
          note: "适合继续理解 Vercel OIDC 短期令牌、环境范围和本地开发方式。"
        }
      ],
      curatedLinks: [
        "安装量和热门排名只能说明使用情况，不能证明 skill 适合你的项目。先看来源、内容、权限和审计结果。",
        "OIDC 的价值不是“少写一个 API Key”，而是让凭据短期有效并按团队、项目和环境收窄范围。",
        "skills.sh API 的认证请求按 team 和 project 限制为每分钟 600 次。应用应读取速率限制响应头，对 429 和 503 使用等待与退避，而不是无限重试。"
      ],
      downloadIdeas: [
        "可以整理一份 AI skill 安装前安全检查表",
        "可以补一个 skills.sh API + Vercel OIDC 的入门示例项目"
      ],
      monetization: "适合承接 AI agent、skills、Vercel Functions、OIDC、开发工具目录和供应链安全类资源位；也可以与本站的 Copilot 插件、MCP、沙箱和建站安全文章形成专题。",
      extraSections: [
        {
          title: "安装 skill 前至少检查五项",
          items: [
            "来源仓库和作者是否可信，是否存在重复副本。",
            "SKILL.md 和支持文件是否要求执行脚本、访问网络或读取凭据。",
            "安全审计结果是否存在 warn、fail 或尚未生成审计的情况。",
            "内容 hash 是否变化，更新后是否需要重新审查。",
            "skill 能力是否真的符合当前任务，避免给代理增加不必要的权限。"
          ]
        },
        {
          title: "OIDC 调用时的三个边界",
          items: [
            "在每次请求的处理函数里获取 token，不要长期缓存短期凭据。",
            "本地开发可以使用 Vercel CLI 拉取环境，但 `.env.local` 仍然不能提交。",
            "记录错误状态和限流信息，不记录原始 bearer token。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-context-reasoning-levels-guide",
      title: "GitHub Copilot 支持百万 token 上下文和推理等级：新手怎么判断什么时候该开大模型能力",
      date: "2026-06-05",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 2026 年 6 月 4 日宣布 Copilot 支持更大的上下文窗口和可配置推理等级。对新手来说，这不是“越大越好”的模型开关，而是要学会按任务复杂度、代码库规模和 AI Credits 成本来选择。",
      tags: ["GitHub Copilot", "上下文窗口", "AI Credits"],
      featured: true,
      intro: [
        "GitHub 2026 年 6 月 4 日的 Copilot Changelog 提到两个很适合新手理解的能力：更大的上下文窗口，以及可配置的 reasoning levels。官方说明里最关键的一点是，Copilot 可以在 VS Code、Copilot CLI 和 GitHub Copilot app 里处理更大的代码库、长文档和多文件项目，同时允许用户在速度和深度之间做选择。",
        "这类更新容易被误解成“每次都开最大上下文、最高推理”。实际更稳的做法是先看任务类型：日常小改动用默认设置，跨模块重构、复杂调试、架构分析和长文档整理才考虑更大的上下文或更高推理等级。因为 GitHub 也提醒，选择更大的上下文窗口或更高推理等级会消耗更多 AI Credits。"
      ],
      audience: [
        "正在用 VS Code、Copilot CLI 或 GitHub Copilot app 的新手开发者",
        "维护多文件项目、个人网站或自动化脚本，常让 AI 读多个文件的人",
        "想理解模型上下文、推理深度、速度和成本之间取舍的站长"
      ],
      format: [
        "适合整理成“默认模式 / 大上下文 / 高推理等级”的选择清单",
        "后续可以补一张任务复杂度和模型设置的对照表"
      ],
      roadmap: [
        "先把上下文窗口理解成模型一次能参考的信息范围。范围越大，越适合跨文件、长文档和复杂项目，但也更需要你提供清晰任务边界。",
        "再把推理等级理解成模型投入思考深度的开关。简单补全、解释报错不一定需要高推理；架构权衡、疑难调试和多步骤计划才更适合。",
        "最后把成本放进决策。默认设置适合日常任务，大上下文和高推理等级应该留给确实需要跨项目理解的工作。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：Larger context windows and configurable reasoning levels for GitHub Copilot",
          url: "https://github.blog/changelog/2026-06-04-larger-context-windows-and-configurable-reasoning-levels-for-github-copilot/",
          note: "本次 Copilot 大上下文和推理等级更新的原始来源。"
        },
        {
          label: "GitHub Docs：Supported AI models in GitHub Copilot",
          url: "https://docs.github.com/en/copilot/reference/ai-models/supported-models",
          note: "适合继续查看 Copilot 支持模型、计划差异和模型选择入口。"
        }
      ],
      curatedLinks: [
        "不要把大上下文当成万能答案。任务描述模糊时，读再多文件也可能得到不可靠建议。先说明目标、限制、不能改的地方和验收方式。",
        "高推理等级适合复杂问题，不适合所有日常小任务。简单 CSS 调整、文案修改和单文件修复通常先用默认设置。",
        "如果团队开始使用这些能力，建议把预算、模型策略和高成本任务示例写进内部说明，避免每个人都凭感觉开最大档。"
      ],
      downloadIdeas: [
        "可以整理一份 Copilot 模型设置选择表",
        "可以补一个“什么时候需要大上下文”的项目检查清单"
      ],
      monetization: "适合承接 GitHub Copilot、AI 编程课程、模型成本治理、VS Code 工作流和开发效率工具类资源位；也可以和本站的 AI 编程、开发工具、建站调试专题互相推荐。",
      extraSections: [
        {
          title: "三种任务怎么选",
          items: [
            "日常小改：默认上下文和默认推理，先让 Copilot 聚焦当前文件或当前报错。",
            "跨文件问题：提供相关目录、错误日志和预期行为，再考虑更大的上下文窗口。",
            "架构或疑难调试：要求先分析方案和风险，再开启更高推理等级做深度判断。"
          ]
        },
        {
          title: "新手最容易忽略的成本点",
          items: [
            "上下文越大，模型处理的信息越多，单次交互可能更贵。",
            "推理越深，等待时间和 AI Credits 消耗可能增加。",
            "把任务拆小、先读关键文件、再扩大范围，通常比一开始就全仓分析更稳。"
          ]
        }
      ]
    },
    {
      id: "chatgpt-memory-dreaming-update-guide",
      title: "ChatGPT memory dreaming 更新：新手怎么理解长期上下文、偏好和隐私边界",
      date: "2026-06-05",
      category: "效率工具",
      readTime: "9 分钟",
      excerpt: "OpenAI 2026 年 6 月 4 日介绍 ChatGPT memory 的 dreaming 更新，目标是让记忆更及时、连续和相关。对新手来说，重点不是让 AI 记住所有东西，而是学会哪些偏好值得保留、哪些内容要临时聊、哪些记忆需要定期检查。",
      tags: ["ChatGPT", "Memory", "效率工具"],
      featured: true,
      intro: [
        "很多人用 ChatGPT 做长期项目时，会遇到一个重复问题：每次新开对话都要重新介绍项目、语气、限制和习惯。OpenAI 2026 年 6 月 4 日发布的 memory dreaming 更新，讲的就是如何让 ChatGPT 更好地综合过去对话里的有效信息，让未来对话能从更完整的上下文开始。",
        "这类能力对学习、写作、编程和内容运营都很有用，但也需要边界。新手不要把 memory 理解成“什么都让 AI 记住”。更合理的做法是：长期偏好可以保留，临时任务用 Temporary Chat，敏感信息不要随意写进对话，并且定期查看、修正或删除不再准确的记忆。"
      ],
      audience: [
        "长期使用 ChatGPT 写文章、整理资料、学编程或做项目的新手",
        "希望 AI 记住自己写作语气、学习目标和项目限制的内容创作者",
        "关心个性化、隐私控制和记忆准确性的效率工具用户"
      ],
      format: [
        "适合做成“值得记住 / 不该记住 / 需要复查”的使用清单",
        "后续可以补一张 memory、custom instructions、Temporary Chat 的区别表"
      ],
      roadmap: [
        "先理解 memory 的价值：它能让 ChatGPT 在后续对话里带上你的偏好、项目背景和约束，减少重复解释。",
        "再理解 dreaming 的方向：OpenAI 描述它会在后台综合对话历史，让记忆保持更新、连续和相关，而不是只依赖你明确说“记住”。",
        "最后建立检查习惯：当项目结束、身份变化、偏好变化或某条记忆不准确时，要去设置里管理，或者直接要求 ChatGPT 忘记。"
      ],
      officialLinks: [
        {
          label: "OpenAI：Dreaming: Better memory for a more helpful ChatGPT",
          url: "https://openai.com/index/chatgpt-memory-dreaming/",
          note: "本次 ChatGPT memory dreaming 更新的原始来源，说明新架构、评估目标和推出范围。"
        },
        {
          label: "OpenAI Help：What is Memory?",
          url: "https://help.openai.com/en/articles/8983136-what-is-memory",
          note: "适合继续查看 memory 的开启、关闭、删除和 Temporary Chat 控制方式。"
        }
      ],
      curatedLinks: [
        "适合让 ChatGPT 记住的是长期偏好，例如写作语气、学习方向、常用技术栈和项目约束。",
        "不适合让 ChatGPT 记住的是一次性安排、临时账号信息、私人敏感资料和已经过期的计划。",
        "使用 memory 后更要定期复核。旧记忆如果不再准确，可能会让回答偏离当前真实情况。"
      ],
      downloadIdeas: [
        "可以整理一份 ChatGPT memory 复查清单",
        "可以补一个“Memory / Custom Instructions / Temporary Chat”对照表"
      ],
      monetization: "适合承接 ChatGPT 入门、AI 效率工具、内容写作、学习规划和隐私控制类资源位；也可以和本站的自动化写作、AI 编程和资料整理专题形成连载。",
      extraSections: [
        {
          title: "哪些内容适合长期保留",
          items: [
            "你的常用写作风格、输出格式和语言偏好。",
            "长期项目的目标、边界、固定术语和不希望重复踩的坑。",
            "学习路线、技术栈偏好和你希望 AI 默认采用的解释深度。"
          ]
        },
        {
          title: "哪些情况建议用 Temporary Chat",
          items: [
            "只想临时问一个问题，不希望影响后续个性化回答。",
            "讨论一次性计划、临时客户资料或不希望长期保留的上下文。",
            "测试一个新方向，暂时不确定它是否应该进入长期记忆。"
          ]
        }
      ]
    },
    {
      id: "github-copilot-vscode-agent-window-byok-guide",
      title: "GitHub Copilot in VS Code 5 月更新：新手怎么理解 Agents window、BYOK 和终端安全",
      date: "2026-06-04",
      category: "AI 编程",
      readTime: "9 分钟",
      excerpt: "GitHub 2026 年 6 月 3 日发布 Copilot in Visual Studio Code 5 月更新汇总，覆盖 v1.120 到 v1.123：Agents window 进入 Stable 预览，远程代理、BYOK、终端风险提示、敏感输入保护和集成浏览器能力继续增强。对新手来说，这是一条理解 AI 编程工具从聊天框走向完整开发环境的好入口。",
      tags: ["VS Code", "GitHub Copilot", "AI Agent"],
      featured: true,
      intro: [
        "以前很多人把 VS Code 里的 AI 功能理解成“问一句、补一段代码”。GitHub 2026 年 6 月 3 日的 Changelog 汇总了 Copilot in Visual Studio Code 在 5 月和 6 月初的更新，方向已经明显不只是补全代码，而是让代理在更完整的开发环境里接任务、改文件、跑命令、查看浏览器结果，并把过程留给人复核。",
        "这条更新最适合新手看的地方，是它把三个问题放在一起：代理工作区怎么组织、模型和密钥怎么管理、终端命令怎么更安全。理解这三件事，比单纯追某个新模型更实用。因为当 AI 开始真正跑测试、读日志、开浏览器和改多个项目时，你需要知道它在哪里工作、用什么模型、能看到什么输出，以及哪些输入不会被交给模型。"
      ],
      audience: [
        "刚开始用 VS Code、GitHub Copilot Chat 或 Agents window 的新手开发者",
        "想把 AI 编程从简单问答升级到任务执行、网页调试和多项目协作的站长",
        "需要在公司或受限环境里使用 BYOK、远程机器和终端命令的开发者"
      ],
      format: [
        "适合整理成“代理窗口 / BYOK / 终端安全 / 浏览器验证”的入门清单",
        "后续可以补一张 VS Code 代理工作流图：任务输入、代理会话、终端命令、浏览器检查、人工复核"
      ],
      roadmap: [
        "先理解 Agents window：它是一个更偏代理任务的工作区，适合跨项目、并行会话、远程机器和变更复核，而不只是普通聊天侧栏。",
        "再理解 BYOK 和模型控制：自带密钥、Custom Endpoint、按 provider 选模型、token 可见性和 reasoning effort，都是为了让不同环境能更清楚地管理成本、权限和可用性。",
        "最后看终端安全：输出压缩、实验性的命令风险提示、敏感输入留在终端、后台命令状态提示，说明 AI 代理跑命令时必须有边界和可观察性。"
      ],
      officialLinks: [
        {
          label: "GitHub Changelog：GitHub Copilot in Visual Studio Code, May releases",
          url: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
          note: "本次 VS Code Copilot 5 月更新汇总的原始来源，覆盖 Agents window、BYOK、终端和浏览器能力。"
        },
        {
          label: "Visual Studio Code 1.123 Release Notes",
          url: "https://code.visualstudio.com/updates/v1_123",
          note: "适合继续查看 VS Code 最新稳定版本的具体发布说明。"
        }
      ],
      curatedLinks: [
        "不要一开始就让代理处理生产仓库。先选一个小项目，让它跑测试、解释失败原因或修一个很小的问题。",
        "BYOK 不只是填 API Key。你还要确认模型来源、token 用量、推理强度、是否能在受限网络里工作，以及哪些任务交给哪个模型。",
        "终端风险提示只是辅助判断。涉及删除、覆盖、密钥、生产数据库和发布动作时，仍然要人工确认命令和目标路径。"
      ],
      downloadIdeas: [
        "可以整理一份 VS Code AI 代理首次配置检查表",
        "可以补一个“普通聊天 / Agents window / 远程代理”使用场景对照表"
      ],
      monetization: "适合承接 VS Code、GitHub Copilot、AI 编程代理、远程开发、BYOK 模型配置和前端调试类资源位；也可以和本站的建站教程、开发工具、效率工具专题互相推荐。",
      extraSections: [
        {
          title: "新手可以先试的三个场景",
          items: [
            "让代理在一个示例项目里跑测试，并把失败原因整理成中文清单。",
            "用集成浏览器打开本地页面，让代理截图并说明移动端布局问题。",
            "把一个小需求拆成计划、修改、diff 检查和人工确认四步，而不是直接要求它全自动完成。"
          ]
        },
        {
          title: "配置前先问自己",
          items: [
            "这个项目是否可以被 AI 代理读取和修改？",
            "使用的是 Copilot 默认模型、BYOK 模型，还是自定义兼容端点？",
            "代理运行命令时，网络、文件系统和敏感输入边界是否清楚？"
          ]
        }
      ]
    },
    {
      id: "vercel-blob-signed-urls-upload-security-guide",
      title: "Vercel Blob signed URLs：新手怎么给上传、下载和删除操作收窄权限",
      date: "2026-06-04",
      category: "建站工具",
      readTime: "8 分钟",
      excerpt: "Vercel 2026 年 6 月 2 日宣布 Blob 支持 signed URLs。开发者可以生成有时限、按操作和路径收窄范围的 URL，让浏览器直接上传、下载、检查或删除特定对象，而不需要把整个 Blob store 的长期 Token 暴露出去。",
      tags: ["Vercel Blob", "Signed URL", "建站安全"],
      featured: true,
      intro: [
        "做个人网站、资源库或后台上传功能时，很多新手会遇到一个矛盾：前端浏览器需要上传图片或下载附件，但你又不想把存储服务的完整权限交给浏览器。Vercel 2026 年 6 月 2 日发布的 Blob signed URLs，正好解决的是这个边界问题。",
        "signed URL 可以理解成一张临时通行证。它只允许某个操作，例如上传、下载、检查或删除；只对应一个 pathname；并且有过期时间，最长可以设到 7 天。这样浏览器可以直接把文件传到 Blob，或者读取一个指定文件，但拿不到整个 store 的长期读写 Token。"
      ],
      audience: [
        "正在给个人网站、作品集、资料库或管理后台做文件上传的新手",
        "想把图片、发票、头像、下载资源等放到 Vercel Blob，但担心前端权限过大的站长",
        "正在学习 OIDC、短期凭据、对象存储和上传安全边界的前端或全栈开发者"
      ],
      format: [
        "适合整理成“服务端签名 / 浏览器直传 / 条件删除 / OIDC 配合”的安全清单",
        "后续可以补一张上传流程图：用户选择文件、服务端签名、浏览器上传、回写资源地址、过期失效"
      ],
      roadmap: [
        "先理解作用域：signed URL 应该绑定具体操作、具体 pathname 和具体过期时间，不要把完整存储权限交给浏览器。",
        "再理解前后端分工：服务端通过 OIDC 或安全凭据生成签名，浏览器只拿到临时 URL 去完成这一次上传、下载或删除。",
        "最后关注并发和误删：删除 URL 可以配合 ifMatch，只有对象版本没有变化时才执行，避免签名后文件已被覆盖还继续删除。"
      ],
      officialLinks: [
        {
          label: "Vercel Changelog：Signed URLs are now available for Vercel Blob",
          url: "https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob",
          note: "本次 signed URLs 功能发布的原始来源，说明 put、get、head、delete、过期时间和 OIDC 配合。"
        },
        {
          label: "Vercel Docs：Vercel Blob signed URLs",
          url: "https://vercel.com/docs/vercel-blob/vercel-signed-urls",
          note: "适合继续查看签名 URL 的具体用法和代码入口。"
        }
      ],
      curatedLinks: [
        "不要让浏览器持有长期 BLOB_READ_WRITE_TOKEN。浏览器只应该拿到短期、受限、任务相关的 URL。",
        "上传 URL 适合头像、图片、附件这类单次任务；真正的权限判断和路径生成仍应放在服务端。",
        "删除操作要更谨慎。建议配合 ifMatch、日志和人工确认，避免用户或代理误删已经变化的对象。"
      ],
      downloadIdeas: [
        "可以整理一份 Vercel Blob 上传安全检查表",
        "可以补一个“普通公开 URL / signed URL / 服务端代理上传”的选择对照表"
      ],
      monetization: "适合承接 Vercel、对象存储、文件上传、个人站资源下载、全栈安全和 AI 代理权限控制类资源位；也可以和本站的建站、部署、环境变量和存储专题形成连载。",
      extraSections: [
        {
          title: "第一次接入先做这几步",
          items: [
            "把 @vercel/blob 升级到支持 signed URLs 的版本。",
            "在服务端生成只允许单个操作和单个 pathname 的签名 URL。",
            "让浏览器用这个临时 URL 上传或读取文件，然后在过期后重新申请。"
          ]
        },
        {
          title: "哪些场景特别适合",
          items: [
            "用户上传头像、封面图、作业附件或报名材料。",
            "给登录用户提供短期下载链接，而不是长期公开文件地址。",
            "让 AI 代理或自动化脚本只处理一个低风险对象，不接触整个存储空间。"
          ]
        }
      ]
    },
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
      excerpt: "Anthropic 在 Claude Code v2.1.157 中加入本地 .claude/skills 插件自动加载，并提供 claude plugin init ＜name＞ 脚手架。对新手来说，这是把常用提示、检查清单和团队流程从聊天记录整理成可复用工具的好入口。",
      tags: ["Claude Code", "Plugins", "Skills"],
      featured: true,
      intro: [
        "很多人用 AI 编程工具时，会反复粘贴同一段要求：怎么提交、怎么跑检查、怎么写报告、怎么处理安全边界。Claude Code 2026 年 5 月 29 日的 v2.1.157 发布说明把这个习惯往工具化推进了一步：.claude/skills 目录中的插件可以自动加载，不再必须依赖 marketplace；同时新增了 claude plugin init ＜name＞ 来脚手架化创建插件。",
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
          url: "https://code.visualstudio.com/docs/copilot/concepts/overview",
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
          url: "https://developer.microsoft.com/blog/improve-your-agentic-developer-tools-by-grounding-in-microsoft-learn",
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
      published: false,
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
      published: false,
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
      published: false,
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
      published: false,
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
      published: false,
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
      published: false,
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
  downloads: [
    {
      id: "website-launch-checklist",
      name: "静态网站上线检查表",
      category: "建站资料",
      badge: "本站原创",
      description: "覆盖内容、移动端、搜索、性能、安全、部署和上线后维护的完整检查包。",
      pitch: "适合个人主页、作品集、博客和资料站发布前逐项确认。",
      format: "ZIP · 4 个文件",
      includes: ["上线检查表", "页面清单 CSV", "发布记录模板"],
      updated: "2026-06-06",
      cta: "下载检查表",
      link: "downloads/website-launch-checklist.zip"
    },
    {
      id: "git-github-cheatsheet",
      name: "Git 与 GitHub 中文速查包",
      category: "开发工具",
      badge: "本站原创",
      description: "整理常用 Git 命令、提交说明模板、基础 gitignore 和安全恢复思路。",
      pitch: "适合刚开始版本控制、经常忘记命令或担心误操作的新手。",
      format: "ZIP · 4 个文件",
      includes: ["中文速查表", "提交模板", "gitignore 模板"],
      updated: "2026-06-06",
      cta: "下载速查包",
      link: "downloads/git-github-cheatsheet.zip"
    },
    {
      id: "vscode-starter-config",
      name: "VS Code 新手配置包",
      category: "开发工具",
      badge: "本站原创",
      description: "提供保守通用的工作区设置、扩展选择建议和常用代码片段。",
      pitch: "适合建立稳定编辑习惯，不依赖一次安装大量扩展。",
      format: "ZIP · 3 个文件",
      includes: ["settings.json", "扩展选择清单", "代码片段"],
      updated: "2026-06-06",
      cta: "下载配置包",
      link: "downloads/vscode-starter-config.zip"
    },
    {
      id: "ai-task-prompt-templates",
      name: "AI 任务提示词模板包",
      category: "AI 工具",
      badge: "本站原创",
      description: "包含学习解释、代码诊断、功能实现、内容写作、资料整理和方案评审模板。",
      pitch: "重点不是堆高级词，而是把目标、限制、验收和人工确认写清楚。",
      format: "ZIP · 3 个文件",
      includes: ["6 类提示词模板", "结果复核清单", "任务说明模板"],
      updated: "2026-06-06",
      cta: "下载模板包",
      link: "downloads/ai-task-prompt-templates.zip"
    },
    {
      id: "ai-agent-safety-checklist",
      name: "AI Agent 权限与安全检查包",
      category: "AI 安全",
      badge: "本站原创",
      description: "帮助个人和团队在代理读取文件、运行命令、连接工具前明确权限与审批边界。",
      pitch: "包含低中高风险操作矩阵，适合自动化和 AI 编程任务开始前使用。",
      format: "ZIP · 3 个文件",
      includes: ["安全检查表", "审批矩阵 CSV", "异常记录模板"],
      updated: "2026-06-06",
      cta: "下载安全包",
      link: "downloads/ai-agent-safety-checklist.zip"
    },
    {
      id: "static-site-starter",
      name: "个人静态网站起步模板",
      category: "建站模板",
      badge: "本站原创",
      description: "不依赖框架的响应式 HTML、CSS、JavaScript 个人主页模板，可直接修改和发布。",
      pitch: "适合第一次练习个人主页或作品集，并附带发布前修改清单。",
      format: "ZIP · 4 个文件",
      includes: ["响应式页面", "移动端菜单", "发布清单"],
      updated: "2026-06-06",
      cta: "下载网站模板",
      link: "downloads/static-site-starter.zip"
    }
  ],
  resources: [
    {
      name: "GitHub Git Cheat Sheet PDF",
      category: "版本控制",
      badge: "外部官方",
      description: "GitHub Training Kit 提供的常用 Git 命令英文速查 PDF。",
      pitch: "适合和本站中文速查包配合使用，遇到命令时回到官方资料核对。",
      cta: "打开官方 PDF",
      link: "https://training.github.com/downloads/github-git-cheat-sheet.pdf"
    },
    {
      name: "MDN 前端开发课程",
      category: "前端学习",
      badge: "外部官方",
      description: "Mozilla MDN 提供的前端核心能力与学习顺序指南。",
      pitch: "适合不确定 HTML、CSS、JavaScript 和可访问性学习顺序的新手。",
      cta: "打开官方课程",
      link: "https://developer.mozilla.org/en-US/curriculum/"
    },
    {
      name: "Microsoft 生成式 AI 入门课程",
      category: "AI 学习",
      badge: "外部官方",
      description: "微软开源的生成式 AI 入门课程，包含提示词、RAG、Agent 和安全主题。",
      pitch: "适合希望从使用 AI 工具进一步学习开发基础的人。",
      cta: "打开官方仓库",
      link: "https://github.com/microsoft/generative-ai-for-beginners"
    },
    {
      name: "OWASP Cheat Sheet Series",
      category: "建站安全",
      badge: "外部官方",
      description: "OWASP 维护的应用安全速查资料，覆盖认证、会话、上传和更多主题。",
      pitch: "适合开发登录、表单、上传和 API 功能时核对安全实践。",
      cta: "打开官方资料",
      link: "https://cheatsheetseries.owasp.org/"
    },
    {
      name: "Git 官方文档与在线书",
      category: "版本控制",
      badge: "外部官方",
      description: "Git 命令参考、概念说明与 Pro Git 在线书入口。",
      pitch: "命令不会背没关系，先知道最权威的查找入口更重要。",
      cta: "打开官方文档",
      link: "https://git-scm.com/docs"
    },
    {
      name: "VS Code 官方入门文档",
      category: "开发工具",
      badge: "外部官方",
      description: "Visual Studio Code 的基础使用、设置、扩展与工作区说明。",
      pitch: "使用本站配置包前，建议先理解编辑器自带能力与工作区设置。",
      cta: "打开官方文档",
      link: "https://code.visualstudio.com/docs/getstarted/getting-started"
    }
  ],
  resourcePathPostIds: [
    "vercel-drop-static-site-publish-guide",
    "qwen-code-018-stable-agent-workflow-guide",
    "claude-code-managed-model-allowlist-guide",
    "vercel-ai-sdk-harnessagent-beginner-guide",
    "github-copilot-code-review-controls-guide",
    "github-agentic-workflows-public-preview-guide"
  ],
  hotspots: [
    {
      date: "2026-06-19",
      tag: "AI 建站",
      title: "Cloudflare 推出 AI Agent 临时账号，支持先部署 Worker 再认领",
      summary: "Cloudflare 发布 Temporary Accounts for Agents：当 Agent 使用 Wrangler 部署 Worker 但没有 Cloudflare 凭据时，可以按 CLI 提示改用 `wrangler deploy --temporary`，先部署到临时预览账号，拿到 60 分钟内可认领的 claim URL，再由人决定是否转为正式账号。",
      why: "这让 Agent 可以完成“写代码、部署、访问验证”的闭环，同时避免一开始就暴露正式 API token。新手应把它用于原型、演示和可丢弃预览，并保留人工认领、验收和正式 CI/CD 的边界。",
      sourceLabel: "Cloudflare Blog",
      sourceUrl: "https://blog.cloudflare.com/temporary-accounts/",
      articleIdea: "已扩写：Cloudflare 临时账号下，AI Agent 怎样先部署、再认领和验收 Worker"
    },
    {
      date: "2026-06-19",
      tag: "AI 编程管理",
      title: "GitHub Copilot usage metrics API 新增 per-user AI credit 用量字段",
      summary: "GitHub Changelog 宣布 Copilot usage metrics API 在企业和组织级用户报表中加入 `ai_credits_used` 字段，可在单日和 28 日用户级报告中查看每个用户消耗的 AI credits；官方强调它是用量分析信号，不是最终账单明细。",
      why: "AI 编程工具进入用量计费后，团队不能只看席位数量，还要看哪些工作流真正消耗 credits、是否需要预算阈值和采用率分析。新手管理员应先把它用于趋势观察，不要把单一字段误当成模型或功能级成本归因。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-19-ai-credits-consumed-per-user-now-in-the-copilot-usage-metrics-api/",
      articleIdea: "候选：怎样用 Copilot usage metrics API 观察 AI credit 用量，而不把它误当账单"
    },
    {
      date: "2026-06-18",
      tag: "AI 团队管理",
      title: "OpenAI 为 ChatGPT Enterprise 增加 credit usage analytics 与 spend controls",
      summary: "OpenAI 发布 ChatGPT Enterprise 新用量分析和支出控制，Global Admin Console 可按用户、产品和模型查看 ChatGPT 与 Codex credit 消耗，并通过统一 Cost API 接入内部系统；管理员还可设置默认限制、分组限制和个人例外。",
      why: "Codex 等 AI 开发工具在企业内扩散后，治理重点会从“能不能用”转向“谁在用、花在哪里、怎样给高价值工作留额度”。这类功能适合团队建立透明预算和培训信号，但不应被简化成压低使用量的单一指标。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/chatgpt-enterprise-spend-controls/",
      articleIdea: "候选：研发团队怎样用 credit analytics 观察 Codex/ChatGPT 使用，而不是只做成本控制"
    },
    {
      date: "2026-06-18",
      tag: "AI 安全",
      title: "Cloudflare 拆解自动化漏洞发现 harness：从单次提示走向持续扫描流水线",
      summary: "Cloudflare Blog 发布 Build your own vulnerability harness，拆解多阶段漏洞发现与自动化 triage 架构，强调不要把未来寄托在单一模型、单个提示或一次性 agent session 上，而要用可替换模型、跨模型验证、状态控制和误报压缩来形成持续扫描流水线。",
      why: "对安全和平台团队来说，AI 漏洞发现的关键不是“换一个更强模型就够了”，而是把发现、验证、去重、跨仓依赖和人工修复队列设计成可审计系统。新手可先借鉴 harness 思路做只读扫描和结果复核，不要直接接入生产修复动作。",
      sourceLabel: "Cloudflare Blog",
      sourceUrl: "https://blog.cloudflare.com/build-your-own-vulnerability-harness/",
      articleIdea: "候选：怎样把 AI 漏洞扫描从一次性 prompt 改成可复核的 harness"
    },
    {
      date: "2026-06-18",
      tag: "AI Agent",
      title: "Google 回顾 A2A 一周年：多 Agent 协作开始从概念走向工程交接",
      summary: "Google Developers Blog 介绍 A2A 协议一周年进展，强调专门 Agent 可以通过共同协议安全接手任务，帮助主 Agent 避免上下文污染，并把生命科学、支付、实时数据、DevOps 和受监管网络等场景拆给专业能力处理。",
      why: "这提示新手不要把多 Agent 理解成“更多聊天窗口”，而要关注交接边界、最小输入、输出验收和审计记录。A2A 适合处理需要专门能力、独立状态或敏感边界的任务，不适合把所有普通工具调用都复杂化。",
      sourceLabel: "Google Developers Blog",
      sourceUrl: "https://developers.googleblog.com/how-a2a-is-building-a-world-of-collaborative-agents/",
      articleIdea: "已扩写：Google A2A 协作 Agent 新手交接、边界和验收清单"
    },
    {
      date: "2026-06-18",
      tag: "AI 编程",
      title: "MAI-Code-1-Flash 扩展到更多 GitHub Copilot 使用入口",
      summary: "GitHub 宣布 Microsoft 的小型编码模型 MAI-Code-1-Flash 现在可用于 Copilot CLI、GitHub Copilot app、GitHub.com Copilot Chat、Visual Studio、GitHub Mobile、JetBrains IDE、Eclipse 和 Xcode；Free、Student、Pro、Pro+ 与 Max 计划逐步开放。",
      why: "小模型进入更多 Copilot 入口后，日常补全、轻量问答和低延迟任务可能会有更多默认选择。新手应把它当作“适合小而快任务的候选模型”，并用自己的仓库任务对比质量、速度和是否支持团队策略。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-18-mai-code-1-flash-available-on-more-copilot-surfaces/",
      articleIdea: "候选：怎样在 Copilot 多入口里评估小型编码模型的速度、质量和适用任务"
    },
    {
      date: "2026-06-18",
      tag: "代码审查",
      title: "Copilot code review 支持仓库根目录 AGENTS.md，并改进草稿 PR 请求入口",
      summary: "GitHub Changelog 说明 Copilot code review 现在会读取仓库根目录的 AGENTS.md，并把相关说明用于审查反馈；同时草稿 PR 可以更直接地通过 reviewer picker 请求 Copilot，时间线中的部分 Copilot review 事件也会折叠显示。",
      why: "这让团队约定、代码风格和审查重点更容易进入 AI 代码审查流程。新手应先把 AGENTS.md 写成可执行规则，而不是口号，并用草稿 PR 检查 Copilot 是否真的按仓库约定给出反馈。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-18-copilot-code-review-agents-md-support-and-ui-improvements/",
      articleIdea: "候选：AGENTS.md 怎样写，才能让 AI 代码审查更贴近仓库约定"
    },
    {
      date: "2026-06-17",
      tag: "Agent 安全",
      title: "Vercel Connect 公测：让 Agent 按任务获取短期外部服务 token",
      summary: "Vercel 发布 Connect 公测，应用和 Agent 可以通过 connector 访问 Slack、GitHub、Salesforce、自定义 API 和 MCP server 等外部服务，并在运行时请求短期、可收窄范围的 token，减少在环境变量中保存长期 provider secret 的需求。",
      why: "Agent 接外部服务时最容易出问题的是长期密钥、权限过宽和环境混用。Vercel Connect 把 connector、scoped token、环境绑定、撤销和触发器放到同一套流程里，适合新手学习最小权限接入。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/vercel-connect-secure-access-to-external-services-for-your-agents",
      articleIdea: "已扩写：Vercel Connect 公测后，Agent 怎样安全访问 Slack、GitHub 和外部服务"
    },
    {
      date: "2026-06-17",
      tag: "AI Agent",
      title: "Vercel 发布 eve 公测，把 Agent 定义成可读的文件目录",
      summary: "Vercel 宣布 eve open-source agent framework 进入 public preview。eve 采用 filesystem-first 方式组织 Agent，目录中可以包含模型配置、instructions、tools、skills、subagents、channels 和 schedules，并内置 durable execution、sandboxed compute、human-in-the-loop approvals 与 evals。",
      why: "这与近期 Flue、Agents SDK、Copilot agent finder 的方向一致：Agent 正从单个提示词走向可版本化、可审查、可运行的工程单元。新手可以先观察文件结构和审批边界，再决定是否把真实渠道接进去。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework",
      articleIdea: "候选：filesystem-first Agent 框架怎样帮助团队审查 tools、skills、channels 和 schedules"
    },
    {
      date: "2026-06-17",
      tag: "AI Agent",
      title: "GitHub Copilot agent finder 上线，开始按任务发现 MCP、skills 与 agents",
      summary: "GitHub 发布 Copilot agent finder：开发者用自然语言描述任务后，Copilot 会在指定 registry 中搜索 AI resources，返回排序后的候选，并按需拉取相关 MCP servers、skills、agents、canvases 或 tools；官方说明它实现了开放的 ARD 规范。",
      why: "这能减少“把所有工具都预加载进上下文”的做法，但也把资源来源、registry 信任、权限审批和安装记录变成新的基础工作。新手应先用只读任务验证候选，再决定是否长期保留。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/",
      articleIdea: "已扩写：GitHub Copilot agent finder 与 ARD 新手接入流程"
    },
    {
      date: "2026-06-17",
      tag: "AI Agent",
      title: "Cloudflare 介绍 Flue 如何把 Agent framework 接到 Agents SDK 运行时",
      summary: "Cloudflare 介绍 Flue 作为首个构建在 Agents SDK primitives 之上的开放框架，强调 framework、harness、runtime 三层分工，并把 durable execution、dynamic code execution、durable filesystem 和 dynamic workflows 作为生产 Agent 的底座能力。",
      why: "Agent 从本地演示走向生产时，最容易出问题的是中断恢复、沙箱执行、状态持久化和工具凭据隔离。把这些能力放到运行时层，可以让新手先测试恢复和审批，再扩展到 Slack、GitHub、Linear 等 channel。",
      sourceLabel: "Cloudflare Blog",
      sourceUrl: "https://blog.cloudflare.com/agents-platform-flue-sdk/",
      articleIdea: "已扩写：Cloudflare Flue 与 Agents SDK 分层、恢复和沙箱验收路线"
    },
    {
      date: "2026-06-17",
      tag: "AI 编程",
      title: "GitHub Copilot app 正式 GA，桌面端成为 agent-driven development 入口",
      summary: "GitHub 宣布 Copilot app 已在 macOS、Windows 和 Linux 上正式可用，定位为原生 GitHub 的 agent-driven development 桌面入口，可从应用中启动 Copilot 会话并围绕仓库与 pull request 工作。",
      why: "桌面 Agent 工具会把本地文件、GitHub 登录状态、PR 审查和长任务会话放到同一个入口。团队启用前应检查账户范围、仓库权限、会话日志、可回滚提交和是否需要独立测试仓库。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/",
      articleIdea: "候选：GitHub Copilot app GA 后，怎样用测试仓库验证桌面 Agent 工作流"
    },
    {
      date: "2026-06-17",
      tag: "开发工具",
      title: "GitHub CLI 新增 gh repo read-file 与 read-dir，可不克隆读取远程仓库内容",
      summary: "GitHub CLI 增加 `gh repo read-file` 和 `gh repo read-dir`，开发者可以直接从终端读取有权限访问的公开或私有仓库文件与目录；官方示例场景包括快速查看 README、检查配置、自动化脚本和 AI agent workflow。",
      why: "这对排查、脚本和 Agent 很实用：很多任务只需要读远程配置，不需要完整 clone。新手应先确认 gh 版本、仓库权限和输出记录，避免把只读检查误升级成写入或部署流程。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-17-read-remote-repository-content-with-github-cli/",
      articleIdea: "候选：怎样用 gh repo read-file / read-dir 做远程仓库只读检查和 Agent 上下文补充"
    },
    {
      date: "2026-06-17",
      tag: "AI 编程",
      title: "Qwen Code v0.18.3 发布，继续修复 CLI 提示、计划模式和提问取消流程",
      summary: "QwenLM/qwen-code 在 6 月 17 日连续发布 v0.18.2 与 v0.18.3，最新版本包含取消 ask_user_question 后停止、slash suggestion 描述单行截断、release PR 检查、以及 plan mode 中 `exit_plan_mode` 声明等修复。",
      why: "这类小版本不适合写成大文章，但对日常 Agent CLI 稳定性很关键。使用 Qwen Code 的读者应关注升级后的计划模式、提问取消、提示渲染和团队自动化发布检查是否符合预期。",
      sourceLabel: "Qwen Code GitHub Releases",
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3",
      articleIdea: "候选：Qwen Code 小版本升级后，怎样回归测试 CLI 交互、计划模式和 release 检查"
    },
    {
      date: "2026-06-16",
      tag: "AI Agent",
      title: "Cloudflare Agents SDK v0.16.1 强化浏览器自动化、Codemode 与恢复能力",
      summary: "Cloudflare 发布 Agents SDK v0.16.1，Agent 现在可以通过 Browser Run 使用耐久 `browser_execute` 工具操作真实浏览器，通过 Codemode 用 typed connectors 执行外部系统代码，并在部署、Durable Object 回收和连接波动后更可靠地恢复。",
      why: "这类能力让 AI Agent 更接近真实生产流程，但也带来审批、回放、浏览器会话和审计边界。新手应先从只读页面检查、审批暂停和恢复验证开始，而不是直接让 Agent 操作生产后台。",
      sourceLabel: "Cloudflare Changelog",
      sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-06-16-agents-sdk-v0161/",
      articleIdea: "已扩写：Cloudflare Agents SDK v0.16.1 新手接入浏览器自动化、Codemode 与恢复机制"
    },
    {
      date: "2026-06-16",
      tag: "开发环境",
      title: "Vercel Sandbox 最长运行时间从 5 小时提高到 24 小时",
      summary: "Vercel Sandbox 现在可运行最长 24 小时的不间断会话，面向大规模数据处理、端到端测试流水线和长时间 agentic workflow；官方建议可与 persistent sandboxes 搭配使用，让扩展运行期间保留状态。",
      why: "更长沙箱适合 AI 代理跑测试、构建和批处理，但也更需要停止条件、日志、资源上限和状态清理。把超时调长前，应先确认任务是否真的需要 24 小时以及失败后怎样恢复。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/vercel-sandbox-can-now-run-for-up-to-24-hours",
      articleIdea: "候选：Vercel Sandbox 24 小时会话下，怎样给长测试和 AI 代理任务设置停止条件"
    },
    {
      date: "2026-06-16",
      tag: "Codex",
      title: "OpenAI Codex 将桌面控制、Chrome 扩展和记忆能力扩展到 EEA、英国与瑞士",
      summary: "OpenAI Codex changelog 显示，EEA、英国和瑞士用户开始获得更多 Codex app 能力：macOS 与 Windows Computer Use、Codex Chrome extension、可选 Memories，以及面向 ChatGPT Pro macOS 用户的 Chronicle 研究预览。",
      why: "这说明本地应用控制、已登录浏览器任务和长期偏好记忆正在覆盖更多地区。团队启用前仍要检查区域默认值、记忆是否开启、浏览器登录上下文和敏感操作审批。",
      sourceLabel: "OpenAI Codex Changelog",
      sourceUrl: "https://developers.openai.com/codex/changelog?type=codex-app#month-2026-06",
      articleIdea: "候选：Codex 区域功能扩展后，怎样检查 Computer Use、Chrome 扩展和记忆默认值"
    },
    {
      date: "2026-06-16",
      tag: "代码质量",
      title: "GitHub Code Quality 将在 2026 年 7 月 20 日进入 GA 并改为付费产品",
      summary: "GitHub 宣布 Code Quality 将在 2026 年 7 月 20 日从 public preview 转为 GA，可购买使用；定价包含每月每活跃提交者 10 美元基础订阅，以及 Copilot code review、AI-assisted detection、Copilot Autofix 等 AI 能力的用量计费。",
      why: "代码质量门禁、覆盖率规则和 AI 审查会直接影响团队成本与合并流程。管理员应在 7 月 20 日前确认哪些仓库启用、哪些质量阈值会阻止合并，以及是否需要关闭不再使用的仓库配置。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-16-github-code-quality-generally-available-july-20-2026",
      articleIdea: "候选：GitHub Code Quality GA 前，怎样盘点仓库启用范围、质量门禁和 AI 用量成本"
    },
    {
      date: "2026-06-16",
      tag: "AI 模型",
      title: "Vercel AI Gateway 接入 GLM 5.2，模型上下文窗口升级到 100 万 token",
      summary: "Vercel AI Gateway 新增 `zai/glm-5.2`，官方称它面向长周期工程任务，能在单个任务中保留项目级上下文，并把上下文窗口从 GLM 5.1 的 20 万 token 提高到 100 万 token。",
      why: "大上下文模型适合长代码库分析和多文件修改，但也更容易放大提示、成本和验证难度。新手应先用小仓库对比输出质量、调用费用、重试行为和是否真的需要 100 万 token。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/glm-5-2-now-available-on-ai-gateway",
      articleIdea: "候选：GLM 5.2 接入 AI Gateway 后，怎样评估大上下文模型是否适合工程任务"
    },
    {
      date: "2026-06-15",
      tag: "建站工具",
      title: "Vercel Functions 的 Node.js 与 Python 运行时可设置最长 30 分钟",
      summary: "Vercel Functions 现在支持在 Pro 和 Enterprise 团队中把 Node.js、Python 运行时的执行时间设置到 30 分钟，适合长 LLM 推理、几分钟流式响应、文档和媒体处理、OCR、网页抓取、浏览器自动化、Workflow 步骤和 Queue handler。",
      why: "更长时长能减少 AI 长任务被硬超时截断的情况，但官方明确说明超过 800 秒仍处于 beta，并要求 Fluid Compute。站长应只给必要路径设置 `maxDuration`，同时验证成本、日志、幂等重试和失败提示。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/vercel-functions-can-now-run-up-to-30-minutes",
      articleIdea: "选题：Vercel 30 分钟 Functions 入门，怎样给 AI 长任务设置超时、队列和验收边界"
    },
    {
      date: "2026-06-15",
      tag: "开发安全",
      title: "Claude Code v2.1.178 增加参数级权限规则，并强化嵌套 Skills 与 subagent 检查",
      summary: "新版增加 `Tool(param:value)` 权限匹配和通配符，支持在嵌套 `.claude/skills` 中加载目录级 skill，并让最近目录的 agent、workflow、output-style 在冲突时优先生效；自动模式下 subagent 启动前也会先经过分类器检查。",
      why: "这些改动直接影响 monorepo、团队模板、subagent 权限和远程控制排错。升级后不能只看版本号，应回归测试允许/拒绝规则、同名 skill、project-scope workflow 保存位置和后台会话状态。",
      sourceLabel: "Claude Code GitHub Release",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.178",
      articleIdea: "选题：Claude Code v2.1.178 升级后怎样回归测试权限、嵌套 Skills、subagent 与远程控制"
    },
    {
      date: "2026-06-15",
      tag: "AI 管理",
      title: "Copilot 使用指标引入服务端遥测，活跃用户统计会更接近账单与活动日志",
      summary: "GitHub Copilot usage metrics API 现在会把服务端确认的活跃用户补进单日和 28 天企业报告，使部分过去因客户端遥测缺失而没有出现在报表里的已活跃、已计费用户被统计进 DAU。",
      why: "团队可能看到顶层活跃用户数上升，但这些新增用户暂时不会带来 IDE、功能、模型或代码行等细分维度。管理者应把它看成指标口径变化，并重新解释采用率、成本归因和缺失明细。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-15-copilot-usage-metrics-now-include-more-of-your-active-users/",
      articleIdea: "候选：Copilot 活跃用户统计口径变化后，怎样重读 DAU、明细缺口与成本报表"
    },
    {
      date: "2026-06-15",
      tag: "Web 开发",
      title: "Auth0 加入 Vercel Marketplace，可为 Next.js 项目自动配置登录能力",
      summary: "Vercel Marketplace 新增 Auth0 集成，支持为 Vercel 项目自动创建 Auth0 application，面向 Next.js 应用提供 Auth0 Next.js SDK、用户管理、sessions、roles，并在 Development、Preview、Production 环境之间同步认证配置。",
      why: "身份系统常常是原型走向生产的第一道门槛。Marketplace 集成可以减少手工复制回调地址和环境变量的错误，但仍要核对环境隔离、角色权限、回调 URL、密钥管理和预览环境登录行为。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/auth0-joins-the-vercel-marketplace",
      articleIdea: "候选：Next.js 项目第一次接入 Auth0 时，怎样检查环境、回调地址和角色边界"
    },
    {
      date: "2026-06-15",
      tag: "前端体验",
      title: "WebKit 提醒 Customizable Select 不能只用图标或色块替代选项文本",
      summary: "Safari 27 将支持 Customizable Select，开发者可以样式化原生 `＜select＞`，但 WebKit 强调每个 `option` 必须保留文本内容或可访问文本属性；图标、色块和插图只能增强选项，不能替代含义。",
      why: "只用视觉元素会同时破坏普通用户理解、屏幕阅读器输出和不支持新特性的浏览器回退。前端新手应把文字当作基线，再用 `@supports (appearance: base-select)` 增强样式。",
      sourceLabel: "WebKit Blog",
      sourceUrl: "https://webkit.org/blog/18117/the-golden-rule-of-customizable-select/",
      articleIdea: "候选：Customizable Select 新特性下，怎样同时保留文字、可访问性和渐进增强"
    },
    {
      date: "2026-06-15",
      tag: "建站工具",
      title: "Vercel 将 Hobby 用户可创建的 Blob store 上限从 5 个提高到 100 个",
      summary: "Vercel Hobby 用户现在最多可以创建 100 个 Blob store，适合按项目、环境或区域拆分对象存储；官方同时提醒，存储容量、操作次数和传输量限制仍然适用。",
      why: "更多 store 能改善原型和多个小站之间的隔离，但不代表免费容量同步扩大。站长仍应记录每个 store 的用途、访问方式和清理责任，并在拆分前检查用量与费用限制。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/increased-blob-store-limit-for-hobby-users",
      articleIdea: "候选：多个个人站怎样划分 Blob store，并避免把数量上限误当成容量上限"
    },
    {
      date: "2026-06-13",
      tag: "Web 开发",
      title: "Vercel Workflow SDK 在 Nitro v3 原生运行，步骤可直接使用服务器端 API",
      summary: "Workflow SDK 与 Nitro v3 的原生集成进入 beta，`use step` 函数现在与应用其余部分运行在同一打包运行时，可直接调用 Nitro `useStorage()` 等服务器 API；开发服务器还会在 `/_workflow` 提供工作流检查与调试界面。",
      why: "原生集成减少了独立 bundle 与运行时之间的割裂，依赖追踪和 tree-shaking 也有助于缩小构建输出；但 beta 阶段仍应先验证存储、重试、长任务和部署行为，再迁移关键工作流。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/workflow-sdk-now-runs-natively-in-nitro-v3",
      articleIdea: "候选：Nitro v3 原生 Workflow SDK 入门，怎样编写、观察和调试第一个持久化步骤"
    },
    {
      date: "2026-06-13",
      tag: "开发工具",
      title: "Claude Code v2.1.176 修补模型白名单绕过，并集中修复远程控制与 Windows 后台会话",
      summary: "新版阻止模型别名通过 `ANTHROPIC_DEFAULT_*_MODEL` 环境变量跳转到白名单外模型，`/fast` 也会拒绝切换到禁止模型；同时修复远程控制静默切换模型、Windows 后台服务只读目录、后台会话恢复和 hooks 路径条件等问题。",
      why: "这是 v2.1.175 模型治理更新后的关键补丁，说明白名单、别名、快捷切换和远程会话必须一起验证。使用后台 Agent 或远程控制的团队应升级后复测实际模型、目录、账号切换与 daemon 状态。",
      sourceLabel: "Claude Code GitHub Release",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.176",
      articleIdea: "候选：Claude Code 升级后怎样回归测试模型白名单、Remote Control 与 Windows 后台服务"
    },
    {
      date: "2026-06-12",
      tag: "建站工具",
      title: "Vercel Drop 支持把文件、文件夹或 ZIP 直接拖进浏览器发布",
      summary: "Vercel Drop 不要求 Git、CLI 或本地配置，可直接上传静态站或框架项目并发布到生产网址；框架项目会自动检测和构建，静态站顶层没有 `index.html` 时可以手动选择根页面。",
      why: "它适合原型、一次性站点和首次上线验证，但每次拖拽都会创建新项目，也不会随代码提交自动部署。需要持续更新时应连接 Git，并重新核验根页面、资源路径、构建结果和敏感文件边界。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/vercel-drop",
      articleIdea: "选题：Vercel Drop 拖拽发布入门，怎样先上线原型，再迁移到 Git 持续部署"
    },
    {
      date: "2026-06-12",
      tag: "AI 运维",
      title: "Cloudflare AI Gateway 日志新增 User-Agent 记录与筛选",
      summary: "AI Gateway 日志现在会记录发起请求的客户端 User-Agent，并支持等于、不等于和包含筛选，可区分 `openai-python`、自定义应用或 Cloudflare Worker 等流量来源。",
      why: "多 SDK、多应用共用网关时，客户端标识能帮助定位异常请求、迁移影响和成本来源；但 User-Agent 可以缺失或被修改，仍应结合 API key、项目标签、请求元数据和实际日志判断。",
      sourceLabel: "Cloudflare Changelog",
      sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-06-12-user-agent-logging/",
      articleIdea: "候选：AI Gateway 多客户端排查清单，怎样结合 User-Agent、密钥与元数据定位请求"
    },
    {
      date: "2026-06-12",
      tag: "国产 AI",
      title: "Qwen Code v0.18.0 发布稳定版，整合 Skills、记忆、后台 Agent 与计划审批",
      summary: "Qwen Code v0.18.0 把此前 nightly 中的大批能力带入稳定版，包括 `/skills` 选择器、用户级自动记忆、`/fork` 后台 Agent、`/stats` 跨会话统计、`/compress-fast`、Plan Approval Gate、默认 loop/cron 工具，以及桌面应用和 ACP 集成改进。",
      why: "稳定版让终端 Agent 的长期指令、复用流程、后台任务和上下文管理更容易组合，但功能面明显扩大后，权限、定时触发、自动记忆与实验性 Agent Team 都需要分层启用，并以实际 diff、测试和日志验收。",
      sourceLabel: "Qwen Code GitHub Release",
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0",
      articleIdea: "选题：Qwen Code v0.18.0 稳定版入门，怎样组合 Skills、记忆、计划审批与后台任务"
    },
    {
      date: "2026-06-12",
      tag: "开发安全",
      title: "Claude Code v2.1.175 强化托管模型白名单，Default 也不能绕过组织限制",
      summary: "新版新增 `enforceAvailableModels` 托管设置：启用后，`availableModels` 白名单会同时约束 Default 模型；如果 Default 解析到禁止模型，会回退到第一个允许模型，用户或项目设置也不能扩大托管列表。",
      why: "模型选择会影响费用、合规、数据范围和结果复现，仅隐藏选择器选项并不足够。管理员应在测试设备验证 Default、子 Agent、advisor 与错误配置行为，并通过 `claude doctor` 检查策略后再分批部署。",
      sourceLabel: "Claude Code GitHub Release",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.175",
      articleIdea: "选题：Claude Code 模型白名单治理入门，怎样验证 Default 回退与组织策略边界"
    },
    {
      date: "2026-06-12",
      tag: "开发工具",
      title: "Claude Code v2.1.174 增加细分用量归因，并修复后台会话继承错误 Provider 环境",
      summary: "VS Code 的 Account & usage 对话框现在可按缓存未命中、长上下文、子 Agent、Skill、Agent、插件与 MCP 查看最近 24 小时或 7 天用量；新版还修复后台会话错误继承启动 daemon 的 `ANTHROPIC_*` Provider 环境变量等问题。",
      why: "细分归因有助于定位成本和上下文膨胀来源，Provider 环境隔离修复则降低后台任务使用错误网关、请求头或模型别名的风险；升级后仍应检查实际路由、账单与关键后台任务日志。",
      sourceLabel: "Claude Code GitHub Release",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.174",
      articleIdea: "候选：Claude Code 用量归因与后台会话排查清单，怎样定位成本和 Provider 配置漂移"
    },
    {
      date: "2026-06-12",
      tag: "AI 模型",
      title: "Anthropic 暂停所有客户访问 Claude Fable 5 与 Mythos 5，其他 Claude 模型不受影响",
      summary: "Anthropic 表示已遵从美国政府的出口管制指令，暂停所有客户对 Fable 5 与 Mythos 5 的访问，并正在争取恢复；官方明确说明其他 Anthropic 模型不受影响。",
      why: "依赖单一前沿模型的应用可能突然失去可用性。团队应把模型可用性视为运行风险，准备可验证的替代模型、路由切换、质量回归与用户提示，而不是只在模型发布时更新配置。",
      sourceLabel: "Anthropic",
      sourceUrl: "https://www.anthropic.com/news/fable-mythos-access",
      articleIdea: "候选：前沿模型突然不可用时，怎样准备路由回退、质量回归与用户沟通"
    },
    {
      date: "2026-06-12",
      tag: "国产 AI",
      title: "Moonshot AI Kimi K2.7 Code 上线 Workers AI，支持长上下文、视觉与多轮工具调用",
      summary: "Cloudflare 上线代码优化模型 Kimi K2.7 Code：采用 1T 总参数、每 token 激活 32B 的 MoE 架构，提供 262.1k token 上下文、视觉输入、多轮工具调用和 JSON Schema 结构化输出，并称其较 K2.6 少用 30% 推理 token。",
      why: "长上下文和多轮工具调用适合持续编码与 Agent 任务，且从 K2.6 迁移时 API 参数无需变化；实际采用前仍要用自己的代码库评估质量、延迟和费用，并把官方 benchmark 视为供应方测试结果。",
      sourceLabel: "Cloudflare Changelog",
      sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-06-12-kimi-k2-7-code-workers-ai/",
      articleIdea: "候选：Kimi K2.7 Code 新手评测清单，怎样验证长上下文、工具调用与推理成本"
    },
    {
      date: "2026-06-12",
      tag: "AI Agent",
      title: "Vercel AI SDK 7 引入 HarnessAgent，用统一接口运行 Claude Code、Codex 与 Pi",
      summary: "实验性的 `HarnessAgent` 把 Claude Code、Codex 与 Pi 等成熟 agent harness 接入同一 API，统一处理 skills、沙箱、会话、权限流程、上下文压缩、运行配置和子 Agent，并支持 AI SDK 风格的 `generate()` 与 `stream()` 结果。",
      why: "统一接口让团队更容易切换和比较 harness，也能复用现有 AI SDK 界面；但当前 adapters 位于 canary release，官方明确提示可能出现破坏性变化，首次实验应限制在可销毁沙箱和可验证任务中。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk",
      articleIdea: "选题：AI SDK HarnessAgent 入门，怎样在沙箱中统一运行并比较不同编码 Agent"
    },
    {
      date: "2026-06-12",
      tag: "AI 代码审查",
      title: "Copilot Code Review 新增组织级 Runner、内容排除与更完整自定义指令",
      summary: "GitHub 现在允许组织管理员为 Copilot Code Review 设置并锁定默认 runner；代码审查开始遵守仓库、组织和企业级内容排除规则，同时移除了 `.github` 自定义指令文件原有的 4000 字符读取上限。",
      why: "三项变化分别控制审查在哪里运行、可以读取什么、应遵循哪些规则，适合多仓库统一治理；团队仍需通过测试 PR 验证实际行为，并保留权限控制、测试、分支保护和人工复核。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls/",
      articleIdea: "选题：Copilot Code Review 新控制项入门，怎样设置 runner、内容排除与仓库指令"
    },
    {
      date: "2026-06-12",
      tag: "CI/CD",
      title: "GitHub Actions 公布自托管 Runner 最低版本与强制升级时间表",
      summary: "自托管 runner 重新注册必须达到 `2.329.0` 或更高版本，并要在每次新版本发布后 30 天内升级才能继续接收任务；Data Residency 环境将在 7 月 31 日全面执行，GitHub Enterprise Cloud 将在 9 月 25 日全面执行。",
      why: "只升级到一次性最低版本并不足够，关闭自动更新的 runner、旧镜像和缓存模板都可能在 brownout 或正式执行后停止接单；团队应尽快盘点版本、更新镜像与安装脚本，并监控运行时注释。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-12-github-actions-minimum-version-enforcement-timeline-for-self-hosted-runners/",
      articleIdea: "候选：GitHub Actions 自托管 Runner 升级清单，怎样避免 CI 在强制执行日停摆"
    },
    {
      date: "2026-06-11",
      tag: "AI Agent",
      title: "GitHub Agentic Workflows 进入公测，可用 Markdown 定义推理型工程自动化",
      summary: "GitHub Agentic Workflows 允许开发者用自然语言 Markdown 定义 issue 分类、CI 失败分析和文档更新等任务，再编译为标准 Actions YAML，复用现有 runner group 与策略约束。",
      why: "Agent 现在可以进入熟悉的 Actions 工作流，但公测阶段更应从只读、小范围、可审查任务开始。官方提供只读默认权限、沙箱、防火墙、safe outputs 和 threat detection，团队仍需检查生成的 YAML、日志、测试与最终差异。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/",
      articleIdea: "选题：GitHub Agentic Workflows 进入公测：新手怎样用 Markdown 安全自动化 issue、CI 与文档任务"
    },
    {
      date: "2026-06-11",
      tag: "AI 编程",
      title: "OpenAI 宣布拟收购 Ona，为 Codex 增加客户可控的持久云端执行环境",
      summary: "OpenAI 宣布拟收购 Ona，并计划把其安全云端执行与编排技术带入 Codex，让 Agent 可在客户自己的云环境中持续工作，在笔记本关闭后仍保留工具、系统与上下文。",
      why: "长时间 Agent 任务不仅需要模型能力，也需要明确的运行位置、凭据范围、活动日志和审查流程。该交易仍需满足惯常交割条件与监管批准，在完成前两家公司保持独立。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/openai-to-acquire-ona/",
      articleIdea: "候选：长时间 AI Agent 为什么需要持久环境、最小权限与可审查日志"
    },
    {
      date: "2026-06-11",
      tag: "开发工具",
      title: "GitHub Copilot CLI 新增 /settings，把分散配置集中到统一入口",
      summary: "新的 `/settings` 命令支持全屏搜索界面、行内设置、重置默认值和脚本调用，可管理原本分散在独立命令或配置文件中的选项，并在写入前执行 schema 校验。",
      why: "统一入口能减少新手猜键名、写错值类型和破坏配置文件的概率，也便于记录与回退单项修改；但会话同步、实验功能和其他敏感设置仍需按团队政策逐项判断。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-11-copilot-cli-configure-everything-from-one-place-with-settings/",
      articleIdea: "选题：Copilot CLI 新增 /settings：新手怎样统一管理自动更新、会话同步与实验设置"
    },
    {
      date: "2026-06-11",
      tag: "开发安全",
      title: "GitHub Agentic Workflows 可使用内置 GITHUB_TOKEN，不再需要长期 PAT",
      summary: "组织仓库中的 Agentic Workflow 现在可使用 GitHub Actions 内置 `GITHUB_TOKEN`，并通过 `copilot-requests: write` 权限把 AI credits 直接计入组织；官方同时提供 cost center 与单次运行费用控制。",
      why: "减少长期 PAT 能降低密钥存储、轮换和泄露风险，但内置令牌仍应遵循最小权限。组织级计费不会参考用户级推理预算，启用前必须配置成本归属、运行上限和审查流程。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/",
      articleIdea: "候选：Agentic Workflow 不再需要 PAT 后，怎样同时收紧权限与费用边界"
    },
    {
      date: "2026-06-11",
      tag: "CI/CD",
      title: "github-actions[bot] 创建的 PR 经人工批准后可运行 CI/CD",
      summary: "由 `github-actions[bot]` 创建的 PR 现在可在拥有仓库写权限的用户批准后运行 CI/CD，解决机器人改动可能在未经过 CI 的情况下被误合并的问题。",
      why: "人工批准既让自动生成的改动可以接受正常测试，也防止未经审查的代码自动运行可能访问敏感信息的工作流。团队仍应把必需检查与分支保护配置为合并前门槛。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-11-bot-created-pull-requests-can-run-workflows-if-approved/",
      articleIdea: "候选：机器人 PR 可以跑 CI 后，怎样设置审批与分支保护"
    },
    {
      date: "2026-06-10",
      tag: "开发安全",
      title: "GitHub Copilot CLI 增加实验性 /security-review，支持提交前检查本地改动",
      summary: "Copilot CLI 的新命令会分析当前本地代码改动，返回按严重性和置信度整理的安全发现与修复建议，重点覆盖注入、跨站脚本、不安全数据处理、路径遍历和弱加密等风险。",
      why: "把安全检查放到提交前能更早发现常见漏洞，但该命令仍是 public preview 中的实验功能，只报告高置信度发现。开发者仍需检查 diff、运行测试，并结合 CodeQL、依赖与密钥扫描。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-10-dedicated-security-review-command-now-available-in-copilot-cli/",
      articleIdea: "选题：Copilot CLI 加入 /security-review：新手怎样把 AI 安全审查放到提交前"
    },
    {
      date: "2026-06-10",
      tag: "AI 模型",
      title: "Google 发布实验性 DiffusionGemma，以并行文本扩散探索更快本地生成",
      summary: "DiffusionGemma 是基于 Gemma 4 的 26B MoE 开放模型，推理时激活 3.8B 参数，通过并行生成和迭代优化 256-token 区块，在专用 GPU 上可实现最高约 4 倍的文本生成速度。",
      why: "并行生成适合低并发、本地和强调响应速度的交互流程，也能利用双向上下文进行自我修正；但 Google 明确说明它是实验模型，整体输出质量低于标准 Gemma 4，量化运行仍需要约 18GB VRAM。",
      sourceLabel: "Google Developers Blog",
      sourceUrl: "https://developers.googleblog.com/diffusiongemma-the-developer-guide/",
      articleIdea: "候选：DiffusionGemma 新手实验路线：先理解速度、显存与输出质量取舍"
    },
    {
      date: "2026-06-10",
      tag: "AI Agent",
      title: "Copilot Chat 可查看进行中的 Agent 状态，并搜索和追问历史会话",
      summary: "GitHub 改进网页端 Copilot Chat 与 Copilot cloud agent 的交接：Chat 现在会显示进行中会话状态，并可读取 Agent 日志、按主题、标题或时间搜索历史会话，再继续追问或启动新任务。",
      why: "Agent 长任务如果只有最终 PR，很难理解过程、验证内容和决策原因。会话日志与搜索能改善交接和复盘，但团队仍应以代码差异、测试结果和可审计记录作为最终依据。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-10-copilot-chat-now-sees-your-agent-sessions",
      articleIdea: "候选：怎样用 Agent 日志和会话搜索复盘 AI 编程任务"
    },
    {
      date: "2026-06-09",
      tag: "供应链安全",
      title: "npm v12 预告收紧安装默认值，将阻止未批准脚本与远程依赖",
      summary: "预计 2026 年 7 月发布的 npm v12 将默认关闭依赖安装脚本，并默认禁止 Git 与远程 URL 依赖。npm 11.16.0 或更高版本已提供警告与 `npm approve-scripts` 迁移工具。",
      why: "新默认值能缩小安装阶段执行恶意代码的风险，也可能让原生模块、Git 依赖和现有 CI 突然失败。项目应先审核脚本和依赖来源、建立最小允许列表，再在干净环境验证安装与构建。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12",
      articleIdea: "选题：npm v12 将默认阻止依赖脚本与远程依赖：新手升级前检查清单"
    },
    {
      date: "2026-06-09",
      tag: "AI 安全",
      title: "GitHub 为第三方编码 Agent 默认启用自动安全验证",
      summary: "GitHub 的第三方编码 Agent 安全验证进入 GA。Claude、OpenAI Codex 等 Agent 创建代码后，GitHub 会用 CodeQL、Advisory Database 和 secret scanning 检查漏洞、新依赖与敏感信息，并让 Agent 尝试修复。",
      why: "不同 Agent 生成的代码现在可以进入统一的仓库安全检查流程，而且不要求 GitHub Advanced Security 许可证；但自动修复仍需人工复核，仓库设置、权限边界和业务风险也不能只交给 Agent 判断。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents/",
      articleIdea: "候选：第三方编码 Agent 安全验证上线后，团队还要人工检查什么"
    },
    {
      date: "2026-06-09",
      tag: "开发者大会",
      title: "Apple WWDC26 发布会开启，开发者更新集中落在 AI、Xcode 27 与 Swift",
      summary: "Apple WWDC26 于北京时间 6 月 9 日开启。官方大会入口汇总 Keynote、Platforms State of the Union 和超过 100 场开发者视频；首批开发者重点包括 Xcode 27 的 Agent 工作流、Swift 6.4 与新平台 SDK。",
      why: "发布会本身适合用来建立更新全景，但真正影响开发工作的细节通常藏在 release notes 和技术视频中。新手应先看总览，再按 Xcode、Swift、AI 和目标平台拆分学习，不要只依据发布会演示升级生产项目。",
      sourceLabel: "Apple Developer WWDC26",
      sourceUrl: "https://developer.apple.com/wwdc26/",
      articleIdea: "总览：Apple WWDC26 发布会后，开发者怎样按 Xcode、Swift、AI 与平台更新安排学习顺序"
    },
    {
      date: "2026-06-09",
      tag: "AI 编程",
      title: "Claude Code 2.1.169 增加安全模式与 /cd，并修复多项 Windows 问题",
      summary: "Claude Code 2.1.169 新增 `--safe-mode`，可临时禁用 CLAUDE.md、插件、skills、hooks 和 MCP server；同时加入 `/cd`，修复 Windows 上 `claude -p` 启动缓慢、Git 凭据弹窗与插件缓存问题。",
      why: "终端 Agent 的自定义项越多，越难判断故障来自核心程序还是配置。安全模式提供了可重复的最小诊断入口，但定位后仍应逐项恢复并修复冲突，而不是长期绕过团队规则。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.169",
      articleIdea: "选题：Claude Code 2.1.169 增加安全模式：新手怎样排查插件、skills 和 MCP 冲突"
    },
    {
      date: "2026-06-08",
      tag: "开发工具",
      title: "Apple 发布 Xcode 27 beta，把 Agent 计划、模拟器操作与截图验证放进编辑器",
      summary: "Xcode 27 beta 让 Agent 计划以可编辑 Markdown 工件展示，支持在编辑器中管理会话；Agent 还能启动模拟器、安装和运行 App、合成触摸事件、截图验证，并通过插件接入 skills、MCP 与 ACP。",
      why: "Agent 从写代码进一步进入计划、运行和界面验证流程，能减少工具切换，但也扩大了权限和误操作范围。Xcode 27 仍是 beta，只支持 Apple silicon Mac，重要项目要保留稳定工具链与人工验收。",
      sourceLabel: "Apple Xcode 27 Beta Release Notes",
      sourceUrl: "https://developer.apple.com/documentation/xcode-release-notes/xcode-27-release-notes",
      articleIdea: "选题：Xcode 27 把 Agent 放进编辑器：新手怎样先审计划、再验证界面"
    },
    {
      date: "2026-06-08",
      tag: "编程语言",
      title: "Swift 6.4 扩展跨平台能力，并加强测试、并发与高性能代码支持",
      summary: "Apple WWDC26 的 Swift 更新介绍了 Swift 6.4 的日常语法改进、并发任务警告和跨平台 FilePath；Swift Testing 增加失败重试等能力，Subprocess 进入 1.0，Swift 也继续扩展到 Web、Android 与嵌入式环境。",
      why: "Swift 不再只围绕 Apple App 开发演进，跨平台、测试与系统工具能力正在增强。新手可以先关注测试和 Subprocess 等直接可用改进，高级性能属性和所有权类型则应在基准测试后采用。",
      sourceLabel: "Apple Developer WWDC26：What’s new in Swift",
      sourceUrl: "https://developer.apple.com/videos/play/wwdc2026/262/",
      articleIdea: "候选：Swift 6.4 新手更新路线：先学测试、Subprocess 和跨平台能力"
    },
    {
      date: "2026-06-08",
      tag: "开发安全",
      title: "GitHub EMU 命名空间 IP allow list 进入 GA",
      summary: "GitHub Enterprise Cloud 的 Enterprise Managed Users 现在可在用户命名空间仓库中强制执行原生 IP allow list；Web UI、Git 协议与 API 均受限制，PAT、App token 和 SSH key 等凭据也纳入策略。",
      why: "企业用户拥有的仓库如果不受统一网络策略约束，会形成治理缺口。GA 更新让访问路径覆盖更完整，但管理员仍需验证允许地址、自动化出口和紧急访问流程，避免合法开发任务被意外阻断。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-08-ip-allow-list-coverage-for-emu-namespaces-in-general-availability/",
      articleIdea: "候选：GitHub 企业 IP allow list 上线前检查：Web、Git、API 与自动化出口"
    },
    {
      date: "2026-06-08",
      tag: "AI 编程",
      title: "Qwen Code 6 月 8 日 nightly 加强安装包校验，并回退 ACP 记忆命令",
      summary: "Qwen Code 6 月 8 日官方 nightly release 延续 `/skills` 选择器、独立自动更新和用户提示词扩展 hooks，并增加 release assets 校验；同时回退了 ACP 模式中的 `/remember`、`/forget` 与 `/dream` 支持。",
      why: "nightly 版本既能提前看到国产开源终端 Agent 的新能力，也会出现功能回退。安装包校验值得关注，但该版本明确标注为 pre-release，仍适合观察和测试，不应直接替换稳定生产环境。",
      sourceLabel: "Qwen Code GitHub Releases",
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260608.aea34fa2c",
      articleIdea: "观察项：Qwen Code nightly 的安装校验、skills 选择器和功能回退，稳定版发布后再扩写"
    },
    {
      date: "2026-06-07",
      tag: "开发工具",
      title: "Anthropic Python SDK 0.107.1 修复 Microsoft Foundry API Key 认证请求",
      summary: "Anthropic Python SDK 0.107.1 修复了使用 API Key 连接 Microsoft Foundry 时未发送 `x-api-key` 请求头的问题；0.107.0 同期更新了 Managed Agents 相关类型。",
      why: "SDK 的认证修复看似很小，却会直接决定集成是否能运行。使用 Foundry 的开发者应升级并重新验证认证，同时避免把 API Key 写入代码或日志。",
      sourceLabel: "Anthropic Python SDK GitHub Releases",
      sourceUrl: "https://github.com/anthropics/anthropic-sdk-python/releases/tag/v0.107.1",
      articleIdea: "候选：AI SDK 小版本升级清单：认证修复、凭据保护和回归测试"
    },
    {
      date: "2026-06-06",
      tag: "AI 编程",
      title: "Claude Code 2.1.166 增加最多三个回退模型并加强跨会话权限",
      summary: "Claude Code 2.1.166 可通过 `fallbackModel` 按顺序配置最多三个回退模型，并加强 deny 规则和跨会话消息权限；更新还修复了 Windows PowerShell 命令验证可能长时间挂起的问题。",
      why: "模型回退能减少长任务因服务不可用而中断，但模型切换会影响质量、成本和工具行为。跨会话权限收紧也提醒开发者，Agent 之间传递消息不应自动继承用户授权。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.166",
      articleIdea: "选题：Claude Code 2.1.166 增加回退模型：新手怎样兼顾可用性和权限安全"
    },
    {
      date: "2026-06-05",
      tag: "AI 工具",
      title: "Cloudflare AI Gateway 增加按美元计算的费用上限",
      summary: "Cloudflare AI Gateway spend limits 进入 open beta，可按模型、提供商和自定义属性设置固定或滚动的日、周、月预算；达到上限后可阻止请求或通过 Dynamic Routes 切换备用模型。",
      why: "AI 应用和 Agent 容易因共享密钥、昂贵模型或循环任务产生意外费用。预算限制能把成本控制前移，但模型降级仍需验证质量、工具支持和失败处理。",
      sourceLabel: "Cloudflare Blog",
      sourceUrl: "https://blog.cloudflare.com/ai-gateway-spend-limits/",
      articleIdea: "选题：Cloudflare AI Gateway 增加费用上限：新手怎样给模型、团队和 Agent 控制预算"
    },
    {
      date: "2026-06-05",
      tag: "建站工具",
      title: "Wrangler 4.98 支持用 glob 查找嵌套目录中的 D1 migrations",
      summary: "Cloudflare Workers SDK 发布 Wrangler 4.98，D1 database binding 新增 `migrations_pattern`，可让 `wrangler d1 migrations apply` 和 `list` 查找 ORM 生成的嵌套 migration 文件。",
      why: "不少 ORM 会把每次数据库迁移放进独立子目录，旧的单层匹配方式需要手动整理文件。升级后可以直接用相对配置文件的 glob 匹配，但仍要先检查实际命中文件和执行顺序。",
      sourceLabel: "Cloudflare Workers SDK GitHub Releases",
      sourceUrl: "https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.98.0",
      articleIdea: "候选：Wrangler D1 migrations_pattern 入门：怎样安全执行 ORM 生成的嵌套迁移"
    },
    {
      date: "2026-06-05",
      tag: "开发工具",
      title: "Google 发布 Colab CLI，让本地脚本和 AI Agent 调用远程 GPU",
      summary: "Google 6 月 5 日发布 Colab CLI，可从终端申请 CPU、GPU 或 TPU，远程执行本地 Python 与 Notebook，下载产物并导出日志；官方还附带了供终端 Agent 使用的 Colab skill。",
      why: "Colab 从浏览器 Notebook 扩展成可编程的远程执行工具，更适合自动化和 Agent 工作流。当前版本只支持 Linux 和 macOS，且仍需管理凭据、资源释放与产物回收。",
      sourceLabel: "Google Developers Blog",
      sourceUrl: "https://developers.googleblog.com/introducing-the-google-colab-cli/",
      articleIdea: "选题：Google Colab CLI 发布：新手怎样让本地脚本和 AI Agent 使用远程 GPU"
    },
    {
      date: "2026-06-05",
      tag: "AI 编程",
      title: "GitHub Copilot 企业托管插件扩展到 VS Code public preview",
      summary: "GitHub 6 月 5 日 Changelog 宣布，企业管理员现在可以让 VS Code 和 Copilot CLI 自动拉取统一插件设置，集中分发 custom agents、skills，并配置始终启用的 hooks 与 MCP。",
      why: "AI 编程代理进入团队使用后，配置一致性、插件来源和权限治理会直接影响上手速度与安全边界。把规则版本化并集中审查，比让每个人手动安装更可靠。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-05-enterprise-managed-plugins-in-vs-code-in-public-preview/",
      articleIdea: "选题：GitHub Copilot 企业托管插件进入 VS Code：团队怎样统一 agents、skills 和 MCP 配置"
    },
    {
      date: "2026-06-05",
      tag: "开发工具",
      title: "skills.sh API 开放，可查询超过 60 万个开源 AI skills",
      summary: "Vercel 6 月 5 日宣布 skills.sh API 可用，支持搜索 skill、读取详情与文件树、查看官方精选和安全审计；Vercel 项目可通过短期 OIDC token 认证。",
      why: "AI skills 数量快速增长后，开发者需要可编程的发现、审计和更新检测流程。短期 OIDC 凭据也能减少长期 API Key 泄露风险。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/the-skills-sh-api-is-now-available",
      articleIdea: "选题：skills.sh API 开放：新手怎样用 OIDC 搜索、审计和管理 AI skills"
    },
    {
      date: "2026-06-05",
      tag: "AI Agent",
      title: "Vercel Sandbox Drives 进入 private beta，让代理工作区跨沙箱保留",
      summary: "Vercel 6 月 5 日宣布 Sandbox Drives private beta。Drive 生命周期独立于 sandbox，可挂载到后续运行中，适合保留代理工作区、克隆仓库、依赖缓存和构建产物。",
      why: "一次性沙箱更容易隔离任务，但重复下载依赖和重建上下文会浪费时间。Drive 把计算生命周期与数据生命周期分开，同时仍需注意 private beta、单读写挂载和非生产数据限制。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta",
      articleIdea: "候选：Vercel Sandbox Drives 新手指南：持久工作区和一次性沙箱怎样配合"
    },
    {
      date: "2026-06-05",
      tag: "AI 编程",
      title: "GitHub Copilot 弃用 GPT-5.2 和 GPT-5.2-Codex",
      summary: "GitHub 6 月 5 日宣布，GPT-5.2 与 GPT-5.2-Codex 已在多数 Copilot 体验中弃用，建议分别迁移到 GPT-5.5 与 GPT-5.3-Codex；GPT-5.2 仍可用于 Copilot code review。",
      why: "模型弃用会影响固定模型的提示词、自动化和团队策略。开发者需要检查模型选择器、企业策略与集成配置，并为模型切换准备回归测试。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-05-gpt-5-2-and-gpt-5-2-codex-deprecated/",
      articleIdea: "候选：Copilot 模型弃用时怎么迁移：提示词、策略和回归测试清单"
    },
    {
      date: "2026-06-05",
      tag: "代码安全",
      title: "CodeQL 2.25.6 支持 Swift 6.3.2，并完善 C# 14 与 .NET 10 覆盖",
      summary: "GitHub 6 月 5 日发布 CodeQL 2.25.6，新增 Swift 6.3.2 支持，完成 C# 14 和 .NET 10 覆盖，并改进 GitHub Actions、敏感数据检测与多语言查询准确性。",
      why: "静态扫描规则和语言支持会持续变化。升级后既可能发现更多真实问题，也可能让已关闭告警重新出现；团队需要复核新告警，而不是只看数量变化。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-05-codeql-2-25-6-adds-swift-6-3-2-support-and-improves-c-coverage/",
      articleIdea: "候选：CodeQL 升级后新告警怎么处理：从规则变化到人工复核"
    },
    {
      date: "2026-06-04",
      tag: "AI 编程",
      title: "GitHub Copilot 支持更大上下文窗口和可配置推理等级",
      summary: "GitHub 6 月 4 日 Changelog 宣布 Copilot 支持 one-million-token context windows 和 configurable reasoning levels，可在 VS Code、Copilot CLI 和 GitHub Copilot app 中用于更大的代码库、长文档和复杂多文件项目。",
      why: "AI 编程工具正在从“当前文件补全”进入“跨项目理解和深度推理”阶段。新手需要同时理解上下文、推理深度、速度和 AI Credits 成本，而不是默认把所有任务都开到最高档。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-04-larger-context-windows-and-configurable-reasoning-levels-for-github-copilot/",
      articleIdea: "选题：GitHub Copilot 支持百万 token 上下文和推理等级：新手怎么判断什么时候该开大模型能力"
    },
    {
      date: "2026-06-04",
      tag: "效率工具",
      title: "OpenAI 推出更强的 ChatGPT memory dreaming 架构",
      summary: "OpenAI 6 月 4 日发布 memory dreaming 更新，称新系统面向 freshness、continuity 和 relevance，帮助 ChatGPT 更好地综合用户偏好、项目背景和长期上下文。Plus 和 Pro 美国用户当天开始推出，后续扩展到更多地区和用户。",
      why: "个性化 AI 正在变成长期工作流的一部分。对写作、学习、编程和内容运营来说，记忆能减少重复交代背景，但也需要管理、删除、临时聊天和隐私边界。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/chatgpt-memory-dreaming/",
      articleIdea: "选题：ChatGPT memory dreaming 更新：新手怎么理解长期上下文、偏好和隐私边界"
    },
    {
      date: "2026-06-04",
      tag: "AI Agent",
      title: "GitHub Copilot agent tasks REST API 进入 public preview",
      summary: "GitHub 6 月 4 日 Changelog 宣布，Copilot Pro、Pro+ 和 Max 用户可以通过 Agent tasks REST API 以编程方式启动和跟踪 Copilot cloud agent 任务，用于批量重构、内部开发者门户和每周发布准备等自动化场景。",
      why: "AI 代理开始进入 API 化和平台化阶段。对开发者来说，关键不只是能发起任务，还要理解令牌权限、仓库范围、PR 产物、进度跟踪和人工审查。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-04-agent-tasks-rest-api-now-available-for-copilot-pro-pro-and-max/",
      articleIdea: "候选：Copilot agent tasks REST API 新手指南：怎样把云端代理接进自己的自动化"
    },
    {
      date: "2026-06-04",
      tag: "建站工具",
      title: "Vercel 更新法律条款，明确 AI Functionality 和 Third-Party Tools 的责任边界",
      summary: "Vercel 6 月 4 日发布 Terms 更新，说明 agentic workflows 让开发者经常授权 AI 工具访问基础设施，因此新增 AI Functionality 和 Third-Party Tools 概念，并强调设置范围、授权审查、输出评估和成本责任。",
      why: "AI 代理接入云平台后，权限、账单和责任会变成建站基础问题。新手在给第三方代理 API Key 或让 AI 操作部署平台前，必须先看清账户范围和费用边界。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/updates-to-legal-terms-june-2026",
      articleIdea: "候选：AI 代理接入云平台前，新手要先写清楚哪些账号和成本边界"
    },
    {
      date: "2026-06-04",
      tag: "AI 工具",
      title: "Vercel AI Gateway 接入 Nvidia Nemotron 3 Ultra",
      summary: "Vercel 6 月 4 日 Changelog 宣布 Nemotron 3 Ultra 已可通过 AI Gateway 使用。官方称它是面向长时间代理工作流的开放 MoE reasoning model，具备 1M token context window，适合规划、工具调用、子代理委派和错误恢复。",
      why: "AI Gateway 正在承载更多长上下文、代理式模型。对站长和工具开发者来说，统一调用、用量成本、失败重试和 BYOK 管理会成为多模型应用的基础设施。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/nemotron-3-ultra-now-available-on-ai-gateway",
      articleIdea: "候选：Nemotron 3 Ultra 进入 Vercel AI Gateway：长上下文代理模型怎么服务建站工作流"
    },
    {
      date: "2026-06-03",
      tag: "AI 编程",
      title: "GitHub Copilot in VS Code 汇总 5 月更新：Agents window、BYOK 和终端安全继续增强",
      summary: "GitHub 6 月 3 日 Changelog 汇总 VS Code v1.120 到 v1.123 的 Copilot 更新：Agents window 进入 Stable 预览，远程代理、AHP、会话同步、/chronicle、BYOK、终端风险提示和集成浏览器截图等能力继续完善。",
      why: "VS Code 正在从编辑器里的 AI 聊天，走向能组织代理会话、控制模型、运行命令和验证网页的完整工作台。新手学习 AI 编程时，需要同时看工作区、模型和安全边界。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases/",
      articleIdea: "选题：GitHub Copilot in VS Code 5 月更新：新手怎么理解 Agents window、BYOK 和终端安全"
    },
    {
      date: "2026-06-03",
      tag: "AI 工具",
      title: "Vercel AI Gateway 接入 Grok Imagine Video 1.5，可用 AI SDK 串联图像到视频生成",
      summary: "Vercel 6 月 3 日 Changelog 宣布 Grok Imagine Video 1.5 已可通过 AI Gateway 使用。该模型可从输入图片生成带同步音频的视频，并通过 AI SDK 与图像生成流程串联。",
      why: "AI Gateway 正在从文本和代码模型扩展到多媒体生成模型。对站长和内容型网站来说，未来的视频素材生成、成本观察、失败重试和 BYOK 管理可能会进入同一套建站工具链。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/grok-imagine-video-1-5-on-ai-gateway",
      articleIdea: "候选：Vercel AI Gateway 视频模型入门：图片到视频生成怎样进入网站内容工作流"
    },
    {
      date: "2026-06-02",
      tag: "建站工具",
      title: "Vercel Blob 推出 signed URLs，上传下载删除都能按路径和时限收窄权限",
      summary: "Vercel 6 月 2 日 Changelog 宣布 Blob signed URLs 可用。开发者可以生成有时限的 URL，用于 put、get、head 或 delete 单个 pathname；上传支持浏览器直传，删除还可配合 ifMatch 条件。",
      why: "文件上传和资源下载是个人站常见功能，signed URLs 能减少长期 Token 暴露，让浏览器、函数和 AI 代理只拿到当前任务需要的临时权限。",
      sourceLabel: "Vercel Changelog",
      sourceUrl: "https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob",
      articleIdea: "选题：Vercel Blob signed URLs：新手怎么给上传、下载和删除操作收窄权限"
    },
    {
      date: "2026-06-02",
      tag: "AI Agent",
      title: "GitHub Copilot cloud agent 支持按计划或仓库事件自动跑任务",
      summary: "GitHub 6 月 2 日 Changelog 宣布 Copilot cloud agent 的 automations 功能，可按 hourly、daily、weekly 间隔，或在 issue、pull request 事件触发时运行，并能限制可用工具、模型和仓库作用域。",
      why: "AI 代理正在从人工点击执行，走向定时检查、问题分流、夜间修测试和自动草拟 release notes。新手要把它当成有权限、账单和审查边界的自动化流程，而不是普通提醒。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-02-schedule-and-automate-tasks-with-copilot-cloud-agent/",
      articleIdea: "候选：Copilot cloud agent automations 新手指南：哪些任务适合每天交给代理跑"
    },
    {
      date: "2026-06-02",
      tag: "代码审查",
      title: "Copilot code review 支持 team skills、MCP 和 Medium 分析层级",
      summary: "GitHub 6 月 2 日 Changelog 宣布 Copilot code review 新增两项 public preview：可用 agent skills 与 MCP 引入团队上下文，并提供 Medium analysis tier，让复杂 PR 使用更高推理能力的模型。",
      why: "AI 代码审查正在从通用建议走向团队标准、内部系统和成本分层。新手和团队要理解：更深的审查可能更有价值，但也会消耗更多 AI Credits，需要按仓库和变更风险配置。",
      sourceLabel: "GitHub Changelog",
      sourceUrl: "https://github.blog/changelog/2026-06-02-shape-copilot-code-review-around-your-team/",
      articleIdea: "候选：Copilot code review 如何接入团队标准：skills、MCP 和审查深度怎么选"
    },
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
      sourceUrl: "https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0",
      articleIdea: "选题：Qwen Code v0.17.0 新手观察：终端 AI 编程代理如何补齐协作、桌面能力和上下文压缩"
    },
    {
      date: "2026-05-31",
      tag: "AI 编程",
      title: "Claude Code v2.1.159 确认无用户侧变化，v2.1.158 的 Auto mode 上云仍是重点",
      summary: "Claude Code 5 月 31 日 v2.1.159 只写明是内部基础设施改进、没有用户侧变化；前一版 v2.1.158 则把 Auto mode 扩展到 Bedrock、Vertex 和 Foundry 上的 Opus 4.7/4.8，需要通过 CLAUDE_CODE_ENABLE_AUTO_MODE=1 启用。",
      why: "这类更新提醒新手区分“最新版本”和“值得学习的用户侧能力”：真正要理解的是 Auto mode、托管模型平台和本地工具调用之间的权限边界。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.159",
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
      summary: "Claude Code v2.1.157 的发布说明显示，本地 .claude/skills 中的插件现在可自动加载，新增 claude plugin init ＜name＞ 脚手架，并改进 /plugin 自动补全、agents 设置和 worktree 切换体验。",
      why: "这让重复提示、检查清单和团队流程更容易从聊天记录沉淀成可复用工具，适合扩成 Claude Code skills 与 plugins 的新手入门文章。",
      sourceLabel: "Claude Code GitHub Releases",
      sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.157",
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
      sourceUrl: "https://developer.microsoft.com/blog/improve-your-agentic-developer-tools-by-grounding-in-microsoft-learn",
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
      why: "企业采用信号说明编码 Agent 的价值不只在生成代码，也包括代码审查、测试、事件响应和大型仓库理解；团队仍需用真实任务、权限边界和可验证结果评估效果。",
      sourceLabel: "OpenAI",
      sourceUrl: "https://openai.com/index/gartner-2026-agentic-coding-leader/",
      articleIdea: "选题：个人网站如何用 Codex 做内容维护和代码更新"
    },
    {
      date: "2026-05-21",
      tag: "工具更新",
      title: "Codex 更新 Goal Mode、浏览器标注和远程继续工作能力",
      summary: "OpenAI 帮助中心更新显示，Codex 的 goal mode 已覆盖 App、IDE extension 和 CLI，并加入更适合前端反馈的浏览器标注能力。",
      why: "Goal Mode、浏览器标注和远程继续工作让 Agent 更适合处理长任务和前端反馈，但任务目标、验收条件、权限与最终差异仍需要人工确认。",
      sourceLabel: "OpenAI Developers",
      sourceUrl: "https://developers.openai.com/codex/changelog",
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
      title: "可抓取的静态文章库",
      summary: "把站内教程生成独立静态 HTML，确保无需 JavaScript 也能读取正文、标题、来源和 canonical。",
      stack: "HTML / CSS / JavaScript",
      status: "已上线",
      link: "posts.html",
      body: `
        <p>文章列表和每篇详情页都包含可直接抓取的正文，不依赖浏览器执行脚本后才显示内容。</p>
        <p>每篇文章使用唯一标题、描述、canonical、发布日期和官方来源链接，并在 sitemap 中提供稳定入口。</p>
      `
    },
    {
      id: "topic-resource-map",
      title: "原创资料包与学习路线",
      summary: "围绕建站、Git、VS Code、AI 提示词和 Agent 安全提供可下载资料，并说明用途、来源与使用方式。",
      stack: "原创资料 / 学习路线",
      status: "已上线",
      link: "resources.html",
      body: `
        <p>每个下载包都包含 README 和可编辑文件，读者可以直接检查内容并用于个人学习、课堂教学或团队内部使用。</p>
        <p>外部资料只链接到官方入口，本站不重新打包版权不明的第三方内容。</p>
      `
    },
    {
      id: "monetization-layout-kit",
      title: "每日热点核验与发布流程",
      summary: "从官方博客、changelog 和原始来源筛选开发热点，再补充适用场景、限制条件和新手实践路线。",
      stack: "来源核验 / 内容维护",
      status: "每日维护",
      link: "hotspots.html",
      body: `
        <p>热点只使用官方博客、官方 changelog、官方文档或项目 release 等一手来源，不使用无来源转载填充数量。</p>
        <p>扩写文章会明确区分官方事实与本站建议，并保留限制、风险和验证步骤。</p>
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

function getPublishedPosts() {
  return siteData.posts.filter((post) => post.published !== false);
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
  return `<img class="${className}" src="${src}" alt="${escapeAttribute(label)}" width="48" height="48" loading="lazy" onerror="this.onerror=null;this.src='assets/images/brand-book-line.png';">`;
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
      <a class="article-card__media article-card__media--${slugify(post.category)}" href="articles/${post.id}.html">
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
        <h3><a href="articles/${post.id}.html">${post.title}</a></h3>
        <p>${post.excerpt}</p>
      </div>
    </article>
  `;
}

function buildLatestItem(post) {
  const icon = getPostIcon(post);

  return `
    <article class="latest-item reveal">
      <a class="latest-thumb latest-thumb--${slugify(post.category)}" href="articles/${post.id}.html">
        ${buildVisualIcon(icon, `${post.category} 图标`, "visual-icon visual-icon--thumb")}
        <span>${post.category}</span>
      </a>
      <div>
        <h3><a href="articles/${post.id}.html">${post.title}</a></h3>
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

function buildDownloadCard(item) {
  const icon = getResourceIcon(item);

  return `
    <article class="download-card reveal">
      <div class="download-card__visual">
        <span class="download-card__icon">${buildVisualIcon(icon, `${item.category} 图标`, "visual-icon visual-icon--card")}</span>
        <div>
          <span class="pill">${item.category}</span>
          <strong>${item.badge}</strong>
        </div>
      </div>
      <div class="download-card__body">
        <div class="download-card__meta">
          <span>${item.format}</span>
          <time datetime="${item.updated}">更新于 ${formatDate(item.updated)}</time>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <ul class="download-card__includes">
          ${item.includes.map((entry) => `<li>${entry}</li>`).join("")}
        </ul>
        <p class="download-card__pitch">${item.pitch}</p>
        <a class="button button--primary download-card__action" href="${item.link}" download>${item.cta}</a>
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
    { icon: visualIcons.javascript, title: "编程开发", meta: "Python / 前端 / Git", count: "新手路线", tone: "blue", query: "编程" },
    { icon: visualIcons.markdown, title: "学习资料", meta: "清单 / 模板 / 配置", count: `${siteData.downloads.length} 个原创包`, tone: "green", query: "资料" },
    { icon: visualIcons.vscode, title: "实用工具", meta: "开发 / 设计 / 效率", count: "官方入口", tone: "violet", query: "工具" },
    { icon: visualIcons.github, title: "开源项目", meta: "源码 / 案例 / 部署", count: `${siteData.projects.length} 个项目`, tone: "orange", query: "项目" },
    { icon: visualIcons.python, title: "技术资讯", meta: "AI 编程 / 提示词 / 工具", count: `${siteData.hotspots.length} 条热点`, tone: "rose", query: "AI" },
    { icon: visualIcons.figma, title: "设计资源", meta: "模板 / 清单 / 页面", count: "可直接修改", tone: "cyan", query: "模板" }
  ];
}

function getHomeStats() {
  return [
    { value: String(siteData.downloads.length), label: "原创下载包" },
    { value: String(getPublishedPosts().length), label: "新手专题" },
    { value: String(siteData.hotspots.length), label: "已核验热点" }
  ];
}

function getHeroIcons() {
  return [
    { icon: visualIcons.markdown, label: "系统化内容\n持续更新" },
    { icon: visualIcons.github, label: "精选优质资源\n严格筛选" },
    { icon: visualIcons.javascript, label: "以实践为导向\n可学可用" },
    { icon: visualIcons.vscode, label: "开发者社区\n共同成长" }
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
        <a class="text-link" href="articles/${post.id}.html">查看对应文章</a>
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

function getResourcePathPosts() {
  return siteData.resourcePathPostIds
    .map((id) => byId(getPublishedPosts(), id))
    .filter(Boolean);
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
        <a class="text-link" href="${project.link}">查看对应成果</a>
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
    <h2>实践与验证步骤</h2>
    ${buildBulletList(post.roadmap)}
    <h2>官方资料入口</h2>
    ${buildLinkList(post.officialLinks)}
    <h2>重点判断与使用建议</h2>
    ${buildBulletList(post.curatedLinks)}
    ${buildExtraSections(post.extraSections)}
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
    stats.innerHTML = getHomeStats()
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
    featuredPosts.innerHTML = getPublishedPosts()
      .filter((post) => post.featured)
      .map(buildPostCard)
      .join("");
  }

  if (resources) {
    resources.innerHTML = siteData.downloads.slice(0, 3).map(buildDownloadCard).join("");
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
    recommendations.innerHTML = getPublishedPosts().filter((post) => post.featured).slice(0, 4).map(buildPostCard).join("");
  }

  if (latest) {
    latest.innerHTML = getPublishedPosts().slice(4, 8).map(buildLatestItem).join("");
  }

  if (tags) {
    tags.innerHTML = [...new Set(getPublishedPosts().flatMap((post) => post.tags))]
      .slice(0, 14)
      .map((tag) => `<a href="posts.html?q=${encodeURIComponent(tag)}">${tag}</a>`)
      .join("");
  }

  if (rank) {
    rank.innerHTML = siteData.downloads.slice(0, 5)
      .map(
        (item) => `
          <a class="download-row" href="${item.link}" download>
            <span class="download-row__icon">${buildVisualIcon(getResourceIcon(item), `${item.category} 图标`, "visual-icon visual-icon--download")}</span>
            <strong>${item.name}</strong>
            <em>${item.format}</em>
            <b>下载</b>
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
    const filtered = getPublishedPosts().filter((post) => {
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
  const publishedPosts = getPublishedPosts();
  const post = byId(publishedPosts, params.get("id")) || publishedPosts[0];
  const description = document.querySelector('meta[name="description"]');

  document.title = `${post.title} | ${siteData.site.name}`;
  if (description) description.setAttribute("content", post.excerpt);

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
          <p class="label">核验说明</p>
          <h3>事实优先引用一手来源，实践建议需要结合自己的环境验证。</h3>
          <p>如果官方文档、版本状态或限制条件发生变化，本站会更新文章并保留原始来源入口。</p>
          <a class="button button--secondary" href="editorial.html">查看内容标准</a>
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
          ${publishedPosts
            .slice(0, 4)
            .map((item) => `<a href="articles/${item.id}.html">${item.title}</a>`)
            .join("")}
        </div>
        <div class="sidebar-card sidebar-card--accent">
          <p class="label">内容标准</p>
          <h3>了解本站怎样选择来源、补充判断并处理更正。</h3>
          <a class="button button--dark" href="editorial.html">查看说明</a>
        </div>
      </aside>
    </div>
  `;
}

function injectResourcesPage() {
  const container = document.querySelector("[data-resource-list]");
  if (!container) return;
  const downloads = `
    <section class="section" id="resource-downloads">
      <div class="section-heading">
        <div>
          <p class="eyebrow">本站原创下载</p>
          <h2>6 个能直接带走使用的资料包</h2>
        </div>
        <p>每个 ZIP 都包含说明和可编辑文件。下载后先阅读 README，再按自己的项目调整。</p>
      </div>
      <div class="download-grid">
        ${siteData.downloads.map(buildDownloadCard).join("")}
      </div>
    </section>
  `;

  const official = `
    <section class="section" id="official-resources">
      <div class="section-heading">
        <div>
          <p class="eyebrow">官方精选资料</p>
          <h2>外部资料只保留长期可靠的一手来源</h2>
        </div>
        <p>这些按钮会打开第三方官方页面。本站不重新打包、不修改，也不伪装成本站下载。</p>
      </div>
      <div class="resource-grid">
        ${siteData.resources.map(buildResourceCard).join("")}
      </div>
    </section>
  `;

  const paths = `
    <section class="section" id="learning-paths">
      <div class="section-heading">
        <div>
          <p class="eyebrow">精选学习路线</p>
          <h2>下载之后，顺着 6 个专题继续实践</h2>
        </div>
        <p>这里只保留适合长期学习的基础专题，不再把全部热点文章重复铺在资源页。</p>
      </div>
      ${getResourcePathPosts().map(buildTopicResourceSection).join("")}
    </section>
  `;

  container.innerHTML = `${downloads}${official}${paths}`;
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
  const description = document.querySelector('meta[name="description"]');

  document.title = `${project.title} | ${siteData.site.name}`;
  if (description) description.setAttribute("content", project.summary);

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

function setCanonicalUrl() {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;

  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const params = new URLSearchParams(window.location.search);
  const detailId = ["post.html", "project.html"].includes(pageName) ? params.get("id") : "";
  const path = pageName === "index.html" ? "" : pageName;
  const query = detailId ? `?id=${encodeURIComponent(detailId)}` : "";

  canonical.setAttribute("href", `https://hello1yjx.github.io/${path}${query}`);
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

function setActiveNavigation() {
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const currentPath = pageName === "" ? "index.html" : pageName;
  const currentHash = window.location.hash;
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const exactHashMatch = navLinks.find((link) => {
    const target = new URL(link.getAttribute("href"), window.location.href);
    return target.pathname.split("/").pop() === currentPath && target.hash && target.hash === currentHash;
  });
  const pathMatch = navLinks.find((link) => {
    const target = new URL(link.getAttribute("href"), window.location.href);
    const targetPath = target.pathname.split("/").pop() || "index.html";
    return targetPath === currentPath && !target.hash;
  });
  const fallbackMap = {
    "post.html": "posts.html",
    "project.html": "projects.html"
  };
  const fallbackMatch = navLinks.find((link) => {
    const target = new URL(link.getAttribute("href"), window.location.href);
    return target.pathname.split("/").pop() === fallbackMap[currentPath];
  });
  const activeLink = exactHashMatch || pathMatch || fallbackMatch;

  navLinks.forEach((link) => {
    link.classList.remove("is-active");
    link.removeAttribute("aria-current");
  });

  if (activeLink) {
    activeLink.classList.add("is-active");
    activeLink.setAttribute("aria-current", "page");
  }
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
    { threshold: 0.15 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 60, 320)}ms`;
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setCanonicalUrl();
  setGlobalContent();
  setActiveNavigation();
  window.addEventListener("hashchange", setActiveNavigation);
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
