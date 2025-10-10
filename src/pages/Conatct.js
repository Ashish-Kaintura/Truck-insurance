import React, { useEffect, useRef } from "react";
import Nav from "../component/Nav";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
export default function Conatct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uvinq6d", "template_winbphn", form.current, {
        publicKey: "GyTexIxYXbqYdHlS5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact J & S insurance agency inc dba jay s insurance agency | Get a Commercial Truck Insurance Quote</title>
        <meta
          name="description"
          content="Get in touch withJ & S insurance agency inc dba jay s insurance agency in Fresno, CA for personalized truck and commercial auto insurance quotes. Call us or fill out our online form — we’re here to help you stay protected."
        />
        <h2>Contact J & S insurance agency inc dba jay s insurance agency</h2>
      </Helmet>
      <Nav />
      <section className="sm:p-8 p-2 sm:pt-0 pt-28 mt-32">
        <div
          className="relative sm:h-[100vh] h-[130vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `url(${require("../images/contact-us-page-banner.jpg")})`,
          }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Main container */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-evenly items-start gap-8 w-full max-w-6xl mx-auto sm:px-4">

            {/* Left: Contact Form */}
            <div
              className="w-full sm:w-[50%] p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl text-white backdrop-blur-md bg-white/10"
            >
              <h1 className="text-4xl font-semibold mb-2 text-center">
                Let’s Get <span className="text-blue-300">Connected</span>
              </h1>
              <p className="text-center text-sm text-gray-200 mb-6">
                Contact <span className="font-semibold">J & S Insurance Agency Inc dba Jay’s Insurance Agency</span>
              </p>

              <form
                className="flex flex-col gap-4"
                ref={form}
                onSubmit={sendEmail}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-gray-300 bg-white/90 text-black p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-300 bg-white/90 text-black p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-semibold mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Enter your number"
                    className="w-full rounded-md border border-gray-300 bg-white/90 text-black p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="w-full rounded-md border border-gray-300 bg-white/90 text-black p-3 h-24 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white font-semibold rounded-md py-2 px-8 mx-auto block"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right: Contact Details */}
            <div
              className="w-full sm:w-[40%] p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md bg-white/10 text-white space-y-6"
            >
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaLocationDot className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-200">Fresno, California</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-200">+1 206 617 9034</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <IoTime className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">We’re Open</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Monday - Thursday: 9:00 AM - 5:30 PM <br />
                    Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <IoMail className="text-2xl text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <a
                    href="mailto:sandy@jsinsur.com"
                    className="text-gray-200 hover:text-blue-400 transition"
                  >
                    sandy@jsinsur.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
