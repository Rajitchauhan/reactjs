const Range = ({ length, setLength }) => {
  const handleChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  return (
    <>
      <label htmlFor="customRange1" className="form-label">
        Example range
      </label>
      <input
        onChange={handleChange}
        type="range"
        className="form-range"
        id="customRange1"
        value={length}
        min="1"
        max="20"
      />
    </>
  );
};

export default Range;
