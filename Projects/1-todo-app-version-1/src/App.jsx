import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <center class="todo-container">
      <div class="container">
        <TodoName />
        <AddTodo />

        <div class="row">
          <div class="col-6">Buys Milk</div>
          <div class="col-4">12/12/2012</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">Buys Milk</div>
          <div class="col-4">12/12/2012</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <AddTodo />
      </div>
    </center>
  );
}

export default App;
