import { OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsIn, IsOptional } from 'class-validator';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';
import { CreateWeatherDataDto } from './create-weather-data.dto';

export class WeatherDataQueryFilter extends OmitType(CreateWeatherDataDto, [
  'part',
]) {
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.replace(/\s/g, '').split(',') : value,
  )
  @IsIn(RESPONSE_EXCLUDE_PARTS, {
    message: 'validation.EXCLUDE_PART',
    each: true,
  })
  part?: ResponseExcludePart[];
}
