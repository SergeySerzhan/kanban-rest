import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  type: 'postgres',
  // host: 'ec2-52-48-159-67.eu-west-1.compute.amazonaws.com',
  // port: 5432,
  url: 'postgres://spolgmafitdrhk:628e8523dba34e5f5d7ad0491c2978d18d6d922cb60ab92bdfbf594589c8b18c@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/d5j06e0s3qc8vs',
  username: 'spolgmafitdrhk',
  password: '628e8523dba34e5f5d7ad0491c2978d18d6d922cb60ab92bdfbf594589c8b18c',
  // database: 'd5j06e0s3qc8vs',
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
  ssl: { rejectUnauthorized: false }
} as ConnectionOptions;
