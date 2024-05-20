import Show from "./Show";

const Button = ({ onIncrement, onDecrement }) => {
  return (
    <>
      <button onClick={onIncrement} className="btn btn-info">
        Increments
      </button>
      <button onClick={onDecrement} className="btn btn-danger">
        Decrements
      </button>
    </>
  );
};
export default Button;
