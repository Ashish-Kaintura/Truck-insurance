import React from "react";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import "../Css/Services.css";
import image from "../gif/ezgif.com-crop10.gif";
import image1 from "../gif/ezgif.com-cro4.gif";
// import backgroundImage from "../images/dimitar-donovski-yrjB4dYWUZU-unsplash.jpg";
import backgroundImage1 from "../images/Homepage-Empty-Road-with-Two-Lanes-Surrounded-by-Green-Trees-with-Snow-Capped-Mountains-in-the-Background-Against-a-Blue-Sky.jpg";
import CommercialVehTruck from "../images/Commercial-Veh-Truck.svg";
import reportCardImage from "../images/achievement.png";
import { Swiper, SwiperSlide } from "swiper/react";
import video from "../video/Aboutuspagevideo.mp4";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet";
export default function Aboutus() {
  return (
    <div>
      <Nav />
      <Helmet>
        <meta charSet="utf-8" />
        <title>About J & S insurance agency inc dba jay s insurance agency | Truck Insurance Experts in Fresno</title>
        <meta
          name="description"
          content="Learn more aboutJ & S insurance agency inc dba jay s insurance agency — a licensed insurance agency dedicated to protecting truck owners and commercial fleets across California with personalized coverage and expert support." />
        <h2>About J & S insurance agency inc dba jay s insurance agency</h2>
      </Helmet>
      <main>
        <section className="h-[80vh] mt-[76px] relative overflow-hidden">
          {/* /* Video background (falls back to poster image) */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            poster={image}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          Your browser does not support the video tag.


          <div
            className="absolute inset-0 pt-28 z-10"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: "rgba(25, 25, 25, 0.172)",
            }}
          >
            <div className="block flex-wrap justify-between px-8 items-center pt-8 ">
              <div className="flex flex-col mySlides">
                <h1 className="sm:text-6xl text-4xl font-merriweather pt-3 text-white">
                  About J & S insurance agency inc dba jay s insurance agency
                </h1>
                <h2 className="text-4xl font-merriweather pt-6 text-white">
                  insurance agency has provided
                </h2>
                <h2 className="text-4xl font-merriweather pt-3 text-white">
                  since 2018.
                </h2>
                <div className="flex  justify-start gap-5 pt-8">
                  <Link to={"/contact"}>
                    <button className="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 rounded-lg">
                      Contact Us
                    </button>
                  </Link>
                  <Link to={"/services"}>
                    <button className="border-2 py-2 px-4 sm:text-2xl text-white font-robotoflex mt-2 bg-[#816C54] rounded-lg">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="p-5 py-8">
            <div className="py-5">
              <h2 className="text-black text-3xl  uppercase text-center font-merriweather">
                About the Owner

              </h2>
            </div>
            <div className="p-2 sm:px-5">
              <p className="text-center font-merriweather">
                Sandy Gill founded J & S Insurance Agency Inc dba Jay s Insurance Agency in 2018, driven by a passion for serving the community. After gaining experience working in the insurance industry, she obtained her agent license and opened her own agency.
              </p>
              <br />
              <p className="text-center font-merriweather">
                Since then, Sandy has focused on educating clients about commercial truck insurance, fleet coverage, and owner-operator policies. Her dedication to helping people and businesses with their insurance needs is the cornerstone of J & S Insurance Agency Inc dba Jay s Insurance Agency’s mission in Fresno and across California.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div
            className="p-5 py-8 relative bg-cover bg-center object-cover "
            style={{ backgroundImage: `url(${image1}) ` }}
          >
            <div className="py-5">
              <h2 className="text-white text-4xl font-merriweather  uppercase text-center">
                About the Company

              </h2>
            </div>
            <div className="p-2 sm:px-5 text-white">
              <p className="text-center font-merriweather">
                Founded in 2018 by Sandy Gill on the principle of “serving the community to the fullest,” J & S Insurance Agency Inc dba Jay s Insurance Agency is dedicated to providing reliable, personalized insurance guidance. We help individuals and businesses secure the right coverage across California and 11 other states, including Arizona, New Jersey, New York, Ohio, Oregon, Texas, Utah, Virginia, and Washington.
              </p>
              <br />
              <p className="text-center font-merriweather">
                Our team of insurance professionals has extensive experience crafting custom commercial truck insurance, fleet coverage, and owner-operator policies tailored to each client’s needs. Taking a boutique approach, we work one-on-one with clients to design the ideal policy while building lasting, supportive relationships.
              </p>
              <br />
              <p className="text-center font-merriweather">
                At J & S insurance agency inc dba jay s insurance agency, our commitment to our clients and the communities we serve comes first. When you choose us, you’ll experience attentive service, expert guidance, and the personalized care only an independent Fresno insurance agency can provide. </p>
            </div>
          </div>
        </section>
        <section className="pb-20  bg-white pt-5">
          {/* <div
            className="block justify-center text-center py-8 text-white bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <h2 className="sm:text-5xl text-2xl uppercase font-cormorantgaramond">
              Wellcome to J & S Insurance
            </h2>
            <h2 className="pt-8 font-cormorantgaramond">
              Meet the Dedicated Team BehindJ & S Insurance Agency Inc dba Jay s Insurance Agency
 Agency At DBA
              Insurance Agency, we’re not just about selling insurance policies
              - we’re about building lasting relationships and protecting what
              matters most.
            </h2>
            <h2 className="pt-2 font-cormorantgaramond">
              Founded in 2018 by Sandy Gill,J & S Insurance Agency Inc dba Jay s Insurance Agency
 is rooted in a
              passion for helping individuals and businesses secure customized
              coverage. After nearly a decade working for top insurance
              providers, Sandy pursued an entrepreneurial dream.
            </h2>
            <h2 className="pt-2 font-cormorantgaramond">
              She obtained her agent license and dove headfirst into the
              independent agency world. Now, with over 5 years of combined
              industry expertise, the DBA team offers an array of trucking and
              commercial insurance products across 10 states. But more
              importantly, we provide genuine guidance to safeguard your assets
              and prepare for the unexpected.
            </h2>
          </div> */}
          <div data-aos="fade-up" data-aos-duration="3000">
            <h2 className="text-center pt-20 pb-5 font-robotoflex text-[#0066A4]">
              Our services
            </h2>
            <h2 className="font-robotoflex text-3xl text-black text-center font-semibold">
              What we Offer
            </h2>
            <p className="text-center pt-6 font-robotoflex text-sm text=[#d7d7d7]">
              At J & S Insurance Agency Inc dba Jay s Insurance Agency, we are committed to providing comprehensive insurance solutions to clients in California and 11 other states, including Arizona, Indiana, New Jersey, New York, Ohio, Oregon, Texas, Utah, and Virginia. <br />
              Our wide range of policies protects individuals, trucks, and businesses such as hotels, motels, gas stations, and more. We offer specialized coverage, including

              <br />
            </p>
          </div>
          <div className="pt-5">
            <div className="flex flex-wrap justify-evenly px-2">
              <div
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative mt-7"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Trucking Liability
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Protect your business with policies covering bodily injury,
                    property damage, and more. Our plans shield you from legal
                    and financial risks.
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center"></div>
                </div>
              </div>
              <div
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Motor Truck Cargo
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Safeguard your truck's contents with robust coverage for
                    theft, collisions, weather events, and additional incidents.
                    We offer adaptable limits.
                  </h2>
                  <div className=" absolute bottom-[-0%] right-[1%] w-48  flex justify-center"></div>
                </div>
              </div>
              <div
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Physical Damage
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Stranded drivers stay safe with our roadside assistance. We
                    promptly dispatch services for minor mechanical issues,
                    towing, tire changes, jump starts, and fuel delivery.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    General Liability
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Our general liability solutions shield your business from
                    legal expenses and claims. We cover costs associated with
                    bodily injury, property damage, personal injury and more.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Trailer Interchange
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Prevent financial loss when swapping trailers. Our coverage
                    handles physical damage along with liability arising from
                    trailer interchange agreements.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Non-Owned Trailer
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Supplement your policies with protection for non-owned
                    trailers. We cover rented and borrowed equipment so you can
                    transport cargo stress-free.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Auto Liability
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Safeguard your business autos with liability solutions
                    covering bodily injury, property damage, uninsured motorists
                    and personal injury protection.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Truck Physical Damage
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Comprehensive coverage for truck repairs and replacement due
                    to collisions, vandalism, natural disasters and more. We
                    offer market value terms.
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
                className="w-96 h-[200px] bg-[#f4f6fa] rounded-2xl relative sm:mt-7 mt-4"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <div className=" pt-5 ps-4 ">
                  <h2 className=" font-cormorantgaramond text-3xl uppercase font-semibold ">
                    Gas Station
                  </h2>
                  <h2 className=" font-cormorantgaramond pt-2 ">
                    Our gas station insurance suite preserves your business.
                    Fuel spill liability, testing costs and personal injury on
                    premises are some areas covered.
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
        {/* <section>
          <div className="relative bg-[#E6EDF7] py-10 sm:px-0 px-4">
            <div className="flex flex-wrap justify-evenly items-center">
              <div
                className="flex flex-col border-b-2 pb-4 border-[#0066A4]"
                data-aos="fade-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  <h2 className="text-[#0066A4] font-robotoflex">About Us</h2>
                  <h2 className="text-3xl pt-2 font-robotoflex font-semibold">
                    Who We Are ?
                  </h2>
                  <p className="pt-4 font-sans">
                    AtJ & S Insurance Agency Inc dba Jay s Insurance Agency
 Agency, we aren’t simply here to sell
                    policies and collect
                    <br />
                    payments. We’re family-owned protectors using industry
                    know-how to <br />
                    <br />
                    safeguard what matters most - your health, assets, and
                    future livelihood.
                    <br />
                    Our origin traces back to founder Sandy Gill watching her
                    parents' small
                    <br />
                    business crumble following an uninsured fire. After nearly
                    losing everything,
                    <br />
                    she vowed to educate ventures on proper coverage.
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
                  src={require("../images/whoweare2.jpg")}
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
                  src={require("../images/Why choose us.png")}
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
                  <h2 className="text-3xl pt-2 font-robotoflex font-semibold text-[#0066A4]">
                    Why Choose DBA
                  </h2>
                  <p className="pt-4 font-sans">
                    <span className="text-black font-semibold">Fact 1</span>
                    <br />
                    Yes, our smaller size allows providing white-glove service
                    lacking from
                    <br />
                    mega-agencies. But our independent status also permits
                    crafting superior coverage. <br />
                    <br />
                    <span className="text-black font-semibold">Fact 2</span>
                    <br />
                    After getting to know hundreds of trucking and commercial
                    clients intimately,
                    <br />
                    we know no single provider meets every protection need
                    perfectly. <br />
                    <br />
                    <span className="text-black font-semibold">Fact 3</span>
                    <br />
                    AtJ & S Insurance Agency Inc dba Jay s Insurance Agency
 Agency, we’re obsessed with preparing
                    trucking and commercial clients for the
                    <br />
                    unexpected - combining compassion and choice for unmatched
                    protection & peace of mind.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section>
          <div className="sm:flex block sm:justify-between justify-center relative py-10">
            <div className="sm:w-[50%] h-96 bg-[#E6EDF7]">
              <div className="ps-8 pt-8">
                <h2 className="text-2xl font-semibold font-robotoflex">
                  Our Achivements
                </h2>
                <p className="pt-4 font-robotoflex pr-20">
                  At J & S Insurance Agency Inc dba Jay s Insurance Agency, we are dedicated to preparing trucking and commercial clients for the unexpected. By combining expertise, personalized service, and flexible coverage options, we provide unmatched protection and peace of mind for your business and fleet.
                </p>
                <br />
                <p className="pt-4 font-robotoflex pr-20">
                  Discover the DBA Jay S difference and secure your coverage today by calling +1 206-617-9034. Our advisors offer complimentary consultations to identify the best commercial truck insurance, cargo coverage, and fleet policies tailored to your unique business needs.

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
          className="sm:h-[65vh] h-[850px] bg-cover bg-center bg-no-repeat relative items-center"
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
                <h2 className="text-3xl font-merriweather text-white">
                  Our Clients Rave About Us
                </h2>
                <br />
                <h2 className="text-xl font-merriweather text-white">
                  Check out our reviews and see why you should switch to DBA
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
                <Swiper
                  spaceBetween={30}
                  modules={[Pagination, Autoplay]} // Add Autoplay to the modules array
                  className="mySwiper"
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2000, // Delay in ms before transitioning to the next slide
                    disableOnInteraction: false, // Continue auto-play after user interaction
                  }}
                  loop={true} // Optional: Adds loop functionality
                >
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center pb-2">
                        <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center overflow-hidden">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAg8h1v-nY1ZeOGEJ3AjWPoQsSK0MDwxPLQ&usqp=CAU"
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="text-center text-white font-merriweather text-[18px]">
                        "As a small business owner, I rely on my truck to make
                        deliveries every day.J & S Insurance Agency Inc dba Jay s Insurance Agency

                        <br />
                        found a policy that keeps me protected at a price I can
                        afford. I'd
                        <br />
                        recommend them to any trucker looking for coverage.
                      </h2>
                      <h2 className="text-white font-merriweather pt-3">
                        {" "}
                        - John S., Chicago, IL
                      </h2>
                      <br />

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center pb-2">
                        <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center overflow-hidden">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAg8h1v-nY1ZeOGEJ3AjWPoQsSK0MDwxPLQ&usqp=CAU"
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="text-center text-white font-merriweather text-[18px]">
                        "When I was in an accident 100 miles from home, DBA{" "}
                        <br />
                        immediately had a tow truck bring my rig to a repair{" "}
                        <br />
                        shop they work with. They handled the claims process{" "}
                        <br />
                        quickly and I was back on the road in no time." <br />
                      </h2>
                      <h2 className="text-white font-merriweather pt-3">
                        {" "}
                        Michael R., Dallas, TX
                      </h2>
                      <br />
                      {/* <div className="flex justify-center gap-5">
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                  </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center pb-2">
                        <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center overflow-hidden">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAg8h1v-nY1ZeOGEJ3AjWPoQsSK0MDwxPLQ&usqp=CAU"
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="text-center text-white font-merriweather text-[18px]">
                        "DBA has insured my 3 truck fleet for over 5 years. They{" "}
                        <br />
                        make sure I have the coverage I need at competitive{" "}
                        <br />
                        rates. Their customer service goes above and beyond when{" "}
                        <br />
                        I have questions or claims." <br />
                      </h2>
                      <h2 className="text-white font-merriweather pt-3">
                        {" "}
                        Susan P., Denver, CO
                      </h2>
                      <br />
                      {/* <div className="flex justify-center gap-5">
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                    <div className="border-2 bg-[transparent] hover:bg-white cursor-pointer w-4 h-4 rounded-full"></div>
                  </div> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
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
                <h2>
                  Get in Touch with the J & S Insurance Agency Inc dba Jay s Insurance Agency Team
                  <br />
                  We don’t just see you as a client — we see you as part of our family. Our team looks out for one another, ensuring you get the best commercial truck insurance, fleet coverage, and owner-operator policies for peace of mind across Fresno and California
                  <br />
                </h2>
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
      </main>
    </div>
  );
}
