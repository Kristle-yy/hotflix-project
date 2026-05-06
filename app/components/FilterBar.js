import "../globals.css";

const FilterBar = () => {
  return (
    <div className="filters">
      <select><option>All genres</option></select>
      <select><option>Any quality</option></select>
      <select><option>Any rating</option></select>
      <select><option>Relevance</option></select>

      <button className="apply-btn">APPLY</button>
    </div>
  );
};

export default FilterBar;