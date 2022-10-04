import './index.css';
import {
    UserOutlined,
    BellOutlined
  } from '@ant-design/icons';
import { Button, Space, Badge,Breadcrumb } from 'antd';
import Logo from '../../assets/images/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><img src={Logo} width='50' height='50' alt='logo' className='logoImg' /></div>
            <Breadcrumb separator=">">
                <Breadcrumb.Item className='bcItemName'>My Apps</Breadcrumb.Item>
                <Breadcrumb.Item className='bcItemName'>Client</Breadcrumb.Item>
                            <Breadcrumb.Item className='bcItemNameActive'>Sites</Breadcrumb.Item>
                </Breadcrumb>
            <Space align='end' size='large' className='space'>
            <Badge dot>
                <Button shape='round' icon={<BellOutlined />} className='icon' />
            </Badge>
            <Button shape='round' icon={<UserOutlined />} className='icon'/>
            </Space>
        </div>
    )
}

export default Header;