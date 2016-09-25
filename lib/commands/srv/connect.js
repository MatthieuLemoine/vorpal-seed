/**
* Connect to server command
*/

const chalk  = require('chalk');
const db     = require('../../utils/db');
const ssh    = require('../../utils/ssh.js');
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
        const srv = db.findServer(serverName);
        if (!srv) {
          return cb(
            chalk.red(`No server with the given name ${serverName}`)
          );
        }
        return ssh
          .shell(ssh.getSrvOpts(srv), cb);
      })
      .catch(error => cb(chalk.red(error)));
  },
};
