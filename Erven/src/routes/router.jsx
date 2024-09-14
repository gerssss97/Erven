import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, {useState} from "react"
import Contenedor from "../components/contenedor"
import NotFound from "../notFound"
import Servicios from '../components/Servicios'
import Productos from "../components/Productos"
import Proyectos from '../components/Proyectos'
import Nosotros from "../components/Nosotros"
import Contacto from "../components/Contacto"
import '../components/header/header'
import '../components/footer'
import '../components/landing'

const idioma  = "esp";

function condicion (){
  if (idioma==="esp"){
    return true;
  }
    return false;
  

}
let verdad= condicion();

const Router = () => {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Erven" element={verdad ? (<Navigate replace to="/Erven/esp/contenedor" />)
              : (<Navigate replace to="/Erven/eng/contenedor" />)
          }
        />
        
        <Route path="/Erven/esp/contenedor" element={<Contenedor />} >
          <Route path="servicios" element={<Servicios />} />
          <Route path="productos" element={<Productos />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
        <Route path="/Erven/eng/contenedor" element={<Contenedor />} />

        
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;