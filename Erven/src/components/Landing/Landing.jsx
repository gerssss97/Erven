import React from 'react';
import './Landing.css';
import trabajandoGrupo from "./trabajandoGrupo2.jpg"
import banner from "./banner.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carrusel from './Carrusel';
import Banner from './Banner'



const Landing = ()=> {
  return (
        /* <div className='banner-container'>
      <img src={trabajandoGrupo} className='fotoGrupo' />
    </div> */
    // <div className="banner-container">
    //   <section className="first">
    //     <img src={trabajandoGrupo} className="fotoGrupo" />
    //     <div className='separator'></div>
    //   </section>
    //   <section className="second">
    //     <div className='inner'>
    //       <h1>SEGUNDO
    //       </h1>
    //     </div>
    //   </section>
    // </div>
    <>
    <Banner></Banner>
    <Carrusel></Carrusel>
    </>
  );
};

export default Landing;