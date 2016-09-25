/**
* Create todo command
*/
const chalk = require('chalk');
const db    = require('../../utils/db');

module.exports = {
  action : function action(args, cb) {
    let name = args.name ? args.name.toString() : null;
    this
      .prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Enter todo\'s name : ',
          when    : !name,
        },
        {
          type    : 'input',
          name    : 'content',
          message : 'Enter todo\'s content : ',
        },
      ])
      .then(answers => {
        name = name || answers.name;
        db.addTodo({
          name,
          content : answers.content,
        });
        return cb(chalk.green(`Todo ${name} created`));
      })
      .catch(err => cb(chalk.red(err)));
  },
};
