import './Banner.css';
import React from 'react';
import grupo from './trabajandoGrupo 1.png';
import poligono from './Polygon.svg';


const Banner = () => {
return (
        <div className="trabajandogrupo-1-parent">
        <img className="trabajandogrupo-1-icon" alt="" src={grupo}/>
        <img className="component-child" alt="" src={poligono}/>
        <div className="component-item">
        </div>
        <div className="component-inner">
        </div>
        <div className="slogan">SLOGAN</div>
        <div className="rectangle-div">
        </div>
        </div>
);
};

export default Banner;