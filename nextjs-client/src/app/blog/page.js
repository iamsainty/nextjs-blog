import Link from "next/link";

async function Blog() {
  // Fetching blog posts on the server (SSR)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Ensures fresh data (prevents caching)
  });
  const posts = await response.json();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            style={{
              border: "1px solid white",
              width: "30%",
              padding: "20px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
