import React from "react";

import { Product } from "../../commons/interfaces/product";
import CartDropdown from "../CartDropdown/CartDropdown";

interface NavbarProps {
  cart: Product[];
  cartCount: number;
  totalAmount: number;
  onClearCart: () => void;
  onRemoveFromCart: (productId: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cart,
  cartCount,
  totalAmount,
  onClearCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="bg-blue-500 text-white p-4 fixed w-full top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold">Tienda Online - UTP</h1>
        </div>
        <div className="flex items-center">
          <CartDropdown
            cart={cart}
            cartCount={cartCount}
            totalAmount={totalAmount}
            onClearCart={onClearCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
