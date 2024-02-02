import { useState } from "react";
import React from "react";
import Nav from "../component/Nav";

export default function Profile() {
  // const auth = localStorage.getItem("user");
  const auth = JSON.parse(localStorage.getItem("user"));

  const [selectedButton, setSelectedButton] = useState("insurance");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  return (
    <div>
      <Nav />
      <main>
        <section className="flex justify-center h-[100vh] p-12">
          <div className="w-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="p-5 w-full bg-gray-100 shadow-inner shadow-xl flex justify-between items-center">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src={require("../images/man-avatar-profile-picture.avif")}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Name :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.username}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Email ID:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                   {auth.email}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Phone No:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                  {auth.phone_number}
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Address :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.address}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    TAX ID NO:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">{auth.tax_id}</h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Company Name :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">{auth.tax_id}</h1>
                </div>
              </div>
            </div>
            <div className=" bg-gray-200 w-full py-4 px-2 mt-8  shadow-2xl shadow-inner-2xl">
              <div className="flex flex-col items-center">
                <div className="w-full flex gap-5">
                  <button
                    className={`shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-gray-600  rounded-lg uppercase ${
                      selectedButton === "insurance"
                        ? "bg-blue-600 text-white "
                        : ""
                    }`}
                    onClick={() => handleButtonClick("insurance")}
                  >
                    Insurance Certificate
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "idCard"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("idCard")}
                  >
                    ID Card
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full p-5 bg-slate-200 h-64 shadow-2xl">
              {selectedButton === "insurance" && (
                <div className="flex gap-4 items-center">
                  {/* Render Insurance Certificate details here */}
                  <div>
                    {" "}
                    <p>Insurance Certificate Details</p>
                  </div>
                  <div>
                    <button className="font-sans px-4 py-2 rounded-xl bg-red-600 text-white">
                      Download
                    </button>
                  </div>
                </div>
              )}
              {selectedButton === "idCard" && (
                <div className="flex gap-4 items-center">
                  {/* Render ID Card details here */}
                  <div>
                    <p>ID Card Details</p>
                  </div>
                  <div>
                    <button className="font-sans px-4 py-2 rounded-xl bg-red-600 text-white">
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
