import { SpaceEntity } from 'src/core/spaces/entities/space.entity';
import { TypeEntity } from 'src/core/types/entities/type.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('parking')
export class ParkingEntity extends BaseEntity {
  @Column({})
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  license: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  entryTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  exitTime: Date;

  @Column({ nullable: true })
  charge: number;

  @ManyToOne(() => SpaceEntity, (space) => space.parkings, { eager: true })
  @JoinColumn()
  space: SpaceEntity;

  @Column()
  spaceId: string;

  @ManyToOne(() => TypeEntity, (type) => type.parkings, { eager: true })
  @JoinColumn()
  vehicleType: TypeEntity;

  @Column()
  vehicleTypeId: string;
}
