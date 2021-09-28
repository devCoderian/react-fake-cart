import React, { useCallback, useState} from 'react'
import { Row, Col } from 'antd'
import { List, Button, Space,Card} from 'antd';
import { DollarCircleOutlined, HeartOutlined, HeartTwoTone, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { addCartAction } from '../reducers/cart';

const ProductList = () => {
  
  const dispatch = useDispatch();
  const { Products }  = useSelector(state => state.cart);
  console.log(Products);

  const addCart = useCallback(() =>{
    dispatch(addCartAction());
  },[]);

  const [liked, setLiked] = useState(false);
  const onToggle = useCallback(() =>{
    setLiked((prev) => !(prev));
  },[]);
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        id:{i},
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          price: `${i}`
        });
    }
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
    const style = { background: '#fff', padding: '8px 20px',marginBottom: '60px'};
    return (
        <Row  gutter={16} justify="center">
        <Col span = {18}>
        <List   style={style}
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[
                    <IconText icon={DollarCircleOutlined} text={item.price} key="list-vertical-star-o" />,
                    liked?<HeartTwoTone  key ={item.id} twoToneColor = "red" onClick={onToggle}/>:<HeartOutlined onClick={onToggle} />,
                    <Button icon={<ShoppingCartOutlined />} onClick={addCart}>
                    </Button>,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
          </Col>
        </Row>
    )
}

export default ProductList
