import React from 'react'
import NavLink from './NavLink';
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const userDetails = {
  name: "Sara Kely",
  img: "/src/images/1.jpeg",
  role: "Admin",
  icon1: "settings",
  icon2: "log-out",
  color: "red",
}

function SideBarUserDetails() {
  return (
    <div className='flex flex-col gap-4'>
        <div className="flex items-center gap-4">
            <img src={userDetails.img} className='h-8 w-8 rounded-full' alt="" />

            <div className="">
                <h2 className='text-xl font-bold capitalize'>{userDetails.name}</h2>
                <p className='bg-[#FFCD71] rounded-full text-center mt-1'>{userDetails.role}</p>
            </div>
        </div>
        <div>
          <NavLink name="Settings" path="/settings" icon={userDetails.icon1} />
        </div>

        <div className='text-red-500'>
          <NavLink name="Logout" path="/logout" color={userDetails.color} icon={userDetails.icon2}  />
        </div>
    </div>

  )
}

export default SideBarUserDetails