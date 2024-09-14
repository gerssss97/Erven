import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import flagArgentina from './flagArgentina.svg';
import flagInglaterra from './flagInglaterra.svg';

const Header = () => {
  return (
    <header>
      <nav className="navbar" >
    
        {/* <div className="navbar-logo">
          <img src="#" alt="Logo de la Compañía" id="logo">
        </div> */}
        <ul className="navbar-links">
          <li className="nav-link">
            <Link to="servicios">Servicios</Link>
          </li>
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
          <Link to="/Erven/esp/contenedor">
          <img src={flagArgentina} alt="España" className="flag" />
          </Link>
          <span style={{ fontSize: '30px', color:'darkblue', padding:'0px 0px 3px 0px'}}>/</span>
          <Link to="/Erven/eng/contenedor">
          <img src={flagInglaterra} style={{paddingLeft:'2px'}} alt="Inglaterra" className="flag" />
          </Link>
        </div>
      </nav>
  </header>
  );
}

export default Header
