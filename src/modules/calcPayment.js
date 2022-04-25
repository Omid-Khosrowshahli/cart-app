const calcPayment = (price, discount, count) => {
  return count * price * (1 - discount/100);
}

export default calcPayment;