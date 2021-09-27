import React,{useCallback, useState} from 'react'

import { PageHeader, Button, Badge} from 'antd';
import { UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import Link from 'next/link';

const MenuHeader = ({setIsLogIn, cartNum}) =>  {
  console.log(cartNum)
  const logout = useCallback(() =>{
    setIsLogIn(false);
  },[]);
  return(
    <>
    <Badge count={cartNum}>
    <Button key="2" icon={<ShoppingCartOutlined />}>
    <Link href ="/cart"> Cart</Link>
    </Button>
    </Badge>
    <Button key="1" onClick={logout}>
      Logout
    </Button>
    </>
  )
}

export default MenuHeader;