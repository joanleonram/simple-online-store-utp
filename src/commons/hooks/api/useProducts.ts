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
      const productsWithPrice = response.map((product: Product) => ({
        ...product,
        price: product.price || product.title.charCodeAt(0),
      }));
      setProducts(productsWithPrice);
    }
  }, [response]);

  return { products, error, loading };
};

export default useProducts;