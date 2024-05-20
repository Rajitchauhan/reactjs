import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const history = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    console.log("stop to suubmit");
    axios
      .post("https://65dabe83bcc50200fcdd25a1.mockapi.io/cruud-test", {
        name: name,
        age: age,
      })
      .then((response) => {
        console.log("Successful send ", response.data);
        history("/Read");
      })
      .catch((error) => {
        console.error("error :: ", error);
      });
  };
  return (
    <>
      <h2>Post</h2>
      <div className="container">
        <form className="form-control" onSubmit={handleForm}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {name}
          {age}
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Post;
