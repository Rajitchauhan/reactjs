import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSllice";

const AddTodo = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input type="text" value={input} />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddTodo;
