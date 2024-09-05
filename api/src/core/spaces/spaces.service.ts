import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/service/base.service';
import { SpaceEntity } from './entities/space.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeService } from './size.service';
import { CreateSpaceDto } from './dto/create-space.dto';

@Injectable()
export class SpacesService extends BaseService<SpaceEntity> {
  constructor(
    @InjectRepository(SpaceEntity)
    private spaceRepository: Repository<SpaceEntity>,
    private sizeService: SizeService,
  ) {
    super(spaceRepository);
  }

  async createSpace(createSpaceDto: CreateSpaceDto) {
    const space = await super.create({ name: createSpaceDto.name });
    const bulkPaylaod = createSpaceDto.sizes.map((item) => ({
      spaceId: space.id,
      ...item,
    }));
    const bulkSize = await this.sizeService.createBluckSizes(bulkPaylaod);
    space.sizes = bulkSize;
    this.spaceRepository.save(space);
  }
}
