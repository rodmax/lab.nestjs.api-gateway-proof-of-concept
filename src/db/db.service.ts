import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { AppConfig } from 'src/config/config.interface';

@Injectable()
export class DbService {
    public readonly pool: Pool;
    constructor(configService: ConfigService<AppConfig>) {
        this.pool = new Pool({
            user: configService.get('APP_DB_USER'),
            password: configService.get('APP_DB_PASSWORD'),
            database: configService.get('APP_DB_NAME'),
            host: configService.get('APP_DB_HOST'),
            port: +configService.get('APP_DB_PORT'),
        });
    }
}
