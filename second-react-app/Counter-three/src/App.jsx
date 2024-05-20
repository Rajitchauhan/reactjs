// App.jsx
import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterProvider } from "./store/Logic";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
