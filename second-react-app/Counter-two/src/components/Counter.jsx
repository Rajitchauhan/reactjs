import React, { useContext } from "react";
import { CounterContext } from "../store/Logic";

const Counter = () => {
  // Access the count state and setCount function from the context
  const [count, setCount] = useContext(CounterContext);

  // Function to handle incrementing count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h3>Counter is {count}</h3>
      <button onClick={handleIncrement} className="btn btn-info">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
