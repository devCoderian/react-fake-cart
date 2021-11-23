import { Input, Space } from "antd";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequestAction } from "../reducers/user";

function SignUpForm() {
    const dispatch = useDispatch();
    const [userId, setUserId] =  useState('');
    const [userName, setUserName] =  useState('');
    const [pwd, setPwd] =  useState('');

    const onChangeUserId =useCallback((e)=>{
        setUserId(e.target.value);
    },[]);
    const onChangeName = useCallback((e) =>{
        setUserName(e.target.value);
    },[]);
    const onChangePwd = useCallback((e) =>{
        setPwd(e.target.value);
    },[]);

    const onSubmit = useCallback(()=>{
        dispatch(signUpRequestAction({userId, userName, pwd}));
        // dispacth({
        //     type: SIGN_UP_REQUEST, 
        //     data : {userId, userName, pwd }
        // })
    },[userId, userName, pwd,]);

    return (
        <>
        <Space direction="horizontal">
        <Input name = "user-id" type = "text" value = {userId}  onChange = {onChangeUserId} required />
        <Input name = "user-name" type = "text" value = {userName}  onChange = {onChangeName} required />
        <Input name = "password" type = "password" value = {pwd}  onChange = {onChangePwd} required />
        <Input type="submit" value="회원가입" onClick={onSubmit} />
        </Space>
        </>

        // <Form onFinish = {onSubmit}>
        // <div>
        //     <label htmlFor ="user-id">이메일</label>
        //     <br />
        //     <Input name = "user-id" type = "text" value = {email} required onChange = {onChangeEmail} />
        // </div>
        // <div>
        //     <label htmlFor ="user-nick">닉네임</label>
        //     <br />
        //     <Input name = "user-nick" value = {nickname} required onChange = {onChangeNickname} />
        // </div>
        // </Form>
    )
}

export default SignUpForm
