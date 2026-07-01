const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "assets", "app.js"), "utf8");

const navItems = [
  ["index.html", "首页"],
  ["posts.html", "教程"],
  ["resources.html", "资源下载"],
  ["resources.html#official-resources", "工具导航"],
  ["hotspots.html", "技术资讯"],
  ["projects.html", "开源项目"],
  ["about.html", "关于我们"]
];

function createLink(href, text) {
  const classes = new Set();
  const attrs = { href };

  return {
    textContent: text,
    getAttribute(name) {
      return attrs[name] || null;
    },
    setAttribute(name, value) {
      attrs[name] = value;
    },
    removeAttribute(name) {
      delete attrs[name];
    },
    classList: {
      add(name) {
        classes.add(name);
      },
      remove(name) {
        classes.delete(name);
      },
      contains(name) {
        return classes.has(name);
      }
    }
  };
}

function activeLabelFor(pathname, search = "", hash = "") {
  const links = navItems.map(([href, text]) => createLink(href, text));
  const href = `https://hello1yjx.github.io${pathname}${search}${hash}`;
  const context = {
    document: {
      addEventListener() {},
      querySelector() {
        return null;
      },
      querySelectorAll(selector) {
        return selector === ".site-nav a" ? links : [];
      }
    },
    window: {
      location: { href, pathname, search, hash },
      addEventListener() {}
    },
    URL,
    URLSearchParams
  };

  vm.createContext(context);
  vm.runInContext(appSource, context);
  context.setActiveNavigation();

  const active = links.filter((link) => link.classList.contains("is-active"));
  if (active.length !== 1) {
    return `INVALID:${active.map((link) => link.textContent).join(",") || "none"}`;
  }

  return active[0].textContent;
}

const cases = [
  ["/", "", "", "首页"],
  ["/posts.html", "", "", "教程"],
  ["/resources.html", "", "", "资源下载"],
  ["/resources.html", "", "#official-resources", "工具导航"],
  ["/hotspots.html", "", "", "技术资讯"],
  ["/projects.html", "", "", "开源项目"],
  ["/project.html", "?id=official-tool-navigation", "", "开源项目"],
  ["/post.html", "?id=vercel-services-polyglot-monorepo-checklist", "", "教程"],
  ["/articles/vercel-services-polyglot-monorepo-checklist.html", "", "", "教程"],
  ["/about.html", "", "", "关于我们"],
  ["/contact.html", "", "", "关于我们"],
  ["/editorial.html", "", "", "关于我们"],
  ["/privacy.html", "", "", "关于我们"]
];

let failed = false;

for (const [pathname, search, hash, expected] of cases) {
  const actual = activeLabelFor(pathname, search, hash);
  const passed = actual === expected;
  console.log(`${passed ? "PASS" : "FAIL"} ${pathname}${search}${hash} -> ${actual}`);
  failed = failed || !passed;
}

if (failed) {
  process.exitCode = 1;
}
