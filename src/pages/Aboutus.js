import React from "react";
import { Link } from "react-router-dom";
import "../Css/Services.css";
import image from "../gif/ezgif.com-crop10.gif";
export default function Aboutus() {
  return (
    <div>
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
      {/* // */}
      <main>
        <section
          class="h-[80vh] relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            class="absolute inset-0 pt-28"
            style={{
              backdropFilter: " blur(1px)",
              backgrounCcolor: "rgba(25, 25, 25, 0.172)",
            }}
          >
            <div class="block flex-wrap justify-between px-8 items-center pt-8 ">
              <div class="flex flex-col mySlides">
                <h1 class="text-6xl font-merriweather pt-3 text-white">
                  Your One Stop Shope
                </h1>
                <h2 class="text-4xl font-merriweather pt-6 text-white">
                  J&S Truck Insurance Agency has provided
                </h2>
                <h2 class="text-4xl font-merriweather pt-3 text-white">
                  insurance services since 2004.
                </h2>
                <div class="flex  justify-start gap-5 pt-8">
                  <Link to={"/"}>
                    <button class="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 rounded-lg">
                      Contact Us
                    </button>
                  </Link>
                  <Link to={""}>
                    <button class="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 bg-[#816C54] rounded-lg">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="block justify-center  text-center">
            <h1 className="sm:text-5xl text-2xl uppercase font-cormorantgaramond">
              Wellcome to J&A truck insurance
            </h1>
            <h2 className="pt-8 font-cormorantgaramond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic
              vitae totam voluptatem aperiam veniam adipisci perferendis autem.
              unde deleniti consequatur.
            </h2>
            <h2 className="pt-2 font-cormorantgaramond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic
              vitae totam voluptatem aperiam veniam adipisci perferendis autem.
              unde deleniti consequatur.
            </h2>
            <h2 className="pt-2 font-cormorantgaramond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic
            </h2>
          </div>
          <div className="pt-20">
            <div className="flex flex-wrap justify-evenly px-2">
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative mt-7"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-96 h-64 bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h1 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Card1
                  </h1>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipQuo repellendus
                    fugiat adipisci non! Officia re laboriosam quae nesciunt. Ut
                    quod incidunt maiores enim voluptas iusto perspiciatis,
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center">
                    <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[100vh]"></section>
      </main>
    </div>
  );
}
