import React from 'react'
import heroImg from '/assets/hero.png';


function HeroSection() {
  return (
    <section style={{ backgroundImage: `url(${heroImg})` }} className="sm:min-h-[700px] min-h-[500px] bg-center">
        <div className='max-w-4xl mx-auto text-white text-center flex flex-col sm:gap-10 gap-6 px-6 sm:pt-20 pt-8'>
            <h2 className='xl:text-5xl text-2xl font-bold capitalize text-yellow-500'>The Book Lover's Dreamland Awaits!</h2>
            <p className='xl:text-lg'>Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.</p>
            <div className='border border-yellow-300/30 sm:w-2/4 w-full mx-auto py-3 px-5 rounded-md text-left relative'>
                <input type="text" placeholder='Search a Book' className='bg-transparent outline-none' />
                <button className='bg-yellow-300/30 text-white py-2 px-8 rounded-md absolute right-1 top-1'>Search</button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
