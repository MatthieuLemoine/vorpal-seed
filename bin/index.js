#!/usr/bin/env node
const vorpal = require('vorpal')();

// Init db
require('../lib/utils/db').init();

// Server commands
require('../lib/commands/srv/commands.js')(vorpal);
// Utils commands
require('../lib/commands/utils/commands.js')(vorpal);
// Todo commands
require('../lib/commands/todo/commands.js')(vorpal);

// Cli init
require('../lib/init.js')(vorpal);
