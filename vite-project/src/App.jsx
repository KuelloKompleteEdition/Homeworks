import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import FirstApp from './FirstApp';
import { TodoApp } from './components/ToDo';
import LoginPage from './Login';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserProvider';
import Registro from './Register';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <NavComponent />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/logout" element={<LogoutButton />} />
                    <Route path="/firstapp" element={<PrivateRoute><FirstApp /></PrivateRoute>} />
                    <Route path="/todo" element={<PrivateRoute><TodoApp /></PrivateRoute>} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
