import React from 'react'
import Header from './header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'


const Contenedor = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Contenedor;