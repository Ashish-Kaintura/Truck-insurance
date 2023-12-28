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
        <section className="block justify-center h-[100vh] p-12">
          <div className=" w-full">
            <h1 className="text-center uppercase text-4xl">Fill the Form </h1>
          </div>
          <div className="w-full bg-slate-300 h-96 rounded-3xl shadow-2xl shadow-inner-2xl p-8 mt-8 flex justify-center gap-6 items-center">
            <div className="w-64 bg-slate-600 h-32">
             
            </div>
            <button className=" font-sans text-lg px-4 py-2 bg-red-600 text-white rounded-xl">Submit</button>
          </div>
        </section>
      </main>
    </div>
  );
}
