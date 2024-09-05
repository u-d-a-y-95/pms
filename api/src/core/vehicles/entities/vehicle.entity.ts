import { ParkingEntity } from 'src/core/parking/entities/parking.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('vehicles')
export class VehicleEntity extends BaseEntity {
  @Column({})
  name: string;

  @Column({})
  phone: string;

  @Column({ unique: true })
  license: string;

  @Column({ nullable: true })
  address: string;

  @OneToMany(() => ParkingEntity, (parking) => parking.vehicle, {
    cascade: true,
  })
  parkings: ParkingEntity[];
}
