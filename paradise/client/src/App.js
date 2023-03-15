import "./App.css";

import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Login } from "./Login";
import { Register } from "./Register";


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Footer />
    </div>
  );
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}
