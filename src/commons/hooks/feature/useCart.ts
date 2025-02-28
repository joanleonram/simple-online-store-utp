import { useReducer, useEffect } from "react";
import cartReducer from "../../reducers/cartReducer";
import { Product } from "../../interfaces/product";
import useBrowserStorage from "./useBrowserStorage";

const useCart = () => {
  const [cart, setCart] = useBrowserStorage<Product[]>(
    "cart",
    [],
    "sessionStorage"
  );

  const [state, dispatch] = useReducer(cartReducer, cart);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  useEffect(() => {
    setCart(state);
  }, [state, setCart]);

  const cartCount = state.length;
  const totalAmount = state.reduce((total, product) => total + product.price, 0);

  return {
    cart: state,
    addToCart,
    removeFromCart,
    cartCount,
    totalAmount,
  };
};

export default useCart;
