import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./pages/Login";
import Auth from "../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    return <LogIn />;
  };

  return (
    <header className="text-center text-5xl p-5 bg-blue-300">
      Paradise Made Easy
      {Auth.loggedIn() ? (
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
      ) : (
        <Link to="/login"></Link>
      )}
    </header>
  );
}
