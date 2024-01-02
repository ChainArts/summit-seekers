import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useFetchPosts } from "../../functions"



const iconGrid = document.querySelectorAll(".icon-grid-update")

if (iconGrid !== null) {
    iconGrid.forEach(div => {
      const data = JSON.parse(div.querySelector("pre").innerText)
      if (data) {
         ReactDOM.render(<IconGrid {...data} />, div)
      }
  })
} 

function IconGrid(data) {

  console.log(data)

  if (data.categoryID === undefined) { 
    return <p>Select a category</p>
  }
  
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

export default IconGrid
