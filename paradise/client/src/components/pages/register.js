import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      console.log({ email, password, name });
      setFormSubmitted(true);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full Name"
          aria-label="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="useremail@gmail.com"
          id="email"
          name="email"
          aria-label="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          aria-label="Password"
        />
        <button type="submit">Register</button>
      </form>
      {formSubmitted && (
        <p style={{ color: "green" }}>Registration successful!</p>
      )}
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};
