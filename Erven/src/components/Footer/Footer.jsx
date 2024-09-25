import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import instagram from './instagram.svg';
import facebook from './facebook.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <table className="mi-tabla">
        <tr>
          <td className="column">
            <ul className="lista">
              <li className="item">
                <Link to="/Erven/esp/contenedor">Servicios</Link>
              </li>
              <li className="item">
                <Link to="productos">Productos</Link>
              </li>
              <li className="item">
                <Link to="proyectos">Proyectos</Link>
              </li>
              <li className="item">
                <Link to="nosotros">Nosotros</Link>
              </li>
              <li className="item">
                <Link to="contacto">Contacto</Link>
              </li>
            </ul>
          </td>
          <td className="column">
            <ul className="lista2">
              <li>Erben GMS S.R.L</li>
              <li>Erben GMS S.R.L</li>
              <li>Email: m.ogawa@erbengms.com / m.dome@erbengms.com</li>
              <li>Tel: +54 9 11 6458-4382</li>
            </ul>
          </td>
          <td className="column">
            <div className='icon-container'>
            <img src={instagram} alt="instagram" className="svgs" />
            <img src={facebook} alt="face" className="svgs" />
            </div>
          </td>
        </tr>
    </table>
    </footer>
  );
}

export default Footer