import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Td, Th } from '../utils/TableUtils'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, setCurrentPage, setItemsPerPage } from '../store/book/bookSlice'

function DataTableBody() {
  const dispatch = useDispatch()
  const { filterBooks, currentPage, itemsPerPage } = useSelector(state => state.book)

  const totalPages = Math.ceil(filterBooks.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentBooks = filterBooks.slice(startIndex, startIndex + itemsPerPage)

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  const handlePrev = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1))
  }

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1))
  }

  const handleItemsPerPageChange = (e) => {
    dispatch(setItemsPerPage(Number(e.target.value)))
  }

  return (
    <div className='w-full py-5'>
      <table className='w-full'>
        <thead className='bg-slate-100'>
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Author</Th>
            <Th>Status</Th>
            <Th>Price</Th>
            <Th>Offer Price</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book) => (
            <tr key={book.id} className={`${book.bgColor} hover:bg-slate-200 transition-colors duration-200`}>
              <Td>{book.name}</Td>
              <Td>{book.description}</Td>
              <Td>{book.author}</Td>
              <Td className={book.status === "Available" ? "text-green-600" : "text-red-500"}>{book.status}</Td>
              <Td>{book.price}</Td>
              <Td>{book.offerPrice}</Td>
              <Td>
                <button onClick={() => handleDelete(book.id)} className='bg-red-600 py-1 px-2 rounded-md text-white'>Delete</button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className='flex justify-between items-center mt-4 flex-wrap absolute left-0 bottom-0 w-full bg-gray-100/60 py-6 px-5'>
          <p>1-10 of 97</p>
        <div className="flex justify-center items-center gap-2 mb-2">
            <label className="mr-1">Items per page:</label>
            <select onChange={handleItemsPerPageChange} value={itemsPerPage} className="p-1 mr-6 rounded">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
          

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className='px-3 py-2 rounded-md border bg-gray-300 hover:bg-gray-400 disabled:opacity-50'
        >
          <ArrowLeft size={15} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => dispatch(setCurrentPage(i + 1))}
            className={`px-3 py-1 rounded-md border ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className='px-3 py-2 rounded-md border bg-gray-300 hover:bg-gray-400 disabled:opacity-50'
        >
          <ArrowRight size={15} />
        </button>
         </div> 
      </div>
    </div>
  )
}

export default DataTableBody