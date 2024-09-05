import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ConfigModule, SharedModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
