import './CartInput.css';
import { Form, Input, Slider, Button, Divider } from 'antd';
import { useState } from 'react';


const CartInput = ({setCartItem}) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
      
  const onFinish = (values) => {
    if(!values.discount) {
      values.discount = 0;
    }
    values = {...values, final: Math.floor(price * (1 - discount/100))}
    setCartItem(values);
  };
    
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 0,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='form'
    >
      <Form.Item
        label="Product name"
        name="productName"
        rules={[
          {
            required: true,
            message: 'Please input product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input price!',
          },
        ]}
      >
        <Input type='number' onChange={(event) => setPrice(event.target.value)} />
      </Form.Item>

      <Form.Item
        label="Discount"
        name="discount"
      >
        <Slider onChange={(value) => setDiscount(value)} />
      </Form.Item>
      
      <Form.Item
        label="Final price"
        name="final"
        className='final-price'
      >
        <Divider>{Math.floor(price * (1 - discount/100))} $</Divider>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CartInput;