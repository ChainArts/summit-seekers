import "./index.scss"
import { getAllCategories } from "../../functions"
import React, { useState, useEffect } from "react"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Booking Grid",
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
          <h3>Summit Seekers Booking Grid</h3>
          <p>Requrired Post: Booking</p>
          <p>Requrired Custom-Fields:</p>
          <ul>
              <li>location</li>
              <li>start (YYYY-MM-DD)</li>
              <li>end (YYYY-MM-DD)</li>
          </ul>
      </div>
  );
}
