import express from 'express';
import AuthController from '../controllers/AuthController.js'
import Authenticate from '../middlewares/AuthenticateUser.js'
const Router = express.Router();




Router.post('/signUp',AuthController.SignUp)
Router.post('/signIn',AuthController.SignIn)


Router.get("/about",Authenticate,AuthController.about)


export default Router;