import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import { Inventario } from "./Inventario.js";
import { Rentable } from "./Rentable.js";



export const Producto = sequelize.define(
    'Producto',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_vendedor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        precio: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        timestamps: false
    }
);

Producto.hasOne(
    Inventario,
    {
        foreignKey: 'id_producto',
        sourceKey: 'id_producto'
    }
)

Inventario.belongsTo(
    Producto,
    {
        foreignKey: 'id_producto',
        targetKey: 'id_producto'
    }
)

Producto.hasOne(
    Rentable,
    {
        foreignKey: 'id_producto',
        sourceKey: 'id_producto'
    }
)

Rentable.belongsTo(
    Producto,
    {
        foreignKey: 'id_producto',
        targetKey: 'id_producto'
    }
)
