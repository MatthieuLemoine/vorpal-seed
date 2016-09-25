/**
* Delete env command
*/

const chalk  = require('chalk');
const db     = require('../../utils/db');
const prompt = require('../../utils/prompt')(db);

module.exports = {
  action : function action(args, cb) {
    let serverName = args.server ? args.server.toString() : null;
    this
      .prompt([
        prompt.srvs(serverName),
      ])
      .then(answers => {
        serverName = serverName || answers.name;
        db.deleteServer(serverName);
        return cb(
          chalk.green(`Server ${serverName} deleted.`)
        );
      })
      .catch(error => cb(chalk.red(error)));
  },
};
