import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navlogo from "../images/j&s ogoinalogo.png";
export default function Nav2() {
  const isAdmin = JSON.parse(localStorage.getItem("masteruser"));
  const navigate = useNavigate();
  const Logout = () => {
    // console.warn("apple");
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav className="bg-[white]">
      <ul className="flex justify-center py-6">
        <div className="flex justify-evenly gap-64 border-black border-b-2 pb-4 text-black items-center">
          <div className="w-48">
            <img src={navlogo} alt="" />
            <div>
              <h1 className=" text-sm font-semibold ps-2">
                DBA Jay S Insurance Agency
              </h1>
            </div>
          </div>
          <div className="sm:flex hidden gap-5 uppercase font-sans text-black text-sm">
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/Aboutus"}>
              <li>About Us</li>
            </Link>
            {/* <Link to={"/certificates"}>
              <li>Certificates</li>
            </Link> */}
            {/* <Link to={"/profile"}>
              <li>Profile</li>
            </Link> */}
            <Link to={"/contact"}>
              <li>Contact Us</li>
            </Link>
          </div>
          <div className="sm:flex hidden justify-center gap-8 font-sans">
            <div className="flex justify-center">
              <Link onClick={Logout} to={"/signup"}>
                Logout ({isAdmin.username})
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
