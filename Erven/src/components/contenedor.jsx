import React from 'react'
import Header from './header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'
import './contenedor.css'


const Contenedor = () => {
  return (
    <div className='all'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Contenedor;