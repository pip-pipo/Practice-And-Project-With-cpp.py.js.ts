import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import typeDefs from './schema/TypeDefs.js'
import resolvers from './schema/Resolvers.js'
const app = express();

const server = new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({app})

app.listen(8080,()=>{console.log(`server is runing on port 8080`)})

