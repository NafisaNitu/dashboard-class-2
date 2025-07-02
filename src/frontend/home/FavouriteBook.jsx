import React from 'react'
import FlexItemsCenter from '../../components/FlexItemsCenter'

function FavouriteBook() {
  return (
    <section className='sm:pt-20 pt-4 sm:pb-8 px-12 bg-black'>
        <div className='max-w-7xl mx-auto'>

                <div className="sm:flex justify-between gap-4">
                    <div className='sm:w-1/2 w-full'>
                        <img src="assets/f.png" className=''  alt="" />
                    </div>
                   <div className='sm:w-1/2 w-full flex flex-col gap-5'>
                        <h2 className="font-semibold sm:text-5xl text-2xl text-white leading-snug">Your favourite <span className='text-yellow-500'>Reads <br/>Are Here!</span></h2>
                        <p className="text-white text-lg">Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles. Dive into our collection and find special deals that make reading more affordable. Shop now and unlock more savings with every purchase!</p>
                        <div className='flex justify-between mt-8'>
                            <div>
                                <h2 className="font-medium sm:text-4xl text-2xl text-yellow-600">800+</h2>
                                <p className="text-yellow-600 mt-2">Book Listing</p>
                            </div>
                            <div>
                                <h2 className="font-medium sm:text-4xl text-2xl text-yellow-600">1K+</h2>
                                <p className="text-yellow-600 mt-2">Registered Members</p>
                            </div>
                            <div>
                                <h2 className="font-medium sm:text-4xl text-2xl text-yellow-600">50+</h2>
                                <p className="text-yellow-600 mt-2">Branch Count</p>
                            </div>
                        </div>
                        <button className='text-left text-white border border-yellow-600 rounded-lg py-2 px-12 w-fit mt-4'>Explore More</button>
                    </div>
                </div>

        </div>
    </section>
  )
}

export default FavouriteBook