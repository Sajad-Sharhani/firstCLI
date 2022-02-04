import { createRequire } from "module";
const require = createRequire(import.meta.url);
const chalk = require("chalk");
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const bio = `${italic(
  `Beginner open-source engineer and developer. I am a software engineer with a passion for building software. I am currently working at Coursee`
)}
`;

const social = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/SajadSharhani`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/Sajad-Sharhani`)}
${purple(` Linkedin `)}    ${dim(
  `https://www.linkedin.com/in/sajad-sharhani-757509137/`
)}
`;

const ad = `Check out my GitHub repo.`;
const blogName = `SajadSharhani.com`;
const blog = `Latest posts`;

export const data = {
  bio,
  social,
  ad,
  blogName,
  blog,
};
