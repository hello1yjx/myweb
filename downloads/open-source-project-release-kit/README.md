# 开源项目发布检查包

这个资料包用于把一个小型开源项目发布得更清楚：读者能知道项目做什么、怎样运行、许可证是什么、版本如何变化，以及遇到问题去哪里核对。

## 文件清单

- `release-checklist.md`：发布前核对 README、许可证、运行步骤、截图、tag 和 release 说明。
- `project-page-template.md`：项目介绍页模板，适合改成 GitHub README 或站内项目说明。
- `maintenance-log.csv`：记录版本、修复、验证结果和下一次维护重点。

## 使用步骤

1. 先整理一个能在本地重新运行的项目版本。
2. 按 `release-checklist.md` 检查 README、安装步骤、许可证和演示材料。
3. 用 `project-page-template.md` 写清楚项目目标、使用方式、限制和来源。
4. 每次发布后在 `maintenance-log.csv` 记录版本、验证环境和已知问题。

## 适用边界

这个包适合小型学习项目、课程作品、个人工具和站内案例。复杂团队项目还需要 issue 模板、贡献指南、CI、漏洞披露方式和更完整的维护流程。
