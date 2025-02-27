import React from "react";
import Button from "./Button/Button";
import { Icon } from "./Icon/Icon";
import { Product } from "../commons/interfaces/product";

interface ProductCardProps {
  product: Product;
  onClickPreview?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClickPreview,
}) => {
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
          <Icon size={18} name="EyeIcon" /> Vista previa
        </Button>
        <Button variant="primary">Agregar</Button>
      </div>
    </div>
  );
};

export default ProductCard;
