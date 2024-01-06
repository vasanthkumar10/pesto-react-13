import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../redux/posts/postActions";

function Posts() {
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // loading -> loader
  // !loading and error -> error
  // !loading and !error -> success

  useEffect(() => {
    dispatch(fetchPosts(url));
  }, [url]);

  return (
    <div>
      {posts.loading && <h1>loading</h1>}
      {!posts.loading && posts.error && <h1>{posts.error}</h1>}
      {!posts.loading && !posts.error && <h2>{JSON.stringify(posts.data)}</h2>}
    </div>
  );
}

export default Posts;
