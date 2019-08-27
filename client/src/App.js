<<<<<<< HEAD
import React from 'react';
// import './App.css';
=======
import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import CreateNewUser from "./components/CreateNewUser";
import Login from "./components/Login";
import AddReceipt from "./components/AddReceipt";
>>>>>>> 751a53cad303c3406cd247bcfc9027261d9d09eb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
 
      
=======
      <Nav />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={CreateNewUser} />
      {/* private routes below */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/add-receipt" component={AddReceipt} />
>>>>>>> 751a53cad303c3406cd247bcfc9027261d9d09eb
    </div>
  );
}

export default App;
