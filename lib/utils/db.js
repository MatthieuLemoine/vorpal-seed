const sh       = require('shelljs');
const userHome = require('user-home');

let db = {};

module.exports = {
  addServer,
  addTodo,
  deleteServer,
  deleteTodo,
  findServer,
  getCliTitle,
  getConfig,
  getServerNames,
  getServers,
  getTodoNames,
  getTodos,
  init,
  setConfig
};

function addServer(server) {
  db('servers').push(server);
}
function addTodo(todo) {
  db('todos').push(todo);
}

function deleteServer(serverName) {
  db('servers').remove({ name : serverName });
}

function deleteTodo(name) {
  db('todos').remove({ name });
}

function findServer(name) {
  return db('servers').find({ name });
}
function getCliTitle() {
  return getConfig().cli || '';
}

function getConfig() {
  return db('config').value() || {};
}

function getServers() {
  return db('servers').value() || [];
}

function getServerNames() {
  return db('servers').map('name');
}

function getTodoNames() {
  return db('todos').map('name');
}

function getTodos() {
  return db('todos').value();
}

function init() {
  // Cli home
  const cliHome        = `${userHome}/.cli`;
  const cliStorageHome = `${cliHome}/storage`;
  const clidbFile      = `${cliStorageHome}/db.json`;
  if (!sh.test('-d', cliHome)) {
    sh.mkdir(cliHome);
  }
  if (!sh.test('-d', cliStorageHome)) {
    sh.mkdir(`${cliHome}/storage`);
  }
  // Create db if does not exist
  if (!sh.test('-f', clidbFile)) {
    sh.touch(clidbFile);
  }

  // Database
  const low     = require('lowdb');
  const storage = require('lowdb/file-sync');
  db = low(clidbFile, { storage });
}

function setConfig(config) {
  db.object.config = config;
  db.write();
}
