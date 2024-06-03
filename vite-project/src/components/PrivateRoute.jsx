import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, setLastVisitedPage } = useContext(UserContext);
    const location = useLocation();

    if (!user) {
        setLastVisitedPage(location.pathname);
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
