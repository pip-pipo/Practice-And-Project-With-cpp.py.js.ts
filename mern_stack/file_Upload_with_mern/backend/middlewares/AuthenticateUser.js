// import jwt from "jsonwebtoken";
// import AuthSchemas from "../models/AuthModel.js";
// import dotenv from "dotenv";
// dotenv.config();

// const Authenticate = async (req, res, next) => {
//   try {
//     console.log("auth middleware start");
//     const Token = req.cookies.jwtToken;
//     const jwtVerify = jwt.verify(Token, process.env.SECRECT_KEY);

//     const userVerify = await AuthSchemas.findOne({
//       _id: jwtVerify._id,
//       "Tokens.Token": Token,
//     });

//     if (!userVerify) {
//       res.status(500).json({
//           message: "Internal Server Error"
//          });
//       return;
//     }
//     console.log("auth middleware end");
//     req.token = Token;
//     req.rootUser = userVerify;
//     req.userID = userVerify._id;
//     next();
//   } catch (err) {
//     res.status(401).send("Unauthorized token:provided");
//   }
// };

// export default Authenticate;

import jwt from "jsonwebtoken";
import AuthSchemas from "../models/AuthModel.js";
// import dotenv from "dotenv";
// dotenv.config();

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    console.log(token)
    const jwtVerify = jwt.verify(token, process.env.SECRECT_KEY);

    const userToken = await AuthSchemas.findOne({
      _id: jwtVerify._id,
      "Tokens.Token": token,
    });

    if (!userToken) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
      return;
    }

    req.token = token;
    req.rootUser = userToken;
    req.userID = userToken._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized token:provided");
}
};

export default Authenticate;
