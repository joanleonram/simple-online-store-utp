import React, { useState } from "react";
import { Modal, Spin } from "antd";

import { Product } from "../../commons/interfaces/product";
import useSingleProduct from "../../commons/hooks/api/products/useSingleProduct";
import ConfirmModal from "../../components/ui-system/ConfirmModal/ConfirmModal";

interface ProductPreviewModalProps {
  productId: number;
  isVisible: boolean;
  onAddToCart: () => void;
  onCancel: () => void;
  cart: Product[];
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({
  productId,
  isVisible,
  onAddToCart,
  onCancel,
  cart,
}) => {
  const { product, error, loading } = useSingleProduct(productId || 0);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const isProductInCart = cart.some((item) => item.id === productId);

  const handleAddToCart = () => {
    setIsConfirmModalVisible(true);
  };

  const handleConfirmAddToCart = () => {
    setIsConfirmModalVisible(false);
    onAddToCart();
  };

  const handleCancelAddToCart = () => {
    setIsConfirmModalVisible(false);
  };

  return (
    <>
      <Modal
        open={isVisible}
        onOk={handleAddToCart}
        onCancel={onCancel}
        okText="Agregar"
        cancelText="Cerrar"
        okButtonProps={{ disabled: isProductInCart || loading }}
        cancelButtonProps={{ disabled: loading }}
        footer={loading ? null : undefined}
        centered
      >
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Spin size="large" />
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          product && (
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto max-h-96 object-contain"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-left">
                  {product.title}
                </h2>
                <p className="text-gray-700 w-full text-left mb-4">
                  {product.description}
                </p>
                <span className="text-lg font-bold text-gray-800 bg-green-300 rounded p-1">
                  S/{product.price}
                </span>
              </div>
            </div>
          )
        )}
      </Modal>
      <ConfirmModal
        visible={isConfirmModalVisible}
        onConfirm={handleConfirmAddToCart}
        onCancel={handleCancelAddToCart}
        title="Agregar al carrito"
        content="¿Estás seguro de que deseas agregar este producto al carrito?"
        okText="Agregar"
        cancelText="Cancelar"
      />
    </>
  );
};

export default ProductPreviewModal;