import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div>
        {todoItems.map((items) => (
          <DeleteTodo todoItem={items.item} todoDate={items.date} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
