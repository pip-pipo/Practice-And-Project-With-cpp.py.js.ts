import {gql} from 'apollo-server-express'

const typeDefs = gql`
type Users{
    name:String!
    age:Int!
}

#quires

type  Query{
   getAllUsers:[Users!]!
}

#Mutations
type Mutation{
    createUser(name:String!,age:Int!):Users!
}

`

export default typeDefs