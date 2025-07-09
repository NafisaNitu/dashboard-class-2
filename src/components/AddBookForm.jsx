import React from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../store/book/bookSlice';
import { toggleModal } from '../store/preference/preferenceSlice';

function AddBookForm() {
  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault()

    const bookName = e.target[0].value;
    const bookDescription = e.target[1].value;
    const bookAuthor = e.target[2].value;

    dispatch(addBook({
      id: Date.now(),
      name: bookName,
      description: bookDescription,
      author: bookAuthor,
      status: "Available",
      price: "10.00",
      offerPrice: "5.00",
      bgColor: "bg-white",
    }))

    e.target.reset();
    dispatch(toggleModal())
    console.log(bookName, bookDescription, bookAuthor)
  }
  return (
    <div className='text-white'>
      <h1 className="mb-5">Add Book</h1>
      <form onSubmit={handleAddBook} className='flex flex-col gap-5 text-black'>
        <input type="text" name='name' id='name' placeholder='Book Name' className='border border-gray-400 py-2 px-3 rounded-md w-full text-black' />
        <input type="text" name='description' id='description' placeholder='Book Description' className='border border-gray-400 py-2 px-3 rounded-md w-full text-black' />
        <input type="text" name='author' id='author' placeholder='Book Author' className='border border-gray-400 py-2 px-3 rounded-md w-full text-black' />
       

        <input type="submit" value="submit" className='bg-blue-500 py-2 px-3 rounded-md' />
      </form>
    </div>
  )
}

export default AddBookForm