import { Body, Controller, Get, Post } from '@nestjs/common';
import { from, map, switchMap } from 'rxjs';
import { handleAxiosError } from 'src/shared/utils/handle-axios-error';
import { CreateWeatherDataDto } from './data-access/dto';
import { OpenWeatherMapApiService } from './data-access/open-weather-map-api.service';
import { WeatherDataService } from './data-access/weather-data.service';

@Controller('weather-data')
export class WeatherDataController {
  constructor(
    private weatherDataService: WeatherDataService,
    private openWeatherMapApiService: OpenWeatherMapApiService,
  ) {}

  @Post()
  create(@Body() createWeatherDataDto: CreateWeatherDataDto) {
    return this.openWeatherMapApiService
      .fetchWeatherData(createWeatherDataDto)
      .pipe(
        map((response) => response.data),
        handleAxiosError(),
        switchMap((json) =>
          from(
            this.weatherDataService.createOrUpdate({
              json,
              ...createWeatherDataDto,
            }),
          ),
        ),
      );
  }

  @Get()
  getAll() {
    return this.weatherDataService.getAll();
  }
}
