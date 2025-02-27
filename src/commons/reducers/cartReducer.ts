import { Product } from "../interfaces/product";
import { CartAction } from "../types/types";

const cartReducer = (state: Product[], action: CartAction): Product[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.find((item) => item.id === action.product.id)) {
        return [...state, action.product];
      }
      return state;
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.productId);
    default:
      return state;
  }
};

export default cartReducer;
