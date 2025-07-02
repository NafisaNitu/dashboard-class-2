import React from 'react'

function Footer() {
  return (
     <section className=' px-12 bg-black'>
        <div className='max-w-7xl mx-auto py-10'>

            <div className='mt-4 border-b'>
                <img src="assets/footer.png" className=''  alt="" />
            </div>
                <div className="sm:flex items-center justify-between gap-4 mt-4">
                    <p className='text-white'>&copy; 2025 Book Store</p>

                    <div className='flex items-center gap-6'>
                        <p className='text-yellow-500'>Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!</p>
                       
                            <img src="assets/fa.png" className=''  alt="" />
                            <img src="assets/l.png" className=''  alt="" />
                        
                    </div>
                </div>
        </div>
     </section>           
  )
}

export default Footer