import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreweriesModule } from './breweries/breweries.module';

@Module({
    imports: [BreweriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
