import React from 'react'
import { Outlet } from 'react-router';
import Header from '../frontend/home/Header';
import Footer from '../frontend/home/Footer';

function FrontEndLayout() {
  return (
    <div>
        <Header />
        <main><Outlet/></main>
        <Footer />
    </div>
  )
}

export default FrontEndLayout