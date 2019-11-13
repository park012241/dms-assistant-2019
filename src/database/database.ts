import { FactoryProvider } from '@nestjs/common/interfaces';
import { Db, MongoClient } from 'mongodb';
import { Config } from '../config/config';

export const Database: FactoryProvider<Promise<Db>> = {
  provide: Db,
  async useFactory(config: Config) {
    return (await new MongoClient(config.mongodb, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).connect()).db();
  },
  inject: [Config]
};
