import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        if(isMounted) {
          setData(response.data.results);
          setError(null);
        }
      } catch (err) {
        if(isMounted) {
          setError(err.message);
        }
      } finally {
        if(isMounted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);
  return { data, loading, error };
}

export default useFetch;