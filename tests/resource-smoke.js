const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const nodes = {
  "[data-resource-list]": { innerHTML: "" },
  "[data-project-list]": { innerHTML: "" },
  "[data-home-stats]": { innerHTML: "" },
  "[data-home-categories]": { innerHTML: "" },
  "[data-home-resource-strip]": { innerHTML: "" }
};

const context = {
  document: {
    addEventListener() {},
    querySelectorAll() {
      return [];
    },
    querySelector(selector) {
      return nodes[selector] || null;
    }
  },
  window: {}
};

vm.createContext(context);
const appSource = fs.readFileSync(path.join(root, "assets", "app.js"), "utf8");
vm.runInContext(`${appSource};globalThis.__siteData=siteData;`, context);

context.injectResourcesPage();
context.injectProjectsPage();
context.injectHomePage();

const data = context.__siteData;
const resourcePage = nodes["[data-resource-list]"].innerHTML;
const projectPage = nodes["[data-project-list]"].innerHTML;
const homeResourceStrip = nodes["[data-home-resource-strip]"].innerHTML;
const homeCategories = nodes["[data-home-categories]"].innerHTML;
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const projectsSource = fs.readFileSync(path.join(root, "projects.html"), "utf8");
const contactSource = fs.readFileSync(path.join(root, "contact.html"), "utf8");
const checks = [];

function check(name, condition) {
  checks.push({ name, passed: Boolean(condition) });
}

const newDownloadIds = [
  "ai-tool-source-verification-kit",
  "open-source-project-release-kit"
];

const officialResourceLinks = [
  "https://developers.openai.com/codex/cloud",
  "https://code.claude.com/docs/en/overview",
  "https://qwenlm.github.io/qwen-code-docs/en/users/overview/",
  "https://ai-sdk.dev/docs/introduction"
];

check("eight original download packs", data.downloads.length === 8);
check("ten official external resources", data.resources.length === 10);
check("six curated learning paths", context.getResourcePathPosts().length === 6);
check("five project entries", data.projects.length === 5);
check("new download packs are present", newDownloadIds.every((id) => data.downloads.some((item) => item.id === id)));
check("new official links are present", officialResourceLinks.every((link) => data.resources.some((item) => item.link === link)));
check("resource page no longer renders every post", !resourcePage.includes("post-card"));
check("download cards include direct download attributes", (resourcePage.match(/ download/g) || []).length >= data.downloads.length);
check("homepage resource strip links to a real ZIP", homeResourceStrip.includes("downloads/ai-tool-source-verification-kit.zip"));
check("homepage categories show current pack count", homeCategories.includes(String(data.downloads.length)));
check("homepage has one resource download section", (indexSource.match(/data-home-resource-strip/g) || []).length === 1 && !indexSource.includes("data-download-rank"));
check("project data includes new maintenance entries", data.projects.some((item) => item.id === "official-tool-navigation") && data.projects.some((item) => item.id === "open-source-release-kit"));
check("project page links to updated resource sections", projectPage.includes("resources.html#official-resources") && projectPage.includes("resources.html#resource-downloads"));
check("static project page renders current project count", (projectsSource.match(/class="project-card/g) || []).length >= data.projects.length);
check("static project page includes new project titles", projectsSource.includes("官方工具导航与核验入口") && projectsSource.includes("开源项目发布检查包"));
check("contact page includes appreciation QR images", contactSource.includes("assets/images/wechat-qr.jpg") && contactSource.includes("assets/images/alipay-qr.jpg"));

for (const item of data.downloads) {
  const filePath = path.join(root, item.link);
  check(`${item.id} ZIP exists`, fs.existsSync(filePath) && fs.statSync(filePath).size > 0);
  check(`${item.id} renders on resource page`, resourcePage.includes(item.link));
}

const failed = checks.filter((item) => !item.passed);
for (const item of checks) {
  console.log(`${item.passed ? "PASS" : "FAIL"} ${item.name}`);
}

if (failed.length) {
  process.exitCode = 1;
}
