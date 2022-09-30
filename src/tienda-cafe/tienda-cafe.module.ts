import { Module } from '@nestjs/common';
import { TiendaCafeService } from './tienda-cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaEntity } from '../tienda/tienda-entity';
import { CafeEntity } from '../cafe/cafe-entity';

@Module({
  providers: [TiendaCafeService],
  imports: [TypeOrmModule.forFeature([TiendaEntity, CafeEntity])],
})
export class TiendaCafeModule {}
