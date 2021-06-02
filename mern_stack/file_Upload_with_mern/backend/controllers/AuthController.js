// Auth Schema
import AuthSchemas from "../models/AuthModel.js";
import bcrypt from "bcrypt";

const SignUp = async (req, res) => {
  try {
    const { Username, Email, Password, ConfirmPassword } = req.body;

    if (!Username || !Email || !Password || !ConfirmPassword) {
      return res.status(400).json({ msg: "Please Fill all fields" });
    } else {
      const ifUserExists = await AuthSchemas.findOne({ Email: Email });

      if (ifUserExists) {
        return res.status(400).json({ msg: "User Already Exists" });
      } else {
        if (Password !== ConfirmPassword) {
          return res.status(422).json({ msg: "Password Should be matche" });
        } else {
          const SignUpdata = new AuthSchemas({
            Username,
            Email,
            Password,
            ConfirmPassword,
          });
          await SignUpdata.save();
          res.status(201).json({ msg: "user Created successfully" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const SignIn = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      res.status(400).json({ msg: "Please fill all fields" });
    } else {
      const ifExists = await AuthSchemas.findOne({ Email: Email });
      if (!ifExists) {
        res.status(400).json({ msg: "Invalid Cridentials" });
      } else {
        const IsMatched = await bcrypt.compare(Password, ifExists.Password);
        const token = await ifExists.JwtTokenGenarate();
        console.log("genereted token")
         console.log(token);

         res.cookie("jwtToken",token,{
           expires : new Date(Date.now() + 2534234),
           httpOnly : true,
           secure:false,
         });
       
         if (!IsMatched) {
          res.status(400).json({ error: "Invalid Cridentials" });
        } else {
          res.status(200).json({ error: "user Login Succesfully" });
        }

      }
    }
  } catch (error) {
    console.log(error);
  }
};

const about =(req,res) =>{
  res.status(200).send(req.rootUser);
}

const AuthController = {
  SignUp,
  SignIn,
  about
};

export default AuthController;
