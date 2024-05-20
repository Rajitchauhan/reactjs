const Check = () => {
  return (
    <>
      <div className="htmlForm-check">
        <input
          className="htmlForm-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="htmlForm-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="htmlForm-check">
        <input
          className="htmlForm-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="htmlForm-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </>
  );
};
export default Check;
