import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FindPostQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  limit: number = Infinity;

  @ApiPropertyOptional()
  @IsOptional()
  depth: number = Infinity;
}
