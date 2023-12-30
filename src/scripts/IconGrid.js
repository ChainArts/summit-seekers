import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCategoryID } from './functions.js';

function IconGrid() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
   const fetchPosts = async () => {
      const categoryId = await getCategoryID("Icon");
      if (categoryId) {
        fetch(`http://cms.localhost/wp-json/wp/v2/posts?categories=${categoryId}`)
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error("Error fetching posts:", error));
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );

}

export default IconGrid;
