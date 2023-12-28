import React from "react";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div>
      <Nav />
      <section className="p-8">
        <div
          className=" flex justify-center items-center bg-center bg-cover object-cover"
          style={{
            backgroundImage: `url(${require("../images/rhys-moult-7eaFIKeo1MQ-unsplash.jpg")})`,
          }}
        >
          <div className="flex flex-col items-center justify-center p-8 sm:h-screen dark">
            <div
              className="w-full  rounded-lg shadow-md p-20 border-2"
              style={{
                backdropFilter: " blur(4px)",
                backgrounCcolor: "rgba(255, 255, 255, 0.071)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Signup</h2>
              <form className="flex flex-col">
                <div className="flex gap-5">
                  <input
                    placeholder="Name"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                  <input
                    placeholder="Email address"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="email"
                  />
                </div>
                <div className="flex gap-5">
                  <input
                    placeholder="Tax Id No"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                  <input
                    placeholder="Phone Number"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="number"
                  />
                </div>
                <div className="flex gap-5">
                  <input
                    placeholder="Company Name"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                    <input
                    placeholder="Password"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="password"
                  />
                </div>
                <div className="block items-center justify-between flex-wrap">
                  <p className="text-white mt-4">
                    Allready Have an Account ?{" "}
                    <Link
                      to={"/login"}
                      className="text-sm text-black -200 hover:underline mt-4"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
