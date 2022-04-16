import { Test, TestingModule } from '@nestjs/testing';
import { ContactStartupiController } from './contact-startupi.controller';
import { ContactStartupiService } from './contact-startupi.service';

describe('ContactStartupiController', () => {
  let controller: ContactStartupiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactStartupiController],
      providers: [ContactStartupiService],
    }).compile();

    controller = module.get<ContactStartupiController>(ContactStartupiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
