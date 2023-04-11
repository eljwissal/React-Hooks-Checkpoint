import React from "react";

const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Title filter"
        onChange={e => handleFilterChange(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating filter"
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;