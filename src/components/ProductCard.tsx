import React, { useState, useEffect } from "react";
import { EyeOutlined } from "@ant-design/icons";

import Button from "./Button/Button";
import { Product } from "../commons/interfaces/product";

interface ProductCardProps {
  product: Product;
  onClickPreview?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onRemoveFromCart?: (product: Product) => void;
  isInCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClickPreview,
  onAddToCart,
  onRemoveFromCart,
  isInCart = false,
}) => {
  const [isAdded, setIsAdded] = useState(isInCart);

  useEffect(() => {
    setIsAdded(isInCart);
  }, [isInCart]);

  const handleAdd = () => {
    if (!isAdded) {
      setIsAdded(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onAddToCart && onAddToCart(product);
    }
  };

  const handleRemove = () => {
    if (isAdded) {
      setIsAdded(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onRemoveFromCart && onRemoveFromCart(product);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden w-72 flex flex-col relative p-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-left">
          {product.title}
        </h2>
        <div className="text-gray-700 w-full text-left max-h-24 overflow-y-auto">
          {product.description}
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="text-lg font-bold text-gray-800 bg-red-100 rounded p-1">
          S/{product.price}
        </span>
      </div>
      <div className="flex justify-between p-4">
        <Button
          variant="dashed"
          onClick={() => onClickPreview && onClickPreview(product)}
        >
          <EyeOutlined className="text-2xl" /> Vista previa
        </Button>
        {isAdded ? (
          <Button variant="link" danger onClick={handleRemove}>
            Eliminar
          </Button>
        ) : (
          <Button variant="primary" onClick={handleAdd}>
            Agregar
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
