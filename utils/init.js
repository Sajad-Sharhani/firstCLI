import { createRequire } from "module";
const require = createRequire(import.meta.url);
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");

const pkgJSON = require("./../package.json");

export default () => {
  unhandled();

  welcome({
    title: `Sajad Sharhani`,
    tagLine: `Get to know Sajad`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937FF`,
    color: `#000000`,
    bold: true,
    clear: true,
  });

  checkNode("10");
};
