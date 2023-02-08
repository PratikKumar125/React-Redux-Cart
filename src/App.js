import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cart from './components/Cart';
import Products from './components/Products';
function App(){
  return (
    <div className="App">
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
