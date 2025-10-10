/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import image from "../gif/footer.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative">
      {/* WhatsApp Floating Icon */}
      <Link
        to="https://wa.me/+12066179034"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white text-3xl p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce z-50"
      >
        <FaWhatsapp />
      </Link>

      {/* Footer Section */}
      <footer
        className="bg-center bg-cover bg-no-repeat text-white"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="backdrop-brightness-50 py-12">
          <div className="container mx-auto px-6 sm:px-16">

            {/* Logo & Agency Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 border-b border-gray-500 pb-10">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  src="./j&s logo black.png"
                  alt="J&S Insurance"
                  className="w-44 mb-3"
                />
                <h1 className="text-lg font-semibold">
                  J & S Insurance Agency Inc dba Jay’s Insurance Agency
                </h1>
                <p className="text-sm font-medium text-gray-200">Lic #6011255</p>
              </div>

              {/* Founder Summary */}
              <div className="max-w-lg text-center sm:text-left">
                <h2 className="text-xl font-bold mb-2">About the Founder</h2>
                <p className="text-gray-200 leading-relaxed text-sm">
                  <span className="font-semibold text-white">Sandy Gill</span> founded{" "}
                  <span className="font-semibold">J & S Insurance Agency Inc</span> dba Jay’s Insurance Agency in 2018, driven by a deep
                  passion for serving the community. After gaining valuable
                  experience in the insurance industry, she obtained her agent
                  license and opened her own agency to provide trusted, personalized coverage.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-400 inline-block pb-1">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/Aboutus" className="hover:text-white">About Us</Link></li>
                  <li><Link to="/services" className="hover:text-white">Services</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-400 inline-block pb-1">
                  Legal
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-400 inline-block pb-1">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400 transition"><FaFacebookF size={22} /></a>
                  <a href="#" className="hover:text-sky-400 transition"><FaTwitter size={22} /></a>
                  <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={22} /></a>
                  <a href="#" className="hover:text-blue-300 transition"><FaLinkedinIn size={22} /></a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-300 mt-10 pt-6 border-t border-gray-600">
              © {new Date().getFullYear()} J & S Insurance Agency Inc dba Jay’s Insurance Agency. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
