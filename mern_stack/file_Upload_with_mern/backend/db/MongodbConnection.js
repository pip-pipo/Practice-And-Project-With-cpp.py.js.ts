import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const Mongodb_uri = process.env.MONGODB_OFFLINE;

const data =()=>{


    mongoose.connect(Mongodb_uri,{
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(()=>console.log("Data base connection Success!"))
    .catch(()=>console.log("Data base connection unsuccessful!"))


}    

export default data;