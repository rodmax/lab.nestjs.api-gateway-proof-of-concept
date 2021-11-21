# nestjs-api-gateway-proof-of-concept

TODO checklist:

-   [*] init application
-   [ ] `POST /login` authenticate with session token in cookies
-   [ ] `POST /logout` clear cookies
-   [*] `GET /users` response: JSON array with users from **PostgreSQL**
-   [ ] `GET /users/as-excel` response: excel file
-   [*] `GET /data-from-service` load data from other service
-   [ ] swagger page

## Notes

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
```
