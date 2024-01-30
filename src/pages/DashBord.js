import React, { useEffect, useState } from "react";
import Nav2 from "../component/Nav2";
import "../Css/Dashboard.css";
import { Link } from "react-router-dom";
// import pdffile from "../Pdf/Commercial Auto QQR-0002.pdf";
// import { Document, Page } from "react-pdf";
export default function DashBord() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((result) => setData(result));
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Nav2 />
      <section className=" p-5">
        <div className="w-full ">
          <div className="flex items-center">
            <div className="rounded-lg bg-gray-200 p-1">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                />
                <input
                  type="button"
                  value="Search"
                  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-400  mt-4 h-[100vh] overflow-x-auto ">
          <div className="w-full bg-slate-300 p-2 flex shadow-inner gap-5 justify-between ">
            <div className="w-32 flex flex-wrap">
              <h1 className=" font-robotoflex text-sm">Name</h1>
            </div>
            <div className="w-32 flex flex-wrap">
              <h1 className=" font-robotoflex text-sm">Mail</h1>
            </div>
            <div className="w-32 flex flex-wrap">
              <h1 className=" font-robotoflex text-sm">Date</h1>
            </div>
            <div className="w-32 flex flex-wrap">
              <button className="font-robotoflex text-sm"></button>{" "}
            </div>
            <div className="w-32 flex flex-wrap">
              <button className="font-robotoflex text-sm"></button>{" "}
            </div>
          </div>
          {data.map((item, id) => (
            <div key={id} className="w-full bg-slate-300 p-2 flex shadow-inner gap-5 justify-between ">
              <div className="w-32 flex flex-wrap">
                <h1 className=" font-robotoflex text-sm">{item.username}</h1>
              </div>
              <div className="w-32 flex flex-wrap">
                <h1 className=" font-robotoflex text-sm">{item.email}</h1>
              </div>
              <div className="w-32 flex flex-wrap">
                <h1 className=" font-robotoflex text-sm">{item.date}</h1>
              </div>
              <div className="w-32 flex flex-wrap">
                <Link to={"/profile2"}>
                  {" "}
                  <button className="font-robotoflex text-sm">View</button>{" "}
                </Link>
              </div>
              <div className="w-32 flex flex-wrap">
                {" "}
                <button className="font-robotoflex text-sm">Delete</button>{" "}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
