import React from "react";
import { Link } from "react-router-dom";
export default function Nav2() {
  return (
    <nav className="bg-[white]">
      <ul className="flex justify-center py-6">
        <div className="flex justify-evenly gap-64 border-black border-b-2 pb-4 text-black items-center">
          <div className="w-48">
            <img src="./j&s logo final logo.png" alt="" />
            <div>
              <h className=" text-sm font-semibold ps-2">
                DBA Jay S Insurance Agency
              </h>
            </div>
          </div>
          <div className="sm:flex hidden gap-5 uppercase font-sans text-black text-sm">
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/Aboutus"}>
              <li>About Us</li>
            </Link>
            <Link to={"/certificates"}>
              <li>Certificates</li>
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
              <Link to={"/login"}>
                <button>Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
