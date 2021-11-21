# nestjs-api-gateway-proof-of-concept

TODO checklist:

-   [*] init application
-   [ ] `POST /login` authenticate with session token in cookies
-   [ ] `POST /logout` clear cookies
-   [ ] `GET /users` response: JSON array with users from **PosgreSQL**
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
```
