import React,{useState, useCallback} from 'react'
import { Input, Space, Button, Form} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const LoginForm = ({setIsLogIn}) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    //컴포넌트의 props로 넘겨주는 함수는 useCallback 사용
    const onChangeId =useCallback((e)=>{
        setUserId(e.target.value);
    },[]);
    const onChangePwd = useCallback((e) =>{
        setPassword(e.target.value);
    },[]);
    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        console.log(userId, password)
        setIsLogIn(true);
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
//react, typescript + graphql
//https://www.jobkorea.co.kr/Recruit/GI_Read/35785826?Oem_Code=C1&logpath=1