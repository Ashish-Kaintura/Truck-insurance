import React, { useState, useEffect } from "react";

export default function DeleteInsurance() {
  const [deleted, setDeleted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/users_insurance_certificate/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If deletion is successful, update the data state
        setData((prevData) => prevData.filter((user) => user.id !== id));
        alert("delete user");
        window.location.reload();
      } else {
        console.error("Failed to delete user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        {deleted ? (
          <p>Insurance certificate value deleted successfully</p>
        ) : (
          <button onClick={() => handleDelete(data.id)}>
            Delete Insurance Certificate
          </button>
        )}
      </div>
    </div>
  );
}
