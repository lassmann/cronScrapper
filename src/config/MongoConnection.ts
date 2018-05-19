import * as mongoose from 'mongoose';
import constants from './constants';
import { ProvideSingleton } from '../ioc';

@ProvideSingleton(MongoConnection)
export class MongoConnection {
    public db: mongoose.Connection;

    constructor() {
        const { environment, mongoConnection } = constants;
        const connectionString = `mongodb://${mongoConnection.username}:${mongoConnection.password}@${mongoConnection.host}:${mongoConnection.port}/${mongoConnection.db}`; // tslint:disable-line
        this.db = mongoose.createConnection(connectionString);
    }
}
