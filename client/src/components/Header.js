import React, { useState } from "react";
import Navigation from "./Navigation";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import GuestList from "./pages/GuestList";
import Dashboard from "./pages/Dashboard";

export default function Header({ loggedIn, setLoggedIn }) {
  const [currentPage, setCurrentPage] = useState("LogIn");

  const setPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "GuestList") {
      return <GuestList />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  if (loggedIn == true) {
    return (
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {setPage()}
      </header>
    );
  } else {
    return <LogIn />;
  }
}
