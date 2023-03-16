import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./pages/Login";
import Auth from "../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    return <LogIn />;
  };

  return (
    <header className="text-center p-5 bg-blue-300">
      <div className="title text-5xl"> Paradise Made Easy</div>
      {/* {Auth.loggedIn() ? ( */}
      <nav>
        <div>
          <ul className="grid grid-cols-4 place-items-center">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/guests">
              <li>Guest List</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <button className="bg-transparent" onClick={logout}>Logout</button>
          </ul>
        </div>
      </nav>
      {/* ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )} */}
    </header>
  );
}
