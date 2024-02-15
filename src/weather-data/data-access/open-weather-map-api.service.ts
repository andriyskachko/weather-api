import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateWeatherDataDto } from './dto';
import { Observable } from 'rxjs';
import { FORECASET_API_URL } from '../utils/constants';
import { OpenWeatherMapApiResponse } from './models/open-weather-map-api-response.interface';
import { AxiosResponse } from 'axios';

@Injectable()
export class OpenWeatherMapApiService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  public fetchWeatherData({
    lat,
    lon,
    part,
  }: CreateWeatherDataDto): Observable<
    AxiosResponse<OpenWeatherMapApiResponse>
  > {
    const params = {
      lat,
      lon,
      ...(part !== undefined ? { exclude: part.join(',') } : {}),
      appId: this.configService.get('OPEN_WEATHER_MAP_API_KEY'),
    };

    return this.httpService.get<OpenWeatherMapApiResponse>(FORECASET_API_URL, {
      params,
    });
  }
}
