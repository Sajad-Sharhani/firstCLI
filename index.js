#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Get to know Sajad`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
    
Sajad Sharhani - Software Engineer

Sajad is a CLI tool that helps you to get to know Sajad.`);
