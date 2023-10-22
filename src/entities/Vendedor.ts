import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import { Producto } from "./Producto.js";

export const Vendedor = sequelize.define(
    'Vendedor',
    {
        id_vendedor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    }
);

Vendedor.hasOne(
    Producto,
    {
        foreignKey: 'id_vendedor',
        sourceKey: 'id_vendedor'
    }
)

Producto.belongsTo(
    Vendedor,
    {
        foreignKey: 'id_vendedor',
        targetKey: 'id_vendedor'
    }
)