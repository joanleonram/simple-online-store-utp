import "./App.css";
import ProductList from "./containers/ProductList/ProductList";
import Navbar from "./components/feature/Navbar/Navbar";
import useCart from "./commons/hooks/feature/useCart";

const App: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart, cartCount, totalAmount } = useCart();

  return (
    <div>
      <Navbar
        cart={cart}
        cartCount={cartCount}
        totalAmount={totalAmount}
        onClearCart={clearCart}
        onRemoveFromCart={removeFromCart}
      />
      <ProductList
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        cart={cart}
      />
    </div>
  );
};

export default App;