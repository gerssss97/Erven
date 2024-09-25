import Slider from "react-slick";
import React from 'react';
import './Carrusel.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Usaremos íconos de React Icons (opcional)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{ ...style, display: "block",
        color: "#646cff",  // Change the color to a dark gray
        fontSize: "80px",  // Increase the font size to make it taller
        opacity: 1,
        minHeight: "50px",
        paddingLeft: "0px",
        backgroundColor: "grey",  // Remove the background color
        borderRadius: 0,  // Remove the border radius
        boxShadow: "none" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style, display: "block", color: "#297B92", fontSize: "24px" }}
      onClick={onClick}
    />
  );
};


function Carrusel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
         
              <h3>Título del svc</h3>
              <p>Descripción del svc</p>
              <button>Cotizá/Consultá</button>
        </div>
        <div className="card">
            <h3>Título del svc</h3>
             <p>Descripción del svc</p>
             <button>Cotizá/Consultá</button>
        </div>
        <div className="card">
        <h3>Título del svc</h3>
             <p>Descripción del svc</p>
             <button>Cotizá/Consultá</button>
        </div>
        <div className="card">
        <h3>Título del svc</h3>
             <p>Descripción del svc</p>
             <button>Cotizá/Consultá</button>
        </div>
        <div className="card">
        <h3>Título del svc</h3>
             <p>Descripción del svc</p>
             <button>Cotizá/Consultá</button>
        </div>
        <div className="card">
        <h3>Título del svc</h3>
             <p>Descripción del svc</p>
             <button>Cotizá/Consultá</button>
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;