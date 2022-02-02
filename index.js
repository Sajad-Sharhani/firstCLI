#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;

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
