import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
function MasterLogin() {
  //for navigate after signup
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("masteruser");
    if (isAdmin) {
      navigate("/");
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/masterlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Store user data in local storage
        localStorage.setItem("masteruser", JSON.stringify({ username }));
        // Redirect or perform actions after successful login
        navigate("/masterprofile");
      } else {
        console.error("Login failed:", data.message);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorMessage("An error occurred while logging in");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default MasterLogin;
