import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const his = useNavigate();

  useEffect(() => {
    // Retrieve data from localStorage when component mounts
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update data goes here
    axios
      .put(`https://65dabe83bcc50200fcdd25a1.mockapi.io/cruud-test/${id}`, {
        name: name,
        age: age,
      })
      .then((response) => {
        console.log("Post updated successfully:", response.data);
        his("/Read");
        // Clear form fields after submission
        // setName("");
        // setAge("");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  return (
    <>
      <h1>Updated</h1>
      <div className="container">
        <h2>My Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              id="age"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
