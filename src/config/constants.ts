import { resolve as pathResolve } from 'path';
import { config } from 'dotenv';
const { env } = process;

config({ path: pathResolve(__dirname, `./env/.env.${env.NODE_ENV || 'development'}`) });

export default {
    environment: env.NODE_ENV || 'development',
    mongoConnection: {
        host: env.MONGO_HOST || 'localhost',
        port: env.MONGO_PORT || 27017,
        db: env.MONGO_DB || 'realstates',
        username: env.MONGO_USERNAME,
        password: env.MONGO_PASSWORD
    }
};
