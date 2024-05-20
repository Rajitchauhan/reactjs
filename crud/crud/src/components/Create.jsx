import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected spelling
    console.log("submitting form");

    // const headers = { "Access-Control-Allow-Origin": "*" }; // Moved headers here

    axios
      .post(
        "https://65dabe83bcc50200fcdd25a1.mockapi.io/cruud-test",
        { name: name, age: age }
        // { headers: headers } // Pass headers as options object
      )
      .then((response) => {
        console.log("Post created successfully:", response.data);
        // Add any success handling logic here
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        // Add any error handling logic here
      });
  };

  return (
    <>
      <h1>Create</h1>
      <div className="container">
        <h2>My Form</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Added onSubmit event handler */}
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

export default Create;
