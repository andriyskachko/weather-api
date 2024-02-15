import { Type } from 'class-transformer';
import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @Type(() => Number)
  @IsLatitude({
    message: 'LATITUDE',
  })
  lat: number;

  @Type(() => Number)
  @IsLongitude({
    message: 'LONGITUDE',
  })
  lon: number;

  @IsOptional()
  @IsIn(RESPONSE_EXCLUDE_PARTS, {
    message: 'EXCLUDE_PART',
    each: true,
  })
  part?: ResponseExcludePart[];
}
