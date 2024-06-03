import React, { useState } from 'react';
import { UserContext } from '../context/UserContext';

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lastVisitedPage, setLastVisitedPage] = useState('/');

    return (
        <UserContext.Provider value={{ user, setUser, lastVisitedPage, setLastVisitedPage }}>
            {children}
        </UserContext.Provider>
    );
};
