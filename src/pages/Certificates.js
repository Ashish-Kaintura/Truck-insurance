import React from "react";
import Nav2 from "../component/Nav2";
// import commercialPdf from "../Pdf/Commercial Auto QQR-0002.pdf"; // Update the path to your PDF file

export default function Certificates() {
  // const onButtonClick = () => {
  //   const pdfUrl = commercialPdf; // Use the imported PDF file
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "document.pdf"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div>
      <Nav2 />
      <main>
        <section className="block justify-center  p-12">
          <div className=" w-full">
            <h1 className="text-center uppercase text-4xl">Fill the Form </h1>
          </div>
          <div className="w-full bg-slate-300 rounded-3xl shadow-2xl shadow-inner-2xl p-8 mt-8 flex flex-col justify-center gap-6 items-center">
            <div>
              <img src={require("../images//certicate.jpeg")} alt="" />
            </div>
            <div className="text-center" >
              You Only Need to Fill certificate Holder Name 
              <br />
              other Details Fill By Us
            </div>
            <div className="">
            <form action="">
                <label htmlFor="">Certificate Holder Name </label>
              </form>
              <input type="text" />
            </div>
            <button className=" font-sans text-lg px-4 py-2 bg-red-600 text-white rounded-xl">
              Submit
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
