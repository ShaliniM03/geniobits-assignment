import './index.css';
import { useState } from 'react';
import Sider from '../../containers/sider';
import { Button ,Breadcrumb} from 'antd';
import {PlusOutlined,ArrowLeftOutlined} from '@ant-design/icons'
import NewDivisionModal from '../../components/newDivisonModal';
import CardData from '../../components/cards';
import Filter from '../../containers/filter';

function Home() {
    const [activeMenu, setActiveMenu] = useState('My Apps');
    const [data, setData] = useState([]);
    const [modal, showModal] = useState(false);

    const onMenuDataClick = value => {
        setActiveMenu(value);
    }

    const onAddClick = () => {
        showModal(true);
    }

    const onCancelClick = () => {
        showModal(false);
    }

    const onAddDivision = (values) => {
        data.push(values);
        setData(data);
        console.log(values, data);
        onCancelClick();
    }

    return (
        <div className='home'>
            <Sider onMenuDataClick={onMenuDataClick} activeMenu={activeMenu} />
            <div className='homeData'>
                <div className='containers'>
                    <div className='leftData'>
                    <Breadcrumb separator=">">
                            <Breadcrumb.Item className='bcItemName'><ArrowLeftOutlined /> Century</Breadcrumb.Item>
                            <Breadcrumb.Item className='bcItemNameActive'>Divisions</Breadcrumb.Item>
                            </Breadcrumb>
                        <div className='cardData'>
                        {data && data.length > 0 && data.map(items => {
                            return (
                                <CardData data={items} />
                            )
                        })}
                            </div>
                    </div>
                    <div className='rightData'>
                        <Button style={{ backgroundColor: '#ee430d', color: '#FFFFFF', width: '100%',borderColor:'#ee430d' }} icon={<PlusOutlined />} onClick={onAddClick}> Add New Division </Button>
                        <Filter />
                        </div>
                </div>
            </div>
            {modal && <NewDivisionModal open={modal} onAddData={onAddDivision} handleCancel={onCancelClick} />}
        </div>
    )
}

export default Home;