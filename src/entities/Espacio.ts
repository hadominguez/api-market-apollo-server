import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Espacio = sequelize.define(
    'Espacio',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        latitud: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        longitud: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    }, {
        timestamps: false
    }
);

