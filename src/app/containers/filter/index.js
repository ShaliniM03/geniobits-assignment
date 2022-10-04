import './index.css';
import { Button, Select } from 'antd';
const { Option } = Select;

const Filter = props => {
    return (
        <div className='filter'>
            <p>Filters</p>
            <label className='inputDataLabel'>By Division</label>
            <Select
    showSearch
                    className='filterSelect'
                    bordered={false}
                    placeholder="Search by division">
            </Select>
            <div className='applyButton'>
                <Button type="primary" style={{ backgroundColor: '#f0c24f', color: '#FFFFFF',borderColor:'#f0c24f'}}>
                    Apply
                </Button>
                </div>
        </div>
    )
}

export default Filter;