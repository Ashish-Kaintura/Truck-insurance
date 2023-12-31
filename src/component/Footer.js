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
              <h4>company</h4>
              <ul>
                <li>
                  <Link className="a" to={""}>
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    our services
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    affiliate program
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link className="a" to={""}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    shipping
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    returns
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    order status
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    payment options
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link className="a" to={""}>
                    watch
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    bag
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    shoes
                  </Link>
                </li>
                <li>
                  <Link className="a" to={""}>
                    dress
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className=" flex  justify-center gap-3">
                <div className="social-links">
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
    </div>
  );
}
