import React from "react";
import { Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { Product } from "../../../commons/interfaces/product";
import CartMenu from "../CartMenu/CartMenu";

interface CartDropdownProps {
  cart: Product[];
  cartCount: number;
  totalAmount: number;
  onClearCart: () => void;
  onRemoveFromCart: (productId: number) => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({
  cart,
  cartCount,
  totalAmount,
  onClearCart,
  onRemoveFromCart,
}) => {
  return (
    <Dropdown
      overlay={
        <CartMenu
          cart={cart}
          totalAmount={totalAmount}
          onClearCart={onClearCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      }
      trigger={["click"]}
    >
      <div className="flex items-center cursor-pointer">
        <ShoppingCartOutlined className="text-2xl" />
        <span className="ml-2">
          {cartCount} {cartCount === 1 ? "producto" : "productos"}
        </span>
        <span className="ml-4">Total: S/{totalAmount.toFixed(2)}</span>
      </div>
    </Dropdown>
  );
};

export default CartDropdown;
