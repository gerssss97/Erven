import React from 'react';
import './Landing.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrusel from './Carrusel';
import frame from './Frame 1.jpg';
import imagen from './trabajandoGrupo 1.png'
import triangulo from './Polygon 1.svg'
import Footer from '../Footer/Footer';

import '../Footer/Footer.css';
import instagram from '../Footer/instagram.svg';
import facebook from '../Footer/facebook.svg'



const Landing = ()=> {
  return (
  <><div className="container-TODO">
  <div class="trabajandogrupo-1-parent">
    <img className="trabajandogrupo-1-icon" src={imagen}></img>
    <div className="rectangulo-azul"></div>
    <div className="slogan">SLOGAN</div>
    <img className="triangulo" src={triangulo}></img>
    <div className="rectangulo-blanco"></div>
    <div className="rectangulo-gris"></div>
  </div>

  <div className='texto-central'> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, 
    nobis ex, ad tenetur libero saepe voluptatum est alias incidunt, itaque dignissimos! Enim
     maxime qui laudantium ut, provident cumque delectus temporibus!</p></div>
  <Carrusel></Carrusel>
  <div className='texto-central'> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, 
    nobis ex, ad tenetur libero saepe voluptatum est alias incidunt, itaque dignissimos! Enim
     maxime qui laudantium ut, provident cumque delectus temporibus!</p></div>
  </div>

  <div>
  <table className="mi-tabla">
        <tr>
          <td className="column">
            <ul className="lista">
            
            </ul>
          </td>
        </tr>
    </table>
  </div>
  </> 
  );
};

export default Landing;
