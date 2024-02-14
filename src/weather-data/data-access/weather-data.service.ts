import { Injectable } from '@nestjs/common';
import { CreateWeatherDatumDto } from './dto/create-weather-datum.dto';
import { UpdateWeatherDatumDto } from './dto/update-weather-datum.dto';

@Injectable()
export class WeatherDataService {
  create(createWeatherDatumDto: CreateWeatherDatumDto) {
    return 'This action adds a new weatherDatum';
  }

  findAll() {
    return `This action returns all weatherData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weatherDatum`;
  }

  update(id: number, updateWeatherDatumDto: UpdateWeatherDatumDto) {
    return `This action updates a #${id} weatherDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} weatherDatum`;
  }
}
