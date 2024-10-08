import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/service/base.service';
import { ParkingEntity } from './entities/parking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  IsNull,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { GetParkingQueryDto } from './dto/get-parking.dto';

@Injectable()
export class ParkingService extends BaseService<ParkingEntity> {
  constructor(
    @InjectRepository(ParkingEntity)
    private parkingRepository: Repository<ParkingEntity>,
  ) {
    super(parkingRepository);
  }

  async getAll(date: string) {
    if (date) {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new HttpException('Invalid date format', HttpStatus.BAD_REQUEST);
      }
      const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));

      return this.parkingRepository.find({
        where: {
          entryTime: Between(startOfDay, endOfDay),
        },
        relations: {
          space: {
            capacities: { vehicleType: true },
          },
          vehicleType: true,
        },
      });
    }

    return this.parkingRepository.find({
      relations: {
        space: true,
        vehicleType: true,
      },
    });
  }

  private buildWhereClause(getParkingQueryDto: GetParkingQueryDto) {
    const {
      startDate = '',
      endDate = '',
      currentlyParked = false,
    } = getParkingQueryDto;
    const where = {};
    if (startDate && endDate) {
      where['entryTime'] = Between(
        new Date(getParkingQueryDto.startDate),
        new Date(getParkingQueryDto.endDate),
      );
    } else if (startDate && !endDate) {
      where['entryTime'] = MoreThanOrEqual(
        new Date(getParkingQueryDto.startDate),
      );
    } else if (!startDate && endDate) {
      where['entryTime'] = LessThanOrEqual(
        new Date(getParkingQueryDto.endDate),
      );
    }
    if (currentlyParked) {
      console.log(typeof currentlyParked);
      where['exitTime'] = IsNull();
    }
    return where;
  }
  async getParkings(getParkingQueryDto: GetParkingQueryDto) {
    console.log(getParkingQueryDto);
    const where = this.buildWhereClause(getParkingQueryDto);
    return this.parkingRepository.find({
      where: where,
      relations: {
        space: true,
        vehicleType: true,
      },
    });
  }

  private calculateTotalHours(entryTime: Date, exitTime: Date) {
    const diffInMs =
      new Date(exitTime).getTime() - new Date(entryTime).getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60));
  }

  async checkoutById(id: string) {
    const parking = await super.findById(id, {
      relations: {
        vehicleType: true,
      },
    });
    if (parking.exitTime)
      return {
        message: 'Vehicle is already exit',
      };
    parking.exitTime = new Date();
    const totalHours = this.calculateTotalHours(
      parking.entryTime,
      parking.exitTime,
    );
    parking.charge = totalHours * parking.vehicleType.charge;
    return this.parkingRepository.save(parking);
  }
}
