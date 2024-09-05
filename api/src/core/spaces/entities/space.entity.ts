import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CapacityEntity } from './capacity.entity';

@Entity('spaces')
export class SpaceEntity extends BaseEntity {
  @Column({})
  name: string;

  @OneToMany(() => CapacityEntity, (capacity) => capacity.space, {
    cascade: true,
  })
  capacites: CapacityEntity[];
}
