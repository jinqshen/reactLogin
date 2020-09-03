import axios from "axios";

const url = "http://localhost/";

const auth_key = '_mouse_auth_key_';

async function getToken() {//用于已经登录得用户，通过token来获取用户数据信息
    const token = await window.localStorage.getItem(auth_key);
    return token;
}

async function login(username, password) {
    try {
        /* const res = await axios.post(url + 'login', {
            username: username,
            password: password
        });
        if(res.ok) { //登陆成功，将信息存入localStorage { id:xxx, username:xxxx, token:xxx }
            window.localStorage.setItem(auth_key, res.data.token);
            return res.data;
        }else {
            return Promise.reject(res.data);
        } */
        window.localStorage.setItem(auth_key, '451daqw_sadkAD');
        return { id: 10258, username: 'jinqshen', token: '451daqw_sadkASD' };
    } catch (error) {
        return Promise.reject(error);
    }
}

async function logout() {
    try {
        /* const res = await axios.get(url + 'logout');
        if(res.ok) { //登出成功，将信息存入localStorage
            window.localStorage.removeItem(auth_key);
        }else {
            return Promise.reject(res.data);
        } */
        window.localStorage.removeItem(auth_key);
    } catch (error) {
        return Promise.reject(error);
    }
    
}



export default { getToken, login, logout };