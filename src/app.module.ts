import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { BreweriesModule } from './breweries/breweries.module';
import { SwaggerTestController } from './swagger-test/swagger-test.controller';
import { UsersModule } from './users/users.module';

@Module({
    imports: [BreweriesModule, UsersModule, ConfigModule.forRoot({ cache: true, isGlobal: true })],
    controllers: [SwaggerTestController],
    providers: [AppService],
})
export class AppModule {}
