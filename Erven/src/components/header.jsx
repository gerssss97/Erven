import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar">
    
        {/* <div className="navbar-logo">
          <img src="#" alt="Logo de la Compañía" id="logo">
        </div> */}
        <ul className="navbar-links">
          <li><Link to="servicios">Servicios</Link></li>
          <li className="nav-link">
            <Link to="productos">Productos</Link>
          </li>
          <li className="nav-link">
            <Link to="proyectos">Proyectos</Link>
          </li>
          <li className="nav-link">
            <Link to="nosotros">Nosotros</Link>
          </li>
          <li className="nav-link">
            <Link to="contacto">Contacto</Link>
          </li>
        </ul>
        <div className="navbar-flags">
          {/* <img src="flag-es.png" alt="España" class="flag">
          <img src="flag-us.png" alt="Estados Unidos" class="flag"> */}
        </div>
      </nav>
  </header>
  )
}

export default Header
