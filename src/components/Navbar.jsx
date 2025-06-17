import React from 'react'
import NavLink from './NavLink'
import { FaHome  } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { IoBackspace, IoBookSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";


function Navbar() {
    const navigation = [
        {
            id: 1,
            name: "Home", 
            path: "/",
            icon: <FaHome />
        },
        {
            id: 2,
            name: "About",
            path: "/about",
            icon: <MdLibraryBooks />
        },
        {
            id: 3,
            name: "Books",
            path: "/books",
            icon: <IoBookSharp />
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact",
            icon: <IoIosContact />
        },
    ]
    
  return (
    <nav className='flex flex-col gap-3 list-none mt-4'>
        {
            navigation.map((navItem)=> (
                <NavLink key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon}  />
            ))
        }

    </nav>
  )
}

export default Navbar