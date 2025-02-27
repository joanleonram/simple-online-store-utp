import "./App.css";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <ProductList />
    </div>
  );
};

export default App;
