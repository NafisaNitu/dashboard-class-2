import React, { useState } from 'react'
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableFooter from './DataTableFooter';
import { useSelector } from 'react-redux';


function DataTable() {
  const { filterBooks } = useSelector((state) => state.book)
  return (
    <div className='w-full min-h-screen relative'>
        <DataTableHeader />
        <DataTableBody books={filterBooks} />

        <DataTableFooter />
    </div>
  )
}

export default DataTable