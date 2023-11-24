import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Profile from "../../Profile";
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
  },[]);

  const handleLogin = () => {   
    if(!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify(usersData))

    let result = localStorage.getItem("users");
    result = JSON.parse(result);
   
    // Simulate a simple login check
    const user = result.users.find(
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

  const updateUser = (updatedUser) => {
    let result = localStorage.getItem("users");
    result = JSON.parse(result)
    const users = result.users.filter(user=>user.username !== updatedUser.username);
    users.push(updatedUser);
    localStorage.setItem("users", JSON.stringify({users:users}));
    setUser(updatedUser);
  }

  return (
    <>
      {loggedIn ? (
           <Profile user={user} 
           loggedIn={loggedIn} 
           updateUser={(updatedUser)=>updateUser(updatedUser)}
           onLogout={handleLogout}/> 
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
            <Link to={"/signup"}>
            <button type="button" className="register">
               Register
            </button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
