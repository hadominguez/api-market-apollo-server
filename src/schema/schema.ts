export const typeDefs = `#graphql
  type Productos {
    id_producto: Int,
    nombre: String,
    precio: Float,
    id_vendedor: Int,
    imagen: String,
    Vendedor: Vendedores,
    Inventario: Inventarios,
    Rentable: Rentables
  }
  type Vendedores {
    id_vendedor: Int,
    nombres: String,
    apellidos: String
  }
  type Inventarios {
    id_producto: Int,
    inventario: Int
  }
  type Rentables {
    id_producto: Int,
    fecha_desde: String,
    fecha_hasta: String,
    Tipo: Tipos,
    Espacio: Espacios
  }
  type Tipos {
    id_producto: Int,
    tipo: String
  }
  type Espacios {
    id_producto: Int,
    latitud: Float,
    longitud: Float
  }

  type Query {
    productoById(id: Int): Productos
    producto: [Productos]
    vendedor: [Vendedores]
    inventario: [Inventarios]
    rentable: [Rentables]
    tipo: [Tipos]
    espacio: [Espacios]
  }
`;
