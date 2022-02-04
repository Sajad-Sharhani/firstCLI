import { createRequire } from "module";
const require = createRequire(import.meta.url);
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");
import boxen from "boxen";

const pkgJSON = require("./../package.json");
const log = console.log;

export default (minimal, clear) => {
  unhandled();

  !minimal &&
    welcome({
      title: `Sajad Sharhani`,
      tagLine: `Get to know Sajad`,
      description: pkgJSON.description,
      version: pkgJSON.version,
      bgColor: `#6937FF`,
      color: `#000000`,
      bold: true,
      clear,
    });

  minimal &&
    log(
      boxen(`Sajad Sharhani`, {
        padding: 1,
        margin: 1,
        borderColor: `#6937FF`,
        float: `center`,
        dimBorder: true,
      })
    );

  checkNode("10");
};
