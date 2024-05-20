import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  //   let handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   }; // parent mai difine kr diya ,, ab parent se ayega , auur parent hi handle karega
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      //   onChange={handleOnChange} // used to change val(press any key)
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
