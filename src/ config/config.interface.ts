export interface AppConfig {
    APP_DB_USER: string;
    APP_DB_PASSWORD: string;
    APP_DB_HOST: string;
    APP_DB_PORT: string;
    APP_DB_NAME: string;
}

export const APP_DB_SCHEME = 'api_gateway' as const;
export const APP_DB_USER_TABLE = `${APP_DB_SCHEME}.user` as const;
