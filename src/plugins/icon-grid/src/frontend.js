import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useFetchPosts } from "./functions"

const iconGrid = document.querySelectorAll(".icon-grid-update")

if (iconGrid !== null) {
    iconGrid.forEach(div => {
      const data = JSON.parse(div.querySelector("pre").innerText)
      if (data) {
         ReactDOM.render(<IconGrid {...data} />, div)
      }
  })
} else {
  console.log("No icon grid elements found")
}

function IconGrid(data) {
  
  const { posts, loading, error } = useFetchPosts(data.categoryID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </>
  );

}

