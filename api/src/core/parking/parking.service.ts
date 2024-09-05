import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/service/base.service';
import { ParkingEntity } from './entities/parking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingService extends BaseService<ParkingEntity> {
  constructor(
    @InjectRepository(ParkingEntity)
    private parkingRepository: Repository<ParkingEntity>,
  ) {
    super(parkingRepository);
  }
}
