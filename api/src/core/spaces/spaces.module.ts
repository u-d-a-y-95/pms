import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { SpaceEntity } from './entities/space.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacityEntity } from './entities/capacity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceEntity, CapacityEntity])],
  controllers: [SpacesController],
  providers: [SpacesService],
})
export class SpacesModule {}
