// TrackingPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Trackinggmail = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading indicator
  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get("http://localhost:5000/getemails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmails(response.data);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <div>
      <center>
        {/* <h2 className="py-8 font-semibold text-2xl uppercase">Mail Tracker</h2> */}
        <table className="bg-[whitesmoke] w-full sm:table-auto table-fixed  rounded-lg ">
          <thead className=" bg-blue-300  ">
            <tr className=" ">
              <th className="border-2  border-gray-700">From</th>
              <th className="border-2  border-gray-700">Recipient</th>
              <th className="border-2  border-gray-700">Subject</th>
              <th className="border-2  border-gray-700">Content</th>
              <th className="border-2  border-gray-700">Download</th>
              <th className="border-2  border-gray-700">Date</th>
              <th className="border-2  border-gray-700">Time</th>
            </tr>
          </thead>
          <tbody>
            {loading ? ( // Render loading indicator while loading is true
              <div class="flex flex-row gap-2 justify-center items-center h-[60vh] ">
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
                {emails.map((email, index) => (
                  <tr key={index} className="border-2 border-gray-700">
                    <td className="border-r-2  border-gray-700">
                      {email.sender}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {email.recipient}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {email.subject}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {email.content}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {email.attachment && email.attachment.endsWith(".pdf") ? (
                        // Provide a download link for PDF files
                        <a
                          className="hover:text-red-700 hover:font-semibold transition-all ease-in-out duration-150"
                          href={`http://localhost:5000/uploads/${email.attachment}`}
                          download
                        >
                          Download PDF
                        </a>
                      ) : (
                        // Provide a download link for non-PDF files
                        <a
                          className="hover:text-red-700 hover:font-semibold transition-all ease-in-out duration-150"
                          href={`http://localhost:5000/uploads/${email.attachment}`}
                          download
                        >
                          Download Attachment
                        </a>
                      )}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {moment(email.date).format("DD-MM-YYYY-HH")}
                    </td>
                    <td className="border-r-2  border-gray-700">
                      {moment(email.date).format("mm:ss A")}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Trackinggmail;
