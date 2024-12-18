import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Pagination() {
  return (
    <div className='d-flex justify-content-center gap-5 mt-4 mb-4 text-dark fs-4 pagination'>
      <div className='btn btn-outline-dark border border-dark p-2 rounded-circle' style={{width: '40px', height: '40px'}}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      <div>1</div>
      <div className='btn btn-outline-dark border border-dark p-2 rounded-circle' style={{width: '40px', height: '40px'}}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}

export default Pagination
