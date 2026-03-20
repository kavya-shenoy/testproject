// API integration to fetch external data

// API integration to fetch data
export const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};
