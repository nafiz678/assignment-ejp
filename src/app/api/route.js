export const Blogs = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs = await res.json();
  
    return blogs
  };

export const SpecificBlog = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const specificBlog = await res.json();
  
    return specificBlog
  };

