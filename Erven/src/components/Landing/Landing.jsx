import React from 'react';
import './Landing.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrusel from './Carrusel';
import frame from './Frame 1.jpg';
import imagen from './trabajandoGrupo 1.png'
import triangulo from './Polygon 1.svg'



const Landing = ()=> {
  return (
  <>
  <div class="trabajandogrupo-1-parent">
    <img className="trabajandogrupo-1-icon" src={imagen}></img>
    <div className="rectangulo-azul"></div>
    <div className="slogan">SLOGAN</div>
    <img className="triangulo" src={triangulo}></img>
    <div className="rectangulo-blanco"></div>
    <div className="rectangulo-gris"></div>
  </div>
   
  <Carrusel></Carrusel>
  </> 
  );
};

export default Landing;


 /* /* <div className='banner-container'>
    <img className='imagen-banner' alt="banner" src={frame} />
    {/* <div className='banner-text'><p>SLOGAN</p></div> 
    </div> */