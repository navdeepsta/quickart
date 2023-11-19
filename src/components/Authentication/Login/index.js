import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usersData from "./users.json";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setLoggedIn(true);
      setUser(state.user);
    }
  });

  const handleLogin = () => {
    // Simulate a simple login check
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedIn(true);
      setUser(user);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {loggedIn ? (
        <>
          <h1>Welcome, {user?.username}!</h1>
          <Link to="/" state={{ loggedIn: loggedIn, user: user }}>
            Homepage
          </Link>
          <button onClick={handleLogout}>SignOut</button>
        </>
      ) : (
        <div className="login-container">
          <form>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="login" onClick={handleLogin}>
              Login
            </button>
            <button type="button" className="register">
              Register
            </button>
          </form>
        </div>
      )}
    </>
  );
}
