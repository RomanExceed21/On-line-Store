import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ["dist/**/*.entity{ .ts,.js}"],
      synchronize: false,
      migrations: ["dist/migrations/*{.ts,.js}"],
      cli: {
        migrationsDir: 'src/migrations',
      },
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: false
    })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
