import { Search } from 'lucide-react'
import React from 'react'

function SearchComponent() {
  return (
    <div className="md:w-full w-14 max-w-sm min-w-[180px]">
      <form className="relative flex items-center">
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-gray-300 text-white text-sm border border-gray-300 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-white hover:border-sky-600 shadow-sm focus:shadow"
          placeholder="Search" 
        />
        <button className="absolute right-3 text-gray-300">
          <Search size={20} />
        </button>
      </form>
    </div>
  )
}

export default SearchComponent
