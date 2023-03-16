import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, Redirect } from "react-router-dom";
import Auth from "../../utils/auth";


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const usernameLength = 24; // set the desired length of the username
    const passwordLength = 24; // set the desired length of the password
    
    const randomUsername = [...Array(usernameLength)]
      .map(() => (Math.floor(Math.random() * 36)).toString(36))
      .join(""); // generates a random alphanumeric string for the username
    
    const randomPassword = [...Array(passwordLength)]
      .map(() => (Math.floor(Math.random() * 36)).toString(36))
      .join(""); // generates a random alphanumeric string for the password
  
    console.log(`Username: ${randomUsername}`);
    console.log(`Password: ${randomPassword}`);
    
    const account = { username: randomUsername, password: randomPassword };
    
    // useMutation() hook goes here
  }

  function LoginPage() {
    const [authenticated, setAuthenticated] = useState(false);
    if (authenticated) {
      return <Redirect to="/Home.js" />
    }
  
    return (
      <div className="auth-form-container bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <fieldset>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </fieldset>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
          </form>
          <button className="link-btn text-blue-500 hover:text-blue-700" onClick={() => props.onFormSwitch('register')}>Don't have an account? sign up here.</button>
        </div>

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@gmail.com"
                name="email"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password:
              </label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                name="password"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </fieldset>
          <Link to="/home">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </Link>
        </form>
        <Link to="/signup">
          <button
            className="link-btn text-blue-500 hover:text-blue-700"
          >
            Don't have an account? sign up here.
          </button>
        </Link>
      </div>
    );
  }

  const isLoggedIn = Auth.loggedIn();

  return (
    <div>
      {isLoggedIn ? <Redirect to="/Home.js" /> : <LoginPage />}
    </div>
  );

}
};

export default Login;
