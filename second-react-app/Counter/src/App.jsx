import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Show from "./components/Show";

function App() {
  const [count, setCount] = useState(5);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing count
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <h2>Welcome to My world</h2>
        <h3>
          Counter is <Show count={count} />
        </h3>
        <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    </>
  );
}

export default App;
