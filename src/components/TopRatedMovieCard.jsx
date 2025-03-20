import React from 'react'
import { PlusIcon, X } from 'lucide-react'

function TopRatedMovieCard({ movieObj, poster_path, name, year, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const doesExist = (movieObj) => {
    for(let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <div className='py-2'>
      <div className='relative rounded-lg overflow-hidden w-full md:h-[250px] h-[150px] bg-cover bg-center hover:scale-105 transition-transform duration-300' 
        style={{backgroundImage: `url(${imageUrl})`}}>
        {doesExist(movieObj) ? (
          <button onClick={() => handleRemoveFromWatchlist(movieObj)} className='flex justify-center items-center absolute top-0 right-0 text-red-600 bg-gray-800 p-1 rounded-bl-lg'>
            <X />
          </button>
        ) : (
          <button onClick={() => handleAddToWatchlist(movieObj)} className='flex justify-center items-center absolute top-0 right-0 text-sky-600 bg-gray-800 p-1 rounded-bl-lg'>
            <PlusIcon />
          </button>
        )}
      </div>
      <div className='text-gray-300 md:text-sm text-xs px-2 pt-2 flex justify-items-start'>
        {name.length > 10 ? name.slice(0, 10) + '...' : name}
      </div>
      <div className='text-sky-600 md:text-sm text-xs px-2 pt-2 flex justify-items-start'>
        {year}
      </div>
    </div>
  )
}

export default TopRatedMovieCard
