/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import image from "../gif/ezgif.com-cro4.gif";
import "../Css/footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <footer
        className="footer bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container">
          <div className="row flex justify-evenly">
            <div className="footer-col">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link className="a" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="a" to={"/Aboutus"}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="a" to={"/services"}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="a" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link className="a" to={"/privacy"}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="a" to={"/terms"}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className=" flex flex-col  justify-center gap-3">
                <div className="social-links flex flex-col">
                  <a href="#" className="flex justify-center overflow-hidden  ">
                    <div className="flex justify-center pt-2">
                      <FaFacebookF className="text-2xl" />
                    </div>
                  </a>
                  <a href="#" className="flex justify-center overflow-hidden  ">
                    <div className="flex justify-center pt-2">
                      <FaTwitter className="text-2xl" />
                    </div>
                  </a>
                  <a href="#" className="flex justify-center overflow-hidden  ">
                    <div className="flex justify-center pt-2">
                      <FaInstagram className="text-2xl" />
                    </div>
                  </a>

                  <a href="#" className="flex justify-center overflow-hidden  ">
                    <div className="flex justify-center pt-2">
                      <FaLinkedinIn className="text-2xl" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-500 text-white font-robotoflex">
        <div>
          <h1 className="py-2 text-center">
            Developed And Design By{" "}
            <a
              className="hover:text-semibold"
              href="https://www.risezonic.com/"
            >
              @Risezonic
            </a>
          </h1>
        </div>
      </footer>
    </div>
  );
}
