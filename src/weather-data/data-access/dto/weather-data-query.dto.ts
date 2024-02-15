import { OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsIn, IsOptional } from 'class-validator';
import { MESSAGES } from 'src/weather-data/utils/messages';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';
import { CreateWeatherDataDto } from './create-weather-data.dto';

export class WeatherDataQueryFilter extends OmitType(CreateWeatherDataDto, [
  'part',
]) {
  @IsOptional()
  @Transform(({ value }) => (value as string).replace(/\s/g, '').split(','))
  @IsIn(RESPONSE_EXCLUDE_PARTS, {
    message: MESSAGES.VALIDATION.EXCLUDE_PART,
    each: true,
  })
  part?: ResponseExcludePart[];
}
