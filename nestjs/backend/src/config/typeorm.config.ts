import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../tasks/entities/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Task],
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true,
  synchronize: false,
};
