import { useState, useEffect } from "react";
import useAxios from "../axios/useAxios";
import { Product } from "../../interfaces/product";

const useSingleProduct = (productId: number) => {
  const { response, error, loading } = useAxios({
    url: `https://fakestoreapi.com/products/${productId}`,
    method: "GET",
  });

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (response) {
      const productWithPrice = {
        ...response,
        price: response.price || response.title.charCodeAt(0),
      };
      setProduct(productWithPrice);
    }
  }, [response]);

  return { product, error, loading };
};

export default useSingleProduct;