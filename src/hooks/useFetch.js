import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = (newUrl=url, method='get', payload) => {
    setLoading(true);
    axios({
      method,
      url: newUrl,
      data: payload,
    })
      .then((res) => {
        const newData = data !== null ? [...data, res.data] : [res.data];
        setData(newData);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
