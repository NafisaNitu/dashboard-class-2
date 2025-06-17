import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <section>
        <div className="flex w-full">
            <div className='w-1/6 min-h-screen bg-gray-100 p-4'>
                
                <Sidebar />

            </div>
            <main className='w-5/6'><Outlet/></main>
        </div>
    </section>
  )
}

export default Layout