import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class SizeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vehicleTypeId: string;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  count: number;
}

export class CreateSpaceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ isArray: true, type: SizeDto })
  sizes: SizeDto[];
}
