import { Pool, QueryResult } from 'pg';

export class PgClient extends Pool {
  async row<T = unknown>(
    query: string,
  ): Promise<Array<QueryResult<unknown>> | void> {
    const queryResult = await this.query(query).catch((e) => {
      throw e;
    });
    if (queryResult?.rows) {
      return queryResult.rows ? queryResult.rows : null;
    } else {
      throw new Error('Bad query. Empty result.');
    }
  }
}
