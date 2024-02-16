import React, { useEffect, useState } from "react";
import "../Css/Dashboard.css";
import moment from "moment";
import { Link } from "react-router-dom";
// import pdffile from "../Pdf/Commercial Auto QQR-0002.pdf";
// import { Document, Page } from "react-pdf";
export default function DashBord() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/", {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });
        const result = await response.json();
        setLoading(false); // Set loading to false after fetching data
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      });

      if (response.ok) {
        // If deletion is successful, update the data state
        setData((prevData) => prevData.filter((user) => user.id !== id));
        // window.location.reload();
      } else {
        console.error("Failed to delete user");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const searchHandle = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    try {
      if (value.trim() === "") {
        setData([]);
        return;
      }

      const response = await fetch(`http://localhost:5000/search?q=${value}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error searching:", error);
      // Handle error
    }
  };
  return (
    <div>
      <section className=" p-5">
        <div className="w-full ">
          <div className="flex items-center">
            <div className="rounded-lg bg-gray-200 p-1">
              <div className="flex">
                {/* <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div> */}
                <input
                  type="text"
                  className="w-full py-1 bg-white pl-2 text-base font-semibold outline-0"
                  placeholder="Search...."
                  value={searchTerm}
                  onChange={searchHandle}
                />
                {/* <input
                  type="button"
                  value="Search"
                  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-slate-300  mt-4 h-[80vh] overflow-auto dashboardscroll ">
          <div className="w-full bg-slate-300 p-2 flex shadow-inner gap-5 justify-between items-center">
            <div className="sm:w-32 flex flex-wrap">
              <h1 className=" font-robotoflex  sm:text-sm text-xs">Name</h1>
            </div>
            <div className="sm:w-32 flex flex-wrap">
              <h1 className=" font-robotoflex  sm:text-sm text-xs">Mail</h1>
            </div>
            <div className="sm:w-32 flex flex-wrap">
              <h1 className=" font-robotoflex  sm:text-sm text-xs">Date</h1>
            </div>
            <div className="sm:w-32 flex flex-wrap">
              <button className="font-robotoflex sm:text-sm text-xs">
                View
              </button>{" "}
            </div>
            <div className="sm:w-32 flex flex-wrap">
              <button className="font-robotoflex sm:text-sm text-xs">
                Delete
              </button>{" "}
            </div>
            <div className="sm:w-32 flex flex-wrap">
              <button className="font-robotoflex sm:text-sm text-xs">
                Update
              </button>{" "}
            </div>
          </div>
          {loading ? ( // Render loading indicator while loading is true
            <div class="flex flex-row gap-2 justify-center items-center h-[60vh]">
              <div>
                <h1 className="text-center pb-6 font-semibold text-4xl  animate-bounce [animation-delay:-.3s]">
                  Loding
                </h1>
              </div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          ) : (
            <>
              {data.length > 0 ? (
                data.map((item) => (
                  <div
                    key={item.id}
                    className="w-full bg-slate-300 p-2 flex shadow-inner gap-5 justify-between "
                  >
                    <div className="sm:w-32 flex flex-wrap">
                      <h1 className=" font-robotoflex sm:text-sm text-xs ">
                        {item.username}
                      </h1>
                    </div>

                    <div className="sm:w-32 flex flex-wrap">
                      <h1 className=" font-robotoflex sm:text-sm text-xs ">
                        {item.email}
                      </h1>
                    </div>
                    <div className="sm:w-32 flex flex-wrap ">
                      <h1 className=" font-robotoflex sm:text-sm text-xs ">
                        {moment(item.date).format("DD-MM-YYYY-HH:mm:ss")}
                      </h1>
                    </div>
                    <div className="sm:w-32 flex flex-wrap">
                      <Link to={`/users/${item.id}`}>
                        <button className="font-robotoflex sm:text-sm text-xs sm:px-4 sm:py-2 py-1 px-2 bg-sky-600 text-white rounded-lg">
                          View
                        </button>{" "}
                      </Link>
                    </div>
                    <div className="sm:w-32 flex flex-wrap">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="font-robotoflex sm:text-sm text-xs  sm:px-4 sm:py-2 py-1 px-2 bg-red-700 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="sm:w-32 flex flex-wrap">
                      <button className="font-robotoflex sm:text-sm text-xs  sm:px-4 sm:py-2 py-1 px-2 bg-sky-600 text-white rounded-lg">
                        <Link to={`/update/${item.id}`}> Update</Link>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-center pt-20 font-semibold text-4xl">
                  No Result Found
                </h1>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
