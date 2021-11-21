import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreweriesModule } from './breweries/breweries.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [BreweriesModule, UsersModule, ConfigModule.forRoot({ cache: true, isGlobal: true })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
