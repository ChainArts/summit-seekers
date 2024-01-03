import "./index.scss"
import { getAllCategories } from "../../functions"
import React, { useState, useEffect } from "react"
import Carousel from "./frontend"

wp.blocks.registerBlockType("summitseekers/carousel-block", {
  title: "Carousel",
  icon: "ellipsis",
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
      <div className="carousel-block">
          <h3>Summit Seekers Carousel</h3>
          <select onChange={updateCategoryID}>
              <option disabled selected>
                  Select your category
              </option>
              {categories.map((category) => (
                  <option
                      key={category.id}
                      value={category.id}
                      selected={
                          props.attributes.categoryID == category.id
                              ? "selected"
                              : undefined
                      }
                  >
                      {category.name}
                  </option>
              ))}
          </select>
          <div className="carousel-preview">
              {props.attributes.categoryID ?< Carousel {...props.attributes} /> : null}
          </div>
      </div>
  );
}
