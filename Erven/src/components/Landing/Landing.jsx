import React from 'react';
import './Landing.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carrusel from './Carrusel';
import frame from './Frame 1.jpg';



const Landing = ()=> {
  return (
  <>
  <div className='banner-container'>
    <img className='imagen-banner' alt="banner" src={frame} />
  </div>
  
  <Carrusel></Carrusel>
  </>
  );
};

export default Landing;