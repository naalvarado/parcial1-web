import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe-entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class CafeService {
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async create(cafe: CafeEntity): Promise<CafeEntity> {
        if(cafe.precio < 0) {
            throw new BusinessLogicException("El precio del cafe no puede ser negativo.", BusinessError.PRECONDITION_FAILED);
        }
        return await this.cafeRepository.save(cafe);
    }
}
