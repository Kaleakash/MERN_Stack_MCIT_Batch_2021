import logo from './logo.svg';
import './App.css';
import ProductDisplay from './ProductDisplay';
import StoreProduct from './StoreProduct';
function App() {
  return (
    <div className="App">
      <StoreProduct></StoreProduct>
      <hr/>
      <ProductDisplay></ProductDisplay>
    </div>
  );
}

export default App;
