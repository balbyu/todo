# Todo Server - A Private Todo Backend

A simple backend component for a Todo application.

See [Todo-Client](https://github.com/balbyu/todo-client) for presentation component

The goal of this project was to develop the backend portion of a todo application with a couple of friends, rather than following some tutorial. Things to note about this code vs. what you might find in tutorials:

* Exclusively use ES6  with Async/Await
* Seperation of Express API concerns from networking
* Utilize Express Router to decouple routes
* Use a transpiler (Babel) to allow current Javascript syntax
* Use controllers to handle flow of information from the route to the database

## Setup

To run the Todo server, you will need PostgreSQL (we recommend using [Docker](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)) and the latest version of Node.js.

1) Install the required dependencies of the root directory if you haven't already:
```bash
$ npm i
```

2) Start a Docker daemon (either through command line or Docker Desktop). Run the script located in `./scripts` to start the postgres docker container :
```bash
$ ./startpg
```
3) Start the server by running:
```bash
$ npm run dev
```
