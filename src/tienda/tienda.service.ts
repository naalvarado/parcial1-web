import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda-entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ){}

    async create(tienda: TiendaEntity): Promise<TiendaEntity> {
        if(tienda.teléfono.length > 10) {
            throw new BusinessLogicException("El telefono de la tienda no puede tener mas de 10 caracteres", BusinessError.PRECONDITION_FAILED);
        }
        return await this.tiendaRepository.save(tienda);
    }
}
