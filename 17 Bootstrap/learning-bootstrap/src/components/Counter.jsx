import { useContext } from "react";
import { CounterContext } from "../store/Store";

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <>
      <div className="container">
        <span>Counter ::  {count}</span>
        <button onClick={increment} className="btn btn-info">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-info">
          Decrement
        </button>
      </div>
    </>
  );
};
export default Counter;
