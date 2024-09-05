import { Module } from '@nestjs/common';
import { TypesModule } from './types/types.module';
import { SpacesModule } from './spaces/spaces.module';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [TypesModule, SpacesModule, ParkingModule],
})
export class CoreModule {}
