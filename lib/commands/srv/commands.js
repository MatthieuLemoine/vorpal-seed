const db = require('../../utils/db');

module.exports = (vorpal) => {
  const create  = require('./create.js');
  const del     = require('./delete.js');
  const list    = require('./list.js');
  const connect = require('./connect.js');

  vorpal
    .command('srv create [server]')
    .description('Create a new server')
    .action(create.action);

  vorpal
    .command('srv delete [server]')
    .autocomplete(db.getServerNames)
    .description('Delete an existing server')
    .action(del.action);

  vorpal
    .command('srv list')
    .description('List all your servers')
    .action(list.action);

  vorpal
    .command('srv connect [server]')
    .autocomplete(db.getServerNames)
    .description('Connect to an server')
    .action(connect.action);
};
