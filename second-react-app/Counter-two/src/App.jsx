import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";

import { CounterProvider } from "./store/Logic";
("./store/Logic");
function App() {
  return (
    <>
      <center>
        <CounterProvider >
          <h1>Welcome to counter 2</h1>
          <Counter />
        </CounterProvider>
      </center>
    </>
  );
}

export default App;
