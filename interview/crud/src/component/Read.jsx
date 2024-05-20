// import axios from "axios";
// import { useState, useEffect } from "react";

// const Read = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log("data", res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.error("message", err);
//       });
//   };

//   return (
//     <>
//       <h2>Welcome sir</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <p>ID: {item.id}</p>
//             <p>Title: {item.title}</p>
//             <p>Body: {item.body}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Read;
import { useState, useEffect } from "react";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <h2>API</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </li>
          ))}
          {/* <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li> */}
        </ul>
      </div>
    </>
  );
};
export default Read;
