import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        if (!response.ok) {
          throw Error("Could not fetch the data :c");
        }
        return json;
      };

      fetchData()
        .then((info) => {
          setData(info);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 3000);
  }, []);

  return { data, loading, error };
};

export default useFetch;
