import { useState, useEffect } from "react";
import React from "react";
import Nav from "../component/Nav";
import { useParams } from "react-router-dom";

export default function Profile() {
  // const auth = localStorage.getItem("user");
  const auth = JSON.parse(localStorage.getItem("user"));

  const [selectedButton, setSelectedButton] = useState("insurance");
  const { id } = useParams();
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  const [userDetails, setUserDetails] = useState({
    username: "",
    company_name: "",
    address: "",
    company_number: "",
    state: "",
    policy_number: "",
    insurance_type: "",
    effective_date: "",
    expiration_date: "",
    year: "",
    make_model: "",
    vehicle_identification_number: "",
    aggency_company_isuing_card: "",
    signature: "",
  });
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;

    // Handle file input separately
    if (type === "file") {
      const file = files[0];

      // Check if the file size is within the limit (64 KB)
      if (file && file.size > 64 * 1024) {
        alert("File size exceeds the maximum limit of 64 KB");
        // Optionally, you can reset the file input or handle the error in your UI
        // Resetting the input:
        e.target.value = null;
        return;
      }

      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [id]: file,
      }));
    } else {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users/${auth.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        // Handle successful update
        console.log("Server Response:", response);
        console.log("User updated successfully");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <div>
      <Nav />
      <main>
        <section className="flex justify-center sm:p-12 p-4">
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
                    className={` shadow-inner-2xl shadow-2xl py-2 font-robotoflex text-sm px-4 border-2 border-gray-600 rounded-lg uppercase ${
                      selectedButton === "idCard"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("idCard")}
                  >
                    ID Card
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
                <div className=" flex justify-center">
                  <div>
                    <div>
                      <h1 className="uppercase text-xl font-semibold text-center">
                        Insurance Identification card
                      </h1>
                    </div>
                    <form
                      className="block justify-center pt-8"
                      onSubmit={handleUpdate}
                    >
                      <div className="flex gap-8">
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
                            id="company_number"
                            onChange={handleChange}
                            value={userDetails.company_number}
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
                            id="state"
                            onChange={handleChange}
                            value={userDetails.state}
                            type="text"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="insurance_type"
                            className="font-semibold text-gray-800"
                          >
                            Type of insurance
                          </label>
                          <input
                            id="insurance_type"
                            className="px-1 py-1 custom-placeholder bg-pink-200"
                            name="Insurance"
                            onChange={handleChange}
                            value={userDetails.insurance_type}
                          />
                        </div>
                      </div>
                      <div className="flex gap-8 mt-2">
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
                            id="policy_number"
                            onChange={handleChange}
                            value={userDetails.policy_number}
                            type="text"
                          />
                        </div>
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
                            id="effective_date"
                            onChange={handleChange}
                            value={userDetails.effective_date}
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
                            id="expiration_date"
                            onChange={handleChange}
                            value={userDetails.expiration_date}
                          />
                        </div>
                      </div>
                      <div className="flex gap-8 mt-2">
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
                            id="year"
                            onChange={handleChange}
                            value={userDetails.year}
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
                            id="make_model"
                            onChange={handleChange}
                            value={userDetails.make_model}
                          />
                        </div>
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
                            id="vehicle_identification_number"
                            onChange={handleChange}
                            value={userDetails.vehicle_identification_number}
                          />
                        </div>
                      </div>
                      <div className="flex gap-8 mt-2">
                        <div>
                          <label
                            htmlFor=""
                            className="font-semibold text-gray-800"
                          >
                            Aggency/Company Issuing Card
                          </label>
                          <input
                            className="px-1 py-1 custom-placeholder bg-pink-200 w-full"
                            placeholder="Aggency/Company Issuing Card"
                            type="text"
                            id="aggency_company_isuing_card"
                            onChange={handleChange}
                            value={userDetails.aggency_company_isuing_card}
                          />
                        </div>
                      </div>
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
                            <label
                              htmlFor=""
                              className="font-semibold text-gray-800"
                            >
                              Signature
                            </label>
                            <input
                              className="px-1 py-1 custom-placeholder bg-pink-200 w-full"
                              placeholder="Agency/Company Issuing Card"
                              type="file"
                              id="signature"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4 pt-6">
                        <button
                          type="submit"
                          className="bg-sky-500 text-white px-4 py-2  rounded-lg"
                        >
                          Upadte
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {selectedButton === "idCard" && (
                <div className="flex gap-4 items-center">
                  {/* Render ID Card details here */}
                  <div>
                    <p>ID Card Details</p>
                  </div>
                  <div>
                    <button className="font-sans px-4 py-2 rounded-xl bg-red-600 text-white">
                      Download
                    </button>
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
