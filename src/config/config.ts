import { Injectable } from '@nestjs/common';
import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class Config {
  private readonly MONGODB_URI: string = process.env.MONGODB_URI;
  public readonly mongodb: string;

  private readonly FF_DRIVER?: string = process.env.FF_DRIVER;
  public readonly driver: string;

  constructor() {
    Object.assign(this, parse(readFileSync(resolve(__dirname, '..', '.env'))));
    if (!this.MONGODB_URI) {
      throw new Error('There is no $MONGODB_URI');
    }
    if (!this.FF_DRIVER) {
      throw new Error('There is no $FF_DRIVER');
    }
    this.mongodb = this.MONGODB_URI;
    this.driver = /(^\/|[\w]:\\)/.test(this.FF_DRIVER) ? this.FF_DRIVER : resolve(__dirname, '..', this.FF_DRIVER);
  }
}
