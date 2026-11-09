type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await response.json();

  return (
    <main>
      <h1>Posts</h1>

      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}
