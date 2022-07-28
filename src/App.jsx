import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
// import About from './pages/About';
// import Menu from './pages/Menu';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const loggedin = localStorage.getItem("AcessToken")
  return (
   
      <Router>
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/cart">
            {loggedin && <Route index element={<Cart />} />}
            {!loggedin && <Route index element={<Register />} />}
          </Route>
          {/* <Route path="/Menu" exact element={<Menu />} /> */}
          {/* <Route path="/About" exact element={<About />} /> */}
          <Route path="/Register" exact element={<Register />} />
          <Route path="*" exact element={"404 NOT FOUND"} />
        </Routes>
      </Router>
    
  );
};

export default App;