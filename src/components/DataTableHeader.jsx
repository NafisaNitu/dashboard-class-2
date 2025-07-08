import React from 'react'
import { FaFilter } from "react-icons/fa6";
import Searchbar from './Searchbar';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/preference/preferenceSlice';

function DataTableHeader() {
    const dispatch =  useDispatch()
    const handleModalOpen = () => {
      dispatch(toggleModal())
    }
  return (
    <div className='flex justify-between items-center'>
        <div className="flex gap-4 items-center mt-4">
          <div className='shadow-sm bg-white border rounded p-3'>
            <FaFilter />
          </div>
          <Searchbar bgColor={true} />
        </div>
          
        <div>
          <button onClick={handleModalOpen} className='text-white bg-blue-600 px-5 py-2 rounded-md shadow'>
            + Add Books
          </button>
        </div>
      </div>
  )
}

export default DataTableHeader