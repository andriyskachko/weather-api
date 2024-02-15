import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import { WEATHER_DATA_ERRORS } from 'src/weather-data/utils/constants';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @IsLatitude({
    message: WEATHER_DATA_ERRORS.LATITUDE,
  })
  lat: number | string;

  @IsLongitude({
    message: WEATHER_DATA_ERRORS.LONGITUDE,
  })
  lon: number | string;

  @IsOptional()
  @IsIn(RESPONSE_EXCLUDE_PARTS, { message: WEATHER_DATA_ERRORS.EXCLUDE_PART })
  part?: ResponseExcludePart[];
}
