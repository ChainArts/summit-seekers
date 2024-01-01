import "./index.scss"
import { getAllCategories } from "./functions"
import React, { useState, useEffect } from "react"

wp.blocks.registerBlockType("summitseekers/icon-grid-block", {
  title: "Icon Grid",
  icon: "table-col-before",
  category: "common",
  attributes: {
    categoryID: { type: "string" },
  },
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await getAllCategories();
      setCategories(categories);
    }

    fetchData();
  }, []);
  
  function updateCategoryID(e) {
    props.setAttributes({ categoryID: e.target.value })
  }

  return (
    <div className="icon-grid-block">
      <select onChange={updateCategoryID}>
        {categories.map(category => (
          <option key={category.id} value={category.id} selected={props.attributes.categoryID == category.id ? "selected" : undefined}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}
