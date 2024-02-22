import { useState, useEffect } from "react";
import React from "react";
import Nav from "../component/Nav";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClicntMail from "../component/ClicntMail";
import GetInsuranceCertificate from "../component/GetInsuranceCertificate";
export default function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("user"));
  const [selectedButton, setSelectedButton] = useState("insurance");

  const [isFormChanged, setIsFormChanged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  const [profileImgFile, setProfileImgFile] = useState(null);
  const [userDetails, setUserDetails] = useState({
    username: "",
    company_name: "",
    address: "",
    profileImg: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${auth.id}`, {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const userData = await response.json();
        setUserDetails(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [auth.id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
    setIsFormChanged(true); // Set isFormChanged to true whenever there's a change in the form fields
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImgFile(file);
    setIsFormChanged(true); // Set isFormChanged to true whenever there's a change in the file input
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", userDetails.username);
    formData.append("company_name", userDetails.company_name);
    formData.append("address", userDetails.address);

    if (profileImgFile) {
      formData.append("profileImg", profileImgFile);
    } else {
      // If no new image is selected, include the existing image filename
      formData.append("profileImg", userDetails.profileImg);
    }
    try {
      const response = await fetch(
        `http://localhost:5000/clintUpdate/${auth.id}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      if (response.ok) {
        navigate(`/profile`);
        console.log("User updated successfully");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setIsFormChanged(false); // Reset isFormChanged to false after the update is completed
  };
  return (
    <div>
      <Nav />
      <main className="sm:pt-0 pt-28">
        <section className="flex justify-center sm:p-12">
          <div className="w-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="p-5 w-full bg-gray-100  shadow-xl sm:flex flex-wrap sm:justify-between items-center">
              <div className="flex  justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    // src={`http://localhost:5000/uploads/${auth.profileImg}`}
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
                    {auth.username}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Email ID:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.email}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Phone No:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.phone_number}
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Address :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.address}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    TAX ID NO:
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.tax_id}
                  </h1>
                </div>
                <div className="flex gap-3 pt-2 ">
                  <h1 className=" fon-sans font-semibold text-lg uppercase">
                    Company Name :
                  </h1>
                  <h1 className=" fon-sans font-semibold text-lg">
                    {auth.tax_id}
                  </h1>
                </div>
              </div>
            </div>
            <div className=" bg-gray-200 w-full py-4 px-2 mt-8  shadow-2xl shadow-inner-2xl">
              <div className="flex flex-col items-center">
                <div className="w-full flex gap-5">
                  <button
                    className={`shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-gray-600  rounded-lg uppercase ${
                      selectedButton === "insurance"
                        ? "bg-blue-600 text-white "
                        : ""
                    }`}
                    onClick={() => handleButtonClick("insurance")}
                  >
                    Insurance Certificate
                  </button>
                  <button
                    className={`shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-gray-600  rounded-lg uppercase ${
                      selectedButton === "id_card"
                        ? "bg-blue-600 text-white "
                        : ""
                    }`}
                    onClick={() => handleButtonClick("id_card")}
                  >
                    Insurance Card
                  </button>
                  <button
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "Mail" ? "bg-blue-600 text-white" : ""
                    }`}
                    onClick={() => handleButtonClick("Mail")}
                  >
                    Mail
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full p-5 bg-slate-200 py-6 shadow-2xl">
              {selectedButton === "insurance" && (
                // <div className="flex gap-4 items-center">
                //   {/* Render Insurance Certificate details here */}
                //   <div>
                //     {" "}
                //     <p>Insurance Certificate Details</p>
                //   </div>
                //   <div>
                //     <button className="font-sans px-4 py-2 rounded-xl bg-red-600 text-white">
                //       Download
                //     </button>
                //   </div>
                // </div>
                <div className=" flex justify-center border-2 border-black">
                  <div>
                    <div>
                      <h1 className="uppercase text-xl font-semibold text-center">
                        Certificate of Liability insurance
                      </h1>
                    </div>
                    <div className="border-2 border-l-0 border-r-0 p-2 border-black">
                      <h1 className="text-center text-sm font-semibold">
                        THIS CERTIFICATE IS ISSUED AS A MATTER OF INFORMATION
                        ONLY AND CONFERS NO RIGHTS UPON THE CERTIFICATE HOLDER.
                        THISCERTIFICATE DOES NOT AFFIRMATIVELY OR NEGATIVELY
                        AMEND, EXTEND OR ALTER THE COVERAGE AFFORDED BY THE
                        POLICIESBELOW. THIS CERTIFICATE OF INSURANCE DOES NOT
                        CONSTITUTE A CONTRACT BETWEEN THE ISSUING INSURER(S),
                        AUTHORIZEDREPRESENTATIVE OR PRODUCER, AND THE
                        CERTIFICATE HOLDER.
                      </h1>
                    </div>
                    <div className="border-2 border-l-0 border-r-0 border-t-0 p-2 border-black">
                      <h1 className="text-center text-sm font-semibold">
                        IMPORTANT: If the certificate holder is an ADDITIONAL
                        INSURED, the policy(ies) must be endorsed. If
                        SUBROGATION IS WAIVED, subject tothe terms and
                        conditions of the policy, certain policies may require
                        an endorsement. A statement on this certificate does not
                        confer rights to thecertificate holder in lieu of such
                        endorsement(s).
                      </h1>
                    </div>
                    <div>
                      <div className="py-2">
                        <h1 className="text-center font-semibold text-xl">
                          Procedure
                        </h1>
                      </div>

                      <div className="flex flex-wrap justify-center sm:gap-8 border-t-0 border-2 border-l-0 border-r-0 border-b-0 border-black">
                        <div className="flex gap-2 ">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Name
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Enter Name "
                              // value={auth.company_number}
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
                              Email
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              placeholder="Enter email "
                              // value={auth.company_number}
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
                                (A/C,No Ext)
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                // value={auth.insurance_type}
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
                                Address
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                // placeholder="Policy Number "
                                // value={auth.email}
                                onChange={(event) => {
                                  alert("Input value changed!");
                                }}
                                type="email"
                              />
                            </div>
                            {/* <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                           Fax(A/c,No)
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                // placeholder="Policy Number "
                                // value={auth.email}
                                onChange={(event) => {
                                  alert("Input value changed!");
                                }}
                                type="email"
                              />
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center sm:gap-8 border-t-0 border-2 border-l-0 border-r-0  border-black pb-4">
                        <div className="flex gap-2 ">
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              FAX (A/C, No)
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              // value={auth.company_number}
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
                              insured
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200"
                              // value={auth.company_number}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-evenly items-center pt-5 font-semibold">
                        <div>
                          <h1>COVERAGES</h1>
                        </div>
                        <div>
                          <h1>CERTIFICATE NUMBER:</h1>
                        </div>
                        <div>
                          <h1>REVISION NUMBER</h1>
                        </div>
                      </div>
                      <div className="flex justify-evenly items-center pt-5 font-semibold">
                        <h1 className="text-center text-sm">
                          THIS IS TO CERTIFY THAT THE POLICIES OF INSURANCE
                          LISTED BELOW HAVE BEEN ISSUED TO THE INSURED NAMED
                          ABOVE FOR THE POLICY PERIODINDICATED. NOTWITHSTANDING
                          ANY REQUIREMENT, TERM OR CONDITION OF ANY CONTRACT OR
                          OTHER DOCUMENT WITH RESPECT TO WHICH THISCERTIFICATE
                          MAY BE ISSUED OR MAY PERTAIN, THE INSURANCE AFFORDED
                          BY THE POLICIES DESCRIBED HEREIN IS SUBJECT TO ALL THE
                          TERMS, EXCLUSIONS AND CONDITIONS OF SUCH POLICIES.
                          LIMITS SHOWN MAY HAVE BEEN REDUCED BY PAID CLAIMS.
                        </h1>
                      </div>
                      <div className="border-t-2 border-black border-0 p-5 mt-5">
                        <div className="py-2">
                          <h1 className="text-center font-semibold text-xl">
                            Type Of Insurance
                          </h1>
                        </div>
                        <div className="flex flex-wrap justify-center sm:gap-8 ">
                          <div className="flex gap-2 ">
                            <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                                GENERAL LIABILITY
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="GENERAL LIABILITY"
                                // value={auth.company_number}
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
                                AUTOMOBILE LIABILITY
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="AUTOMOBILE LIABILITY"
                                // value={auth.company_number}
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
                                  WORKERS COMPENSATION
                                </label>
                                <input
                                  className="px-1 py-1 custom-placeholder bg-pink-200"
                                  placeholder="WORKERS COMPENSATION"
                                  // value={auth.insurance_type}
                                  onChange={(event) => {
                                    alert("Input value changed!");
                                  }}
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="insurance_type"
                                  className="font-semibold text-gray-800"
                                >
                                  Date
                                </label>
                                <input
                                type="datetime-local"
                                  className="px-1 py-1 custom-placeholder bg-pink-200"
                                  placeholder="WORKERS COMPENSATION"
                                  // value={auth.insurance_type}
                                  onChange={(event) => {
                                    alert("Input value changed!");
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t-2 border-black border-0 p-5 mt-5">
                        <div className="flex flex-wrap justify-center sm:gap-8 ">
                          <div className="flex gap-2 ">
                            <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                                POLICY NUMBER
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="POLICY NUMBER"
                                // value={auth.company_number}
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
                                POLICY EFF (MM/DD/YYYY)
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="AUTOMOBILE LIABILITY"
                                // value={auth.company_number}
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
                                  POLICY EXP (MM/DD/YYYY)
                                </label>
                                <input
                                  className="px-1 py-1 custom-placeholder bg-pink-200"
                                  placeholder="WORKERS COMPENSATION"
                                  // value={auth.insurance_type}
                                  onChange={(event) => {
                                    alert("Input value changed!");
                                  }}
                                />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div>
                                <label
                                  htmlFor="insurance_type"
                                  className="font-semibold text-gray-800"
                                >
                                  LIMITS
                                </label>
                                <input
                                  className="px-1 py-1 custom-placeholder bg-pink-200"
                                  placeholder="LIMITS"
                                  // value={auth.insurance_type}
                                  onChange={(event) => {
                                    alert("Input value changed!");
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t-2 border-black border-0 p-5 mt-5">
                        <div className="flex flex-wrap  sm:gap-8 ">
                          <div className="flex gap-2 ">
                            <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                                DESCRIPTION OF OPERATIONS / LOCATIONS / VEHICLES
                                (Attach ACORD 101, Additional Remarks Schedule,
                                if more space is required)
                              </label>
                              <textarea
                                rows="4"
                                cols="60"
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                placeholder="  DESCRIPTION OF OPERATIONS / LOCATIONS / VEHICLES
                                (Attach ACORD 101, Additional Remarks Schedule,
                                if more space is required)"
                                // value={auth.company_number}
                                onChange={(event) => {
                                  alert("Input value changed!");
                                }}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t-2 border-black border-0 p-5 mt-5">
                        <div className="flex flex-wrap justify-between sm:gap-8 ">
                          <div className="flex gap-2 ">
                            <div>
                              <label
                                htmlFor=""
                                className="font-semibold text-gray-800"
                              >
                                CERTIFICATE HOLDER
                              </label>
                              <input
                                className="px-1 py-1 custom-placeholder bg-pink-200"
                                // value={auth.company_number}
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
                                <div>
                                  <h1 className="text-sm font-semibold">
                                    CANCELLATION
                                  </h1>
                                </div>
                                <div>
                                  <h1 className="font-semibold text-sm">
                                    SHOULD ANY OF THE ABOVE DESCRIBED POLICIES{" "}
                                    <br />
                                    BE CANCELLED BEFORETHE EXPIRATION DATE{" "}
                                    <br />
                                    THEREOF, NOTICE WILL BE DELIVERED <br />
                                    INACCORDANCE WITH THE POLICY PROVISIONS.{" "}
                                    <br />
                                  </h1>
                                </div>
                                <div>
                                  <input
                                    className="bg-pink-200 p-2"
                                    placeholder="AUTHORIZED REPRESENTATIVE"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                //   <div>
                //   <GetInsuranceCertificate />
                // </div>
              )}
              {selectedButton === "id_card" && (
                // <div className="flex gap-4 items-center">
                //   {/* Render Insurance Certificate details here */}
                //   <div>
                //     {" "}
                //     <p>Insurance Certificate Details</p>
                //   </div>
                //   <div>
                //     <button className="font-sans px-4 py-2 rounded-xl bg-red-600 text-white">
                //       Download
                //     </button>
                //   </div>
                // </div>
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
                              value={auth.company_number}
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
                              value={auth.state}
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
                                value={auth.insurance_type}
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
                                value={auth.policy_number}
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
                              value={auth.effective_date}
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
                              value={auth.expiration_date}
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
                              value={auth.year}
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
                              value={auth.make_model}
                              onChange={(event) => {
                                alert("Input value changed!");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center sm:gap-8 sm:mt-4 ">
                        <div className="flex flex-col gap-2">
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
                              value={auth.vehicle_identification_number}
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
                              value={auth.aggency_company_isuing_card}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      className="block justify-center pt-8 "
                      onSubmit={handleUpdate}
                    >
                      <div className="flex flex-col gap-8 mt-2">
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
                            id="company_name"
                            onChange={handleChange}
                            value={userDetails.company_name}
                          />
                          <br />
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 mt-2 sm:w-96"
                            placeholder="Address"
                            type="text"
                            id="address"
                            onChange={handleChange}
                            value={userDetails.address}
                          />
                          <br />
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 mt-2 sm:w-96"
                            placeholder="Name"
                            type="text"
                            id="username"
                            onChange={handleChange}
                            value={userDetails.username}
                          />
                          <br />
                        </div>
                        <div className="flex gap-8 mt-2">
                          <div>
                            <img
                              className="w-24 bg-slate-600"
                              src={`http://localhost:5000/uploads/${userDetails.profileImg}`}
                              alt=""
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Signature
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              id="profileImg"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4 pt-6">
                        <button
                          type="submit"
                          className={`bg-sky-500 text-white px-4 py-2  rounded-lg ${
                            !isFormChanged && "cursor-not-allowed opacity-50"
                          }`}
                          disabled={!isFormChanged}
                        >
                          Update
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
                    <ClicntMail />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
