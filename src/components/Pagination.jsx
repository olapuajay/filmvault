import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

function Pagination( { handlePagePrev, handlePageNext, pageNumber } ) {
  return (
    <div className='flex justify-center items-center gap-4'>
      <button onClick={handlePagePrev} className='bg-gray-800 text-white p-2 mx-2 rounded-full'>
        <ArrowLeft size={24} />
      </button>
      <p className='text-white font-semibold text-xl'>
        {pageNumber}
      </p>
      <button onClick={handlePageNext} className='bg-gray-800 text-white p-2 mx-2 rounded-full'>
        <ArrowRight size={24} />
      </button>
    </div>
  )
}

export default Pagination
