import './MyModal.css';
import { Modal, Form, Input, Slider, Button, Divider } from 'antd';

const MyModal = ({isModalVisible, setIsModalVisible}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  }

  return (
    <Modal title='Edit cart' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
    </Modal>
  );
}

export default MyModal;