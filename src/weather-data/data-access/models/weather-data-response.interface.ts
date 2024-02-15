import { CurrentWeather } from './open-weather-map-api-response.interface';

export type WeatherDataResponse = Omit<
  CurrentWeather,
  | 'wind_deg'
  | 'wind_gust'
  | 'visibility'
  | 'clouds'
  | 'dt'
  | 'dew_point'
  | 'weather'
>;
