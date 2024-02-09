// TrackingPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Trackinggmail = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getemails");
      setEmails(response.data);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <div>
      <center>
        <h2 className="py-8 font-semibold text-2xl uppercase">Mail Tracker</h2>
        <table className="bg-blue-200 w-full sm:table-auto table-fixed rounded-lg">
          <thead className=" bg-blue-300  ">
            <tr className=" ">
              <th>From</th>
              <th>Recipient</th>
              <th>Subject</th>
              <th>Content</th>
              <th>Download</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr key={index}>
                <td className="">{email.sender}</td>
                <td className="">{email.recipient}</td>
                <td className="">{email.subject}</td>
                <td className="">{email.content}</td>
                <td>
                  {email.attachment && email.attachment.endsWith(".pdf") ? (
                    // Provide a download link for PDF files
                    <a
                      href={`http://localhost:5000/uploads/${email.attachment}`}
                      download
                    >
                      Download PDF
                    </a>
                  ) : (
                    // Provide a download link for non-PDF files
                    <a
                      href={`http://localhost:5000/uploads/${email.attachment}`}
                      download
                    >
                      Download Attachment
                    </a>
                  )}
                </td>
                <td>{moment(email.date).format("DD-MM-YYYY-HH")}</td>
                <td>{moment(email.date).format("mm:ss")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Trackinggmail;
