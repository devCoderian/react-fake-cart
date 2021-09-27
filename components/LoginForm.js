import React from 'react'
import { Input, Space, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const LoginForm = () => {
    return (
        <Space direction="horizontal">
            <Input placeholder="input username" />
            <Input.Password
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
             <Button type="primary" htmlType="submit">
            Login
            </Button>
        </Space>
    )
}

export default LoginForm;
