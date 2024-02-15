export const RESPONSE_EXCLUDE_PARTS = [
  'current',
  'minutely',
  'hourly',
  'daily',
  'alerts',
] as const;

export type ResponseExcludePart = (typeof RESPONSE_EXCLUDE_PARTS)[number];
