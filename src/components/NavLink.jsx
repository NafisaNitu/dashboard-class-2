import React from 'react'
import { Link } from 'react-router'

function NavLink({
    name,
    path,
    icon,
    color
}) {
  return (
    <>
        <li className='flex gap-4 items-center'>
            {icon}
            <Link to={path} className={color}>{name}</Link>
        </li>
    </>
  )
}

export default NavLink