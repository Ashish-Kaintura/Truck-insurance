import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function HomeNav() {
  //   const auth = localStorage.getItem("user");
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const Logout = () => {
    // console.warn("apple");
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <nav className="bg-[#515659]">
      {auth ? (
        <ul className="flex justify-center py-6">
          <div className="flex justify-evenly gap-64 border-b-2 pb-4 text-white items-center">
            <div className="w-48">
              <img src="./j&s logo black.png" alt="" />
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
              <Link to={"/certificates"}>
                <li>Certificates</li>
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
  );
}
