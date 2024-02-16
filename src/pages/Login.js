import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  //for navigate after signup
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        // console.log("Server response:", result);
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
        console.log("User login up successfully");
        navigate("/profile");
      } else {
        console.error("Failed to sign up");
        alert.error("Wrong Id Password");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Wrong id Password");
    } finally {
      setLoading(false);
    }
    // console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <Nav />
      <section className="sm:p-8 pt-28 ">
        <div
          className=" flex justify-center items-center bg-center bg-cover object-cover"
          style={{
            backgroundImage: `url(${require("../images/rhys-moult-7eaFIKeo1MQ-unsplash.jpg")})`,
          }}
        >
          <div className="flex flex-col items-center justify-center p-8 sm:h-screen dark">
            <div
              className="w-full  rounded-lg shadow-md sm:p-20 p-5 border-2"
              style={{
                backdropFilter: " blur(4px)",
                backgrounCcolor: "rgba(255, 255, 255, 0.071)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Log In</h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  required={true}
                  placeholder="Email address"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="email"
                  onChange={handleChange}
                  id="email"
                />

                <input
                  required={true}
                  placeholder="Password"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="password"
                  onChange={handleChange}
                  id="password"
                />

                <div className="block items-center justify-between flex-wrap">
                  <p className="text-white mt-4">
                    Dont have a Account{" "}
                    <Link
                      to={"/signup"}
                      className="text-xl font-semibold text-black -200 hover:underline mt-4"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  {loading ? "Loging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
