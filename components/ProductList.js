import React from 'react'
import { Row, Col } from 'antd'
import { List, Button, Space,Card} from 'antd';
import { DollarCircleOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
const { Meta } = Card;

const ProductList = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
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
                    key={item.title}
                    actions={[
                    <IconText icon={DollarCircleOutlined} text={item.price} key="list-vertical-star-o" />,
                    <Button icon={<ShoppingCartOutlined />}>
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
