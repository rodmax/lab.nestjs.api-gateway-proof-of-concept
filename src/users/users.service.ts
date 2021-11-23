import { Injectable } from '@nestjs/common';
import { APP_DB_USER_TABLE } from 'src/config/config.interface';
import { DbService } from 'src/db/db.service';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(private dbService: DbService) {}

    async findAll(): Promise<UserDto[]> {
        const result = await this.dbService.pool.query<UserDto>(
            `SELECT * from ${APP_DB_USER_TABLE}`,
        );
        return result.rows;
    }

    async findOne(id: number): Promise<UserDto> {
        const result = await this.dbService.pool.query<UserDto>(
            `SELECT * FROM ${APP_DB_USER_TABLE} WHERE ID = ${id}`,
        );
        // FIXME: if rows is empty return 404 :)
        return result.rows[0];
    }
}
