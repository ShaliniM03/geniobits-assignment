import './index.css';
import { Button, Modal, Input, Select, Space } from 'antd';
import { useState } from 'react';
import InputData from '../input';

const NewDivisionModal = props => {
    const { open, onAddData, handleCancel } = props;
    const [inputValue, setInputValue] = useState({ name: "", totalEmployee: 0 ,email:"",chargename:""});
  const { name, totalEmployee,email,chargename } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    
    const handleOk = () => {
        onAddData(inputValue);
    }

    return (
        <Modal
            open={open}
            title="Add New Division"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk} style={{ backgroundColor: '#ee430d', color: '#FFFFFF',borderColor:'#ee430d'}}>
                    Add
                </Button>
            ]}
            width={800}
      >
            <div className='newDivisionForm'>
            <Space direction="vertical">
                <InputData label='Division Name' name='name' value={name} onChange={handleChange} placeholder='Department Name' type='text'/>
                <Space>
                    <InputData label='Incharge' name='chargename' value={chargename} onChange={handleChange} placeholder='Department Lead'/>
                    <InputData label='Incharge E-mail ID' name='email' value={email} onChange={handleChange} placeholder='Enter E-mail ID' type='email'/>
                    <InputData label='Total Employees Working' name='totalEmployee' value={totalEmployee} onChange={handleChange} placeholder='' type='number'/>
                    </Space>
                    </Space>
        </div>
      </Modal>
    )
}

export default NewDivisionModal;