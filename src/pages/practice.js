import React, { useState, useEffect } from "react";
import moment from "moment";
const Practice = () => {
  const [userdetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/");
        const result = await response.json();
        setUserDetails(result);
        console.log(result); // Use 'result' instead of 'userdetails' here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {userdetails.map((item) => (
        <div key={item.id}>
          <h1>{item.username}</h1>
          <img
            src={`http://localhost:5000/uploads/${item.profileImg}`}
            alt={`Profile of ${item.profileImg}`}
          />
          <h1> Date Added : {moment(item.date).format("DD-MM-YYYY")}</h1>
        </div>
      ))}
    </div>
  );
};

export default Practice;
