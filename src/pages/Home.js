// import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import image from "../gif/ezgif.com-crop2.gif";
import image1 from "../images/AboutUs.png";
import image2 from "../images/services/Industries.jpg";
import image3 from "../images/services/PersonalTruck.jpg";
import image4 from "../images/services/BUSINESS.jpg";
import image5 from "../images/services/Benifits.jpg";
import TruckDamageSvg from "../images/truck-insurance_damage.svg";
import TruckDamageSvg1 from "../images/truck-insurance_theft.svg";
import TruckDamageSvg2 from "../images/truck-insurance_fire.svg";
import TruckDamageSvg3 from "../images/truck-insurance_flood.svg";
import TruckDamageSvg4 from "../images/leg-cast.svg";
import TruckDamageSvg5 from "../images/truck-insurance_third party accident.svg";
import TruckDamageSvg6 from "../images/truck-insurance_towing.svg";
import CommercialVehTruck from "../images/Commercial-Veh-Truck.svg";
// import maintruck from "../images/Untitled-1.png";
import backgroundImage from "../images/truck8.jpg";
import backgroundImage1 from "../images/Homepage-Empty-Road-with-Two-Lanes-Surrounded-by-Green-Trees-with-Snow-Capped-Mountains-in-the-Background-Against-a-Blue-Sky.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
// import { useNavigate } from "react-router-dom";
import HomeNav from "../component/HomeNav";
// Modal Component
const Modal = ({ closeModal, title, content }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 ">{content}</p>
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
  EaselPlugin
);

