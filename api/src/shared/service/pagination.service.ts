import { Injectable, Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { FindManyOptions, Repository } from 'typeorm';

export class Paginated<T> {
  @ApiProperty()
  results: T[];

  @ApiProperty()
  total: number;
}

export const ApiPaginatedResponse = <TModel extends Type<unknown>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(Paginated, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(Paginated) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};

export interface PaginatedFindManyOptions<T> extends FindManyOptions<T> {
  limit?: number;
  offset?: number;
}

@Injectable()
export class PaginationService {
  async paginate<T>(
    repository: Repository<T>,
    options: PaginatedFindManyOptions<T>,
  ): Promise<Paginated<T>> {
    const { limit = 10, offset = 0, ...queryOptions } = options;

    const [results, total] = await repository.findAndCount({
      skip: offset,
      take: limit,
      ...queryOptions,
    });

    return { total, results };
  }
}
