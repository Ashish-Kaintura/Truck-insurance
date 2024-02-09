import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UploadCertificate() {
  const [file, setFile] = useState(null); // State to store the selected file
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("insurance_certificate", file); // Append the selected file to the form data

      const response = await axios.put(
        `http://localhost:5000/certificate/${id}`,
        formData
      );

      if (response.status === 200) {
        alert("File sent successfully");
      } else {
        throw new Error("Failed to send file");
      }
    } catch (error) {
      console.error("Error sending file:", error);
      alert("Error sending file");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])} // Set the selected file
        />
        <button className="px-3 py-2 rounded-2xl text-white bg-blue-600" type="submit">Upload</button>
      </form>
    </div>
  );
}
