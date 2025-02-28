import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface NavbarProps {
  cartCount: number;
  totalAmount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, totalAmount }) => {
  return (
    <div className="bg-blue-500 text-white p-4 fixed w-full top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold">Tienda Online - UTP</h1>
        </div>
        <div className="flex items-center">
          <ShoppingCartOutlined className="text-2xl" />
          <span className="ml-2">
            {cartCount} {cartCount === 1 ? "producto" : "productos"}
          </span>
          <span className="ml-4">Total: S/{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;