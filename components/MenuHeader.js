import React,{useState} from 'react'

import { PageHeader, Button, Badge} from 'antd';
import { UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import Link from 'next/link';

const MenuHeader = () => {
  
  return(
    <>
    <Badge count={1}>
    <Button key="2" icon={<ShoppingCartOutlined />}>
    <Link href ="/cart"> Cart</Link>
    </Button>
    </Badge>
    <Button key="1" icon={<UserOutlined />}>
      유저명
    </Button>
    </>
  )
}

export default MenuHeader;