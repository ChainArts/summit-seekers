import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useFetchPosts } from "./functions"

const divsToUpdate = document.querySelectorAll(".icon-grid-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<IconGrid {...data} />, div)
})

function IconGrid(data) {
  
  const { posts, loading, error } = useFetchPosts(data.categoryName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='icon-grid'>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );

}

// function OurComponent(props) {
//   const [showPosts, setShowPosts] = useState(false)

//   return (
//     <div className="boilerplate-frontend">
//       <p>
//         <button onClick={() => setShowPosts(prev => !prev)}>Toggle category</button>
//         {showPosts && <span>{props.categoryName}</span>}
//       </p>
//     </div>
//   )
// }
