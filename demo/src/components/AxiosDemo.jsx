import React, { useState } from "react";

import { useAxios } from "../hooks/useAxios";

function AxiosDemo() {
  const [page, setPage] = useState(1);
  const [isLoading, apiData, error] = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${page}`,
    {
      method: "GET",
    }
  );
  return (
    <div>
      <h1>Axios demo</h1>
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      {isLoading && <h2>Loading.........</h2>}
      {!isLoading && error && <h2>Error in fetching the data - {error}</h2>}
      {!isLoading && !error && <h2>{JSON.stringify(apiData)}</h2>}
    </div>
  );
}

export default AxiosDemo;
