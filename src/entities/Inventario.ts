import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Inventario = sequelize.define(
    'Inventario',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        inventario: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    }
);

