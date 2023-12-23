import React from "react";
import Nav from "../component/Nav";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
export default function Conatct() {
  return (
    <div>
      <Nav />
      <section className="sm:p-8 p-2">
        <div
          className="sm:h-[100vh] h-[115vh] bg-center bg-cover object-cover relative"
          style={{
            backgroundImage: `url(${require("../images/rhys-moult-7eaFIKeo1MQ-unsplash.jpg")})`,
          }}
        >
          <div
            className="absolute inset-0 sm:flex block sm:justify-evenly justify-center items-center"
            style={{}}
          >
            <div>
              <div className=" flex justify-center mt-6 sm:mt-0">
                <div
                  className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-transparent border-2 shadow-inner"
                  style={{
                    backdropFilter: " blur(10px)",
                    backgrounCcolor: "rgba(255, 255, 255, 0.071)",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <div className="text-4xl font-bold mb-2 text-white text-center">
                    Lets get <span className="text-white">Conencted</span>
                  </div>
                  <div className="text-sm font-merriweathermb-4 text-center text-white font-merriweather">
                    We try to Conenct with you ASP
                  </div>
                  <form className="flex flex-col gap-3">
                    <div className="block relative">
                      <label
                        for="name"
                        className="block text-white font-merriweather cursor-text text-sm leading-[140%] font-merriweather mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        id="name"
                        className="rounded border border-gray-200 text-sm w-full font-merriweather leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                      />
                    </div>
                    <div className="block relative">
                      <label
                        for="email"
                        className="block text-white cursor-text text-sm leading-[140%] font-merriweather mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Mail"
                        id="email"
                        className="rounded border border-gray-200 text-sm w-full font-merriweather leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                      />
                    </div>
                    <div className="block relative">
                      <label
                        for="number"
                        className="block text-white cursor-text text-sm leading-[140%] font-merriweather mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Number"
                        id="number"
                        className="rounded border border-gray-200 text-sm w-full font-merriweather leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                      />
                    </div>
                    <div className="block relative">
                      <label
                        for="message"
                        className="block text-white font-merriweather cursor-text text-sm leading-[140%]  mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        placeholder="Enter your Message"
                        type="text"
                        id="password"
                        className="rounded border border-gray-200 text-sm w-full font-merriweather leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-white text-black font-merriweather w-max m-auto px-6 py-2 rounded text-lg"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="block justify-start border-2 sm:w-128 sm:mt-0 mt-5 mx-8"
              style={{
                backdropFilter: " blur(8px)",
                backgrounCcolor: "rgba(255, 255, 255, 0.071)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="flex justify-start px-4 gap-5 items-center text-white  font-cormorantgaramond py-5 uppercase">
                <FaLocationDot />
                <div>
                  <h1 className="text-lg sm:text-black font-semibold ">
                    Address :
                  </h1>
                  <h2 className="text-lg sm:text-gray-900">
                    123 Streate 23 gsutubyy hsiybju
                  </h2>
                </div>
              </div>
              <div className="flex justify-start px-4 gap-5 items-center text-white text-xl font-cormorantgaramond py-5">
                <FaPhoneAlt />
                <div>
                  <h1 className="text-lg sm:text-black font-semibold ">Phone :</h1>
                  <h2 className="text-lg sm:text-gray-900">91+ 256586689489</h2>
                </div>
              </div>
              <div className="flex justify-start px-4 gap-5 items-center text-white text-xl font-cormorantgaramond py-5">
                <IoTime className="text-2xl" />
                <div>
                  <h1 className="text-lg sm:text-black font-semibold ">
                    We are Open:
                  </h1>
                  <h2 className="text-lg sm:text-gray-900">
                    Monday - Thursday: 9:00 AM-5:30 PM <br />
                    Friday 9:00 AM - 6:00 PM <br />
                    Saturday: 11:00 AM - 5:00 PM
                  </h2>
                </div>
              </div>
              <div className="flex justify-start px-4 gap-5 items-center text-white text-xl font-cormorantgaramond py-5">
                <IoMail className="text-2xl" />
                <div>
                  <h1 className="text-lg sm:text-black font-semibold ">E-mail:</h1>
                  <h2 className="text-lg sm:text-gray-900">mail@demo.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
