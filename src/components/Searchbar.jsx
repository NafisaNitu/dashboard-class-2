import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar({
  rounded,
  bgColor,
  setBooks,
  allBooks
}) {

  const handleChange = (e) => {
    const filterBooks = allBooks.filter(book => {

      return book.name.toLowerCase().includes(e.target.value.toLowerCase()) || book.description.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setBooks(filterBooks)
  }
  return (
    <div className={`flex items-center gap-4 border px-4 ${ rounded ? 'rounded-full': 'rounded-md' }`}>
        <FaSearch size={20} />
        <input type="text" onChange={handleChange} className={`bg-gray-100 py-2 w-full outline-none ${ bgColor ? 'bg-white' : 'bg-gray-100' }`} placeholder='Search'/>
    </div>
  )
}

export default Searchbar