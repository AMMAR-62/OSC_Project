import React from 'react';
import "./App.css";
import Homepage from "./components/homepage";
import Form from './components/Signup and Login/signupandlogin';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (<div>
    <Router>
         <div className="App">
           <Navbar></Navbar>
           <Switch>
             <Route exact path="/" component={Homepage}/>
             <Route exact path="/login" component={Form}/>
           </Switch>
      {/* <Booking></Booking> */}
      {/* <Homepage></Homepage> */}
      {/* <Navbar></Navbar> */}
      </div>
      </Router>
      </div>
    
  );
}

export default App;
