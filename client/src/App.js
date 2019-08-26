import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Nav from './components/Nav'
import CreateNewUser from './components/CreateNewUser'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard />
    </div>
  );
}

export default App;
