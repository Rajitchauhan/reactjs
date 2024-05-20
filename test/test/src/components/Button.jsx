const Button = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement} className="btn btn-info" type="button">
        Increase
      </button>

      <button onClick={onDecrement} className="btn btn-info" type="button">
        Decrease
      </button>
    </div>
  );
};

export default Button;
