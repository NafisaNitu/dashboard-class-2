import React from 'react'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import SideBarUserDetails from './SideBarUserDetails'

function Sidebar() {
  return (
    <div className="flex flex-col justify-between p-4 min-h-screen">
        <div>
            <h1 className='text-2xl uppercase font-bold mb-5'>Book Store</h1>

            <Searchbar rounded={true} />
            <Navbar />
        </div>

        <SideBarUserDetails />
    </div>
  )
}

export default Sidebar