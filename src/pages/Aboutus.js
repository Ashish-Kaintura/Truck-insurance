import React from "react";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import "../Css/Services.css";
import image from "../gif/ezgif.com-crop10.gif";
import image1 from "../gif/ezgif.com-cro4.gif";
// import backgroundImage from "../images/dimitar-donovski-yrjB4dYWUZU-unsplash.jpg";
import backgroundImage1 from "../images/Homepage-Empty-Road-with-Two-Lanes-Surrounded-by-Green-Trees-with-Snow-Capped-Mountains-in-the-Background-Against-a-Blue-Sky.jpg";
import CommercialVehTruck from "../images/Commercial-Veh-Truck.svg";
import reportCardImage from "../images/report-card.svg";
export default function Aboutus() {
  return (
    <div>
      <Nav />
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
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
                    {/* <img
                      src={require("../images/Lovepik_com-401744084-car-washing 1.png")}
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative bg-[#E6EDF7] py-10 sm:px-0 px-4">
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
          <div className="py-20 sm:px-0 px-4">
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
          <div className="sm:flex block sm:justify-between justify-center relative py-10">
            <div className="sm:w-[50%] h-96 bg-[#E6EDF7]">
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
            <div className="sm:w-[50%] h-96 bg-[#0066A4] relative flex justify-center">
              <div className="w-[450px] flex justify-center">
                <img src={reportCardImage} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="sm:h-[65vh] h-[85vh] bg-cover bg-center bg-no-repeat relative items-center"
          style={{ backgroundImage: `url(${backgroundImage1})` }}
        >
          <div
            className="absolute inset-0 block items-center py-8"
            style={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(10, 10, 10, 0.4)",
            }}
          >
            <div className="sm:flex flex-wrap sm:justify-evenly justify-center pt-8 items-center">
              <div className="flex flex-col text-center justify-center">
                <div className="flex justify-center overflow-hidden">
                  <img
                    width="20%"
                    src={require("../images/stars.png")}
                    alt=""
                  />
                </div>
                <h1 className="text-3xl font-merriweather text-white">
                  Our Clients Rave About Us
                </h1>
                <br />
                <h2 className="text-xl font-merriweather text-white">
                  Check out our reviews and see why you should switch to JS
                  Truck
                </h2>

                <h3 className="text-xl font-merriweather text-white">
                  Insurance Agency.
                </h3>
                <div className="flex justify-center gap-5 pt-8">
                  <Link to={""}>
                    <button className="border-2 py-2 px-4 text-2xl text-white font-sans mt-2 rounded-lg">
                      Contact Us
                    </button>
                  </Link>
                  <Link to={""}>
                    <button className="border-2 py-2 px-4 text-2xl text-white font-sans mt-2 bg-[#816C54] rounded-lg">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center text-center sm:mt-0 mt-5">
                <div>
                  <div className="flex justify-center pb-2">
                    <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center">
                      <img src={CommercialVehTruck} alt="" />
                    </div>
                  </div>
                  <h1 className="text-center text-white font-merriweather text-[18px]">
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore
                    <br />
                    ducimus necessitatibus sed est assumenda, vitae hic ipsam{" "}
                    <br />
                    doloribus! Quas, laudantium."
                  </h1>
                  <h1 className="text-white font-merriweather pt-3">Jomyy-</h1>
                  <br />
                  <div className="flex justify-center gap-5">
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="flex justify-center div1 py-12 px-2">
            <div
              class="flex w-[850px] h-48 bg-[white] items-center px-5 py-8 px-5 justify-between rounded-3xl"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div class="flex text-[#1C7987] font-robotoflex">
                <h1>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                  <br />
                  repellat doloremque voluptates mollitia,
                </h1>
              </div>
              <div>
                <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p class="z-10">Contact Us</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
