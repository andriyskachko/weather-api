import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherDataModule } from './weather-data/weather-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get('DB'),
        host: configService.get('DB_HOST'),
        password: configService.get('DB_PASSWORD'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    WeatherDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
