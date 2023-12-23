import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bg-[white]">
      <ul className="flex justify-center py-6">
        <div className="flex justify-evenly gap-64 border-black border-b-2 pb-4 text-black items-center">
          <div className="w-32">
            <img src="./red-removebg-preview.png" alt="" />
          </div>
          <div className="sm:flex hidden gap-5 uppercase font-sans text-black text-sm">
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/Aboutus"}>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Certificates</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact Us</li>
            </Link>
          </div>
          <div className="sm:flex hidden justify-center gap-8 font-sans">
            <div className="flex justify-center">
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to={"/signup"}>
                <button>Signup</button>
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
