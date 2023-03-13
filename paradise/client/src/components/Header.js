import React, { useState } from "react";
import Navigation from "./Navigation";
import LogIn from "./pages/LogIn";
import Summary from "./pages/Summary";
import GuestList from "./pages/GuestList";
import Dashboard from "./pages/Dashboard";

import("tailwindcss").Config;

export default function Header() {
  const [currentPage, setCurrentPage] = useState("LogIn");

  const setPage = () => {
    if (currentPage === "LogIn") {
      return <LogIn />;
    }
    if (currentPage === "Summary") {
      return <Summary />;
    }
    if (currentPage === "GuestList") {
      return <GuestList />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />{" "}
      {setPage()}
    </header>
  );
}
