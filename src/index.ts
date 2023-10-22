import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers/resolvers.js';
import { sequelize } from './utils/db.js';
import { iniciarDB } from './utils/initdb.js';
import { typeDefs } from './schema/schema.js';
import { HTTP_PORT } from './config/config.js';


const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await sequelize.sync({ force: true });
await iniciarDB();

const { url } = await startStandaloneServer(server, {
  listen: { port: HTTP_PORT },
});

console.log(`🚀  Server ready at: ${url}`);