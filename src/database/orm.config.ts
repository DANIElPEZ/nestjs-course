import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: process.env.db_user,
     password: process.env.db_password,
     database: process.env.db,
     entities: ['./src/**/*.entity.ts'],
     migrations: ['./src/database/migrations/*.ts'],
     synchronize: false,
});