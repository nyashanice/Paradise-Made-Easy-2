import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./pages/LogIn";

export default function Header({ loggedIn, setLoggedIn }) {
  const logout = (event) => {
    event.preventDefault();
    return <LogIn />;
  };

  if (loggedIn == true) {
    return (
      <header>
        <nav>
          <div>
            <ul>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/guests">
                <li>Guest List</li>
              </Link>
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
              <button onClick={logout}>Logout</button>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return <LogIn />;
  }
}
