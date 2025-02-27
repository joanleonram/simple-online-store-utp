import { useState } from 'react';

import { Product } from '../commons/interfaces/product';
import useProducts from '../commons/hooks/api/useProducts';
import ProductPreviewModal from './ProductPreviewModal';
import ProductCard from './ProductCard';

const ProductList = () => {
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
    <div className="flex flex-wrap justify-center items-center gap-4">
      {products.map((product: Product) => (
        <div key={product.id}>
          <ProductCard product={product} onClickPreview={() => showModal(product)} />
        </div>
      ))}
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