import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const { setUser, lastVisitedPage } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUser({ name: username });
        navigate(lastVisitedPage);
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
