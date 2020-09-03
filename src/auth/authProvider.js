import React, { useState, useCallback, createContext, useMemo, useContext, useEffect } from 'react';
import axios from 'axios';
import auth from './auth';

const url = "http://localhost/";

async function getUserInfo() {
    const token = await auth.getToken();
    if(token) {
        /* const res = axios.post(url + 'getUserInfo', {
            token: user.token
        }); */
        const user = { id: 10258, username: 'jinqshen', token: '451daqw_sadkASD' };
        return user;// { id:xxx, username:xxx, token:xxx }
    }
}

const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {

    const [ user, setUser ] = useState();

    useEffect(() => {
        getUserInfo().then(user => {
            setUser(user);
        });
    }, []);

    const login = useCallback((form) => {
        auth.login(form.username, form.password).then((user) =>setUser(user));
    });

    const logout = useCallback(() => {
        auth.logout().then(() => setUser(null));
    });

    //将login，logout，user通过Context传递子组件
    const value = useMemo(() => {
        console.log(user)
        return {user, login, logout}
    }, [
        login,
        logout,
        user,
    ]);

    return (
        <AuthContext.Provider {...props} value={value}></AuthContext.Provider>
    );
    
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context;
}

export { AuthProvider, useAuth };