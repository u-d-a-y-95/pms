import { ApiProperty } from '@nestjs/swagger';
import { CapacityEntity } from 'src/core/spaces/entities/capacity.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

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

  @ManyToMany(() => CapacityEntity, (size) => size.vehicleType)
  capacites: CapacityEntity[];
}
