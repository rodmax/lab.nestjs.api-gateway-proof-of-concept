# nestjs-api-gateway-proof-of-concept

## Goals

-   Study NestJs. Check developer experience and get acquainted with ecosystem

TODO checklist:

-   [x] init application
-   [x] Integrate with DB(postgres): `GET /users` response: JSON array with users from **PostgreSQL**
-   [x] Proxy response from another service: `GET /breweries`
-   [x] SWAGGER page
-   [ ] `GET /users/as-excel` response: excel file
-   [ ] authentication:
    -   `POST /login` with session token in cookies
    -   `POST /logout` clear cookies

## Design

Our application consists of:

-   postgreSQL started as standard docker container via docker-compose
-   NestJs application
-   proxied service: https://www.openbrewerydb.org/ free public API

## Usage

### Requirements

-   `nodejs` 14+
-   `docker` `docker-compose`
-   Clone repo and run `npm ci`

### Commands

-   start docker with postgreSQL(with pre-filled data)

```bash
npm run db:start # run as daemon
```

-   start app in dev(watch) mode

```bash
npm run start -- --watch
```

-   stop database daemon

```bash
npm run db:stop
```

-   clear database data (DB should be stopped before :warning:)

```bash
npm run db:remove
```

-   run e2e tests

```bash
# Step 0. start DB if not started yet
npm run test:e2e
```

## Progress details

```bash
# Prepare global environment
# On my system node 16 installed
npm i -g @nestjs/cli

# Initial setup application in existing git repo in "nestjs-api-gateway-proof-of-concept" folder
nest new --skip-git --language=TS --package-manager=npm nestjs-api-gateway-proof-of-concept


# Start application in watch mode
# See details about nest CLI here: https://docs.nestjs.com/cli/usages
npm run start -- --watch


nest g module breweries
nest g controller breweries
nest g service breweries
npm i --save @nestjs/axios


# /users from postgreSQL
# Step 1. init postgres
nest g module users
nest g controller users
nest g service users

# Simple DB integration using node pg package.
# Implementation borrowed from https://medium.com/@calleja.justin/using-plain-pg-with-nest-js-617ec32ec2c4
nest g module db
nest g service db


# Setup ConfigService
npm i --save @nestjs/config
# and then create .env file with envs, and use them in docker-compose.yml and ConfigService in nestjs app


# Setup swagger.
npm install --save @nestjs/swagger swagger-ui-express
# then follow the official docs: https://docs.nestjs.com/openapi/introduction
```
