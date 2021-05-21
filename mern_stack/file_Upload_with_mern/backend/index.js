import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import data from './db/MongodbConnection.js'
import Router from './routers/Route.js'
dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());



// database connection  in data() function; 
data();



app.use('/api',Router)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))