const Home = () => {
  // const auth = localStorage.getItem("user");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner",
        start: "top 50px",
        end: "+=500",
        scrub: 4,
      },
    });
    // console.log(tl);
    tl.from("#banner .truckimage", {
      y: -90,
      scale: 0.4,
      delay: 1,
      ease: "back",
      duration: 12,
      // stagger: 0.2,
    });
  }, []);

  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <div>
      {/* <nav className="bg-[#515659]">
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
              <Link to={"/contact"}>
                <li>Contact Us</li>
              </Link>
            </div>
            <div className="sm:flex hidden justify-center gap-8 font-sans">
              <div className="flex justify-center">
                {auth ? (
                  <li>
                    <Link onClick={Logout} to={"/signup"}>
                      <button>Logout</button>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}>
                        <button>Login</button>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/signup"}>
                        <button>Signup</button>
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
          </div>
        </ul>
      </nav> */}
      <HomeNav />
      <main>
        <div
          id="banner"
          className="sm:h-[700px] h-[500px] relative items-center justify-center "
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col absolute sm:top-[20%] top-[28%] inset-0">
            <div className="flex justify-center text-center items-center gap-5">
              <span className="bg-yellow-600 w-28 h-[2px] span1"></span>
              <h1 className="uppercase text-2xl font-robotoflex text-yellow-600 italic exp">
                Experience
              </h1>
              <span className="bg-yellow-600 w-28 h-[2px] span2"></span>
            </div>
            <br />
            <div>
              <h3 className="text-center sm:text-5xl text-4xl text-white font-robotoflex pt-5">
                We Offer Customized Commercial
              </h3>
              <h4 className="text-center text-5xl text-white font-robotoflex pt-5">
                Truck Insurance Coverage
              </h4>
            </div>
          </div>

          {/* <img
            className="z-10 absolute sm:top-[60%] top-[50%] sm:left-[38%] inset-0 left-[10%] truckimage"
            src="maintruck"
            alt=""
          /> */}
        </div>

        <section className="bg-[#FAFAFA] pb-32 bg-[100vh] relative">
          <div className="flex justify-center pt-12">
            <h1 className=" font-cormorantgaramond text-4xl py-5">
              Explore our Insurance Plans
            </h1>
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
                <img src={require("../images/services/libility.jpg")} alt="" />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Trucking Liability Insurance
                </h2>
                <p className="text-gray-700 line-clamp-3">
                  Out on the open road each day, truckers face endless variables
                  beyond their control. One distracted driver could endanger
                  your vehicle, cargo, or worse - your own safety. Don’t take
                  these risks lightly.
                </p>
              </div>
              <button
                onClick={() =>
                  openModal(
                    "Trucking Liability Insurance",
                    "Out on the open road each day, truckers face endless variables beyond their control. One distracted driver could endanger your vehicle, cargo, or worse - your own safety. Don’t take these risks lightly. Our commercial trucking liability insurance covers damages to other drivers/vehicles involved and any public property destruction resulting from an accident. Receive complete peace of mind knowing you’re protected when the unexpected occurs."
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
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
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 overflow-hidden o "
                alt="image here"
              >
                <img
                  src={require("../images/services/Additional Offerings.jpg")}
                  alt=""
                />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Motor Truck Cargo Coverage
                </h2>
                <p className="text-gray-700 line-clamp-3">
                  For instance, expensive equipment or perishable goods
                  transport? We have motor truck cargo insurance for you. Cover
                  for liability of any cargo lost, damaged or destroyed en route
                  — through road accidents involving your vehicles , spills,
                  adverse weather and theft.
                </p>
              </div>
              <button
                onClick={() =>
                  openModal(
                    "Motor Truck Cargo Coverage",
                    " For instance, expensive equipment or perishable goodstransport? We have motor truck cargo insurance for you. Coverfor liability of any cargo lost, damaged or destroyed en route — through road accidents involving your vehicles , spills, adverse weather and theft."
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
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
                <img
                  src={require("../images/services/Additional Offeringss.jpg")}
                  alt=""
                />
              </div>

              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Roadside Assistance
                </h2>
                <p className="text-gray-700 line-clamp-3">
                  Unpredictably truckers on long trips can have mechanical
                  problems or flat tires. A single breakdown, however, can ruin
                  delivery timetables and your bottom line severely.
                </p>
              </div>
              <button
                onClick={() =>
                  openModal(
                    "Roadside Assistance",
                    "Unpredictably truckers on long trips can have mechanical problems or flat tires. A single breakdown, however, can ruin delivery timetables and your bottom line severely. Our customizable roadside assistance plans account for this by providing:Towing services On-site repairs Tire changes Fuel/fluid delivery Locksmith services And more!"
                  )
                }
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Explore
              </button>
            </div>
          </div>
          {modalContent && (
            <Modal
              closeModal={closeModal}
              title={modalContent.title}
              content={modalContent.content}
            />
          )}
        </section>
        <section className="py-12">
          <section
            className="sm:h-[70vh] h-[100vh] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div
              className="absolute inset-0 py-28"
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(86, 145, 235, 0.336)",
              }}
            >
              <div className="sm:flex block sm:justify-evenly justify-center sm:px-4 items-center">
                <div className="sm:w-[50%]">
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                      <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>
                      <button className="profile_item -bottom-6 right-[39%] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                        <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 overflow-hidden">
                          <img
                            className="object-cover"
                            src={require("../images/4659373.png")}
                            alt=""
                          />
                        </span>
                      </button>

                      <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                        <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                          <span className="w-28 h-28 flex justify-center">
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

                <div className="flex flex-col sm:mt-0 mt-12 sm:w-[50%] px-2">
                  <h1 className="uppercase text-4xl font-merriweather text-white">
                    <span className="uppercase border-b-2 text-red-600 border-red-600 pb-2">
                      Why
                    </span>
                    J&S Insurance
                  </h1>
                  <br />
                  <h2 className="text-2xl font-merriweather uppercase">
                    Ready to Shore Up Coverage & Minimize Risk
                  </h2>
                  <br />
                  <h3 className="font-merriweather text-white">
                    At J&S Insurance Agency, our risk management insight and
                    dedication to finding clients the RIGHT coverage set us
                    <br />
                    apart. With over 15 top providers in our network, flexible
                    pricing options, and unmatched support, let us keep your
                    <br />
                    assets protected.Get covered right and safeguard the future
                    of your trucking or commercial enterprise today.
                    <br />
                  </h3>
                  <div className="sm:flex block gap-5 sm:justify-start justify-center pt-8">
                    <Link to={"contact"}>
                      <button className="border-2 py-2 px-4 text-2xl text-white font-robotoflex mt-2 rounded-lg">
                        Contact Us
                      </button>
                    </Link>
                    <Link to={"/Aboutus"}>
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

        <section className="bg-cover bg-center bg-no-repeat pb-28 relative bg-[#FAFAFA] sm:px-0 px-4">
          <div className="sm:flex flex-wrap sm:justify-evenly justify-center px-2 sm:pt-28 pt-12 items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-merriweather">
                Serving California and Beyond
              </h1>
              <br />
              <h2 className="font-merriweather text-xl border-b-2 pb-8 border-red-600">
                From our office in Fresno, CA, we serve trucking, personal, and
                <br />
                business insurance clients throughout California and in over
                thirty
                <br />
                other states.
              </h2>
              <div className="flex flex-col pt-8">
                <h1 className="text-3xl font-merriweather">
                  An Independent Agency Gives You Options
                </h1>
                <br />
                <h1 className="font-merriweather text-xl pb-8">
                  We proudly represent AmTrust, Progressive, Travelers, and
                  more!
                </h1>
              </div>
              <div className="sm:flex block gap-5 justify-start">
                <Link to={"/contact"}>
                  <button className="border-2 py-2 px-4 text-2xl text-white bg-[#816C54] mt-2 rounded-lg font-sans">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center overflow-hidden rounded-lg sm:mt-0 mt-4">
              <img src={require("../gif/ezgif.com-crop3.gif")} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div
              className="pt-8 block justify-center bg-center bg-cover bg-no-repeat text-[white] pb-20 relative px-2 h-64 "
              style={{ backgroundImage: `url(${image1})` }}
            >
              <h1 className="text-3xl pt-5 text-center font-merriweather">
                Secure Your Truck, Yourself, and Your Business
              </h1>
              <h2 className="sm:text-xl pt-5 text-center font-merriweather">
                JS Truck Insurance Agency offers a variety of insurance by
                industry, personal insurance, business
              </h2>
              <h3 className="sm:text-xl pt-1 text-center font-merriweather">
                insurance, and employee benefits solutions to help you protect
                what matters most.
              </h3>
            </div>
          </div>
          <div className="">
            <div className="py-1 sm:flex block sm:justify-between justify-center sm:px-0 px2">
              <div className="overflow-hidden">
                <Link to={""}>
                  <div
                    className="sm:w-128 h-96 bg-white hover:scale-125 transition-all ease-in duration-500 blur-sm hover:blur-none"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      backgroundImage: `url(${image2})`,
                    }}
                  >
                    <div>
                      <h1 className="pt-12 text-2xl text-white ps-12 font-merriweather uppercase">
                        Industries
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link to={""}>
                  <div
                    className="sm:w-128 h-96 bg-white hover:scale-125 transition-all ease-in duration-500 blur-sm hover:blur-none"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      backgroundImage: `url(${image3})`,
                    }}
                  >
                    <div>
                      <h1 className="pt-12 text-2xl text-white ps-12 font-merriweather uppercase">
                        personal
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link to={""}>
                  <div
                    className="sm:w-128 h-96 bg-white hover:scale-125 transition-all ease-in duration-500 blur-sm hover:blur-none"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      backgroundImage: `url(${image4})`,
                    }}
                  >
                    <div>
                      <h1 className="pt-12 text-2xl text-white ps-12 font-merriweather uppercase">
                        business
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Link to={""}>
                  <div
                    className="sm:w-128 h-96 bg-white hover:scale-125 transition-all ease-in duration-500 blur-sm hover:blur-none"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      backgroundImage: `url(${image5})`,
                    }}
                  >
                    <div>
                      <h1 className="pt-12 text-2xl text-white ps-12 font-merriweather uppercase">
                        Benefits
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 relative pb-20 z-[2]">
          <div>
            <div className="flex flex-col justify-center sm:pt-20 pt-5">
              <h1 className="text-6xl font-robotoflex ps-5 text-[#1C7987] whath1">
                W<span className="text-black">hat's covered in a</span>
              </h1>
              <h1 className="text-6xl font-robotoflex ps-5 text-[#1C7987] whath2">
                <span className="text-black">Truck</span> Insurance
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-5 sm:pt-20 pt-4">
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Accidents</h1>
                  <p className="pt-2 font-robotoflex">
                    Damages caused to the truck in case off
                  </p>
                  <p className="font-robotoflex">an accident</p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg1} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Theft</h1>
                  <p className="pt-2 font-robotoflex">
                    Loss or damage to the truck due to theft
                  </p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg2} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Fire</h1>
                  <p className="pt-2 font-robotoflex">
                    Damages caused to your truck due to a fire
                  </p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg3} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Natural Disasters</h1>
                  <p className="pt-2 font-robotoflex">
                    Damages caused to your truck due to any
                  </p>
                  <p className="font-robotoflex">natural calamity</p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="40%" src={TruckDamageSvg4} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Personal Accident</h1>
                  <p className="pt-2 font-robotoflex">
                    If there is an accident of your truck, leading
                  </p>
                  <p className="font-robotoflex">
                    to an injury or death of the drivert
                  </p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg5} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">Third Party Losses</h1>
                  <p className="pt-2 font-robotoflex">
                    Any damages caused by your truck to a
                  </p>
                  <p className="font-robotoflex">
                    third-party person, vehicle or propertyf
                  </p>
                </div>
              </div>
              <div
                className="bg-white rounded-2xl flex-col justify-center overflow-hidden p-4 w-78 h-78 mt-2 whatdiv"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className="flex justify-center mt-2">
                  <img width="50%" src={TruckDamageSvg6} alt="" />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-robotoflex pt-2">
                    Towing Disabled Vehicles
                  </h1>
                  <p className="pt-2 font-robotoflex">
                    Any damages caused by your truck during
                  </p>
                  <p className="font-robotoflex">vehicle towing</p>
                </div>
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
            <div className="sm:flex flex-wrap sm:justify-evenly justify-center pt-8 items-center px-2">
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
                  <Link to={"/contact"}>
                    <button className="border-2 py-2 px-4 text-2xl text-white font-sans mt-2 rounded-lg">
                      Contact Us
                    </button>
                  </Link>
                  <Link to={"/services"}>
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
                    "As a small business owner, I rely on my truck to make
                    deliveries every day. J&S Insurance
                    <br />
                    found a policy that keeps me protected at a price I can
                    afford. I'd
                    <br />
                    recommend them to any trucker looking for coverage.
                  </h1>
                  <h1 className="text-white font-merriweather pt-3"> John S</h1>
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

        <section className=" pt-20">
          <div
            className="sm:flex block sm:justify-between justify-center items-center sm:py-0 py-5 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
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
                    className="bg-white text-black font-merriweather w-max m-auto px-6 py-2 rounded  text-lg font-merriweather"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center div1 py-12 px-2">
            <div
              className="flex flex-wrap sm:w-[850px] sm:h-48 bg-[white] items-center py-8 px-5 sm:justify-between justify-center rounded-3xl"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="flex text-[#1C7987] font-robotoflex">
                <h1>
                  Get in Touch with the J&S Insurance Team we don’t just see you
                  as a customer
                  <br />
                  we see you as a part of our family. And family looks out for
                  one another.
                  <br />
                </h1>
              </div>
              <div className=" mt-2 sm:mt-0">
                <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <Link to={"/contact"} className="z-10">
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- whats app icon  --> */}
        <Link
          className="whats-app"
          to="https://wa.me/7827110079"
          target="_blank" // Optional: If you want to open the link in a new tab
        >
          <i className="fab fa-whatsapp icon animate-bounce my-float flex justify-center">
            <FaWhatsapp />
          </i>
        </Link>
      </main>
    </div>
  );
};

export default Home;
