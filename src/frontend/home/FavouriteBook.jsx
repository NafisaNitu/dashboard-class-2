import React from 'react'
import FlexItemsCenter from '../../components/FlexItemsCenter'

function FavouriteBook() {
  return (
    <section className='py-20 px-12 bg-black'>
        <div className='max-w-7xl mx-auto'>

                <div className="flex justify-between gap-4">
                    <div className='w-1/2'>
                        <img src="assets/f.png" className=''  alt="" />
                    </div>
                   <div className='w-1/2 flex flex-col gap-5'>
                        <h2 className="font-semibold text-5xl text-white leading-snug">Your favourite <span className='text-yellow-500'>Reads <br/>Are Here!</span></h2>
                        <p className="text-white text-lg">Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles. Dive into our collection and find special deals that make reading more affordable. Shop now and unlock more savings with every purchase!</p>
                        <div className='flex justify-between mt-8'>
                            <div>
                                <h2 className="font-medium text-4xl text-yellow-600">800+</h2>
                                <p className="text-yellow-600 mt-2">Book Listing</p>
                            </div>
                            <div>
                                <h2 className="font-medium text-4xl text-yellow-600">1K+</h2>
                                <p className="text-yellow-600 mt-2">Registered Members</p>
                            </div>
                            <div>
                                <h2 className="font-medium text-4xl text-yellow-600">50+</h2>
                                <p className="text-yellow-600 mt-2">Branch Count</p>
                            </div>
                        </div>
                        <button className='text-left'>Explore More</button>
                    </div>
                </div>


        </div>
    </section>
  )
}

export default FavouriteBook