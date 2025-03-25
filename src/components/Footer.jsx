import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center items-center md:h-14 h-12 bg-gray-900'>
      <p className='text-gray-300 text-sm'> 
        &copy; {new Date().getFullYear()} | Designed & Developed by <a href="https://github.com/olapuajay" className='text-sky-600'>AJAY</a>
      </p>
    </div>
  )
}

export default Footer
