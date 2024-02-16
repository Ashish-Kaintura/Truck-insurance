import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import close from "../icons/close.png";
import menu from "../icons/menu.png";
import "../Css/Home.css";
export default function HomeNav() {
  //   const auth = localStorage.getItem("user");
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const Logout = () => {
    // console.warn("apple");
    localStorage.clear();
    navigate("/signup");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <nav className="bg-[#445F6B] sm:flex hidden justify-center">
        {auth ? (
          <ul className="flex justify-center py-6">
            <div className="flex justify-evenly gap-64 border-b-2 pb-4 text-white items-center">
              <div className="w-48">
                <img src="./j&s logo black.png" alt="" />
                <div>
                  <h1 className=" text-sm font-semibold ps-2 text-white">
                    DBA Jay S Insurance Agency
                  </h1>
                </div>
              </div>
              <div className="sm:flex hidden gap-5 uppercase font-sans text-white text-sm">
                <Link to={"/"}>
                  <li>home</li>
                </Link>
                <Link to={"/Aboutus"}>
                  <li>About Us</li>
                </Link>
                <Link to={"/services"}>
                  <li>Services</li>
                </Link>
                <Link to={"/profile"}>
                  <li>Profile</li>
                </Link>

                <Link to={"/contact"}>
                  <li>Contact Us</li>
                </Link>
              </div>
              <div className="sm:flex hidden justify-center gap-8 font-sans">
                <div className="flex justify-center">
                  <li>
                    <Link onClick={Logout} to={"/signup"}>
                      Logout ({auth.username})
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <ul className="flex justify-center py-6">
            <div className="flex justify-evenly gap-64 border-black border-b-2 pb-4 text-black items-center">
              <div className="w-48">
                <img src="./j&s logo black.png" alt="" />
                <div>
                  <h1 className=" text-sm font-semibold ps-2 text-white">
                    DBA Jay S Insurance Agency
                  </h1>
                </div>
              </div>
              <div className="sm:flex hidden gap-5 uppercase font-sans text-white text-sm">
                <Link to={"/"}>
                  <li>home</li>
                </Link>
                <Link to={"/Aboutus"}>
                  <li>About Us</li>
                </Link>
                <Link to={"/services"}>
                  <li>Services</li>
                </Link>
                <Link to={"/contact"}>
                  <li>Contact Us</li>
                </Link>
              </div>
              <div className="sm:flex hidden justify-center text-white gap-8 font-sans">
                <div className="flex justify-center gap-8">
                  <Link to={"/Login"}>
                    <button>Log In</button>
                  </Link>
                  <Link to={"/signup"}>
                    <button>Sign up</button>
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        )}
      </nav>
      <nav className="bg-[#515659] sm:hidden flex justify-between z-10 fixed w-full">
        {auth ? (
          <ul className="flex justify-between px-3 py-6 w-full items-center relative">
            {isSidebarOpen && (
              <div
                className="sidenav absolute text-white flex flex-col gap-y-5 ps-2 mt-4 "
                style={{
                  position: "absolute",
                  backgroundColor: "#515659",
                  height: "100vh",
                  top: 95,
                  left: 0,
                  zIndex: 5,
                  overflowX: "hidden",
                }}
              >
                {/* Sidebar content goes here */}
                <div className="ps-7 pb-3 text-xl font-semibold">
                  <h1>{auth.username}</h1>
                </div>
                <NavLink className="homeLink" to={"/"}>
                  Home
                </NavLink>
                <NavLink className="homeLink" to={"/Aboutus"}>
                  About
                </NavLink>
                <NavLink className="homeLink" to={"/profile"}>
                  <li>Profile</li>
                </NavLink>
                <NavLink className="homeLink" to={"/Services"}>
                  Services
                </NavLink>
                <NavLink className="homeLink" to={"/contact"}>
               Contact Us
                </NavLink>
                <div className="flex justify-start ps-6 text-xl mt-5  text-white  font-sans">
                  <div className="flex gap-5">
                    <li>
                      <Link onClick={Logout} to={"/signup"}>
                        <button className=" py-1 rounded-lg bg-red-600 border-2 shadow-2xl px-2">
                          {" "}
                          Logout
                        </button>{" "}
                        ({auth.username})
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            )}
            <div>
              <img className="w-32" src="./j&s logo black.png" alt="" />
              <div>
                <h1 className=" text-[13px] font-semibold ps-2 text-white">
                  DBA Jay S Insurance Agency
                </h1>
              </div>
            </div>
            <div>
              {isSidebarOpen ? (
                <img
                  className="w-6 menu cursor-pointer"
                  src={close}
                  alt=""
                  onClick={toggleSidebar}
                />
              ) : (
                <img
                  className="w-6 close cursor-pointer"
                  src={menu}
                  alt=""
                  onClick={toggleSidebar}
                />
              )}
            </div>
          </ul>
        ) : (
          <ul className="flex justify-between px-3 py-6 w-full items-center relative">
            {isSidebarOpen && (
              <div
                className="sidenav absolute text-white flex flex-col gap-y-5 ps-4 mt-4 "
                style={{
                  position: "absolute",
                  backgroundColor: "#515659",
                  height: "100vh",
                  top: 95,
                  left: 0,
                  zIndex: 5,
                  overflowX: "hidden",
                }}
              >
                {/* Sidebar content goes here */}
                <div className="ps-3"></div>
                <NavLink className="homeLink" to={"/"}>
                  Home
                </NavLink>
                <NavLink className="homeLink" to={"/Aboutus"}>
                  About
                </NavLink>
                <NavLink className="homeLink" to={"/Services"}>
                  Services
                </NavLink>
                <NavLink className="homeLink" to={"/contact"}>
               Contact Us
                </NavLink>
                <div className="flex justify-start ps-6 text-xl mt-5  text-white  font-sans">
                  <div className="flex gap-5">
                    <Link to={"/Login"}>
                      <button className="px-3 py1 rounded-lg bg-blue-400 border-2 shadow-2xl">
                        Log In
                      </button>
                    </Link>
                    <Link to={"/signup"}>
                      <button className="px-3 py1 rounded-lg bg-blue-400 border-2 shadow-2xl">
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div>
              <img className="w-32" src="./j&s logo black.png" alt="" />
              <div>
                <h1 className=" text-[13px] font-semibold ps-2 text-white">
                  DBA Jay S Insurance Agency
                </h1>
              </div>
            </div>
            <div>
              {isSidebarOpen ? (
                <img
                  className="w-6 menu cursor-pointer"
                  src={close}
                  alt=""
                  onClick={toggleSidebar}
                />
              ) : (
                <img
                  className="w-6 close cursor-pointer"
                  src={menu}
                  alt=""
                  onClick={toggleSidebar}
                />
              )}
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
