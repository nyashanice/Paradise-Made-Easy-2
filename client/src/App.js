import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
