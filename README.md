# nestjs-api-gateway-proof-of-concept

TODO checklist:

-   [ ] init application
-   [ ] `POST /login` authenticate with session token in cookies
-   [ ] `POST /logout` clear cookies
-   [ ] `GET /users` response: JSON array with users from **PosgreSQL**
-   [ ] `GET /users/as-excel` response: excel file
-   [ ] `GET /data-from-service` load data from other service
-   [ ] swagger page

## Actions log

```bash
npm i -g @nestjs/cli
nest new --skip-git --language=TS --package-manager=npm nestjs-api-gateway-proof-of-concept
```
