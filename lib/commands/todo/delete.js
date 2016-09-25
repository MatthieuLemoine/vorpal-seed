/**
* Delete todo command
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
      ])
      .then(answers => {
        name = name || answers.name;
        db.deleteTodo(name);
        return cb(chalk.green(`Todo ${name} deleted`));
      })
      .catch(err => cb(chalk.red(err)));
  },
};
