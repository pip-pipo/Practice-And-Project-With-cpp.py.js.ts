import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Auth.css";
import axios from "axios";
import Alert from "./Alert";
const Signup = () => {
  const [clicked, setCliked] = useState(false);
  const [alertmsg, setAlertMsg] = useState(null);
  const [data, setData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const { UserName, Email, Password, ConfirmPassword } = data;
  const inputHandler = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!UserName || !Email || !Password || !ConfirmPassword) {
      setCliked(true);
      setAlertMsg("Please Fill All Fealds");
    } else {
      if (Password !== ConfirmPassword) {
        setCliked(true);
        setAlertMsg("Password Should be Matched");
      } else {
        await axios
          .post("/api/signUp", {
            Username: UserName,
            Email: Email,
            Password: Password,
            ConfirmPassword: ConfirmPassword,
          },{
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((response) => {
            setCliked(true);
            setAlertMsg("Congress Your Account have Created");
          })
          .catch((error) => {
            setCliked(true);
            setAlertMsg(error.message);
          });
      }
    }
  };
  return (
    <div className="signup">
      {clicked ? <Alert isClicked={setCliked} alertMsg={alertmsg} /> : ""}

      <form className="AuthFrom" onSubmit={submitHandler}>
        <input
          value={UserName}
          name="UserName"
          onChange={inputHandler}
          type="text"
          placeholder="UserName"
        />
        <input
          value={Email}
          onChange={inputHandler}
          name="Email"
          type="email"
          placeholder="Email"
        />
        <input
          value={Password}
          name="Password"
          onChange={inputHandler}
          type="password"
          placeholder="Password"
        />
        <input
          value={ConfirmPassword}
          name="ConfirmPassword"
          onChange={inputHandler}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">SingUp</button>

        <p>Aleady have and Account <Link to="/login">Login</Link> </p>
      </form>
    </div>
  );
};

export default Signup;
