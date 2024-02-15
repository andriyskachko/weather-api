import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherDataQueryFilter } from './dto';
import { WeatherData } from './entities/weather-data.entity';
import { OpenWeatherMapApiResponse } from './models/open-weather-map-api-response.interface';

export interface WeatherDataPostPayload {
  json: OpenWeatherMapApiResponse;
  lat: number;
  lon: number;
}

@Injectable()
export class WeatherDataService {
  constructor(
    @InjectRepository(WeatherData)
    private weatherDataRepository: Repository<WeatherData>,
  ) {}

  public async createOrUpdate({
    json,
    lat,
    lon,
  }: WeatherDataPostPayload): Promise<WeatherData> {
    let weatherDataRecord = await this.weatherDataRepository.findOneBy({
      lat,
      lon,
    });

    if (!weatherDataRecord) {
      weatherDataRecord = new WeatherData();
      weatherDataRecord.json = json;
      weatherDataRecord.lat = lat;
      weatherDataRecord.lon = lon;
    } else {
      weatherDataRecord.json = json;
    }

    return this.weatherDataRepository.save(weatherDataRecord);
  }

  public findWeatherData({
    lat,
    lon,
  }: WeatherDataQueryFilter): Promise<WeatherData> {
    return this.weatherDataRepository.findOneBy({
      lat,
      lon,
    });
  }
}
