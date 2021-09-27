import React from 'react'
import { List, Typography, Divider, Row, Col, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  
const CartList = () => {
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
        <Divider orientation="left">Default Size</Divider>
        <Row justify="center">
            <Col span = {14} >
                <List
                header={<div>주문서</div>}
                footer={orderListFooter()}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                    <Col span = {10} >
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </Col>
                    <Col span = {4} >
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

export default CartList
