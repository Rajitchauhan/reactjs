// Logic.jsx
import React, { createContext, useState } from "react";

// Create a context for the counter
export const CounterContext = createContext();

// Create a provider component to provide the counter state and functions
export const CounterProvider = ({ children }) => {
  // State to manage the count value
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
