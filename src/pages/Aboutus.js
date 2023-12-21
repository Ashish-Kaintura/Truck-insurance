import React from "react";
// import Nav from "../Nav";
import { Link } from "react-router-dom";
export default function Aboutus() {
  return (
    <div>
      <nav class="">
        <ul class="flex justify-center py-6">
          <div class="flex justify-evenly gap-64 border-b-2 border-black  pb-4 text-black items-center">
            <div class="w-32">
              <img src="./red-removebg-preview.png" alt="" />
            </div>
            <div class="flex gap-5 uppercase font-sans text-black text-sm">
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
            <div class="flex justify-center gap-8 font-sans">
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
      {/* // */}
      <div className="h-[700px]">
        <div className="flex justify-between items-center   ps-12">
          <div className="flex flex-col uppercase ">
            <h1 className="text-5xl font-bold font-sans">Affordable truck </h1>
            <h2 className="text-5xl font-semibold font-sans pt-4">Service</h2>
            <h3 className="text-lg font-cormorantgaramond pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nunc odio in et, lectus sit lorem id integer.
            </h3>
            <br />
            <div>
              <button className="px-4 py-2 bg-sky-600 text-white text-xl rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img
              src="images/3d-render-fleet-delivery-vehicles 1.png"
              alt="truck"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
