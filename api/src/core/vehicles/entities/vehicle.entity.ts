import { ApiTags } from '@nestjs/swagger';
import { ParkingEntity } from 'src/core/parking/entities/parking.entity';
import { SizeEntity } from 'src/core/spaces/entities/size.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

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

  @ManyToMany(() => SizeEntity, (size) => size.vehicleTypes)
  sizes: SizeEntity[];
}
