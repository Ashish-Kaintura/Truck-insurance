import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";
function MasterLogin() {
  //for navigate after signup
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("masteruser");
    if (isAdmin) {
      navigate("/masterprofile");
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
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Store user data in local storage
        localStorage.setItem("masteruser", JSON.stringify({ username }));
        // Store token in local storage
        localStorage.setItem("token", JSON.stringify(data.isAdmin));

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
      <Nav />

      <div className=" flex justify-center h-[60vh] items-center">
        <div>
          {" "}
          <h1 className="py-2 ps-1 text-normal  font-semibold">
            Master Pannel Login
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-blue-200 p-5 rounded-lg shadow-xl"
          >
            <div>
              <label className="font-semibold">Username:</label>
              <input
                type="text"
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold">Password:</label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="mt-4 px-3 py-1 rounded-xl shadow-2xl bg-blue-700 text-white"
              type="submit"
            >
              Login
            </button>
          </form>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default MasterLogin;
