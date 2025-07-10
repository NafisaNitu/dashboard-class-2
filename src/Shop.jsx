import { ShoppingCart } from "lucide-react"
import FlexItemsCenter from "./components/FlexItemsCenter"
import { useSelector } from "react-redux"
import { Link } from "react-router"

function Shop() {
    const { allBooks } = useSelector((state)=> state.book) 
  return (
    <section className=''>
        <div className='max-w-7xl mx-auto px-5 py-10'>
             <FlexItemsCenter className='justify-center py-4'>
                <h2 className='text-5xl font-semibold pb-6 text-yellow-500'>Explore All Books Here</h2>
             </FlexItemsCenter>

             <div className="text-center flex items-center justify-center gap-3 pb-12">
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">All</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Novel</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Translations</span>
                <input type="checkbox" class="default:ring-2" /><span className="font-semibold text-lg">Kids’ Stories</span>
             </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
              {
                allBooks.map((book) => (
                  <div key={book.id} className="shadow-inner hover:shadow-xl transition-all rounded-xl text-center p-4">
                    <img src={"assets/1.png"} alt={book.name} className="w-full h-56" />
                    <h2 className="font-semibold text-lg mt-4">{book.name}</h2>
                    <p className="text-gray-700 font-medium">{book.author}</p>
                    <p className="text-800 mt-2">{book.price}</p>
                    <button className='flex  mx-auto gap-2 text-left text-black border border-yellow-600 rounded-lg py-1 px-6 w-fit mt-4'><ShoppingCart size={20} />Add to cart</button>
                  </div> 
                ))
              }
                {/* <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
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
                </div> */}

                {

                }

                {/* <div className="flex flex-col justify-center items-center gap-4 border shadow-inner hover:shadow-xl transition-all rounded-xl py-4">
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
                </div> */}
        </div>

        <Link to={"/cart"} className="fixed bottom-0 right-0 w-12 h-12 items-center justify-center rounded-md bg-yellow-200 z-10">
          <div className="flex items-center justify-center">
            <ShoppingCart /> <span className="ml-1 bg-slate-500 text-white rounded-full w-5 h-5 flex items-center justify-center">1</span>
          </div>
        </Link>

        </div>
    </section>
  )
}

export default Shop
