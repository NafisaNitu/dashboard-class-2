import React from 'react'
import { Outlet } from 'react-router';
import Header from '../frontend/home/Header';

function FrontEndLayout() {
  return (
    <div>
        <Header />
        <main><Outlet/></main>
        <footer>Footer</footer>
    </div>
  )
}

export default FrontEndLayout