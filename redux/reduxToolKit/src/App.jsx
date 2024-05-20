import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Provider store={store}>
        <h2>Welcome redux</h2>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}

export default App;
