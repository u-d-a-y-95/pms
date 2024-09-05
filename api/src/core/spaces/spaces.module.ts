import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { SpaceEntity } from './entities/space.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeEntity } from './entities/size.entity';
import { SizeService } from './size.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceEntity, SizeEntity])],
  controllers: [SpacesController],
  providers: [SpacesService, SizeService],
})
export class SpacesModule {}
