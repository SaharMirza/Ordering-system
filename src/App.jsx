import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Menu from './pages/Menu';
const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/:RID/Home" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/Menu" exact element={<Menu />} />
          <Route path="/About" exact element={<About />} />
          <Route path ="*" exact element={"404 NOT FOUND"} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;