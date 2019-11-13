import { Module } from '@nestjs/common';
import { Config } from './config';

@Module({
  exports: [Config],
  providers: [Config]
})
export class ConfigModule {
}
