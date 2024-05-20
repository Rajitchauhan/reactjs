import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";

import TodoItems from "./components/TodoItems";
function App() {
  // let item = "Buy Milk";
  // let todoDate = "12/12/2012";
  let todoItems = [
    { item: "Buy Milk", date: "12/12/2012" },
    { item: "Buy Breade", date: "12/01/2012" },
  ];
  return (
    <center className="todo-container">
      <div className="container">
        <TodoName />

        <TodoItems todoItems={todoItems} />
        <AddTodo />
      </div>
    </center>
  );
}

export default App;
