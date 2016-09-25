# Vorpal Seed

A vorpal seed with storage, ssh support and sample commands.

## Usage

- Type help to see the list of available commands

## Sample commands

### Clear

Clear console output.

```
clear
```

## Setup

Setup your cli.

```javascript
{
    "displayName" : "JunkOS",
    "cli"         : "My CLI",
    "figlet"      : "CLI"
    "prompt"      : "cli",
    "promptColor" : "red"
}
```

```
setup
```

### Servers

Servers you can connect to using ssh.

```javascript
{
    "name"    : "example",
    "host"    : "host.example.com",
    "user"    : "root",
    "ssh_port": "22",
    "password": "host"
}
```

```
# Create a server
srv create [srvName]

# Delete a server
srv delete [srvName]

# List servers
srv list

# Connect to a server over ssh
srv connect [srvName]
```

### Todo

Just a todo list.

```
# Create a todo
todo create [name]

# Delete a todo
todo delete [name]

# Update a todo
todo update [name]

# List all your todos
todo list
```

## Dependencies

- Node v6+

## Tips

- Make it available globally by creating a symbolic link of ``__dirname/bin/index.js`` as ``/usr/bin/cli``
- Assign a keyboard shortcut to it such as ``CTRL+ALT+C`` :
    - Go to System Settings -> Keyboard -> Shortcuts -> Personal shortcuts -> Add
    - Command : ``gnome-terminal -e "/usr/bin/cli"``

## Run

Global run :

    cli

Local run :

    ./bin/index.js

## Database

This cli use the very lightweight database [lowdb](https://github.com/typicode/lowdb). It's just a  `db.json` file.

You can find it at `~/.cli/storage/db.json`. Feel free to modify it directly.

## Contribute

All contributions are welcome !

Do not hesitate to submit a PR or to report an issue.
