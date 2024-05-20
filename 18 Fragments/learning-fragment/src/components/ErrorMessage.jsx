const ErrorMessage = ({ items }) => {
  // let foodItems = ["Dal", "Chawal", "Green vagitables", "Salad", "Suf"]; i used props for passing arguments
  //   let foodItems = [];
  return (
    <>{items.length === 0 && <h1>I am Still hungry in Error message</h1>}</>
  );
};

export default ErrorMessage;
