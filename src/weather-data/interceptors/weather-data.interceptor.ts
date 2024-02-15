import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { OpenWeatherMapApiResponse } from '../data-access/models/open-weather-map-api-response.interface';
import { WeatherDataResponse } from '../data-access/models/weather-data-response.interface';

@Injectable()
export class WeatherDataInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<OpenWeatherMapApiResponse>,
  ): Observable<WeatherDataResponse> {
    return next.handle().pipe(
      map(({ current }) => ({
        sunrise: current.sunrise,
        sunset: current.sunset,
        temp: current.temp,
        feels_like: current.feels_like,
        pressure: current.pressure,
        humidity: current.humidity,
        uvi: current.uvi,
        wind_speed: current.wind_speed,
      })),
    );
  }
}
