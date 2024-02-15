import { BadRequestException, HttpException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { MonoTypeOperatorFunction, catchError } from 'rxjs';

export function handleAxiosError<T>(): MonoTypeOperatorFunction<T> {
  return catchError((error: AxiosError) => {
    if (error.response) {
      const { data, status } = error.response;
      throw new HttpException(data, status);
    }

    throw new BadRequestException(error);
  });
}
