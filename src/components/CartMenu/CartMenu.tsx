import React from "react";
import { Menu, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { Product } from "../../commons/interfaces/product";

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
  return (
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
              onClick={() => onRemoveFromCart(product.id)}
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
        <Button type="link" onClick={onClearCart}>
          Vaciar Carrito
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default CartMenu;
