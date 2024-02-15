import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenWeatherMapApiService } from './data-access/open-weather-map-api.service';
import { WeatherDataService } from './data-access/weather-data.service';
import { WeatherDataController } from './weather-data.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WeatherDataController],
  providers: [WeatherDataService, OpenWeatherMapApiService],
})
export class WeatherDataModule {}
