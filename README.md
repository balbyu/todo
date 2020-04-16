# Todo - a (private) Todo backend

(･ิL_･ิ)

## Setup

### Server

To run the Todo server, you will need PostgreSQL (we recommend using [Docker](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)) and the latest version of Node.js. If your local Postgres configuration differs from `server/config/default.toml`, you can maintain your own configuration file by creating a `dev.toml` in the same directory. All database connections will use `dev.toml` if present. 

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
