import { createRequire } from "module";
const require = createRequire(import.meta.url);
const handleError = require("cli-handle-error");
import fetch from "node-fetch";

const apiURL = `https://api.github.com/users/Sajad-Sharhani`;
export default async () => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    const gtFollower = data.followers;

    console.log(`GitHub Followers ${gtFollower} `);
  } catch (error) {
    handleError(`API CALL FAILED`, error, false, false);
  }
};
