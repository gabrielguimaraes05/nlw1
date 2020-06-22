import path from 'path';
import { seed } from './src/database/seeds/create_items';
require('dotenv/config');

module.exports = {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
};