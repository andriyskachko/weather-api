import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OpenWeatherMapApiResponse } from '../models/open-weather-map-api-response.interface';
import {
  RESPONSE_EXCLUDE_PARTS,
  ResponseExcludePart,
} from '../models/response-exclude-parts.interface';

@Entity({ name: 'data' })
export class WeatherData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric' })
  lat: number;

  @Column({ type: 'numeric' })
  lon: number;

  @Column({
    type: 'varchar',
    enum: RESPONSE_EXCLUDE_PARTS,
    array: true,
    nullable: true,
  })
  part?: ResponseExcludePart[];

  @Column({ type: 'jsonb' })
  json: OpenWeatherMapApiResponse;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
