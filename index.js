#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const alert = require("cli-alerts");
const handleError = require("cli-handle-error");
const log = console.log;
import init from "./utils/init.js";
import debug from "./utils/debug.js";
import { data } from "./utils/data.js";
import { cli } from "./utils/cli.js";
import stats from "./utils/stats.js";

const input = cli.input;
const flags = cli.flags;

(async () => {
  const log = console.log;
  init(flags.minimal, flags.clear);
  input.includes("help") && cli.showHelp(0);
  flags.bio && log(data.bio);
  flags.social && log(data.social);
  flags.ad && alert({ type: "info", message: data.ad });

  await stats();

  debug(flags.debug, cli);
})();
