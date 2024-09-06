import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV === 'dev' ? '.env.local' : '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      autoLoadEntities: true,
      migrations: ['src/migrations/*.ts'],
    }),
  ],
})
export class ConfigModule {}
