/**
* Update todo command
*/
const chalk  = require('chalk');
const db     = require('../../utils/db');
const prompt = require('../../utils/prompt')(db);

module.exports = {
  action : function action(args, cb) {
    let name = args.name ? args.name.toString() : null;
    this
      .prompt([
        prompt.todos(name),
        {
          type    : 'input',
          name    : 'content',
          message : 'Update todo\'s content : ',
        },
      ])
      .then(answers => {
        name = name || answers.name;
        db.deleteTodo(name);
        db.addTodo({
          name,
          content : answers.content,
        });
        return cb(chalk.green(`Todo ${name} updated`));
      })
      .catch(err => cb(chalk.red(err)));
  },
};
