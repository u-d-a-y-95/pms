import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/service/base.service';
import { VehicleEntity } from './entities/vehicle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService extends BaseService<VehicleEntity> {
  constructor(
    @InjectRepository(VehicleEntity) userRespository: Repository<VehicleEntity>,
  ) {
    super(userRespository);
  }
}
