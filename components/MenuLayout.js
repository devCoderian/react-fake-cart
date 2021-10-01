import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

import { Layout, Menu, PageHeader} from 'antd';
import { UnorderedListOutlined, HomeOutlined, ShoppingCartOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import MenuHeader from './MenuHeader';
import LoginFrom from './LoginForm';
import Link from 'next/link';


const MenuLayout = ({ children }) => {

  // const [isLogIn, setIsLogIn] = useState(false);
  // 리덕스로 변경
  //const { loginDone } = useSelector(state => state.user);
  //isLogin이 바뀌면 알아서 useSelector 컴포넌트 리렌더링 된다. 
  const {me}  =  useSelector((state) => state.user);
  
  const [cartNum, setCartNum] = useState(0);
    
  return (
        <Layout>
           <PageHeader
            ghost={false}
            title="FAKE-SHOP"
            subTitle="by devCoderian"
            extra={me?<MenuHeader cartNum = {cartNum} />:<LoginFrom/>}
          ></PageHeader>
        <Layout>
          
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              selectable ={false}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link href ="/">Home</Link>
                </Menu.Item>
                {me&&<Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                  <Link href ="/cart">My Cart</Link>
                </Menu.Item>}
                <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Product">
                    <Menu.Item key="3"><Link href ="/product">All</Link></Menu.Item>
                    <Menu.Item key="4">Mens</Menu.Item>
                    <Menu.Item key="5">Womens</Menu.Item>
                    <Menu.Item key="6">jewelery</Menu.Item>
                    <Menu.Item key="7">electronics</Menu.Item>
                </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: '100vh',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

MenuLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MenuLayout;
