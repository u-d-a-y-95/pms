import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeEntity } from './entities/size.entity';
import { CreateSpaceDto } from './dto/create-space.dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(SizeEntity)
    private sizeRepository: Repository<SizeEntity>,
  ) {}

  async createBluckSizes(bulkPayload: any[]): Promise<SizeEntity[]> {
    const sizes = bulkPayload.map((payload) => {
      const size = new SizeEntity();
      size.count = payload.count;
      size.spaceId = payload.spaceId;
      size.vehicleTypes = payload.vehicleTypes;
      return size;
    });

    return await this.sizeRepository.save(sizes);
  }
}
