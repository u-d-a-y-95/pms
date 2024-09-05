import { VehicleEntity } from 'src/core/vehicles/entities/vehicle.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('parking')
export class ParkingEntity extends BaseEntity {
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  entryTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  exitTime: Date;

  @Column({})
  charge: number;

  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.parkings)
  vehicle: VehicleEntity;

  // Parking charge ->
}
