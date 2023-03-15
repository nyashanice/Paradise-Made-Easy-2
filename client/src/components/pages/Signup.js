import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2 className="text-3xl font-bold mb-4">Sign up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Full name
        </label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <label
          htmlFor="email"
          className="block font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <label
          htmlFor="password"
          className="block font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Sign Up
        </button>
      </form>
      <button
        className="text-blue-500 hover:text-blue-700 font-medium"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Signup;
