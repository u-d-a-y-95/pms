import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CapacityEntity } from './capacity.entity';
import { ParkingEntity } from 'src/core/parking/entities/parking.entity';

@Entity('spaces')
export class SpaceEntity extends BaseEntity {
  @Column({})
  name: string;

  @OneToMany(() => CapacityEntity, (capacity) => capacity.space, {
    eager: true,
    cascade: true,
  })
  capacites: CapacityEntity[];

  @OneToMany(() => ParkingEntity, (parking) => parking.space)
  parkings: ParkingEntity[];
}
