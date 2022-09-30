import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { CafeEntity } from './cafe-entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { faker } from '@faker-js/faker';

describe('CafeService', () => {
  let service: CafeService;
  let repository: Repository<CafeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
      imports: [...TypeOrmTestingConfig()],
    }).compile();

    repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));
    service = module.get<CafeService>(CafeService);
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
  }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
