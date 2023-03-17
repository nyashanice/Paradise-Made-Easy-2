import React from "react";
import { Link } from "react-router-dom";
import Login from "./pages/Login";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    return <Login />;
  };

  return (
    <header className="text-center p-5 bg-blue-300">
      <div className="title text-5xl"> Paradise Made Easy</div>
      <nav>
        <div>
          <ul className="grid grid-cols-4 place-items-center">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/guests">
              <li>Guest List</li>
            </Link>
            <Link to="/mydashboard">
              <li>Dashboard</li>
            </Link>
            <Link to='/login'>
              <button className="bg-transparent" onClick={logout}>
                Logout
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
