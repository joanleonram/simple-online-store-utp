import React, { useState, useEffect } from "react";
import { EyeOutlined } from "@ant-design/icons";

import { Product } from "../commons/interfaces/product";
import Button from "./Button/Button";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

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
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);

  useEffect(() => {
    setIsAdded(isInCart);
  }, [isInCart]);

  const handleAdd = () => {
    setIsAddModalVisible(true);
  };

  const handleConfirmAdd = () => {
    setIsAdded(true);
    setIsAddModalVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onAddToCart && onAddToCart(product);
  };

  const handleCancelAdd = () => {
    setIsAddModalVisible(false);
  };

  const handleRemove = () => {
    setIsRemoveModalVisible(true);
  };

  const handleConfirmRemove = () => {
    setIsAdded(false);
    setIsRemoveModalVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onRemoveFromCart && onRemoveFromCart(product);
  };

  const handleCancelRemove = () => {
    setIsRemoveModalVisible(false);
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
      <ConfirmModal
        visible={isAddModalVisible}
        onConfirm={handleConfirmAdd}
        onCancel={handleCancelAdd}
        title="Agregar al carrito"
        content="¿Estás seguro de que deseas agregar este producto al carrito?"
        okText="Agregar"
        cancelText="Cancelar"
      />
      <ConfirmModal
        visible={isRemoveModalVisible}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
        title="Remover del carrito"
        content="¿Estás seguro de que deseas remover este producto del carrito?"
        okText="Eliminar"
        cancelText="Cancelar"
      />
    </div>
  );
};

export default ProductCard;