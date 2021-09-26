import React from 'react'
import PropTypes from 'prop-types'

import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, HomeOutlined, ShoppingCartOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import Link from 'next/link';

import MenuHeader from './MenuHeader';


const MenuLayout = ({ children }) => {

    return (
        <Layout>
            <MenuHeader />
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
                <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                <Link href ="/cart">My Cart</Link>
                </Menu.Item>
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
