import React from 'react'
import FlexItemsCenter from '../../components/FlexItemsCenter'

function Header() {
  return (
    <section className='bg-[url(assets/header.png)] min-h-16 bg-black px-5'>
        <div className='max-w-7xl mx-auto text-white'>
            <FlexItemsCenter className='justify-between'>
                <FlexItemsCenter>
                    <img src="assets/logo.png" alt="" className='w-16 h-16' />
                    <h3 className='text-yellow-500 font-bold uppercase'>BookStore <br/> Dashboard</h3>
                </FlexItemsCenter>
            </FlexItemsCenter>
        </div>
    </section>
  )
}

export default Header