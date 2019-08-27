import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import CreateNewUser from "./components/CreateNewUser";
import Login from "./components/Login";
import AddReceipt from "./components/AddReceipt";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={CreateNewUser} />
      {/* private routes below */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/add-receipt" component={AddReceipt} />
    </div>
  );
}

export default App;
