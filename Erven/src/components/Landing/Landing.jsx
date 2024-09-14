import React from 'react';
import './Landing.css';
import trabajandoGrupo from "./trabajandoGrupo.jpg"

const Landing = ()=> {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={trabajandoGrupo} alt="Team" />
      </div>
      <div className="banner-text">
        <p>Texto</p>
      </div>
      <div class="image-container">
        <img src={trabajandoGrupo} alt="Imagen con línea diagonal" />
      </div>
    </div>
  );
};

export default Landing;