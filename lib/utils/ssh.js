/**
* SSH utils
*/

const ssh   = require('ssh2-client');
const chalk = require('chalk');
const cli   = require('./cli.js');

module.exports = {
  shell : function shell(opts, end) {
    cli.updateTitle(opts.host);
    opts.preserveStdin = true;
    return ssh
      .shell(opts.host, opts)
      .then(() => {
        cli.resetTitle();
        end();
      })
      .catch((err) => {
        end(chalk.red(err));
      });
  },
  exec : function exec(cmd, opts, end) {
    return ssh.
      exec(opts.host, cmd, opts)
      .then((result) => {
        end(result.out);
      })
      .catch((err) => {
        end(chalk.red(err));
      });
  },
  getSrvOpts : function getSrvOpts(srv) {
    const opts = {
      host     : srv.host,
      port     : srv.ssh_port,
      username : srv.user,
    };
    if (srv.password) {
      opts.password = srv.password;
    }
    return opts;
  },
};
