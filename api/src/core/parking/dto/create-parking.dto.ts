import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateParkingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  license: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spaceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vehicleTypeId: string;
}
