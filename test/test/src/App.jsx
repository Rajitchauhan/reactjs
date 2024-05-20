import { useState } from "react";
import ShowCounter from "./components/ShowCounter";
import Button from "./components/Button";
function App() {
  let [count, setCount] = useState(10);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Count cannot be negative");
    }
    // if (count < 0) {
    //   setCount(111);
    //   console.log("couunt is negative");
    // }
  };
  return (
    <>
      <div className="container">
        <ShowCounter count={count} />
        <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    </>
  );
}

export default App;
