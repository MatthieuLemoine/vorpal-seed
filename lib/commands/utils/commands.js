module.exports = (vorpal) => {
  const setup = require('./setup.js');

  vorpal
    .command('clear')
    .description('Clear console')
    .action(function clear(args, cb) {
      this.log('\u001b[2J\u001b[0;0H');
      cb();
    });

  vorpal
    .command('setup')
    .description('Setup your cli / Update your informations')
    .action(setup.action);
};
