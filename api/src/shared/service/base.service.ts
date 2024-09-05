import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

import { NotFoundException } from '@nestjs/common';
import { BaseEntity } from '../entities/base.entity';

const defaultFindOption = {
  order: {
    createdAt: -1,
  },
  take: 10,
};

export abstract class BaseService<T extends BaseEntity> {
  constructor(private repository: Repository<T>) {}

  private async createInstance(values): Promise<any> {
    const instance = await this.repository.create(values);
    return instance;
  }

  async create(values: DeepPartial<T>) {
    const instance: T = await this.createInstance(values);
    const row = await this.repository.save(instance);
    return row;
  }

  find(options: FindManyOptions<T> = {}) {
    const findOption = Object.assign(defaultFindOption, options);
    return this.repository.find(findOption);
  }

  async findOne(options: FindOneOptions<T> = {}, throwException = true) {
    const record = await this.repository.findOne(options);
    if (!record && throwException) throw new NotFoundException();
    return record;
  }

  async findById(
    id: string,
    options: Omit<FindOneOptions<T>, 'where'> = {},
    throwException = true,
  ) {
    const record = await this.repository.findOne({
      where: { id },
      ...options,
    } as FindOneOptions<T>);
    if (!record && throwException) throw new NotFoundException();
    return record;
  }

  async updateById(id: string, values: DeepPartial<T>) {
    const oldRecord = await this.findById(id);
    const instance = await this.createInstance({
      id,
      ...values,
    });
    const record = await this.repository.save(instance);
    return Object.assign(oldRecord, record);
  }

  async incrementById(id: string, columnName: keyof T, value: number = 1) {
    return this.repository.increment(
      { id } as FindOptionsWhere<T>,
      columnName as string,
      value,
    );
  }
  async decrementById(id: string, columnName: keyof T, value: number = 1) {
    return this.repository.decrement(
      { id } as FindOptionsWhere<T>,
      columnName as string,
      value,
    );
  }

  async removeById(id: string) {
    const record = await this.findById(id);
    await this.repository.delete({ id } as FindOptionsWhere<T>);
    return record;
  }

  async exists(options: FindOneOptions<T>) {
    return this.repository.exists(options);
  }
  async existsBy(id: string) {
    return this.repository.existsBy({ id } as FindOptionsWhere<T>);
  }
}
