import { Body, Controller, Get } from '@nestjs/common';
import { RequestBodyDto, ResponseDto, TagAsEnum } from './swagger-test.dto';

@Controller('swagger-test-endpoint')
export class SwaggerTestController {
    @Get('data')
    list(@Body() body: RequestBodyDto): ResponseDto {
        console.log('request body', body);
        return {
            enumTag: TagAsEnum.Tag1,
            fieldWithJsDoc: 'value',
            nestedDefinedAsClass: { jsDocWorking: 100, unionNotTagsWorking: [] },
            nestedDefinedAsInterface: { jsDocNotWorking: 200, unionTagsNotWorking: [] },
            numberField: 300,
        };
    }
}
