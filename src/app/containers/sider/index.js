import './index.css';
import {
    AppstoreOutlined,
    UsergroupAddOutlined,
    HomeOutlined,
    SettingOutlined,
    LogoutOutlined
  } from '@ant-design/icons';

const menuData = [
    {
        key: 1,
        name: 'My Apps',
        icon:<AppstoreOutlined />
    },
    {
        key: 2,
        name: 'Resources',
        icon:<UsergroupAddOutlined />
    }
]

const menuData1 = [
    {
        key: 1,
        name: 'My Organization',
        icon:<HomeOutlined />
    },
    {
        key: 2,
        name: 'Settings',
        icon:<SettingOutlined />
    },
    {
        key: 3,
        name: 'Logout',
        icon:<LogoutOutlined />
    }
]

const Sider = (props) => {
    const { onMenuDataClick,activeMenu } = props;
    return (
        <div className='menu'>
            <ul className='menuData'>
            {menuData.map(items => {
                return <li key={items.key} className={`menuValue ${activeMenu === items.name ? 'activeMenu' : ''}`}
                onClick={()=>onMenuDataClick(items.name)}><i className='menuIcon' >{items.icon}</i>{items.name}</li>
                })}
            </ul>
            <ul className='footerMenu'>
                {menuData1.map(items => {
                    return <li key={items.key} className={`menuValue ${activeMenu === items.name ? 'activeMenu' : ''}`}onClick={()=>onMenuDataClick(items.name)}><i className='menuIcon' >{items.icon}</i>{items.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Sider;