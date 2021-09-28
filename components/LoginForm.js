import React,{useState, useCallback} from 'react'
import { Input, Space, Button, Form} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const LoginForm = () => {
    
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeId =useCallback((e)=>{
        setUserId(e.target.value);
    },[]);
    const onChangePwd = useCallback((e) =>{
        setPassword(e.target.value);
    },[]);

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        dispatch(loginAction({userId, password}));
        //setIsLogIn(true);
    },[userId, password]);

    return (
        <Space direction="horizontal">
            <Input type="text" value = {userId} onChange={onChangeId} placeholder="input username" />
            <Input.Password
            value = {password} 
            onChange={onChangePwd}
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Login
            </Button>
        </Space>
    )
}

export default LoginForm;