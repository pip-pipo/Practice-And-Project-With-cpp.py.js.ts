import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config();

const AuthSchemaUser = mongoose.Schema({
    Username:{ type:String,required:true,unique:true},
    Email:{ type:String,required:true,unique:true},
    Password:{ type:String,required:true},
    ConfirmPassword:{ type:String,required:true},
    Tokens:[
        {
            Token: { type:String,required:true}
        }
    ]
},{timestamp:true})


AuthSchemaUser.pre('save',async function(next){
    if(this.isModified("Password")){
        this.Password =await bcrypt.hash(this.Password,12);
        this.ConfirmPassword =await bcrypt.hash(this.ConfirmPassword,12);
    }
    next();
})

AuthSchemaUser.methods.JwtTokenGenarate = async function(){
    try {
       let Token = jwt.sign({_id:this._id},process.env.SECRECT_KEY);
       this.Tokens = this.Tokens.concat({Token:Token});
       await this.save();
       return Token;
    } catch (error) {
       console.log(error) 
    }
}


const AuthSchemas = mongoose.model('AuthSchema',AuthSchemaUser);
export default AuthSchemas;