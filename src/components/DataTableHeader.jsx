import React from 'react'
import { FaFilter } from "react-icons/fa6";
import Searchbar from './Searchbar';

function DataTableHeader({setBooks, allBooks}) {
  return (
    <div className='flex justify-between items-center'>
        <div className="flex gap-4 items-center mt-4">
          <div className='shadow-sm bg-white border rounded p-3'>
            <FaFilter />
          </div>
          <Searchbar setBooks={setBooks} allBooks={allBooks} bgColor={true} />
        </div>
          
        <div>
          <button className='text-white bg-blue-600 px-5 py-2 rounded-md shadow'>
            + Add Books
          </button>
        </div>
      </div>
  )
}

export default DataTableHeader