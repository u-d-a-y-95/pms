import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SpaceEntity } from './space.entity';
import { TypeEntity } from 'src/core/types/entities/type.entity';

@Entity('capacities')
export class CapacityEntity extends BaseEntity {
  @Column()
  count: number;

  @ManyToOne(() => SpaceEntity, (space) => space.capacities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  space: SpaceEntity;

  @Column()
  spaceId: string;

  @ManyToOne(() => TypeEntity, (type) => type.capacities)
  @JoinColumn()
  vehicleType: TypeEntity;

  @Column()
  vehicleTypeId: string;
}
