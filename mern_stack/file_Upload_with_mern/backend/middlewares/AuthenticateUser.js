import jwt from "jsonwebtoken";
import AuthSchemas from "../models/AuthModel.js";


const Authenticate = async (req, res,next) => {
  try {
    // const token = req.cookies.jwtToken;
    // console.log(token)
    // const jwtVerify = jwt.verify(token,process.env.SECRECT_KEY);
   
console.log("hi")
  } catch (err) {
    console.log("errror at authenticate middleware")
    res.status(401).send("Unauthorized token:provided");
}
};

export default Authenticate;
