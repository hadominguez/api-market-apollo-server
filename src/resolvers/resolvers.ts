import { Producto } from "../entities/Producto.js";
import { Vendedor } from "../entities/Vendedor.js";
import { Inventario } from "../entities/Inventario.js";
import { Rentable } from "../entities/Rentable.js";
import { Espacio } from "../entities/Espacio.js";
import { Tipo } from "../entities/Tipo.js";

export const resolvers = {
    Query: {
        producto: async () =>
        {
            return await Producto.findAll({
                include: [
                    { model: Vendedor, required: true },
                    { model: Inventario, required: false },
                    {
                        model: Rentable, required: false, include: [
                            { model: Tipo, required: false },
                            { model: Espacio, required: false }
                        ]
                    },
                ]
            })
        },
        vendedor: async () => { return await Vendedor.findAll() },
        inventario: async () => { return await Inventario.findAll() },
        rentable: async () =>
        {
            return await Rentable.findAll({
                include: [
                    { model: Tipo, required: false },
                    { model: Espacio, required: false }
                ]
            })
        },
        tipo: async () => { return await Tipo.findAll() },
        espacio: async () => { return await Espacio.findAll() },
        productoById: async (parent, args, contextValue, info) => {
            console.log(args)
            return await Producto.findByPk(args.id, {
                include: [
                    { model: Vendedor, required: true },
                    { model: Inventario, required: false },
                    {
                        model: Rentable, required: false, include: [
                            { model: Tipo, required: false },
                            { model: Espacio, required: false }
                        ]
                    },
                ]
            })
        }
    }
}