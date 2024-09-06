import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ParkingService } from './parking.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Parking')
@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post()
  create(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingService.create({
      ...createParkingDto,
      entryTime: new Date(),
    });
  }

  @Get()
  @ApiQuery({ name: 'date', required: false })
  findAll(@Query('date') date?: string) {
    return this.parkingService.getAll(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkingDto: UpdateParkingDto) {
    return this.parkingService.updateById(id, updateParkingDto);
  }

  @Patch(':id/checkout')
  checkoutByID(@Param('id') id: string) {
    return this.parkingService.checkoutById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingService.removeById(id);
  }
}
