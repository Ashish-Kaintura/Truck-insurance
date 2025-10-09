import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import close from "../icons/close.png";
import menu from "../icons/menu.png";
import navlogo from "../images/j&s ogoinalogo.png";
import "../Css/Home.css";

export default function Nav() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      {/* DESKTOP NAV */}
      <nav className="hidden sm:flex justify-between items-center px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={navlogo} alt="Logo" className="w-40" />
        </div>

        {/* Links */}
        <ul className="flex gap-8 uppercase text-sm font-medium text-black">
          <NavLink to="/" className="hover:text-gray-600">Home</NavLink>
          <NavLink to="/Aboutus" className="hover:text-gray-600">About Us</NavLink>
          <NavLink to="/services" className="hover:text-gray-600">Services</NavLink>
          {auth && <NavLink to="/profile" className="hover:text-gray-600">Profile</NavLink>}
          <NavLink to="/contact" className="hover:text-gray-600">Contact Us</NavLink>
        </ul>

        {/* Auth Buttons */}
        <div>
          {auth ? (
            <button
              onClick={Logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout ({auth.username})
            </button>
          ) : (
            <div className="flex gap-4">
              <Link to="/Login">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="flex sm:hidden justify-between items-center px-4 py-3">
        <img src={navlogo} alt="Logo" className="w-32" />

        <img
          src={isSidebarOpen ? close : menu}
          alt="menu"
          className="w-7 cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-white text-black flex flex-col py-10 px-8 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {auth && (
            <div className="font-semibold text-lg mb-6 border-b pb-2">
              Welcome, {auth.username}
            </div>
          )}

          <NavLink onClick={toggleSidebar} to="/" className="py-2 border-b">
            Home
          </NavLink>
          <NavLink onClick={toggleSidebar} to="/Aboutus" className="py-2 border-b">
            About Us
          </NavLink>
          <NavLink onClick={toggleSidebar} to="/services" className="py-2 border-b">
            Services
          </NavLink>
          {auth && (
            <NavLink onClick={toggleSidebar} to="/profile" className="py-2 border-b">
              Profile
            </NavLink>
          )}
          <NavLink onClick={toggleSidebar} to="/contact" className="py-2 border-b">
            Contact Us
          </NavLink>

          <div className="mt-6">
            {auth ? (
              <button
                onClick={() => {
                  Logout();
                  toggleSidebar();
                }}
                className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg"
              >
                Logout ({auth.username})
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to="/Login" onClick={toggleSidebar}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg">
                    Log In
                  </button>
                </Link>
                <Link to="/signup" onClick={toggleSidebar}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

     
      </nav>
    </header>
  );
}
