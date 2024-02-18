import { Type } from 'class-transformer';
import { IsIn, IsLatitude, IsLongitude, IsOptional } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { MESSAGES } from 'src/weather-data/utils/constants';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

export class CreateWeatherDataDto {
  @Type(() => Number)
  @IsLatitude({
    message: i18nValidationMessage<I18nTranslations>('test.HELLO'),
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
