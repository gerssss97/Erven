import React from "react";
import "./Landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrusel from "./Carrusel";
import imagen from "./trabajandoGrupo 1.png";
import triangulo from "./Polygon 1.svg";


const Landing = () => {
  return (
    <>
      <div >
        <div class="trabajandogrupo-1-parent">
          <img className="trabajandogrupo-1-icon" src={imagen}></img>
          <div className="rectangulo-azul"></div>
          <div className="slogan">SLOGAN</div>
          <img className="triangulo" src={triangulo}></img>
          <div className="rectangulo-blanco"></div>
          <div className="rectangulo-gris"></div>
        </div>

        <div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div>

        <Carrusel></Carrusel>

        <div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div>
      </div>
        <div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div><div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div><div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div><div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div><div className="texto-central">
          {" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nobis ex, ad tenetur libero saepe voluptatum est alias incidunt,
            itaque dignissimos! Enim maxime qui laudantium ut, provident cumque
            delectus temporibus!
          </p>
        </div>
    </>
  );
};

export default Landing;
