import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { filterBooks } from '../store/book/bookSlice'

function Searchbar({
  rounded,
  bgColor,
  
}) {
  const dispatch = useDispatch()

  const {searchQuery} = useSelector(state =>
    state.book)

  const handleChange = (e) => {
    dispatch(filterBooks(e.target.value))
  }
  return (
    <div className={`flex items-center gap-4 border px-4 ${ rounded ? 'rounded-full': 'rounded-md' }`}>
        <FaSearch size={20} />
        <input type="text" onChange={handleChange} className={`bg-gray-100 py-2 w-full outline-none ${ bgColor ? 'bg-white' : 'bg-gray-100' }`} placeholder='Search' value={searchQuery}/>
    </div>
  )
}

export default Searchbar