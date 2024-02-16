import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeleteInsurance = () => {
  const [deletionMessage, setDeletionMessage] = useState("");
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${id}/insurance_certificate`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setDeletionMessage("Insurance certificate deleted successfully");
        alert("Insurance certificate deleted successfully");
        // Optionally, you can update the user state here if needed
        window.location.reload();
      } else {
        console.error("Failed to delete insurance certificate");
      }
    } catch (error) {
      console.error("Error deleting insurance certificate:", error);
    }
  };

  return (
    <div>
      <button
        className="text-white px-3 py-1 rounded-lg bg-blue-700  shadow-inner"
        onClick={handleDelete}
      >
        Delete Insurance Certificate
      </button>
      {deletionMessage && <p>{deletionMessage}</p>}
    </div>
  );
};

export default DeleteInsurance;
