import { Type } from 'class-transformer';
import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import { MESSAGES } from 'src/weather-data/utils/constants';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @Type(() => Number)
  @IsLatitude({
    message: MESSAGES.VALIDATION.LATITUDE,
  })
  lat: number;

  @Type(() => Number)
  @IsLongitude({
    message: MESSAGES.VALIDATION.LONGITUDE,
  })
  lon: number;

  @IsOptional()
  @IsIn(RESPONSE_EXCLUDE_PARTS, {
    message: MESSAGES.VALIDATION.EXCLUDE_PART,
    each: true,
  })
  part?: ResponseExcludePart[];
}
