import { Module } from '@nestjs/common';
import { WeatherDataService } from './data-access/weather-data.service';
import { WeatherDataController } from './weather-data.controller';

@Module({
  controllers: [WeatherDataController],
  providers: [WeatherDataService],
})
export class WeatherDataModule {}
