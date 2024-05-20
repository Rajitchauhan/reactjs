import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";

import ErrorMessage from "./components/ErrorMessage";

import "./App.css";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Dal", "Chawal", "Green vagitables", "Salad", "Suf"]; now i use state for saving this arr.
  // let foodItems = [];
  //   if (foodItems.length === 0) {
  //     return <h1>I am hungry</h1>;
  //   }

  let [foodItems, setFoodItems] = useState([]);
  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]; // spred operator ,create new arr(foodItems) and copy value and add new  val(newFoodItem)
      setFoodItems(newItems);
    }
  };

  let [textToShow, setTextState] = useState("This text is enter by user");
  // let textToShow = "This text is enter by user";
  let handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
    // textToShow = event.target.value; for showiginput  text but i have to use state so i can show otherwise it will not show.
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        {/* <FoodInput handleOnChange={handleOnChange}></FoodInput>  for onChange  */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
