import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar/Navbar";
import useCart from "./commons/hooks/feature/useCart";

const App = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="flex flex-wrap justify-center items-center gap-4 mt-16 p-2">
        <ProductList
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default App;