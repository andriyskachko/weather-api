import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OpenWeatherMapApiResponse } from '../models/open-weather-map-api-response.interface';

@Entity({ name: 'data' })
export class WeatherData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric' })
  lat: number;

  @Column({ type: 'numeric' })
  lon: number;

  @Column({ type: 'jsonb' })
  json: OpenWeatherMapApiResponse;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
