import {GraphQLServer} from 'graphql-yoga'

const messages =[]
const datas = []


const typeDefs = `

        type Message {
            id:ID! 
            user:String!
            content:String!

        }

        type Datas {
            id:ID!
            author:String!
        }

        type Query {
            messages:[Message!]
            datas: [Datas!]
        }


        type Mutation{
            postMessage(user:String!,content:String!):ID!
            createData(author:String!):ID!
           
        }

      
        
`


const resolvers = {

    Query:{
        messages :()=> messages,
        datas:()=>datas
    },
    Mutation:{
        postMessage:(parent,{user,content})=>{
            const id = messages.length;
            messages.push({id,user,content});
            return id;
        }, 
        createData:(parent,{author})=>{
            const id =datas.length;
            datas.push({id,author});
            return id;
        }
        
    }
}



const server = new GraphQLServer({typeDefs,resolvers});





server.start(({port}) =>{
console.log(`server is running at ${port}`);
})