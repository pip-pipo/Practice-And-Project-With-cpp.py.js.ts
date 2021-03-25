import Users from '../FakeData.js'
const resolvers = {
    
    Query:{
        getAllUsers(){
            return Users
        }
    },
    Mutation:{
        createUser(parent,args){
            const newUser=args
            Users.push(newUser)
            return newUser;
        }
    }

}

export default resolvers