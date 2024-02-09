import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Mastermail = () => {
    const isAdmin = JSON.parse(localStorage.getItem("masteruser"));
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [sender, setSender] = useState("ashu88793@gmail.com");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState(  [isAdmin.username] +
    " Hello Just Sending mail to get your attention"
  );
  const [file, setFile] = useState(null); // State to store the selected file
  const [loading, setLoading] = useState(false); // State to track loading state

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("sender", sender);
      formData.append("recipient", recipient);
      formData.append("subject", subject);
      formData.append("content", content);
      formData.append("attachment", file); // Append the selected file to the form data

      await axios.post("http://localhost:5000/sendemail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Email sent successfully");
    } catch (error) {
      alert("Error sending email");
    } finally {
      setLoading(false); // Set loading state to false when email sending process is finished
    }
  };
  return (
    <>
      <div>
        <h1 className="ps-1 text-xl font-semibold text-blue-500 mb-2 font-sans">
          New Mail
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border-b-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 px-2"
          type="email"
          placeholder="Recipient"
          value={sender}
          id="recipient"
          //   onChange={(e) => setSender()}
          required
        />
        <br />
        <input
          className="w-full border-b-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 px-2"
          type="email"
          placeholder="Recipient"
          value={recipient}
          id="recipient"
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          className="w-full border-b-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 px-2"
          placeholder="Subject"
          value={subject}
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <br />
        <textarea
          rows="5"
          placeholder="Content"
          id="content"
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          value={content}
            onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <input
          type="file"
          accept=".pdf, .doc, .docx/*" // Allow PDF, DOC, DOCX, and images
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        {}
        <button
          className=" px-3 py-3 mt-2 text-white bg-blue-500 rounded-3xl focus:bg-indigo-600 focus:outline-none"
          type="submit"
        >
          {loading ? (
            <div>
              <div class="flex flex-row gap-2">
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          ) : (
            "Send Mail"
          )}
        </button>
      </form>
    </>
  );
};

export default Mastermail;
