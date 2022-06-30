import React from 'react';
import './style.css';
import Logo from '../../common/Logo';

const Navbar = () => {
  const id = localStorage.getItem("RID")
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
            <a class="nav-link" href="/About" >About</a>
            <a class="nav-link" href="/Menu">Menu</a>
            <a class="nav-link " href="/Locations">Locations</a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
