const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { resolvers, typeDefs  } = require('./schemas'); //NEED TO INPUT WHICH SCHEMAS THAT WE NEED TO ADD THEM WHEN WE HAVE THEM!
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  resolvers, typeDefs
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (
    //we need to addt these when we know what schema's we will use 
    typeDefs, resolvers
) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);

