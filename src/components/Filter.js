import React from "react";

function Filter({ onCategoryChange, onNameChange, search, selectedCat }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onNameChange} value={search}/>
      <select name="filter" onChange={onCategoryChange} value={selectedCat}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
