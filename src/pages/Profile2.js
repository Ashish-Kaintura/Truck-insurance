import { useState, useEffect } from "react";
import React from "react";
import Nav2 from "../component/Nav2";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Trackinggmail from "../component/Trackingmail";
import UploadCertificate from "../component/UploadCertificate";
import Mastermail from "../component/MasterMail";
import GetInsuranceCertificate from "../component/GetInsuranceCertificate";
export default function Profile2() {
  const [selectedButton, setSelectedButton] = useState("insurance");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { userId } = useParams();
  // const [user, setUserDetails] = useState("");

  // useEffect(() => {
  //   // Fetch user details based on the userId
  //   fetch(`http://localhost:5000/user/${userId}`)
  //     .then((response) => response.json())
  //     .then((result) => setUserDetails(result));
  // }, [userId]);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <Nav2 />
      <main>
        <section className="flex justify-center  sm:p-12">
          <div className="w-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="p-5 w-full bg-gray-100 shadow-xl sm:flex flex-wrap justify-between items-center">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src={require("../images/man-avatar-profile-picture.avif")}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Name :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {user.username}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Email ID:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {user.email}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Phone No:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {user.phone_number}
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Address :
                  </h1>
                  {user ? (
                    <>
                      <h1 className=" fon-sans font-semibold text-lg">
                        {user.address}
                      </h1>
                      {/* ... other properties */}
                    </>
                  ) : (
                    <>
                      <h1 className=" fon-sans font-semibold text-lg">
                        {user.address}
                      </h1>

                      {/* ... other properties */}
                    </>
                  )}
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    TAX ID NO:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {" "}
                    {user.tax_id}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Company Name :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {" "}
                    {user.company_name}
                  </h1>
                </div>
              </div>
            </div>
            <div className=" bg-gray-200 w-full py-4 px-2 mt-8  shadow-2xl shadow-inner-2xl">
              <div className="flex flex-col items-center">
                <div className="w-full flex flex-wrap gap-5">
                  <button
                    className={`shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4  border-gray-600  rounded-lg uppercase ${
                      selectedButton === "insurance"
                        ? "bg-blue-600 text-white "
                        : ""
                    }`}
                    onClick={() => handleButtonClick("insurance")}
                  >
                    Insurance Certificate
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "Mail" ? "bg-blue-600 text-white" : ""
                    }`}
                    onClick={() => handleButtonClick("Mail")}
                  >
                    Mail
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "Upload"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("Upload")}
                  >
                    Upload
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "Download"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("Download")}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full p-5 bg-slate-200  shadow-2xl">
              {selectedButton === "insurance" && (
                <div className=" flex justify-center">
                  <div>
                    <div>
                      <h1 className="uppercase text-xl font-semibold text-center">
                        Insurance Identification card
                      </h1>
                    </div>
                    <div>
                      <div className="flex flex-wrap justify-center sm:gap-8 mt-4">
                        <div className="flex gap-2 ">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Company Number
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Enter Company Name "
                              value={user.company_number}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                              type="text"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              State
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Enter State"
                              value={user.state}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 ">
                          <div className="flex gap-2">
                            <div>
                              <label
                                htmlFor="insurance_type"
                                className="font-semibold text-gray-800"
                              >
                                Type of insurance
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                value={user.insurance_type}
                                onChange={(event) => {
                                  alert("Input value changed!");
                                }}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                                Policy Number
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="Policy Number "
                                value={user.policy_number}
                                onChange={(event) => {
                                  alert("Input value changed!");
                                }}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center sm:gap-8 ">
                        <div className="flex gap-2">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Effective Date
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Effective Date"
                              type="text"
                              value={user.effective_date}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Expiration Date
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Expiration Date"
                              type="text"
                              value={user.expiration_date}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Year
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Year"
                              type="text"
                              value={user.year}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Make/Model
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Make/Model"
                              type="text"
                              value={user.make_model}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center sm:gap-8 sm:mt-4 ">
                        <div className="flex gap-2">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Vehicle Identification Number
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Vehicle Identification Number"
                              type="text"
                              value={user.vehicle_identification_number}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Aggency/Company Issuing Card
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200 w-full"
                              onChange={(event) => {
                                alert("You cant change this Field");
                              }}
                              placeholder="Aggency/Company Issuing Card"
                              type="text"
                              value={user.aggency_company_isuing_card}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="block justify-center pt-8 ">
                      <div className="flex gap-8 mt-2">
                        <div>
                          <label
                            htmlFor=""
                            className="font-semibold text-gray-800"
                          >
                            Insured
                          </label>
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 mt-2 sm:w-96"
                            placeholder="Company Name"
                            type="text"
                            onChange={(event) => {
                              alert("You cant change this Field");
                            }}
                            id="company_name"
                            value={user.company_name}
                          />
                          <br />
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 mt-2 sm:w-96"
                            placeholder="Address"
                            type="text"
                            onChange={(event) => {
                              alert("You cant change this Field");
                            }}
                            id="address"
                            value={user.address}
                          />
                          <br />
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 mt-2 sm:w-96"
                            placeholder="Name"
                            type="text"
                            onChange={(event) => {
                              alert("You cant change this Field");
                            }}
                            id="username"
                            value={user.username}
                          />
                          <br />
                        </div>
                        <div className="block gap-8 mt-2">
                          <label
                            htmlFor=""
                            className="font-semibold text-gray-800"
                          >
                            Signature
                          </label>
                          <div>
                            <img
                              className="w-24 bg-slate-600"
                              src={`http://localhost:5000/uploads/${user.profileImg}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4 pt-6">
                        <button className="bg-sky-500 text-white px-4 py-2  rounded-lg">
                          <Link to={`/update/${user.id}`}> Update</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {selectedButton === "Mail" && (
                <div>
                  {/* Render mail details here */}
                  <div>
                    <Mastermail />
                  </div>
                </div>
              )}
              {selectedButton === "Upload" && <UploadCertificate />}
              {selectedButton === "Download" && (
                <div>
                  <GetInsuranceCertificate />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
