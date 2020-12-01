import { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    loadPosts();
  }, []);

  return loading || !posts ? (
    <h1 className="text-center mt-3">Loading Posts...</h1>
  ) : (
    <div className="container">
      <h1 className="mt-3 text-center">List Posts</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
