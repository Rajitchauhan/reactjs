const InputField = () => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-success" type="button" id="button-addon2">
          Button
        </button>
      </div>
    </>
  );
};
export default InputField;
