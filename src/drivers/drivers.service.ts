import { Injectable } from '@nestjs/common';
import { DriversRepository } from './drivers.repository';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(private readonly driversRepository: DriversRepository) {}

  create(createDriverDto: CreateDriverDto): Driver {
    return this.driversRepository.create(new Driver(createDriverDto));
  }

  findAll(): Driver[] {
    return this.driversRepository.find();
  }

  findOne(id: string): Driver {
    return this.driversRepository.findOne(id);
  }

  update(id: string, updateDriverDto: UpdateDriverDto): Driver {
    return this.driversRepository.update(id, updateDriverDto);
  }

  remove(id: string) {
    return this.driversRepository.remove(id);
  }
}
