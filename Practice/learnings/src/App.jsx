// App.jsx
import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ShowData from "./components/ShowData";

function App() {
  // State to store the array of items
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  // Function to add an item to the items array
  const handleAddItem = (newItem) => {
    // Add the new item to the items array
    console.log(`this is inside the handleAdd fun  ${newItem} `);
    setItems([...items, newItem]);
  };

  return (
    <div className="container">
      <h1>Welcome to React JS</h1>
      {/* Pass handleAddItem function as a prop to InputField */}
      <InputField onAddItem={handleAddItem} />
      {/* Pass the items array as a prop to ShowData */}
      <ShowData items={items} />
    </div>
  );
}

export default App;
