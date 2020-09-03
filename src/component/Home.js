import React from 'react';
import { useAuth } from '../auth/authProvider';

function Home(props) {

    const { user, logout } = useAuth();

    return (
        <>
            This is my {user.username} page
            <button onClick={logout}>登出</button>
        </>
    )
}

export default Home;