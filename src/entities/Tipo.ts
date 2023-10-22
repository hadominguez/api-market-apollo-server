import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
export const Tipo = sequelize.define(
    'Tipo',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Noche', 'Hora']
        }
    }, {
        timestamps: false
    }
);
