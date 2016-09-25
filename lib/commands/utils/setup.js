/**
* Setup cli command
*/

const chalk = require('chalk');
const db    = require('../../utils/db');

module.exports = {
  action : function action(args, cb) {
    const config = Object.assign({}, {
      displayName : '',
      cli         : '',
      figlet      : '',
      prompt      : '',
      promptColor : ''
    }, db.getConfig());
    this
      .prompt([
        {
          type    : 'input',
          name    : 'displayName',
          message : 'Enter your name : ',
          default : config.displayName,
        },
        {
          type    : 'input',
          name    : 'cli',
          message : 'CLI name : ',
          default : config.cli,
        },
        {
          type    : 'input',
          name    : 'figlet',
          message : 'CLI figlet : ',
          default : config.figlet,
        },
        {
          type    : 'input',
          name    : 'prompt',
          message : 'Prompt : ',
          default : config.prompt,
        },
        {
          type    : 'list',
          name    : 'promptColor',
          message : 'Prompt color : ',
          choices : [
            'yellow',
            'black',
            'red',
            'green',
            'blue',
            'magenta',
            'cyan',
            'white',
            'gray',
            'bgYellow',
            'bgBlack',
            'bgRed',
            'bgGreen',
            'bgBlue',
            'bgMagenta',
            'bgCyan',
            'bgWhite'
          ],
          default : 0,
        },
      ])
      .then(answers => {
        db.setConfig({
          displayName : answers.displayName,
          cli         : answers.cli,
          figlet      : answers.figlet,
          prompt      : answers.prompt,
          promptColor : answers.promptColor
        });

        cb(chalk.green(`Welcome ${answers.displayName}!\n` +
          'Type help to see the list of available commands'));
      })
      .catch(err => cb(chalk.red(err)));
  },
};
