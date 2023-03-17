import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Guests from "./components/pages/cards/Guests";
import Dashboard from "./components/pages/Dashboard";


const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  // uri: "/graphql",
  cache: new InMemoryCache(),
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
              <Route path="/guests" element={<Guests />} />
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
