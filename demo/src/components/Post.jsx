import React, { useEffect, useState } from "react";

import axios from "axios";

function Post() {
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  //   const handleSubmit = async () => {
  //     setIsLoading(true);
  //     const { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     // console.log("data", data);
  //     setData(data);
  //     setIsLoading(false);
  //   };

  /**
   * It is the best palce to make API call / side effects
   * On the initial render -> useEffect gets triggered
   * whenever state changes -> re-rendering, useEffect triggered
   */
  useEffect(() => {
    console.log("use effect", postId, data, isLoading, count);
    const getData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setData(data);
    };

    getData();
  }, [postId]); // dependency list -> empty -> will run only once(initial rendering)(componentDidMount)
  // with dependency list -> componentDidUpdate

  return (
    <div>
      <h2>Post Id - {postId}</h2>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      {/* <button onClick={handleSubmit}>submit</button> */}
      {isLoading ? <h2>loading</h2> : <h2>{JSON.stringify(data)}</h2>}

      <h2>Count - {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
}

export default Post;
