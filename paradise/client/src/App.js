import "./App.css";

import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
