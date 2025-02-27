import React from "react";
import { Modal } from "antd";

import { Product } from "../commons/interfaces/product";

interface ProductPreviewModalProps {
  product: Product | null;
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({
  product,
  isVisible,
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      //   title="Vista previa del producto"
      open={isVisible}
      onOk={onOk}
      onCancel={onCancel}
    >
      {product && (
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2 text-left">
            {product.title}
          </h2>
          <p className="text-gray-700 w-full text-left">
            {product.description}
          </p>
          <span className="text-lg font-bold text-gray-800 bg-red-100 rounded p-1">
            S/{product.price}
          </span>
        </div>
      )}
    </Modal>
  );
};

export default ProductPreviewModal;
