import { ApiProperty } from '@nestjs/swagger';
import { SizeEntity } from 'src/core/spaces/entities/size.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, ManyToMany, OneToOne } from 'typeorm';

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

  @ManyToMany(() => SizeEntity, (size) => size.vehicleTypes)
  sizes: SizeEntity[];
}
