import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @IsLatitude()
  lat: number;

  @IsLongitude()
  lon: number;

  @IsOptional()
  @IsIn(RESPONSE_EXCLUDE_PARTS)
  part?: ResponseExcludePart[];
}
