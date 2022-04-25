import { useEffect } from 'react';
import './CartList.css';
import { List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const CartList = ({cartItem, list, setList, setDataToBeEdited}) => {

  useEffect(() => {
    if(cartItem) {
      let newList = [...list, cartItem];
      setList(newList);
    }
  }, [cartItem]);

  const deleteCart = (id) => {
    let newList = list.filter((item) => id !== item.id)
    setList(newList);
  }

  return (
    <List
      bordered
      dataSource={list}
      renderItem={item => (
        <List.Item>
           <div className='carts-list'>
             <div className='list-row'>
               <span className='label'>Product name</span>
               <span className='info'>{item.productName}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Price</span>
               <span className='info'>{item.price}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Count</span>
               <span className='info'>{item.count}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Discount</span>
               <span className='info'>{item.discount} %</span>
             </div>
             <div className='list-row'>
               <span className='label'>Final price</span>
               <span className='info'>{item.final}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Actions</span>
               <div>
               <span className='info' onClick={() => deleteCart(item.id)}><DeleteOutlined /></span>
               <span className='info' onClick={() => setDataToBeEdited(item)}><EditOutlined /></span>
               </div>
             </div>
           </div>
        </List.Item>
      )}
    />
  );
}

export default CartList;