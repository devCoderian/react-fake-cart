import React,{useCallback, useState} from 'react'

import { Button, Badge} from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons';

import Link from 'next/link';

import { useDispatch, useSelector} from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const MenuHeader = () =>  {

  const dispatch = useDispatch();
  const logout = useCallback(() =>{
      dispatch(logoutRequestAction());
    //Home으로 이동시키기
  },[]);
  const { logoutLoading } = useSelector((state) => state.user)
  const { Products }  = useSelector(state => state.cart);
  
  const cartNum = Products? Products.length: 0;

  return(
    <>
    <Badge count={cartNum}>
      <Button key="2" icon={<ShoppingCartOutlined />}>
        <Link href ="/cart"> Cart</Link>
      </Button>
    </Badge>
    
    <Button loading = {logoutLoading} key="1" onClick={logout}>
      Logout
    </Button>
    </>
  )
}

export default MenuHeader;