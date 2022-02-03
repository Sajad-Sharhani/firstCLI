#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;

import sym from "log-symbols";
// const sym = require("log-symbols");
const success = chalk.green;
const error = chalk.red.bold;
const warning = chalk.keyword(`orange`);
const info = chalk.blue;

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

log(
  `${chalk.italic.bold(
    `Sajad is a CLI tool that helps you to get to know Sajad.`
  )}

${chalk.hex(`6cc644`).bold.inverse(` GitHub `)} ${chalk.dim(
    `https://github.com/Sajad-Sharhani`
  )}
${chalk.hex(`1da1f2`).bold.inverse(` Twitter `)} ${chalk.dim(
    `https://twitter.com/SajadSharhani`
  )}
${chalk.hex(`0077b5`).bold.inverse(` Linkedin `)} ${chalk.dim(
    `https://www.linkedin.com/in/sajad-sharhani-757509137/`
  )}
`
);

log(`
${sym.success} ${success(` SUCCESS `)} Thanks for ckecking out my CLI.
${sym.info} ${info(
  ` INFO `
)} You can find more information about me at my GitHub profile.
${sym.warning} ${warning(
  ` WARNING `
)} You can find more information about me at my Twitter profile.
${sym.error} ${error(` ERROR `)} I hope you enjoy it.
`);
