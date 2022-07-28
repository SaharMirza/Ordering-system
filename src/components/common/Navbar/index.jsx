import React from 'react';
import './style.css';
import Logo from '../../common/Logo';

const Navbar = () => {

  const isLogged = localStorage.getItem("AcessToken")
  
  const logout = () => {
    localStorage.removeItem("AcessToken")
    localStorage.removeItem("RefreshToken")
    window.location = "/home";
  }

  const login = () => {
    window.location = "/register";

  }

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Logo />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/Home">Home</a>
            <a class="nav-link active" href="#about">About</a>
            <a class="nav-link active" href="/Menu">Menu</a>
            <a class="nav-link active" href="#locations">Locations</a>
            {isLogged ? (
              <button className="btn btn-danger" onClick={logout} style={{marginLeft:20}}>Logout</button>
            ) :
              (
                <button className="btn btn-danger" onClick={login} style={{marginLeft:20}}>Login</button>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
