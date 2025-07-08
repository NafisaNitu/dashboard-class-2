import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../store/preference/preferenceSlice';

function Modal({children}) {
  const dispatch =  useDispatch()
    const { modalOpen } = useSelector(state => state.preference)

    const handleClose = () => {
      dispatch(toggleModal())
    }
  return (
    <div className={`fixed top-0 w-1/2 h-full bg-black/90 z-10 p-5 transition duration-500 ease-in-out ${modalOpen === "open" ? 'right-0 opacity-100' : 'right-[-999px] opacity-0'}`}>
        <div className='flex justify-end text-white cursor-pointer'>
            <button className='px-5 py-2 bg-white/90 rounded-md text-black/90' onClick={handleClose}>X</button>
        </div>
        <div className='p-5'>
            {children}
        </div>
    </div>
  )
}

export default Modal