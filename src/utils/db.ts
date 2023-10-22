import { Dialect, Sequelize } from 'sequelize';
import { HOST_DB, NAME_DB, USER_DB, PASS_DB, PORT_DB, DIALECT_DB } from '../config/config.js';

export const sequelize = new Sequelize(
    NAME_DB,
    USER_DB,
    PASS_DB,
    {
        host: HOST_DB,
        port: PORT_DB,
        dialect: (DIALECT_DB as Dialect)
    }
);