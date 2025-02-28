import { Product } from "../../../../commons/interfaces/product";

export const mockCart: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    image: "image1.jpg",
    description: "Description 1",
    category: "",
    rating: {
      rate: 4,
      count: 1,
    },
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    image: "image2.jpg",
    description: "Description 2",
    category: "",
    rating: {
      rate: 4,
      count: 1,
    },
  },
];
