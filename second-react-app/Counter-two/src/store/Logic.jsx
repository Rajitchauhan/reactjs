import { createContext, useState } from "react";

export const CounterContext = createContext(5);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {" "}
      {children}
    </CounterContext.Provider>
  );
};
