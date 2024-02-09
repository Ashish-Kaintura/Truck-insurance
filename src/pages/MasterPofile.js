import { useState, useEffect } from "react";
import React from "react";
import Nav2 from "../component/Nav2";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Trackinggmail from "../component/Trackingmail";
import UploadCertificate from "../component/UploadCertificate";
import Mastermail from "../component/MasterMail";
import DashBord from "./DashBord";
export default function MasterProfile() {
  const isAdmin = JSON.parse(localStorage.getItem("masteruser"));

  const [selectedButton, setSelectedButton] = useState("dashboard");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav2 />
      <main>
        <section className="flex justify-center  sm:p-12">
          <div className="w-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="p-5 w-full bg-gray-100 shadow-xl sm:flex flex-wrap  items-center">
              <div className="flex flex-col justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src={require("../images/man-avatar-profile-picture.avif")}
                    alt=""
                  />
                </div>
                <h1 className=" fon-sans font-semibold text-lg pt-2">
                  {isAdmin.username}
                </h1>
              </div>
            </div>
            <div className=" bg-gray-200 w-full py-4 px-2 mt-8  shadow-2xl shadow-inner-2xl">
              <div className="flex flex-col items-center">
                <div className="w-full flex flex-wrap gap-5">
                  <button
                    className={`shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4  border-gray-600  rounded-lg uppercase ${
                      selectedButton === "dashboard"
                        ? "bg-blue-600 text-white "
                        : ""
                    }`}
                    onClick={() => handleButtonClick("dashboard")}
                  >
                    Dashboard
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "Mail" ? "bg-blue-600 text-white" : ""
                    }`}
                    onClick={() => handleButtonClick("Mail")}
                  >
                    Mail
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "tracker"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("tracker")}
                  >
                    Mail Tracker
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full p-5 bg-slate-200  shadow-2xl">
              {selectedButton === "dashboard" && <DashBord />}
              {selectedButton === "Mail" && (
                <div>
                  {/* Render mail details here */}
                  <div>
                    <Mastermail />
                  </div>
                </div>
              )}
              {selectedButton === "tracker" && (
                <div>
                  <Trackinggmail />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
