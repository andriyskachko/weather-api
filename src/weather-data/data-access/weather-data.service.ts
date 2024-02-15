import { Injectable } from '@nestjs/common';
import { OpenWeatherMapApiResponse } from './models/open-weather-map-api-response.interface';

@Injectable()
export class WeatherDataService {
  public create(json: OpenWeatherMapApiResponse) {
    return json;
  }
}
