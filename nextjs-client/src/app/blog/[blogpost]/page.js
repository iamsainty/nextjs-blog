import React from "react";

async function BlogPost({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogpost}`, {
    cache: "no-store", // Ensures fresh data for SSR
  });
  const blog = await response.json();

  return (
    <div style={{ padding: "50px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogPost;
