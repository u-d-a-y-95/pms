import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SpaceEntity } from './space.entity';
import { TypeEntity } from 'src/core/types/entities/type.entity';

@Entity('capacities')
export class CapacityEntity extends BaseEntity {
  @Column()
  count: number;

  @ManyToOne(() => SpaceEntity, (space) => space.capacites, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  space: SpaceEntity;

  @Column()
  spaceId: string;

  @ManyToOne(() => TypeEntity, (types) => types.capacites, { eager: true })
  @JoinColumn()
  vehicleType: TypeEntity;

  @Column()
  vehicleTypeId: string;
}
