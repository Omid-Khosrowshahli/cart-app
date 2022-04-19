import { useEffect, useState } from 'react';
import './Total.css';

const Total = ({list}) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalPrice = 0;
    let totalFinalPrice = 0;

    const totals = list.map((item) => {
      totalPrice = totalPrice + Number(item.price);
      totalFinalPrice = totalFinalPrice + item.final;
      return {totalPrice: totalPrice, totalFinalPrice: totalFinalPrice, totalDiscount: 100 - (totalFinalPrice * 100 / totalPrice)};
    });

    setTotal(totals[totals.length - 1]);
  }, [list]);
  console.log(total);
  return (
    <div>
      <div className='totals'>
        <span>Total price</span>
        <span>{total?.totalPrice}</span>
      </div>
      <div className='totals'>
        <span>Total discount</span>
        <span>{total?.totalDiscount}</span>
      </div>
      <div className='totals'>
        <span>Total payment</span>
        <span>{total?.totalFinalPrice}</span>
      </div>
    </div>
  );
}

export default Total;