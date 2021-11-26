import React, { Component } from 'react';
function Menu(){
  return (
  <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Yonatan Coti</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title " id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active text-dark" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Blog</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Texto" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  )
  
  
  
}
export default Menu;