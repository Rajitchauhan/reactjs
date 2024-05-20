import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

// import Item from "./Item";

// const FoodItems = ({ items }) => {
//   // let foodItems = ["Dal", "Chawal", "Green vagitables", "Salad", "Suf"];  i passed as arguments arr
//   return (
//     <ul className="list-group">
//       {items.map((items) => (
//         // <li key={items} className="list-group-item">
//         //   {items}
//         // </li>
//         <Item
//           key={items}
//           foodItem={items}
//           handleBuyButton={() => console.log(`${items} brought `)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default FoodItems;
