import './index.css';
import { Input ,InputNumber} from 'antd';

const InputData = props => {
    const { label, placeholder, name, value, onChange,type } = props;
    return (
        <div className='inputData'>
            <label className='inputDataLabel'>{label}</label>
            <Input placeholder={placeholder} className='inputDataInput' value={value} name={name} onChange={onChange} />
        </div>
    )
}

export default InputData;