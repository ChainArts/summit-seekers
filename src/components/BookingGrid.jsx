import React, { useEffect, useState } from 'react';
import { useFetchPosts } from '../scripts/functions.js';

const BookingGrid = () => {

  const { posts, loading } = useFetchPosts("Expedition");

  if (loading) {
    return <div>Loading...</div>;
  }

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

export default BookingGrid;
