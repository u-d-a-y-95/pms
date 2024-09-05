import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { SizeEntity } from './size.entity';

@Entity('spaces')
export class SpaceEntity extends BaseEntity {
  @Column({})
  name: string;

  @OneToMany(() => SizeEntity, (size) => size.space, { cascade: true })
  sizes: SizeEntity[];
  space: any;
}
