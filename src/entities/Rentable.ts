import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import { Espacio } from "./Espacio.js";
import { Tipo } from "./Tipo.js";

export const Rentable = sequelize.define(
    'Rentable',
    {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fecha_desde: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_hasta: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    }
);
Rentable.hasOne(
    Tipo,
    {
        foreignKey: 'id_producto',
        sourceKey: 'id_producto'
    }
)

Tipo.belongsTo(
    Rentable,
    {
        foreignKey: 'id_producto',
        targetKey: 'id_producto'
    }
)

Rentable.hasOne(
    Espacio,
    {
        foreignKey: 'id_producto',
        sourceKey: 'id_producto'
    }
)

Espacio.belongsTo(
    Rentable,
    {
        foreignKey: 'id_producto',
        targetKey: 'id_producto'
    }
)