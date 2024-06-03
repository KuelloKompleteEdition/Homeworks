import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './NavComponent.css';

const NavComponent = () => {
    const { user } = useContext(UserContext);

    return (
        <nav className="nav">
            <NavLink to="/firstapp" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                FirstApp
            </NavLink>
            <NavLink to="/todo" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                TodoApp
            </NavLink>
            {user ? (
                <>
                    <span className="nav-link">{user.name}</span>
                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                </>
            ) : (
                <NavLink to="/login" className="nav-link">Login</NavLink>
            )}
        </nav>
    );
};

export default NavComponent;
