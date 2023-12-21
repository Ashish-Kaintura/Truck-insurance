import React from "react";
import { Link } from "react-router-dom";
import "../Css/Services.css";
import image from "../gif/ezgif.com-crop10.gif";
import image1 from "../gif/ezgif.com-cro4.gif";
import reportCardImage from "../images/report-card.svg";
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
          className="h-[80vh] relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="absolute inset-0 pt-28"
            style={{
              backdropFilter: " blur(1px)",
              backgrounCcolor: "rgba(25, 25, 25, 0.172)",
            }}
          >
            <div className="block flex-wrap justify-between px-8 items-center pt-8 ">
              <div className="flex flex-col mySlides">
                <h1 className="text-6xl font-merriweather pt-3 text-white">
                  Your One Stop Shope
                </h1>
                <h2 className="text-4xl font-merriweather pt-6 text-white">
                  J&S Truck Insurance Agency has provided
                </h2>
                <h2 className="text-4xl font-merriweather pt-3 text-white">
                  insurance services since 2004.
                </h2>
                <div className="flex  justify-start gap-5 pt-8">
                  <Link to={"/"}>
                    <button className="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 rounded-lg">
                      Contact Us
                    </button>
                  </Link>
                  <Link to={""}>
                    <button className="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 bg-[#816C54] rounded-lg">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5">
          <img
            className="w-full"
            src={require("../images/Vehicle-Detail-Journey.png")}
            alt=""
          />
        </div>
        <section className="pb-20  bg-white">
          <div
            className="block justify-center text-center py-8 text-white bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${image1})` }}
          >
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
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-center pt-20 pb-5 font-robotoflex text-[#0066A4]">
              Our services
            </h1>
            <h1 className="font-robotoflex text-3xl text-black text-center font-semibold">
              What we Offer
            </h1>
            <p className="text-center pt-6 font-robotoflex text-sm text=[#d7d7d7]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              molestias <br />
              assumenda accusamus fugit, sapiente harum minima nulla totam{" "}
              <br />
              adipisci perspiciatis tempora possimus dolor, quam fugiat
              <br />
              ratione! Deleniti adipisci magnam ad. <br />
            </p>
          </div>
          <div className="pt-5">
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
        <section>
          <div className="relative bg-[#E6EDF7] py-10">
            <div className="flex flex-wrap justify-evenly items-center">
              <div
                className="flex flex-col border-b-2 pb-4 border-[#0066A4]"
                data-aos="fade-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  <h1 className="text-[#0066A4] font-robotoflex">About Us</h1>
                  <h1 className="text-3xl pt-2 font-robotoflex font-semibold">
                    Who We Are ?
                  </h1>
                  <p className="pt-4 font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Doloribus, facilis nulla. Officia laboriosam quod alias{" "}
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Doloribus, facilis nulla. Officia laboriosam quod alias{" "}
                    <br />
                    <br />
                    exercitationem quasi recusandae rem, ratione veniam nam.
                    <br />
                    Sapiente expedita quasi velit eveniet facere saepe optio.
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center border-l-2 border-[#0066A4] overflow-hidden rounded-lg"
                data-aos="fade-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img
                  width="100%"
                  src={require("../gif/ezgif.com-crop5.gif")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-20">
            <div className="flex flex-wrap justify-evenly items-center">
              <div
                className="flex justify-center"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img
                  width="500px"
                  src={require("../gif/ezgif.com-crop8.gif")}
                  alt=""
                />
              </div>
              <div
                className="flex flex-col border-b-2 pb-4 border-[#0066A4]"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  <h1 className="text-3xl pt-2 font-robotoflex font-semibold text-[#0066A4]">
                    Why Choose Comapany Name
                  </h1>
                  <p className="pt-4 font-sans">
                    <span className="text-black font-semibold">Fact 1</span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Doloribus, facilis nulla. Officia laboriosam quod alias{" "}
                    <br />
                    <br />
                    <span className="text-black font-semibold">Fact 2</span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Doloribus, facilis nulla. Officia laboriosam quod alias{" "}
                    <br />
                    <br />
                    <span className="text-black font-semibold">Fact 3</span>
                    <br />
                    exercitationem quasi recusandae rem, ratione veniam nam.
                    <br />
                    Sapiente expedita quasi velit eveniet facere saepe optio.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between relative py-10">
            <div className="w-[50%] h-96 bg-[#E6EDF7]">
              <div className="ps-8 pt-8">
                <h1 className="text-2xl font-semibold font-robotoflex">
                  Our Achivements
                </h1>
                <p className="pt-4 font-robotoflex pr-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ratione perspiciatis iure tempora recusandae, maiores deserunt
                  totam eaque? Quia voluptas ex aliquid non obcaecati ut earum
                  eos laboriosam perferendis mollitia!
                </p>
                <br />
                <p className="pt-4 font-robotoflex pr-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ratione perspiciatis iure tempora recusandae, maiores deserunt
                  totam eaque? Quia voluptas ex aliquid non obcaecati ut earum
                  eos laboriosam perferendis mollitia!
                </p>
              </div>
            </div>
            <div className="w-[50%] h-96 bg-[#0066A4] relative flex justify-center">
              <div className="w-[450px] flex justify-center">
                <img src={reportCardImage} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="h-[100vh]"></section>
      </main>
    </div>
  );
}
