/**
* List envs command
*/

const chalk = require('chalk');
const Table = require('cli-table2');
const db    = require('../../utils/db');

module.exports = {
  action : function action(args, cb) {
    cb(generateList(db.getServers()));
  },
};

function generateList(servers) {
  if (servers && servers.length) {
    const table = new Table({
      head : [
        'Id',
        'Name',
        'Host',
        'User',
        'Port',
      ],
      colWidths : [5, 15, 20, 15, 10, 20],
    });
    servers.forEach((env, index) => {
      table.push([
        ++index,
        chalk.green(env.name),
        chalk.blue(env.host),
        env.user,
        env.ssh_port
      ]);
    });
    return table.toString();
  }
  return chalk.red('No servers found. Use "srv create" to create one.');
}
