import React, {} from 'react'
import { List, Typography, Divider, Row, Col, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useSelector, shallowEqual } from 'react-redux';
import { LoadProductAction } from '../reducers/product';

const OrderList = () => {
    const { me } = useSelector((state) => state.user)
    const { Order }  = useSelector(state => state.cart);

    // const { Order, diff }  = useSelector(
    //     state => ({
    //       Order: state.cart.Order,
    //       diff: state.cart.diff
    //     }),
    //     shallowEqual 
    //     );

    // const { Products, loadProductLoading }  = useSelector(state => state.product);
  
    // const LoadProduct = useCallback(() =>{
    //   dispatch(LoadProductAction());
    // },[]);
    console.log(Order);

    const orderListFooter = () =>{
        return(
            <>
            <Divider></Divider>
            <Row justify="space-between">
                 <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 4 }}>
                 총 금액: $166
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 4}}>
                <Button>주문하기</Button>
                </Col>
            </Row>
            </>
        )
    }
    return (
        <>
        <Divider orientation="middle">주문서</Divider>
        <Row justify="center">
            <Col span = {18} >
                <List
                header={<div>주문서</div>}
                footer={orderListFooter()}
                bordered
                dataSource={Order}
                renderItem={item => (
                    <List.Item key={item.id}>
                    <Col span = {12} >
                    {item.title}
                    </Col>
                    <Col span = {2} >
                    X{item.quantity}
                    </Col>
                    <Col span = {2} >
                    ${item.price}
                    </Col>
                    <Col span = {2} >
                    <Button shape="circle" icon={<MinusCircleOutlined />} />
                    </Col>
                    </List.Item>
                )}
                />
        </Col>
         </Row>
        </>
    )
}

export default OrderList
