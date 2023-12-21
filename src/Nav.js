import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bg-[#515659]">
      <ul className="flex justify-center py-6">
        <div className="flex justify-evenly gap-64 border-b-2 pb-4 text-white items-center">
          <div className="w-32">
            <img src="./red-removebg-preview.png" alt="" />
          </div>
          <div className="sm:flex hidden gap-5 uppercase font-sans text-white text-sm">
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/Aboutus"}>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Certificates</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </div>
          <div className="sm:flex hidden justify-center gap-8 font-sans">
            <div>
              <h1>Login</h1>
            </div>
            <div>
              <h1>Signup</h1>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
