import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Observable, map, tap } from 'rxjs';
import { WeatherData } from '../data-access/entities/weather-data.entity';
import { WeatherDataResponse } from '../data-access/models/weather-data-response.interface';

@Injectable()
export class WeatherDataInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<WeatherData>,
  ): Observable<WeatherDataResponse> {
    return next.handle().pipe(
      tap((weatherData) => {
        if (!weatherData) {
          throw new BadRequestException({
            message: 'WEATHER_DATA_NOT_FOUND',
            status: HttpStatusCode.NotFound,
          });
        }
      }),
      map(({ json: { current } }) => ({
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
