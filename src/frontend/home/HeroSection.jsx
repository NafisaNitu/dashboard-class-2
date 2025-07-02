import React from 'react'

function HeroSection() {
  return (
    <section className='bg-[url(assets/hero.png)] min-h-[700px] bg-center'>
        <div className='max-w-4xl mx-auto text-white text-center flex flex-col gap-10 px-6 pt-20'>
            <h2 className='text-5xl font-bold capitalize text-yellow-500'>The Book Lover's Dreamland Awaits!</h2>
            <p className='xl:text-lg'>Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.</p>
            <div className='border border-yellow-300/30 w-2/4 mx-auto py-3 px-5 rounded-md text-left relative'>
                <input type="text" placeholder='Search a Book' className='bg-transparent outline-none' />
                <button className='bg-yellow-300/30 text-white py-2 px-8 rounded-md absolute right-1 top-1'>Search</button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection