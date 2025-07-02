import React from 'react'
import FlexItemsCenter from '../../components/FlexItemsCenter'

function BestBooks() {
  return (
    <section className='py-20 px-12'>
        <div className='max-w-7xl mx-auto'>
             <FlexItemsCenter className='justify-center py-4'>
                <h2 className='text-5xl font-bold pb-12'>Our Best Picks</h2>
             </FlexItemsCenter>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="assets/1.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700">Mahagamasekara</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="assets/2.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Gamperaliya</h2>
                        <p className="text-gray-700">Martin Wickramasinghe</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="assets/3.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Nectar in a Sieve</h2>
                        <p className="text-gray-700">Kamala Markandaya</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="assets/4.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Adaraneeya Victoria</h2>
                        <p className="text-gray-700">Mohan Raj Madawala</p>
                    </div>
                </div>
        </div>

        </div>
    </section>
  )
}

export default BestBooks