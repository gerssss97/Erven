import React from 'react'
import Header from './header/header'
import Footer from './footer'
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