import {Module} from '@nestjs/common';
import {Config} from './config';

@Module({
    providers: [Config],
})
export class ConfigModule {
}
