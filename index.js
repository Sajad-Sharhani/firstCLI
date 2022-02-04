#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const alert = require("cli-alerts");
const handleError = require("cli-handle-error");
const log = console.log;
import init from "./utils/init.js";
import { data } from "./utils/data.js";

(async () => {
  init();
  log(data.bio);
  log(data.social);
  alert({ type: "info", message: data.ad });
})();
