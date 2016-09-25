const db    = require('../../utils/db');

module.exports = (vorpal) => {
  const create = require('./create.js');
  const del    = require('./delete.js');
  const list   = require('./list.js');
  const update = require('./update.js');

  vorpal
    .command('todo create [name]')
    .description('Create a new todo')
    .action(create.action);

  vorpal
    .command('todo delete [name]')
    .autocomplete(db.getTodoNames())
    .description('Delete a todo')
    .action(del.action);

  vorpal
    .command('todo list')
    .description('List all your todos')
    .action(list.action);

  vorpal
    .command('todo update [name]')
    .autocomplete(db.getTodoNames())
    .description('Update a todo')
    .action(update.action);
};
