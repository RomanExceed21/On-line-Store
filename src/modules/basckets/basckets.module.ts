import { Module } from '@nestjs/common';
import { BascketsController } from './basckets.controller';
import { BascketsService } from './basckets.service';

@Module({
  controllers: [BascketsController],
  providers: [BascketsService]
})
export class BascketsModule {}
