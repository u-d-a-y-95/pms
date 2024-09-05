import { Module } from '@nestjs/common';
import { TypesModule } from './types/types.module';
import { SpacesModule } from './spaces/spaces.module';
import { ParkingModule } from './parking/parking.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [TypesModule, VehiclesModule, SpacesModule, ParkingModule],
})
export class CoreModule {}
