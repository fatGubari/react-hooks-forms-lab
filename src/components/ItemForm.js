import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addElement }) {
  const [productName, setProductName] = useState("");
  const [cat, setCat] = useState("Product");

  function handleProductName(event) {
    setProductName(event.target.value);
  }

  function handleProducts(event) {
    setCat(event.target.value);
  }

  function newItem(event) {
    event.preventDefault();
    addElement({ id: uuid(), productName, cat });
  }

  return (
    <form className="NewItem" onSubmit={newItem}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={productName}
          onChange={handleProductName}
        />
      </label>

      <label>
        Category:
        <select name="category" value={cat} onChange={handleProducts}>
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
