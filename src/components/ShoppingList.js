import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInputName, setSearchInputName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInputNameChange(event) {
    setSearchInputName(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category.includes(selectedCategory);
  });

  itemsToDisplay = itemsToDisplay.filter((item) => {
    return item.name.includes(searchInputName);
  });

  function handleNewCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  function handleNewInputNameChange(event) {
    setItemName(event.target.value);
  }

  function addElement(newItem) {
    setItems([...items, newItem]);
  }

  function onItemFormSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    return addElement(newItem)
     
   }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}
                category={itemCategory}
                name={itemName}
                handleNewCategoryChange={handleNewCategoryChange}
                handleNewInputNameChange={handleNewInputNameChange}/>

      <Filter onCategoryChange={handleCategoryChange}
              onNameChange={handleInputNameChange}
              search={searchInputName}
              selectedCat={selectedCategory} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
