/**
* List todos command
*/
const chalk = require('chalk');
const Table = require('cli-table2');
const db    = require('../../utils/db');

module.exports = {
  action : (args, cb) => list(args, cb, db),
};

function list(args, cb) {
  const table = new Table({
    head : [
      'Id',
      'Name',
      'Content',
    ],
    colWidths : [5, 30],
  });
  db.getTodos().forEach((todo, index) =>
    table.push([++index, chalk.green(todo.name), chalk.blue(todo.content)])
  );
  return cb(table.toString());
}
