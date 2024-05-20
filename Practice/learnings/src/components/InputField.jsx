// InputField.jsx
import React, { useState } from "react";

const InputField = ({ onAddItem }) => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle adding item
  const handleAddItem = () => {
    // Call the parent component's onAddItem function with the input value
    onAddItem(inputValue);
    // Clear the input field
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the value"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem} type="button" className="btn btn-success">
        Add
      </button>
    </>
  );
};

export default InputField;
