import './App.css';
import 'antd/dist/antd.css';
import CartInput from '../CartInput/CartInput';
import { useState } from 'react';
import CartList from '../CartList/CartList';
import Total from '../Total/Total';

function App() {
  const [cartItem, setCartItem] = useState();
  const [list, setList] = useState([]);
  
  return (
    <>
      <div className="App">
        <CartInput setCartItem={setCartItem} />
        <CartList cartItem={cartItem} list={list} setList={setList} />
      </div>
      <Total list={list} />
    </>
  );
}

export default App;
