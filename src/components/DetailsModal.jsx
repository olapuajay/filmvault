import React from 'react'
import { motion } from 'framer-motion'
import { Star, X } from 'lucide-react'

function DetailsModal({ item, onClose }) {
  if(!item) return null;

  return (
    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 100 }}
      className='fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-xl rounded-t-2xl p-4 md:p-6 max-h-[80vh] overflow-auto z-50'
    >
      <div className='flex justify-between items-center'>
        <h2 className='text-lg md:text-xl font-semibold'>
          {item.title || item.name}
        </h2>
        <button onClick={onClose} className='text-gray-400 hover:text-white'>
          <X size={24} />
        </button>
      </div>
      
      <div className='flex flex-col md:flex-row gap-4 mt-4'>
        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt={item.title || item.name}
          className='w-full md:w-1/3 rounded-lg shadow-md'
        />
        <div className='flex-1'>
          <p className='text-gray-300 text-sm md:text-base'> {item.overview} </p>
          <p className='mt-2 text-sm'>
            <strong>Release Date: </strong> {item.release_date || item.first_air_date}
          </p>
          <p className='mt-1 text-sm'>
            <strong>Rating: </strong> {item.vote_average} <Star size={16} className='text-yellow-400' />
          </p>
          <p className='mt-1 text-sm'>
            <strong>Popularity: </strong> {item.popularity}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default DetailsModal
