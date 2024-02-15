import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Observable, from, map, switchMap } from 'rxjs';
import { handleAxiosError } from 'src/shared/utils/handle-axios-error';
import {
  CreateWeatherDataDto,
  WeatherDataQueryFilter,
} from './data-access/dto';
import { WeatherData } from './data-access/entities/weather-data.entity';
import { OpenWeatherMapApiService } from './data-access/open-weather-map-api.service';
import { WeatherDataService } from './data-access/weather-data.service';
import { WeatherDataInterceptor } from './interceptors/weather-data.interceptor';

@Controller('weather-data')
export class WeatherDataController {
  constructor(
    private weatherDataService: WeatherDataService,
    private openWeatherMapApiService: OpenWeatherMapApiService,
  ) {}

  @Post()
  public create(
    @Body() createWeatherDataDto: CreateWeatherDataDto,
  ): Observable<WeatherData> {
    return this.openWeatherMapApiService
      .fetchWeatherData(createWeatherDataDto)
      .pipe(
        map((response) => response.data),
        handleAxiosError(),
        switchMap((json) => {
          const { part: _, ...data } = createWeatherDataDto;

          delete json.lat;
          delete json.lon;

          return from(
            this.weatherDataService.createOrUpdate({
              json,
              ...data,
            }),
          );
        }),
      );
  }

  @Get()
  @UseInterceptors(WeatherDataInterceptor)
  public getWeatherData(
    @Query() filter: WeatherDataQueryFilter,
  ): Promise<WeatherData> {
    return this.weatherDataService.findWeatherData(filter);
  }
}
