import React, { useState } from "react";
import { Spin } from "antd";

import { Product } from "../../commons/interfaces/product";
import useProducts from "../../commons/hooks/api/products/useProducts";
import ProductCard from "../../components/feature/ProductCard/ProductCard";
import ProductPreviewModal from "../ProductPreviewModal/ProductPreviewModal";

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
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleShowModal = (productId: number) => {
    setSelectedProductId(productId);
    setIsModalVisible(true);
  };

  const handleAddProductToCart = (productId: number) => {
    const product = findProductById(productId);
    if (product) {
      onAddToCart(product);
    }
    setIsModalVisible(false);
  };

  const findProductById = (productId: number) => {
    return products.find((product) => product.id === productId);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spin size="large" />
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-24">
        {products.map((product: Product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onClickPreview={() => handleShowModal(product.id)}
              onAddToCart={() => onAddToCart(product)}
              onRemoveFromCart={() => onRemoveFromCart(product.id)}
              isInCart={!!cart.find((item) => item.id === product.id)}
            />
          </div>
        ))}
      </div>
      {selectedProductId && (
        <ProductPreviewModal
          productId={selectedProductId}
          isVisible={isModalVisible}
          onAddToCart={() => handleAddProductToCart(selectedProductId)}
          onCancel={handleCloseModal}
          cart={cart}
        />
      )}
    </div>
  );
};

export default ProductList;