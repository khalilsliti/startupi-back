import { Test, TestingModule } from '@nestjs/testing';
import { ContactStartupiService } from './contact-startupi.service';

describe('ContactStartupiService', () => {
  let service: ContactStartupiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactStartupiService],
    }).compile();

    service = module.get<ContactStartupiService>(ContactStartupiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
