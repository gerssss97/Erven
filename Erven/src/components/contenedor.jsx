import React from 'react'
import Header from './header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'


const Contenedor = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width:'100vw', position: 'relative'}}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Contenedor;