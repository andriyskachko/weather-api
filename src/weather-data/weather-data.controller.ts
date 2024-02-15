import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeatherDataService } from './data-access/weather-data.service';
import { CreateWeatherDatumDto } from './data-access/dto/create-weather-datum.dto';
import { UpdateWeatherDatumDto } from './data-access/dto/update-weather-datum.dto';

@Controller('weather-data')
export class WeatherDataController {
  constructor(private readonly weatherDataService: WeatherDataService) {}

  @Post()
  create(@Body() createWeatherDatumDto: CreateWeatherDatumDto) {
    return this.weatherDataService.create(createWeatherDatumDto);
  }

  @Get()
  findAll() {
    return this.weatherDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWeatherDatumDto: UpdateWeatherDatumDto,
  ) {
    return this.weatherDataService.update(+id, updateWeatherDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherDataService.remove(+id);
  }
}
