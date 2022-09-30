import { Module } from '@nestjs/common';
import { CafeService } from './cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeEntity } from './cafe-entity';

@Module({
  providers: [CafeService],
  imports: [TypeOrmModule.forFeature([CafeEntity])],
})
export class CafeModule {}
