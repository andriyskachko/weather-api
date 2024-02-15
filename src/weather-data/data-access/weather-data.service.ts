import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherData } from './entities/weather-data.entity';
import { OpenWeatherMapApiResponse } from './models/open-weather-map-api-response.interface';
import { ResponseExcludePart } from './models/response-exclude-parts.interface';

export interface WeatherDataPostPayload {
  json: OpenWeatherMapApiResponse;
  lat: number | string;
  lon: number | string;
  part?: ResponseExcludePart[];
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
    part,
  }: WeatherDataPostPayload): Promise<WeatherData> {
    lat = Number(lat);
    lon = Number(lon);

    let weatherDataRecord = await this.weatherDataRepository.findOneBy({
      lat,
      lon,
      part: part as any,
    });

    if (!weatherDataRecord) {
      weatherDataRecord = new WeatherData();
      weatherDataRecord.json = json;
      weatherDataRecord.lat = lat;
      weatherDataRecord.lon = lon;
      weatherDataRecord.part = part;
    } else {
      weatherDataRecord.json = json;
    }

    return this.weatherDataRepository.save(weatherDataRecord);
  }

  public getAll() {
    return this.weatherDataRepository.find();
  }
}
