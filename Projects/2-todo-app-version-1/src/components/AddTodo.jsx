function AddTodo() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo here" />
      </div>
      <div className="col-4">
        <input type="date" name="" id="" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
