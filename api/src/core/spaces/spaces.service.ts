import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/service/base.service';
import { SpaceEntity } from './entities/space.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpaceDto } from './dto/create-space.dto';
import { CapacityEntity } from './entities/capacity.entity';

@Injectable()
export class SpacesService extends BaseService<SpaceEntity> {
  constructor(
    @InjectRepository(SpaceEntity)
    private spaceRepository: Repository<SpaceEntity>,
  ) {
    super(spaceRepository);
  }

  async createSpace(createSpaceDto: CreateSpaceDto) {
    try {
      const space = await super.create({ name: createSpaceDto.name });
      const bulkCapacity = createSpaceDto.sizes.map((item) => {
        const size = new CapacityEntity();
        size.count = item.count;
        size.vehicleTypeId = item.vehicleTypeId;
        return size;
      });

      space.capacities = bulkCapacity;
      return await this.spaceRepository.save(space);
    } catch (error) {
      console.log(error);
    }
  }
}
