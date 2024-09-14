/* import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React, {useState} from "react"
import Contenedor from "./components/contenedor"
import NotFound from "./notFound"


const idioma  = "esp";

function condicion (){
  if (idioma==="esp"){
    return true;
  }
    return false;
  

}
let verdad= condicion();

const App = () => {
  
  return (
    
    <Router>
      <Routes>
        <Route path="/Erven" element={verdad ? (<Navigate replace to="/Erven/esp/contenedor" />)
              : (<Navigate replace to="/Erven/eng/contenedor" />)
          }
        />
        
        <Route path="/Erven/esp/contenedor" element={<Contenedor />} />
        <Route path="/Erven/eng/contenedor" element={<Contenedor />} />

        
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};

export default App; */