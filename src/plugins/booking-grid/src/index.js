import "./index.scss"
import { getAllCategories } from "./functions"
import React, { useState, useEffect } from "react"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Icon Grid",
  icon: "table-col-before",
  category: "common",
  attributes: {
    categoryName: { type: "string" },
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
  
  function updateCategoryName(e) {
    props.setAttributes({ categoryName: e.target.value })
  }

  return (
    <div className="makeUpYourBlockTypeName">
      <select onChange={updateCategoryName}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
    </div>
  )
}
