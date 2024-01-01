import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useFetchPosts } from "./functions"

const bookingGrid = document.querySelectorAll(".booking-grid-update")

if (bookingGrid !== null) {
    bookingGrid.forEach(div => {
      const data = JSON.parse(div.querySelector("pre").innerText)
      
      if (data) {
        ReactDOM.render(<BookingGrid {...data} />, div)
      }
  })
} else {
  console.log("No booking grid elements found")
}

function BookingGrid(data) {
  
  const { posts, loading, error } = useFetchPosts(data.categoryName);

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

