import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/service/base.service';
import { TypeEntity } from './entities/type.entity';

@Injectable()
export class TypesService extends BaseService<TypeEntity> {
  constructor(
    @InjectRepository(TypeEntity)
    private typeRepository: Repository<TypeEntity>,
  ) {
    super(typeRepository);
  }
}
