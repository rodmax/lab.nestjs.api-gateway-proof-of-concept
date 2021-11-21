import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BreweriesController } from './breweries.controller';
import { BreweriesService } from './breweries.service';

@Module({
    imports: [HttpModule],
    controllers: [BreweriesController],
    providers: [BreweriesService],
})
export class BreweriesModule {}
