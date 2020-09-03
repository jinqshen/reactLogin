import React, { useState } from 'react';
import { useAuth } from '../auth/authProvider';

function Login(props) {

    const [ username, setUserName ] = useState('');
    const [ password, setPassWord ] = useState('');

    const { login } = useAuth();

    function userLogin() {
        login({username: username, password: password});
    }

    return (
        <>
            用户名：<input type="text" value={username} name="username" onChange={e => setUserName(e.target.value)} /><br/>
            密码：<input type="password" value={password} name="password" onChange={e => setPassWord(e.target.value)} /><br/>
            <button type="button" onClick={userLogin}>登录</button>
        </>
    )
}

export default Login;