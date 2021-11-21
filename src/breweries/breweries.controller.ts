import { Controller, Get } from '@nestjs/common';
import { BreweriesService } from './breweries.service';

@Controller('breweries')
export class BreweriesController {
    constructor(private breweriesService: BreweriesService) {}

    @Get('list')
    list() {
        return this.breweriesService.list();
    }
}
