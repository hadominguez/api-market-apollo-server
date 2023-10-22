# API Market Apollo Server

API Market Apollo Server is a GraphQL server built with Apollo Server that provides access to data related to products, vendors, inventories, and rentable items.

## Prerequisites

Make sure you have the following prerequisites installed before running the application:

- Node.js
- PostgreSQL (or your database of choice)
- Node.js dependencies (you can install them using `npm install`)

## Configuration

Before running the application, make sure to configure your environment variables in a `.env` file. You can use the `.env.example` file as a template. The environment variables include:

- `HTTP_PORT`: The port on which the server will listen for HTTP requests.
- `HOST_DB`: The host address of the database.
- `PORT_DB`: The database port.
- `NAME_DB`: The name of the database.
- `USER_DB`: The database user's name.
- `PASS_DB`: The database user's password.

## Installation

1. Clone this repository:

   ```shell
   git clone https://github.com/hadominguez/api-market-apollo-server.git
   ```

2. Navigate to the project directory:

   ```shell
   cd api-market-apollo-server
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Create a PostgreSQL database and ensure you configure the environment variables in your `.env` file.

5. Run the application:

   ```shell
   npm start
   ```

The GraphQL API will be available at `http://localhost:<PORT>` (the port specified in `HTTP_PORT`).

## Usage

You can access the GraphQL API using tools like GraphQL Playground or Apollo Studio. The API URL is `http://localhost:<PORT>`.

Here are some example queries you can perform:

- Get all products:

  ```graphql
  query {
    producto {
      id_producto
      nombre
      precio
      Vendedor {
        id_vendedor
        nombres
        apellidos
      }
    }
  }
  ```

- Get a product by ID:

  ```graphql
  query {
    productoById(id: 1) {
      id_producto
      nombre
      precio
      Vendedor {
        id_vendedor
        nombres
        apellidos
      }
    }
  }
  ```