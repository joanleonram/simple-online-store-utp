import React, { useState } from "react";

import { Product } from "../commons/interfaces/product";
import useProducts from "../commons/hooks/api/useProducts";
import ProductPreviewModal from "./ProductPreviewModal";
import ProductCard from "./ProductCard";

interface ProductListProps {
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
  cart: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  onAddToCart,
  onRemoveFromCart,
  cart,
}) => {
  const { products, error, loading } = useProducts();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
        {products.map((product: Product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onClickPreview={() => showModal(product)}
              onAddToCart={() => onAddToCart(product)}
              onRemoveFromCart={() => onRemoveFromCart(product.id)}
              isInCart={!!cart.find((item) => item.id === product.id)}
            />
          </div>
        ))}
      </div>
      <ProductPreviewModal
        product={selectedProduct}
        isVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ProductList;
