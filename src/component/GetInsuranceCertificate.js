import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import DeleteInsurance from "./DeleteInsurance";

export default function GetInsuranceCertificate() {
  const { id } = useParams();
  const [files, setFiles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  // const onButtonClick = () => {
  //   if (files && files.insurance_certificate) {
  //     const pdfUrl = `http://localhost:5000/uploads/${files.insurance_certificate}`;
  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.download = "document.pdf"; // specify the filename
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     console.error("No insurance certificate available to download.");
  //   }
  // };

  return (
    <div>
      <center>
        <div>
          <div className="mb-4">
            <h3>Click on below button to download Insurance Pdf file</h3>
          </div>
          {files.insurance_certificate &&
          files.insurance_certificate.endsWith(".pdf") ? (
            // Provide a download link for PDF files
            <a
              href={`http://localhost:5000/uploads/${files.insurance_certificate}`}
              download
              className="px-4 py-2 bg-red-600 text-white rounded-2xl"
              target="blank"
            >
              Download PDF
            </a>
          ) : (
            // Provide a download link for non-PDF files
            <a
              href={`http://localhost:5000/uploads/${files.insurance_certificate}`}
              download
              className="px-4 py-2 bg-red-600 text-white rounded-2xl"
              //   target="blank"
            >
              Download Attachment
            </a>
          )}
        </div>
      </center>
      {/* <center>
        <h3>Click on below button to download Insurance Pdf file</h3>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-2xl"
          onClick={onButtonClick}
        >
          Download PDF
        </button>
      </center> */}
      <div><DeleteInsurance/></div>
    </div>
  );
}
