import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface BreweriesListDto {
    willBeTypedLater: string;
}

@Injectable()
export class BreweriesService {
    constructor(private httpService: HttpService) {}

    list(): Observable<BreweriesListDto> {
        return this.httpService
            .get<BreweriesListDto>('https://api.openbrewerydb.org/breweries')
            .pipe(map((resp) => resp.data));
    }
}
