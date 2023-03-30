import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'learning',
      password: 'learning',
      database: 'learning',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],

  // controllers: [],
  // providers: [],
})
export class AppModule {}
