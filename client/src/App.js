import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import GuestList from "./components/pages/GuestList";
import Dashboard from "./components/pages/Dashboard";
import axios from "axios";

const authorize = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authorize.concat(httpLink),
});

// const state = {
//   name: "",
//   email: "",
//   posts: [],
// };

// const receivedUsers = () => {
//   this.getUserData;
// };

// const getUserData = () => {
//   axios
//     .get("/api")
//     .then((response) => {
//       const data = response.data;
//       this.setState;
//       ({ users: data });
//       console.log("done!");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/guests" element={<GuestList />} /> */}
              <Route path="/mydashboard" element={<Dashboard />} />
              <Route path="/postsby/:name" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
