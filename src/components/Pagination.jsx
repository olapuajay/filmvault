import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Pagination( { handlePagePrev, handlePageNext, pageNumber } ) {
  return (
    <div className='d-flex justify-content-center gap-5 mt-4 mb-4 text-dark pagination'>
      <div onClick={handlePagePrev} className='btn btn-outline-dark border border-dark p-2 rounded-circle' style={{width: '40px', height: '40px'}}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      <div style={{fontSize: '1.5rem'}}> {pageNumber} </div>
      <div onClick={handlePageNext} className='btn btn-outline-dark border border-dark p-2 rounded-circle' style={{width: '40px', height: '40px'}}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}

export default Pagination
