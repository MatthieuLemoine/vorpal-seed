/**
* Create server command
*/

const chalk  = require('chalk');
const db     = require('../../utils/db');

module.exports = {
  action : function action(args, cb) {
    let serverName = args.server ? args.server.toString() : null;
    this
      .prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Enter server name : ',
          when    : !serverName,
        },
        {
          type    : 'input',
          name    : 'host',
          message : 'Enter server hostname : ',
        },
        {
          type    : 'input',
          name    : 'user',
          message : 'Enter ssh user : ',
        },
        {
          type    : 'password',
          name    : 'password',
          message : 'Enter ssh password : ',
        },
        {
          type    : 'input',
          name    : 'ssh_port',
          message : 'Enter ssh port : ',
          default : '22'
        },
      ])
      .then(answers => {
        serverName = serverName || answers.name;
        const srv    = {
          name     : serverName,
          host     : answers.host,
          user     : answers.user,
          password : answers.password,
          ssh_port : answers.ssh_port,
        };
        db.addServer(srv);
        cb(chalk.green(
          `${srv.name} server was created.`)
        );
      })
      .catch(error => cb(chalk.red(error)));
  },
};
