import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    const { username, email, password, confirmPassword } = formData;
    if (username && email && password && confirmPassword) {
      let result = localStorage.getItem("users");
      result = JSON.parse(result);
      result.users.push(formData);
      localStorage.setItem("users", JSON.stringify({ users: result.users }));
      setRegistrationSuccess(true);
    } else {
      alert("Please fill out the form");
    }
  };

  return (
    <div className="signup-card">
      {!registrationSuccess ? (
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" onClick={handleRegister}>
            Register
          </button>
          <p>Already have account?</p>
          <Link to={"/login"}>Login</Link>
        </form>
      ) : (
        <div className="success-message">
          <p>Registration successful!</p>
          <p>
            <Link to={"/login"} onClick={() => setRegistrationSuccess(false)}>
              Click here to login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
