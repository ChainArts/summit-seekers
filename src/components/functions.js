import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const getCategoryID = async (categoryName) => {
  try {
    const response = await fetch('http://cms.localhost/wp-json/wp/v2/categories');
    const categories = await response.json();

    const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
    return category ? category.id : null;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

export const useFetchPosts = (categoryName) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchPosts = async () => {
      const categoryId = await getCategoryID(categoryName)
      if (categoryId) {
        fetch(`http://cms.localhost/wp-json/wp/v2/posts?categories=${categoryId}&_embed`)
          .then(response => response.json())
          .then(data => {
            setPosts(data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);

          });
      } else {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categoryName]);

  return { posts, loading, error };
};