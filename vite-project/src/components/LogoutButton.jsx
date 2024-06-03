import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LogoutButton = () => {
    const { setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
