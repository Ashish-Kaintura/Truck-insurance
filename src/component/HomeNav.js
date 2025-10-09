import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import close from "../icons/close.png";
import menu from "../icons/menu.png";
import "../Css/Home.css";

export default function HomeNav() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative w-full">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex justify-center bg-[#445F6B] text-white py-4">
        <div className="flex w-[90%] justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="./j&s logo black.png" alt="Logo" className="w-32" />
          </div>

          <ul className="flex gap-8 text-sm uppercase font-sans">
            <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            <NavLink to="/Aboutus" className="hover:text-gray-300">About Us</NavLink>
            <NavLink to="/services" className="hover:text-gray-300">Services</NavLink>
            {auth && <NavLink to="/profile" className="hover:text-gray-300">Profile</NavLink>}
            <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
          </ul>

          <div>
            {auth ? (
              <button
                onClick={Logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout ({auth.username})
              </button>
            ) : (
              <div className="flex gap-4">
                <Link to="/Login">
                  <button className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg">
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex sm:hidden justify-between items-center px-4 py-3 bg-[#445F6B] fixed top-0 left-0 right-0 z-50">
        <img src="./j&s logo black.png" alt="Logo" className="w-28" />

        <img
          src={isSidebarOpen ? close : menu}
          alt="Menu"
          className="w-6 cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-full bg-[#445F6B] text-white flex flex-col px-6 py-10 space-y-6 z-40 animate-slide-in">
            {auth && (
              <div className="text-lg font-semibold mb-2">{auth.username}</div>
            )}
            <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
            <NavLink to="/Aboutus" onClick={toggleSidebar}>About Us</NavLink>
            {auth && (
              <NavLink to="/profile" onClick={toggleSidebar}>Profile</NavLink>
            )}
            <NavLink to="/services" onClick={toggleSidebar}>Services</NavLink>
            <NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink>

            <div className="mt-6">
              {auth ? (
                <button
                  onClick={() => {
                    Logout();
                    toggleSidebar();
                  }}
                  className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg"
                >
                  Logout ({auth.username})
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link to="/Login" onClick={toggleSidebar}>
                    <button className="bg-yellow-600 hover:bg-yellow-500 w-full py-2 rounded-lg">
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup" onClick={toggleSidebar}>
                    <button className="bg-yellow-600 hover:bg-yellow-500 w-full py-2 rounded-lg">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
