import { useState, useEffect } from "react";
import axios from "axios";

interface UseAxiosProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: any;
}

const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: UseAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios({
          method,
          url,
          data: body,
          headers,
        });
        setResponse(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers]);

  return { response, error, loading };
};

export default useAxios;