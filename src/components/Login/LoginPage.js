import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      history.push("/search");
    }
  }
  return (
    <>
      <h1 className="text-center">Login</h1>
      <div className="form">
        <div className="form-container">
          <label className="label text-center" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
        </div>
        <div className="form-container">
          <label className="label text-center" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button className="submit" onClick={() => login()}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
