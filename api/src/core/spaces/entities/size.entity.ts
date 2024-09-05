import { BaseEntity } from 'src/shared/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { SpaceEntity } from './space.entity';
import { TypeEntity } from 'src/core/types/entities/type.entity';

@Entity('sizes')
export class SizeEntity extends BaseEntity {
  @Column()
  count: number;

  @ManyToOne(() => SpaceEntity, (space) => space.sizes, { onDelete: 'CASCADE' })
  space: SpaceEntity;

  @Column()
  spaceId: string;

  @ManyToMany(() => TypeEntity, { cascade: true })
  @JoinTable()
  vehicleTypes: TypeEntity[];
}
