import { ShoppingCart } from "lucide-react"
import FlexItemsCenter from "./components/FlexItemsCenter"

function Shop() {

  return (
    <section className='py-20 px-12'>
        <div className='max-w-7xl mx-auto'>
             <FlexItemsCenter className='justify-center py-4'>
                <h2 className='text-5xl font-semibold pb-6 text-yellow-500'>Explore All Books Here</h2>
             </FlexItemsCenter>

             <div className="text-center flex items-center justify-center gap-3 pb-12">
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">All</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Novel</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Translations</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Kids’ Stories</span>
             </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/1.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/2.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/3.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/4.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/2.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/1.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/4.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
                    <img src="assets/3.png" className=''  alt="" />
                    <div>
                        <h2 className="font-semibold text-lg">Thunmanhandiya</h2>
                        <p className="text-gray-700 font-medium">Mahagamasekara</p>
                        <div className="mt-4">
                          <p>Rs. 700/=</p>
                          <p>Available across all branches</p>
                        </div>
                        <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to Cart</button>
                    </div>
                </div>
        </div>

        </div>
    </section>
  )
}

export default Shop
