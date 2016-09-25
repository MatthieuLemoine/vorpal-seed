module.exports = db => ({
  srvs : (defaultValue) => ({
    type    : 'list',
    name    : 'name',
    message : 'Choose a srv: ',
    choices : db.getServerNames(),
    default : 0,
    when    : !defaultValue,
  }),
  todos : defaultValue => ({
    type    : 'list',
    name    : 'name',
    message : 'Choose a todo : ',
    choices : db.getTodoNames(),
    default : 0,
    when    : !defaultValue,
  }),
  confirm : (name, message) => ({
    type    : 'confirm',
    name,
    message,
  }),
});
