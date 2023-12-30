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