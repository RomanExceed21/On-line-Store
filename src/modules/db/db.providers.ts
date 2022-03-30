import { PoolConfig } from 'pg';
import { PgClient } from './db.service';

export const PG_CONNECTOR_FACTORY = {
    provide: PgClient,
    useFactory: async (): Promise<PgClient> => {
        const connectConfig: PoolConfig = {
					host: process.env.POSTGRES_HOST,
					user: process.env.POSTGRES_USER,
					port: Number(process.env.POSTGRES_PORT),
					password: process.env.POSTGRES_PASSWORD,
					database: process.env.POSTGRES_DB
					
				};
        const connect = new PgClient(connectConfig);
        await connect.connect();
        return connect;
    },
};
