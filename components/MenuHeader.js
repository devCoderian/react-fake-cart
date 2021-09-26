import React from 'react'

import { PageHeader, Button, Badge} from 'antd';
import { UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import Login from './Login';
import Link from 'next/link';

const MenuHeader = () => {
  
  const isLogin = () =>{
    let headerContents = [
      <Badge count={1}>
        <Button key="2" icon={<ShoppingCartOutlined />}>
          <Link href ="/cart"> Cart</Link>
        </Button>
      </Badge>,
      <Button key="1" icon={<UserOutlined />}>
          유저명
      </Button>,
      <Login />
     
    ]
    return headerContents
  }
    return (
      <PageHeader
      ghost={false}
      title="FAKE-SHOP"
      subTitle="by devCoderian"
      extra={isLogin()}
    ></PageHeader>
    )
}

export default MenuHeader;