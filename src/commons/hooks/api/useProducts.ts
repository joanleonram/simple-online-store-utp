import { useState, useEffect } from "react";
import useAxios from "../axios/useAxios";
import { Product } from "../../interfaces/product";

const useProducts = () => {
  const { response, error, loading } = useAxios({
    url: "https://fakestoreapi.com/products",
    method: "GET",
  });

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (response) {
      setProducts(response);
    }
  }, [response]);

  return { products, error, loading };
};

export default useProducts;
