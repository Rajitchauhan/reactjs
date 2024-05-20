import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  function setToLocalStorage(id , name , age){
     localStorage.setItem("id" , id);
     localStorage.setItem("name" , name);
     localStorage.setItem("age" , age);

  }

  function handleDelete(id) {
    axios
      .delete(`https://65dabe83bcc50200fcdd25a1.mockapi.io/cruud-test/${id}`)
      .then(() => {
        getData(); // Refresh data after successful deletion
        console.log("deleted");
      })
      .catch((error) => {
        console.log("error :: ", error);
      });
  }

  function getData() {
    axios
      .get("https://65dabe83bcc50200fcdd25a1.mockapi.io/cruud-test")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error :: ", error);
      });
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleDelete(item.id)} // Pass item id to delete function
                >
                  Delete
                </button>
                <Link to="/Update">
                  <button
                    onClick={() =>
                      setToLocalStorage(item.id, item.name, item.age)
                    }
                    className="btn btn-info"
                    type="button"
                  >
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
