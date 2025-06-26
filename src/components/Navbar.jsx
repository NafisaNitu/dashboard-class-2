import React from 'react'
import NavLink from './NavLink'


function Navbar() {
    const navigation = [
        {
            id: 1,
            name: "Home", 
            path: "/",
            icon: "house",
            color: "black"
        },
        {
            id: 2,
            name: "About",
            path: "/about",
            icon: "book",
            color: "black"
        },
        {
            id: 3,
            name: "Books",
            path: "/books",
            icon: "book",
            color: "black"
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact",
            icon: "phone",
            color: "gray"
        },
    ]
    
  return (
    <nav className='flex flex-col gap-3 list-none mt-4'>
        {
            navigation.map((navItem)=> (
                <NavLink key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon} color={navItem.color} />
            ))
        }

    </nav>
  )
}

export default Navbar