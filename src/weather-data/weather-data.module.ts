import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherDataService } from './data-access/weather-data.service';
import { OpenWeatherMapApiInterceptor } from './interceptors/open-weather-map-api.interceptor';
import { WeatherDataInterceptor } from './interceptors/weather-data.interceptor';
import { WeatherDataController } from './weather-data.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WeatherDataController],
  providers: [
    WeatherDataService,
    WeatherDataInterceptor,
    OpenWeatherMapApiInterceptor,
  ],
})
export class WeatherDataModule {}
