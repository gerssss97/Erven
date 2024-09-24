import './Banner.css';
import React from 'react';
import grupo from './trabajandoGrupo 1.png';
import poligono from './Polygon.svg';


const Banner = () => {
return (
        <div className="container-banner">
                <img className="imagen-grupo" alt="" src={grupo}/>
                <div className='caja-derecha'>
                        <img className="triangulo" alt="" src={poligono}/>
                        <div className="caja-azul"></div>
                        <div className="caja-gris"></div>
                        <div className="slogan">SLOGAN</div>
                        <div className="rectangle-div"></div>
                </div>
        </div>
);
};

export default Banner;