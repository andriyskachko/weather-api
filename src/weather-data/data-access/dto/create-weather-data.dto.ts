import { Type } from 'class-transformer';
import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import { WEATHER_DATA_ERRORS } from 'src/weather-data/utils/constants';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @Type(() => Number)
  @IsLatitude({
    message: WEATHER_DATA_ERRORS.LATITUDE,
  })
  lat: number;

  @Type(() => Number)
  @IsLongitude({
    message: WEATHER_DATA_ERRORS.LONGITUDE,
  })
  lon: number;

  @IsOptional()
  @IsIn(RESPONSE_EXCLUDE_PARTS, {
    message: WEATHER_DATA_ERRORS.EXCLUDE_PART,
    each: true,
  })
  part?: ResponseExcludePart[];
}
