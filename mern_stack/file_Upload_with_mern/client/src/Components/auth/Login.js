import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import Alert from "./Alert";
const Signup = () => {
  const [clicked, setCliked] = useState(false);
  const [alertmsg, setAlertMsg] = useState(null);
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const { Email, Password } = data;
  const inputHandler = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      setCliked(true);
      setAlertMsg("Please Fill All Fealds");
    } else {
      await axios.post("/api/signIn", {
          Email: Email,
          Password: Password,
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
  };

  return (
    <div className="signup">
      {clicked ? <Alert isClicked={setCliked} alertMsg={alertmsg} /> : ""}

      <form className="AuthFrom" onSubmit={submitHandler}>
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
        <button type="submit">Login</button>
        <p>
          Aleady have'nt and Account <Link to="/signUp">Sign Up</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
