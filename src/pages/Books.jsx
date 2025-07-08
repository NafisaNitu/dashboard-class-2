import React from 'react'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import AddBookForm from '../components/AddBookForm'

function Books() {
  return (
    <div className='px-5 py-3'>
      <Modal>
        <AddBookForm />
      </Modal>
      <DataTable />

    </div>
  )
}

export default Books