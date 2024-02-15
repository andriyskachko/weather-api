import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OpenWeatherMapApiResponse } from '../models/open-weather-map-api-response.interface';

@Entity({ name: 'data' })
export class WeatherData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'jsonb' })
  json: OpenWeatherMapApiResponse;

  @CreateDateColumn()
  createdAt: string;
}
