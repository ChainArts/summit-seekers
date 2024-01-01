import { useState, useEffect } from 'react';

export const getCategoryID = async (categoryName) => {
  try {
    const response = await fetch('http://cms.localhost/wp-json/wp/v2/categories');
    const categories = await response.json();

    const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase())
    return category ? category.id : null
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null;
  }
}

export const getAllCategories = async () => {
    try {
        const response = await fetch('http://cms.localhost/wp-json/wp/v2/categories');
        const categories = await response.json();
        return categories.map(category => ({
            id: category.id,
            name: category.name
        }));
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}

export function useFetchPosts(category) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://cms.localhost/wp-json/wp/v2/posts?categories=${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  return { posts, loading, error };
}