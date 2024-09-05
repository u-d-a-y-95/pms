import { ApiProperty } from '@nestjs/swagger';
import { ParkingEntity } from 'src/core/parking/entities/parking.entity';
import { CapacityEntity } from 'src/core/spaces/entities/capacity.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('types')
export class TypeEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  @ApiProperty()
  name: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  description: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  charge: number;

  @OneToMany(() => CapacityEntity, (size) => size.vehicleType)
  capacites: CapacityEntity[];

  @OneToMany(() => ParkingEntity, (parking) => parking.vehicleType)
  parkings: ParkingEntity[];
}
