import logo from './logo.svg';
import './App.css';
import ProductDisplay from './ProductDisplay';
import StoreProduct from './StoreProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import FindProductById from './FindProductById';
function App() {
  return (
    <div className="App">
      <StoreProduct></StoreProduct>
      <hr/>
      <UpdateProduct></UpdateProduct>
      <hr/>
      <DeleteProduct></DeleteProduct>
      <hr/>
      <FindProductById></FindProductById>
      <hr/>
      <ProductDisplay></ProductDisplay>
    </div>
  );
}

export default App;
