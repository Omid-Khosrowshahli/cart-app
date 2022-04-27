import './MyModal.css';
import { Modal, Form, Input, Slider, Button, Divider } from 'antd';
import { useState } from 'react';
import calcPayment from '../../modules/calcPayment';

const MyModal = ({dataToBeEdited, setDataToBeEdited, list, setList}) => {
  const [price, setPrice] = useState(dataToBeEdited?.price);
  const [discount, setDiscount] = useState(dataToBeEdited?.discount);
  const [count, setCount] = useState(dataToBeEdited?.count);
  
  const onFinish = (values) => {
    if(!values.discount) {
      values.discount = 0;
    }
    if(!values.count) {
      values.count = 1;
    }
    values = {...values, final: Math.floor(calcPayment(price, discount, count)), id: dataToBeEdited.id}
    
    let editedlist = list.map((item) => (
      values.id === item.id ? values : item
    ));

    setList(editedlist);
    setDataToBeEdited(null);
  };
    
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    setDataToBeEdited(null);
  }
  
  return (
    <Modal destroyOnClose={true} title='Edit cart'
      footer={null} visible={dataToBeEdited} onCancel={handleCancel}
    >
      <Form
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 0,
      }}
      initialValues={dataToBeEdited}
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
          label="Count of product"
          name="count"
        >
          <Input type='number' min={1} onChange={(event) => setCount(event.target.value)} />
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
          <Divider>{Math.floor(calcPayment(price, discount, count))} $</Divider>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MyModal;