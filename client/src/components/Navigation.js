import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href="#home" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#guestList" onClick={() => handlePageChange("GuestList")}>
              Guest List
            </a>
          </li>
          <li>
            <a href="#dashboard" onClick={() => handlePageChange("Dashboard")}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
