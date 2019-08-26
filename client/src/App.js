import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Nav from './components/Nav'
import CreateNewUser from './components/CreateNewUser'
import Login from './components/Login'
import AddReceipt from './components/AddReceipt'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard />
      <h1>Hello from App.js</h1>
      <AddReceipt />
    </div>
  );
}

export default App;
