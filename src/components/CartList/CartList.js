import { useEffect, useState } from 'react';
import './CartList.css';
import { List } from 'antd';

const CartList = ({cartItem, list, setList}) => {

  useEffect(() => {
    if(cartItem) {
      let newList = [...list, cartItem];
      setList(newList);
    }
  }, [cartItem]);

  
  return (
    <List
      bordered
      dataSource={list}
      renderItem={item => (
        <List.Item>
           <div className='carts-list'>
             <div className='list-row'>
               <span className='label'>Product name</span><span className='info'>{item.productName}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Price</span><span className='info'>{item.price}</span>
             </div>
             <div className='list-row'>
               <span className='label'>Discount</span><span className='info'>{item.discount} %</span>
             </div>
             <div className='list-row'>
               <span className='label'>Final price</span><span className='info'>{item.final}</span>
             </div>
           </div>
        </List.Item>
      )}
    />
  );
}

export default CartList;