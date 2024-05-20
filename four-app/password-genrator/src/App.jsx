import { useState } from "react";
import InputField from "./components/Input";
import Range from "./components/Range";
import Check from "./components/Check";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <h2>Welcoe to Password genrator</h2>
        <InputField />
        <Range length={length} setLength={setLength} />
        <h1>{length}</h1>
        <Check />
      </div>
    </>
  );
}

export default App;
