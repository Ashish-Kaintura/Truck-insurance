import React from "react";
import { Link } from "react-router-dom";
import "../Css/Services.css";
import image from "../gif/ezgif.com-crop2.gif";
import image1 from "../gif/ezgif.com-crop2.gif";

export default function Services() {
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
        <section className="py-12">
          <div className="sm:flex flex-wrap sm:justify-between justify-center items-center   ps-12">
            <div className="flex flex-col uppercase ">
              <h1 className="text-5xl font-bold font-sans">
                Affordable truck{" "}
              </h1>
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
        </section>
        <section className="py-20 bg-[#F2f2f2f2]">
          <div className=" justify-center text-center">
            <h1 className="font-cormorantgaramond text-5xl uppercase">
              Services you get with us
            </h1>
            <h2 className="font-cormorantgaramond pt-3 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque in
              saepe reprehenderit, amet odio aliquam omnis vel aperiam dolor
              esse soluta.
            </h2>
            <h3 className="font-cormorantgaramond pt-1 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque in
              saepe reprehenderit,
            </h3>
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center sm:pt-20 z-[10]">
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200  overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card1</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card2</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center sm:pt-20 pt-5 z-[10]">
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200  overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card1</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
            <div
              className="group flex flex-col justify-start items-start gap-2 sm:w-96 w-72 h-56 duration-500 relative rounded-lg p-4 bg-[whitesmoke] hover:-translate-y-2 hover:shadow-xl shadow-gray-300 sm:mt-0 mt-20 cardanimation"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 overflow-hidden"
                alt="image here"
              >
                <img src="truck3/image/download.jpg" alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card2</h2>
                <p className="text-gray-700 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean convallis magna quis lectus fermentum, quis scelerisque
                  orci pellentesque. Duis id porta justo. Sed ac enim id justo
                  tincidunt hendrerit id ac lectus. Pellentesque maximus posuere
                  tortor vitae consequat.
                </p>
              </div>
              <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                Explore
              </button>
            </div>
          </div>
        </section>
        <section className="py-12">
          <section
            className="sm:h-[70vh] h-[120vh] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div
              className="absolute inset-0 py-28"
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(86, 145, 235, 0.336)",
              }}
            >
              <div className="sm:flex block sm:justify-evenly justify-center px-2 items-center">
                <div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                      <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src="truck3/image/why1.jpg"
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden"></span>
                        <img
                          className="object-cover"
                          src="truck3/image/why1.jpg"
                          alt=""
                        />
                      </button>

                      <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                        <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                          <span className="w-20 h-20 inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M9.99296258,10.5729355 C12.478244,10.5729355 14.4929626,8.55821687 14.4929626,6.0729355 C14.4929626,3.58765413 12.478244,1.5729355 9.99296258,1.5729355 C7.5076812,1.5729355 5.49296258,3.58765413 5.49296258,6.0729355 C5.49296258,8.55821687 7.5076812,10.5729355 9.99296258,10.5729355 Z M10,0 C13.3137085,0 16,2.6862915 16,6 C16,8.20431134 14.8113051,10.1309881 13.0399615,11.173984 C16.7275333,12.2833441 19.4976819,15.3924771 19.9947005,19.2523727 C20.0418583,19.6186047 19.7690435,19.9519836 19.3853517,19.9969955 C19.0016598,20.0420074 18.6523872,19.7816071 18.6052294,19.4153751 C18.0656064,15.2246108 14.4363723,12.0699838 10.034634,12.0699838 C5.6099956,12.0699838 1.93381693,15.231487 1.39476476,19.4154211 C1.34758036,19.7816499 0.998288773,20.0420271 0.614600177,19.9969899 C0.230911582,19.9519526 -0.0418789616,19.6185555 0.00530544566,19.2523267 C0.500630192,15.4077896 3.28612316,12.3043229 6.97954305,11.1838052 C5.19718955,10.1447285 4,8.21217353 4,6 C4,2.6862915 6.6862915,0 10,0 Z"
                                fill="#555"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:mt-0 mt-12">
                  <h1 className="uppercase text-4xl font-merriweather text-white">
                    <span className="uppercase border-b-2 text-red-600 border-red-600 pb-2">
                      Why
                    </span>
                    Company Name
                  </h1>
                  <br />
                  <h2 className="text-2xl font-merriweather uppercase">
                    Secured Over 1 Crore+ Smiles!
                  </h2>
                  <br />
                  <h3 className="font-merriweather text-white">
                    Trust redefines relations at HDFC ERGO. We consistently
                    strive to
                    <br />
                    make insurance easier, more affordable and more dependable.
                    Here
                    <br />
                    promises are kept, claims are fulfilled and lives are
                    nurtured
                    <br />
                    with utmost commitment
                  </h3>
                  <div className="sm:flex block gap-5 justify-start pt-8">
                    <Link to={""}>
                      <button className="border-2 py-2 px-4 text-2xl text-white font-robotoflex mt-2 rounded-lg">
                        Contact Us
                      </button>
                    </Link>
                    <Link to={""}>
                      <button className="border-2 py-2 px-4 text-2xl text-white font-robotoflex mt-2 bg-[#7888A1] rounded-lg">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="py-12">
          <div className="sm:flex flex-wrap justify-between items-center bg-sky-600">
            <div className=" flex justify-center sm:h-96 items-center sm:w-[50%] sm:py-0 py-5">
              <div className="flex justify-center px-10">
                <div>
                  <h1 className="font-cormorantgaramond sm:text-6xl text-xl pb-5 text-white uppercase">
                    Where are We
                  </h1>
                  <p className="font-cormorantgaramond  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                    orem id integer jjdnfelfn.
                  </p>
                  <p className="font-cormorantgaramond  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                    orem id integer jjdnfelfn.
                  </p>
                  <p className="font-cormorantgaramond  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                    orem id integer jjdnfelfn.
                  </p>
                  <p className="font-cormorantgaramond  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
                    orem id integer jjdnfelfn.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  justify-end  ">
                <img
                  src={require("../images/Google-Maps-Frontpage 1.png")}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="flex justify-center p-5">
            <img src={require("../images/Frame 95.png")} alt="" srcset="" />
          </div>
          <div className="flex justify-center gap-3">
            <div className="w-5 h-5 rounded-full border-4"></div>
            <div className="w-5 h-5 rounded-full border-4"></div>
            <div className="w-5 h-5 rounded-full border-4"></div>
          </div>
        </section>
        <section className=" py-20">
          <div
            className="sm:flex block sm:justify-between justify-center items-center sm:py-0 py-5 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="bg-sky-600 sm:w-[50%] flex justify-center py-20">
              <div className="">
                <div>
                  <h1 className="font-merriweather text-4xl text-white">
                    Let's Get Started
                  </h1>
                </div>
                <div className="flex justify-between pr-[95px] pt-10 items-center">
                  <div className="w-10 h-10 border-2"></div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-merriweather text-sm">
                      STEP 1
                    </h1>
                    <h2 className="text-white font-merriweather text-sm">
                      Fill out the form.
                    </h2>
                  </div>
                </div>
                <div className="bg-white h-24 w-[2px] ml-4 mt-2"></div>

                <div className="flex justify-between pr-5 pt-2 items-center">
                  <div className="w-10 h-10 border-2"></div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-merriweather text-sm">
                      STEP 2
                    </h1>
                    <h2 className="text-white font-merriweather text-sm">
                      Review your options with us.
                    </h2>
                  </div>
                </div>
                <div className="bg-white h-24 w-[2px] ml-4 mt-2"></div>
                <div className="flex justify-between pr-10 pt-2 items-center">
                  <div className="w-10 h-10 border-2"></div>
                  <div className="flex flex-col">
                    <h1 className="text-white font-merriweather text-sm">
                      STEP 3
                    </h1>
                    <h2 className="text-white font-merriweather text-sm">
                      Get the coverage you need.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-[50%] flex justify-center mt-6 sm:mt-0">
              <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-sky-600">
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
                      className="block text-white font-merriweather cursor-text text-sm leading-[140%] font-merriweather mb-2"
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
                      for="message"
                      className="block text-white font-merriweather cursor-text text-sm leading-[140%] font-merriweather mb-2"
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
                    className="bg-white text-black font-merriweather w-max m-auto px-6 py-2 rounded text-white text-lg font-merriweather"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
