import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { Database } from './database';

@Module({
  imports: [ConfigModule],
  exports: [Database],
  providers: [Database]
})
export class DatabaseModule {
}
