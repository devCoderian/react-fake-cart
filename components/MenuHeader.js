import React,{useCallback, useMemo} from 'react'

import { Button, Badge, Popover} from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons';

import Link from 'next/link';

import { useDispatch, useSelector} from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import OrderList from './OrderList';

const MenuHeader = () =>  {
  const dispatch = useDispatch();
 
  const logout = useCallback(() =>{
      dispatch(logoutRequestAction());
    //Home으로 이동시키기
  },[]);
  const { logoutLoading } = useSelector((state) => state.user)
  const { Order }  = useSelector(state => state.cart);
  
  const cal = useMemo(() =>{
    let total =  Order.map ((order) =>{
        const { quantity } = order;
        return quantity;
    }).reduce((l, r)=> l+r, 0);
    return total;
},[Order]);


console.log(cal,'확인')
  const cartNum = Order? Order.length: 0;
  const content = (
    Order.length> 0?
    <div>
       {Order.map((item)=>{
        return <p>{item.title} X{item.quantity}</p>
      })}
      <Button> <Link href ="/cart"> 장바구니 가기 </Link> </Button>
    </div>:<div><p>장바구니가 비었습니다.</p></div>
  );
  // const content = () => {
  //   Order.length> 0?
  //   <div>
  //     {Order.map((item)=>{
  //      return <p>{item.title} X{item.quantity}</p>
  //     })} </div>
  //   :<div><p>장바구니가 비었습니다.</p></div>
  //   };

  return(
    <>
    {/* <Badge count={cal}> */}
    <Popover placement="bottomLeft" title='장바구니' content={content} trigger="click">
      <Button key="2" icon={<ShoppingCartOutlined />}>
      {/* <Link href ="/cart"> */}
        Cart
      {/* </Link> */}
      </Button>
    </Popover>
    {/* </Badge> */}
    
    <Button loading = {logoutLoading} key="1" onClick={logout}>
      Logout
    </Button>
    </>
  )
}

export default MenuHeader;