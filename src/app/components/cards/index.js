import './index.css';
import { Card } from 'antd';

const CardData = props => {
    const { data } = props;

    return (
        <div className='card'>
            <div className='cardTitle'>
                <span>{data.name}</span>
                <span> ...</span>
            </div>
            <div className='cardContent'>
            <p>Incharge: {data.chargename}</p>
            <p>Email ID: {data.email}</p>
                <p>Total Employees: {data.totalEmployee}</p>
                </div>
            </div>
    )
}

export default CardData;