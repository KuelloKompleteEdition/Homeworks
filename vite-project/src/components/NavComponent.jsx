import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav className="nav">
            <NavLink
                to="/firstapp"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                FirstApp
            </NavLink>
            <NavLink
                to="/todo"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                TodoApp
            </NavLink>
        </nav>
    );
};

export default NavComponent;
