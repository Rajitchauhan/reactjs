import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">about page</Link>
      <Link to="contact">contact page</Link>
    </div>
  );
}

export default Home;
