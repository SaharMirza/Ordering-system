import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path ="*" exact element={<Home/>} /> 
        </Routes>
      </Router>

    </div>

  );
};

export default App;