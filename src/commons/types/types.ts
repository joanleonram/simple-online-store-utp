import { Product } from "../interfaces/product";

export type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number };

export type StorageType = "localStorage" | "sessionStorage";
