import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import FirstApp from './FirstApp';
import { TodoApp } from './components/ToDo';

const App = () => {
    return (
        <Router>
            <NavComponent />
            <Routes>
                <Route path="/firstapp" element={<FirstApp />} />
                <Route path="/todo" element={<TodoApp />} />
            </Routes>
        </Router>
    );
};

export default App;
