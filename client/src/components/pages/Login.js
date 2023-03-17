import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const { data } = await login({
        variables: { ...user },
      });
      // Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-form-container bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {data ? (
          <div>
            <Link to="/home">Homepage</Link>
          </div>
        ) : (
          <div>
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
                    value={user.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
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
                    value={user.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </fieldset>
              <Link to="/mydashboard">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="link-btn text-blue-500 hover:text-blue-700"
                >
                  Don't have an account? sign up here.
                </button>
              </Link>
            </form>
          </div>
        )}
        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};

// return <div>{authenticated ? <Home /> : <LoginPage />}</div>;

export default Login;
