import './App.css';
import 'antd/dist/antd.css';
import CartInput from '../CartInput/CartInput';
import { useState } from 'react';
import CartList from '../CartList/CartList';
import Total from '../Total/Total';
import MyModal from '../MyModal/MyModal';

function App() {
  const [cartItem, setCartItem] = useState();
  const [list, setList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <>
      <div className="App">
        <CartInput setCartItem={setCartItem} />
        <CartList cartItem={cartItem} list={list} setList={setList} setIsModalVisible={setIsModalVisible} />
      </div>
      <Total list={list} />
      <MyModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
}

export default App;
