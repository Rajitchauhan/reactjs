import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSllice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>My todos</div>
      <ul>
        {" "}
        {/* Added a wrapping <ul> element */}
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            {/* Use todo.id as the unique key */}
            {todo.text}
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
