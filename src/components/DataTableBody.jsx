import React from 'react'
import  { Td,Th } from '../utils/TableUtils'

function DataTableBody({books}) {
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
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book)=>(
                        <tr key={book.id} className={`${book.bgColor} hover:bg-slate-200	transition-colors duration-200`}>
                            <Td>{book.name}</Td>
                            <Td>{book.description}</Td>
                            <Td>{book.author}</Td>
                            <Td className={book.status==="Available" ? "text-green-600" : "text-red-500"}>{book.status}</Td>
                            <Td>{book.price}</Td>
                            <Td>{book.offerPrice}</Td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataTableBody