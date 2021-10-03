import React, { useCallback, useState, useEffect} from 'react'
import { Row, Col } from 'antd'
import { List, Button, Space,Card} from 'antd';
import { DollarCircleOutlined, HeartOutlined, HeartTwoTone, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';

import { useSelector, useDispatch, shallowEqual} from 'react-redux';
import { LoadProductAction } from '../reducers/product';
import { addCartAction } from '../reducers/cart';

const ProductList = () => {
  

  const { Products, loadProductLoading }  = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { Order}  = useSelector(state => state.cart);

  console.log('Order',Order)

  const LoadProduct = useCallback(() =>{
    dispatch(LoadProductAction());
  },[]);


  const addCart = useCallback((item) =>{
    console.log('item',item)
    dispatch(addCartAction(item));
  },[]);

  // const [liked, setLiked] = useState(false);
  // const onToggle = useCallback(() =>{
  //   setLiked((prev) => !(prev));
  // },[]);

  useEffect(() => {
    LoadProduct();
  }, []);

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
                loading = {loadProductLoading}
                dataSource={Products}
                renderItem={item => (
                <List.Item
                   
                    key={item.id}
                    actions={[
                    <IconText icon={DollarCircleOutlined} text={item.price} key="list-vertical-star-o" />,
                    // liked?<HeartTwoTone  key ={item.id} twoToneColor = "red" onClick={onToggle}/>:<HeartOutlined onClick={onToggle} />,
                    <Button icon={<ShoppingCartOutlined />} onClick={() =>addCart(item)}>
                    </Button>,
                    ]}
                    extra={
                    <img
                        width={150}
                        height ={200}
                        alt="logo"
                        src={item.image}
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
