//App.js

import "./App.css";
import LoginButton from "./components/LoginButton";
import React, { useEffect, useState } from "react";
import LogoutButton from "./components/LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
// const { Auth0Client } = require("@auth0/auth0-spa-js");
function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="appName">React User Authentication</span>
        </div>
      </nav>
      <LoginButton />
      <LogoutButton />
      
  
    </>
  );
}

export default App;
