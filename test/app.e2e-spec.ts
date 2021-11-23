import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersController } from 'src/users/users.controller';
import { UserDto } from 'src/users/users.dto';
import { BreweriesController } from 'src/breweries/breweries.controller';

const USERS_FROM_DB: ReadonlyArray<UserDto> = [
    { id: 1, email: 'first-user@from.sql' },
    { id: 2, email: 'second-user@from.sql' },
];

describe('e2e tests', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    describe(`${UsersController.name}`, () => {
        it('GET /users', () => {
            return request(app.getHttpServer()).get('/users').expect(200).expect(USERS_FROM_DB);
        });
        it('GET /users/:id', () => {
            const id = 1;
            return request(app.getHttpServer())
                .get(`/users/${id}`)
                .expect(200)
                .expect(USERS_FROM_DB.find((u) => u.id === id) as UserDto);
        });
    });

    describe(`${BreweriesController.name}`, () => {
        it('GET /breweries', (done) => {
            request(app.getHttpServer())
                .get('/breweries')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done.fail(err);
                        return;
                    }
                    expect(res.body).toBeInstanceOf(Array);
                    expect(res.body[0]).toStrictEqual({
                        id: '10-56-brewing-company-knox',
                        name: '10-56 Brewing Company',
                        brewery_type: 'micro',
                        street: '400 Brown Cir',
                        address_2: null,
                        address_3: null,
                        city: 'Knox',
                        state: 'Indiana',
                        county_province: null,
                        postal_code: '46534',
                        country: 'United States',
                        longitude: '-86.627954',
                        latitude: '41.289715',
                        phone: '6308165790',
                        website_url: null,
                        updated_at: '2021-10-23T02:24:55.243Z',
                        created_at: '2021-10-23T02:24:55.243Z',
                    });
                    done();
                });
        });
    });
});
