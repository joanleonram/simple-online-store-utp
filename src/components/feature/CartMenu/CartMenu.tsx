import React, { useState } from "react";
import { Menu, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { Product } from "../../../commons/interfaces/product";
import ConfirmModal from "../../ui-system/ConfirmModal/ConfirmModal";

interface CartMenuProps {
  cart: Product[];
  totalAmount: number;
  onClearCart: () => void;
  onRemoveFromCart: (productId: number) => void;
}

const CartMenu: React.FC<CartMenuProps> = ({
  cart,
  totalAmount,
  onClearCart,
  onRemoveFromCart,
}) => {
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
  const [isClearModalVisible, setIsClearModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleRemoveClick = (productId: number) => {
    setSelectedProductId(productId);
    setIsRemoveModalVisible(true);
  };

  const handleConfirmRemove = () => {
    if (selectedProductId !== null) {
      onRemoveFromCart(selectedProductId);
    }
    setIsRemoveModalVisible(false);
  };

  const handleCancelRemove = () => {
    setIsRemoveModalVisible(false);
  };

  const handleClearCartClick = () => {
    setIsClearModalVisible(true);
  };

  const handleConfirmClearCart = () => {
    onClearCart();
    setIsClearModalVisible(false);
  };

  const handleCancelClearCart = () => {
    setIsClearModalVisible(false);
  };

  return (
    <>
      <Menu>
        <div className="py-3 px-3">
          <span className="font-bold text-lg">Carrito</span>
        </div>
        {cart.map((product) => (
          <Menu.Item key={product.id}>
            <div className="flex justify-between items-center">
              <span className="truncate max-w-xs">{product.title}</span>
              <DeleteOutlined
                className="text-red-500 cursor-pointer pl-2"
                onClick={() => handleRemoveClick(product.id)}
              />
            </div>
          </Menu.Item>
        ))}
        <div className="py-3 px-3">
          <span className="font-semibold text-md">
            Total: S/{totalAmount.toFixed(2)}
          </span>
        </div>
        <Menu.Item key="clear">
          <Button type="link" onClick={handleClearCartClick}>
            Vaciar Carrito
          </Button>
        </Menu.Item>
      </Menu>
      <ConfirmModal
        visible={isRemoveModalVisible}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
        title="Remover del carrito"
        content="¿Estás seguro de que deseas remover este producto del carrito?"
        okText="Eliminar"
        cancelText="Cancelar"
      />
      <ConfirmModal
        visible={isClearModalVisible}
        onConfirm={handleConfirmClearCart}
        onCancel={handleCancelClearCart}
        title="Vaciar carrito"
        content="¿Estás seguro de que deseas vaciar el carrito?"
        okText="Vaciar"
        cancelText="Cancelar"
      />
    </>
  );
};

export default CartMenu;
