import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ImagesCrud from './components/ImagesCrud';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ImagesCrud />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
