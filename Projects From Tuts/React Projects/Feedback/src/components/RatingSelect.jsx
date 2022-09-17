function RatingSelect({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((r) => (
        <li key={`${r}-rating-button`}>
          <input type="radio" id={`num${r}`} name="rating" value={`${r}`} onChange={handleChange} checked={selected === r} />
          <label htmlFor={`num${r}`}>{`${r}`}</label>
        </li>
      ))}
    </ul>
  );
}
export default RatingSelect;
