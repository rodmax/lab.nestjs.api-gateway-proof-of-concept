import { Test, TestingModule } from '@nestjs/testing';
import { BreweriesController } from './breweries.controller';

describe('BreweriesController', () => {
    let controller: BreweriesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BreweriesController],
        }).compile();

        controller = module.get<BreweriesController>(BreweriesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
