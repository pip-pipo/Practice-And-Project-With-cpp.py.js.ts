import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Components/auth/Signup";
import Navbar from './Components/navbar/Navbar';
import Login from "./Components/auth/Login";
import IsAuthenticated from './Components/CoustomComponents/isAuthenticated'
const App = () => {
  return (
    <>
      <Router>
      
        <Navbar/>
        <Switch>
          <Route exact path="/signUp" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/cookie" component={IsAuthenticated}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
