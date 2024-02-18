import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { join as joinPath } from 'path';
import { WeatherData } from './weather-data/data-access/entities/weather-data.entity';
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
        entities: [WeatherData],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: joinPath(__dirname, '/i18n/'),
        watch: true,
      },
      typesOutputPath: joinPath(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    WeatherDataModule,
  ],
})
export class AppModule {}
