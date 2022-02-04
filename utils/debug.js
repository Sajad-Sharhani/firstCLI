import { createRequire } from "module";
const require = createRequire(import.meta.url);

const alert = require("cli-alerts");

export default (isDebug, cli) => {
  if (!isDebug) {
    return;
  }
  const log = console.log;
  alert({ type: "warning", message: `DEBUGING INFO ↓` });
  log(`input:`, cli.input);
  log(`flags:`, cli.flags);
  log();
};
