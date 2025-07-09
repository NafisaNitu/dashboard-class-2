import React from 'react'
import FlexItemsCenter from '../../components/FlexItemsCenter'
import { BiBell } from 'react-icons/bi'
import { Link } from 'react-router'

function Header() {
  return (
    <section className="bg-[url('/assets/header.png')] min-h-16 bg-center bg-black px-5 py-2">
        <div className='max-w-7xl mx-auto text-white'>
            <FlexItemsCenter className='justify-between'>
                <FlexItemsCenter>
                    <img src="assets/logo.png" alt="" className='w-16 h-16' />
                    <h3 className='pl-4 text-yellow-500 font-bold uppercase'>BookStore <br/> Dashboard</h3>
                </FlexItemsCenter>
            
            <FlexItemsCenter className='gap-5'>
                <ul className='sm:flex hidden items-center gap-5'>
                 <li><Link to="/admin/books">Dashboard</Link></li>
                 <li><Link to="/">Home</Link></li>
                  <li><a href="">About </a></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><a href="">Contact</a></li>
                </ul> 
                <BiBell size={20} />

                <FlexItemsCenter>
                  <img src="assets/avatar.png" alt="" className="w-12 h-10 rounded-full" />
                  <p>John Doe</p>
                </FlexItemsCenter>
            </FlexItemsCenter>
            </FlexItemsCenter>
        </div>
    </section>
  )
}

export default Header
