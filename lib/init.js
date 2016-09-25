const figlet = require('figlet');
const chalk  = require('chalk');
const cli    = require('./utils/cli.js');
const db     = require('./utils/db');

const DEFAULT_FIGLET = 'CLI';
const DEFAULT_DELIMITER = 'cli>';
const DEFAULT_PROMPT_COLOR = 'yellow';

module.exports = (vorpal) => {
  const config    = db.getConfig();
  const cliFiglet = config.figlet || DEFAULT_FIGLET;
  const prompt    = config.prompt || DEFAULT_DELIMITER;
  const color     = config.promptColor || DEFAULT_PROMPT_COLOR;
  const delimiter = chalk[color](prompt);
  // Init vorpal
  vorpal
    .delimiter(delimiter)
    .history('cli')
    .show()
    .log(figlet.textSync(cliFiglet));

  cli.setDb(db);
  cli.resetTitle();

  if (!config.displayName) {
    vorpal.log('Run "setup" to setup your cli');
  } else {
    const username = config.displayName;
    vorpal.log(`Welcome back ${username}`);
  }

  // Keypress listener
  process.stdin.on('keypress', (_, key) => {
    if (key && key.name === 'l' && key.ctrl) {
      vorpal.log('\u001b[2J\u001b[0;0H');
    }
  });
};
