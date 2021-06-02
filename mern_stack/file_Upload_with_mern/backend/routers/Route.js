import express from 'express';
import AuthController from '../controllers/AuthController.js'
import Authenticate from '../middlewares/AuthenticateUser.js'
const Router = express.Router();

const cheak = (req,res,next) => {
    try {
        console.log(req.cookies)
        return req.cookies
    } catch (error) {
        console.log(error)
    }
}

Router.get('/aboutcookie',cheak,(req,res) => {
   
    res.json({msg:"hi"})
})


Router.get("/about",Authenticate,AuthController.about)

Router.post('/signUp',AuthController.SignUp)
Router.post('/signIn',AuthController.SignIn)




export default Router;