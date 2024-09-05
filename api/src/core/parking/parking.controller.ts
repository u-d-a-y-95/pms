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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Parking')
@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post()
  create(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingService.create(createParkingDto);
  }

  @Get()
  findAll(@Query('date') date: string) {
    console.log(date);
    return this.parkingService.find({
      ...(date && {
        where: {
          entryTime: new Date(date),
        },
      }),
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkingDto: UpdateParkingDto) {
    return this.parkingService.updateById(id, updateParkingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingService.removeById(id);
  }
}
