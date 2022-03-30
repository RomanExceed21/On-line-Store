import { PG_CONNECTOR_FACTORY } from './db.providers';
import { PgClient } from './db.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [PG_CONNECTOR_FACTORY],
  exports: [PgClient]
})
export class DbModule {}
