import { useEffect, useState } from "react";

import axios from "axios";

export function useAxios(url, options) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  //   console.log("in useAxios");

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const { data } = await axios(url, options);
        setApiData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [isLoading, apiData, error];
}
