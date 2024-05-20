// Counter.jsx
import React, { useContext } from "react";
import { CounterContext } from "../store/Logic";

const Counter = () => {
  // Access the counter context
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
