
import React from 'react';
import ReceiptCard from './ReceiptCard.js';
// import './App.css';

import React from "react";
import { Route } from 'react-router-dom'

import "./styles/App.css";
import PrivateRoute from './components/PrivateRoute'
import Dashboard from "./components/Dashboard";
import Nav from './components/Nav'
import CreateNewUser from './components/CreateNewUser'
import Login from './components/Login'
import AddReceipt from './components/AddReceipt'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path='/login' component={Login}/>
      <Route path='/sign-up' component={CreateNewUser}/>

      <PrivateRoute exact path="/" component={Dashboard}/>
      <PrivateRoute path="/add-receipt" component={AddReceipt} />
      
    </div>
  );
}

export default App;
