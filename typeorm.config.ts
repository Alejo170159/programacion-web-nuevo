import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '1701',
  database: 'back_nest_angular',
  entities: ['src/modules/**/*.entity{.ts,.js}', 'dist/modules/**/*.entity{.js}'],
  migrations: ['src/modules/**/migrations/*{.ts,.js}'],
  synchronize: false,
});