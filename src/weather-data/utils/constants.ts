import { RESPONSE_EXCLUDE_PARTS } from '../data-access/models/response-exclude-parts.interface';

export const FORECASET_API_URL =
  'https://api.openweathermap.org/data/3.0/onecall';

export const WEATHER_DATA_ERRORS = {
  EXCLUDE_PART:
    'Part to exclude must be one of the following values: ' +
    RESPONSE_EXCLUDE_PARTS.join(', '),
  LATITUDE:
    'Provided latitude is incorrect: should be a number in range -90 <= 90',
  LONGITUDE:
    'Provided longitude is incorrect: should be a number in range -180 <= 180',
} as const;
