import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "../component/Nav";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Update() {
  //for navigate after signup
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileImgFile, setProfileImgFile] = useState(null);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    tax_id: "",
    phone_number: "",
    company_name: "",
    password: "",
    address: "",
    company_number: "",
    profileImg: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
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
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImgFile(file);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", userDetails.username);
    formData.append("email", userDetails.email);
    formData.append("tax_id", userDetails.tax_id);
    formData.append("company_name", userDetails.company_name);
    formData.append("password", userDetails.password);
    formData.append("address", userDetails.address);
    formData.append("company_number", userDetails.company_number);
    formData.append("phone_number", userDetails.phone_number);

    if (profileImgFile) {
      formData.append("profileImg", profileImgFile);
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        navigate(`/dashboard`);
        console.log("User updated successfully");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`http://localhost:5000/users/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userDetails),
  //     });

  //     if (response.ok) {
  //       // Handle successful update
  //       // navigate(`/users/${id}`);
  //       navigate(`/dashboard`);

  //       console.log("User updated successfully");
  //     } else {
  //       console.error("Failed to update user");
  //     }
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //   }
  // };
  return (
    <div>
      <Nav />
      <div className="py-8 ">
        <div>
          <div className="flex justify-center">
            <h1 className="uppercase text-xl font-semibold text-center">
              Update The User Details
            </h1>
          </div>
          <form
            className="block justify-center pt-8 px-2"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="username"
                    className="font-semibold text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    required
                    placeholder="Enter Name "
                    id="username"
                    onChange={handleChange}
                    value={userDetails.username}
                    type="text"
                  />
                </div>

                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Enter State"
                    id="email"
                    onChange={handleChange}
                    value={userDetails.email}
                    type="email"
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="profileImg"
                    className="font-semibold text-gray-800"
                  >
                    Profile Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="profileImg"
                    onChange={handleFileChange}
                  />
                </div> */}
              </div>
              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="insurance_type"
                    className="font-semibold text-gray-800"
                  >
                    Tax ID
                  </label>
                  <input
                    required={true}
                    placeholder="Tax Id No"
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    type="text"
                    onChange={handleChange}
                    id="tax_id"
                    value={userDetails.tax_id}
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Company Name
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Company Name"
                    type="text"
                    id="company_name"
                    onChange={handleChange}
                    value={userDetails.company_name}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <div className="flex gap-2">
                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Password"
                    type="text"
                    id="password"
                    onChange={handleChange}
                    value={userDetails.password}
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Address
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Year"
                    type="text"
                    id="address"
                    onChange={handleChange}
                    value={userDetails.address}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Company Number
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Company Number"
                    type="text"
                    id="company_number"
                    onChange={handleChange}
                    value={userDetails.company_number}
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-semibold text-gray-800">
                    Phone Number
                  </label>
                  <input
                    className="px-1 py-1 custom-placeholder bg-pink-200"
                    placeholder="Phone Number"
                    type="text"
                    id="phone_number"
                    onChange={handleChange}
                    value={userDetails.phone_number}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <div className="flex gap-2">
                <img
                  className="w-24 bg-slate-600"
                  src={`http://localhost:5000/uploads/${userDetails.profileImg}`}
                  alt=""
                />
              </div>
              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="profileImg"
                    className="font-semibold text-gray-800"
                  >
                    Profile Image
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
                className="bg-sky-500 text-white px-4 py-2  rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
