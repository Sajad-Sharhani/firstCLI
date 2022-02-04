import meow from "meow";

const helpText = `
  Usage
    npx sajad [options] <command>
    
  options
    bio             Show the bio information (Default: true)
    --no-bio        Hide the bio information
    social          Show the social information (Default: true)
    --no-social     Hide the social information
    clear           Clear the terminal (Default: true)
    --no-clear      Do not clear the terminal
    ad              Show the ad information (Default: true)
    --no-ad         Hide the ad information
    -m, --minimal   Show minimal information
    -d, --debug     Show debug information
    -v, --version   Show version

  commands
    help            Show CLI help
    
Examples
    npx sajad --no-social
      `;
const options = {
  importMeta: import.meta,
  inferType: true,
  hardRejection: false,
  flags: {
    minimal: {
      type: "boolean",
      alias: "m",
    },
    bio: {
      type: "boolean",
      default: true,
    },
    clear: {
      type: "boolean",
      default: true,
    },
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      default: false,
      alias: "d",
    },
    version: {
      type: "boolean",
      default: false,
      alias: "v",
    },
  },
};

export const cli = meow(helpText, options);
