import { Module } from '@nestjs/common';
import { WeatherDataService } from './weather-data.service';
import { WeatherDataController } from './weather-data.controller';

@Module({
  controllers: [WeatherDataController],
  providers: [WeatherDataService],
})
export class WeatherDataModule {}
