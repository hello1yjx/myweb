# Git 与 GitHub 中文速查表

## 第一次配置

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
git config --global init.defaultBranch main
```

## 开始一个项目

```bash
# 在当前目录初始化仓库
git init

# 克隆已有仓库
git clone <仓库地址>
```

## 每次提交前

```bash
git status
git diff
git diff --check
```

重点确认：

- 当前分支是否正确
- 改动是否只包含本次任务
- 是否误提交密钥、数据库、压缩包或临时文件
- 是否完成必要测试

## 提交改动

```bash
# 添加指定文件
git add path/to/file

# 查看已暂存内容
git diff --cached

# 创建提交
git commit -m "Add resource download page"
```

好的提交说明应说明实际结果，例如：

- `Fix mobile navigation overflow`
- `Add Git beginner download pack`
- `Update daily hotspots for June 6`

## 分支与远端

```bash
git branch
git switch -c feature/resource-downloads
git remote -v
git push -u origin feature/resource-downloads
```

推送主分支前确认：

```bash
git status
git log -3 --oneline
git push origin main
```

## 安全恢复思路

### 撤销尚未暂存的单个文件改动

先确认该文件没有需要保留的内容，再执行：

```bash
git restore path/to/file
```

### 取消暂存但保留文件改动

```bash
git restore --staged path/to/file
```

### 查看历史版本，不立即修改

```bash
git log --oneline
git show <提交版本>
```

### 重要提醒

- 不熟悉时不要直接使用 `git reset --hard`
- 不要强制推送覆盖团队成员的提交
- 工作区有未提交改动时，不要盲目切换分支
- 恢复前先复制重要文件或创建临时提交

## 常用检查组合

```bash
git status --short --branch
git diff --check
git diff --cached --check
git log -5 --oneline
git remote -v
```
