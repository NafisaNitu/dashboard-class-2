import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

function DataTableFooter() {

  return (
    <div className=''>
        <div className="flex justify-between items-center">

            <p>1-10 of 97</p>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <p>Rows Per Page:</p>
                    <select name="" id="">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <div className="flex items-center gap-3">
                    <button className='bg-white rounded-md p-2'><ArrowLeft size={15} /></button>
                    <p>1/10</p>
                    <button className='bg-white rounded-md p-2'><ArrowRight size={15} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataTableFooter