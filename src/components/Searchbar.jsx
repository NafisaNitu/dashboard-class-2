import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar({
  rounded,
  bgColor
}) {
  return (
    <div className={`flex items-center gap-4 border px-4 ${ rounded ? 'rounded-full': 'rounded-md' }`}>
        <FaSearch size={20} />
        <input type="text" placeholder='Search' className={`bg-gray-100 py-2 w-full outline-none ${ bgColor ? 'bg-white' : 'bg-gray-100' }`} />
    </div>
  )
}

export default Searchbar