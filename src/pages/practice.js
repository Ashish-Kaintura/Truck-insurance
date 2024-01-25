// import React, { useState } from "react";

// const dataArray = [
//   {
//     id: 1,
//     imgSrc: "path/to/image1.jpg",
//     title: "Object 1",
//     description: "Description for Object 1",
//   },
//   {
//     id: 2,
//     imgSrc: "path/to/image2.jpg",
//     title: "Object 2",
//     description: "Description for Object 2",
//   },
//   {
//     id: 3,
//     imgSrc: "path/to/image3.jpg",
//     title: "Object 3",
//     description: "Description for Object 3",
//   },
//   {
//     id: 4,
//     imgSrc: "path/to/image4.jpg",
//     title: "Object 4",
//     description: "Description for Object 4",
//   },
//   {
//     id: 5,
//     imgSrc: "path/to/image5.jpg",
//     title: "Object 5",
//     description: "Description for Object 5",
//   },
//   {
//     id: 6,
//     imgSrc: "path/to/image6.jpg",
//     title: "Object 6",
//     description: "Description for Object 6",
//   },
// ];

// const Practice = () => {
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleKnowMoreClick = (item) => {
//     setSelectedItem(item);
//     setPopupVisible(true);
//   };

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <div>
//       {dataArray.map((item) => (
//         <div key={item.id} className=" flex justify-center flex-wrap" >
//           <img src={item.imgSrc} alt={item.title} />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           <button onClick={() => handleKnowMoreClick(item)}>Know More</button>
//         </div>
//       ))}

//       {popupVisible && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close cursor-pointer" onClick={handleClosePopup}>
//               &times;
//             </span>
//             <h2>{selectedItem.title}</h2>
//             <p>{selectedItem.description}</p>
//             {/* Add additional details as needed */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;
import React, { useEffect, useState } from "react";
// import axios from "axios";
export default function Practice() {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((result) => setData(result));
    // .then((result) => setData(result.slice(0, 15)));
    console.log(data);
  }, [""]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((result) => {
  //         setData(result.slice(0, 15));
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //     console.log(data);
  //   }, []);
  return (
    <div>
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : ( */}
      <div>
        {data.map((item, id) => (
          <ul className="flex justify-evenly">
            <li key={id}>{item.Name}</li>
            <li>{item.Email}</li>
          </ul>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
