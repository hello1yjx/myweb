const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const nodes = {
  "[data-resource-list]": { innerHTML: "" },
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
context.injectHomePage();

const data = context.__siteData;
const resourcePage = nodes["[data-resource-list]"].innerHTML;
const homeResourceStrip = nodes["[data-home-resource-strip]"].innerHTML;
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checks = [];

function check(name, condition) {
  checks.push({ name, passed: Boolean(condition) });
}

check("six original download packs", data.downloads.length === 6);
check("six official external resources", data.resources.length === 6);
check("six curated learning paths", context.getResourcePathPosts().length === 6);
check("resource page no longer renders every post", !resourcePage.includes("10 个主题分区"));
check("resource page explains external official links", resourcePage.includes("外部资料只保留长期可靠的一手来源"));
check("download cards include direct download attributes", (resourcePage.match(/ download/g) || []).length >= 6);
check("homepage resource strip links to a real ZIP", homeResourceStrip.includes("downloads/website-launch-checklist.zip"));
check("homepage categories show actual pack count", nodes["[data-home-categories]"].innerHTML.includes("6 个原创包"));
check("homepage has one resource download section", (indexSource.match(/<h3>资源下载<\/h3>/g) || []).length === 1 && !indexSource.includes("data-download-rank"));

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
