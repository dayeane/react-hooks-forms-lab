import React from "react";

function ItemForm(props) {
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={props.name}  onChange={props.handleNewInputNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={props.category} onChange={props.handleNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
