const setTerminalTitle = require('set-terminal-title');

const DEFAULT_TITLE    = '[CLI]';
const DEFAULT_USERNAME = 'JunkOS';
let db;

module.exports = {
  resetTitle,
  setDb,
  updateTitle,
};

function resetTitle() {
  const config   = db.getConfig();
  const username = config.displayName || DEFAULT_USERNAME;
  const cliTitle = config.cli || DEFAULT_TITLE;
  setTitle(cliTitle, username);
}

function setDb(newDb) {
  db = newDb;
}

function setTitle(title, user) {
  const utitle = user ? `${title} - ${user}` : title;
  process.title = utitle;
  setTerminalTitle(utitle);
}

function updateTitle(title) {
  const config   = db.getConfig();
  const cliTitle = config.cli || DEFAULT_TITLE;
  setTitle(`${cliTitle} - ${title}`);
}
