import React, {useState} from 'react'
import { PlusIcon, X } from 'lucide-react'

function TVShowsCard({ tvShowsObj, poster_path, name, year, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const doesExist = (tvShowsObj) => {
    for(let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id === tvShowsObj.id) {
        return true;
      }
    }
    return false;
  };


  return (
    <div className='py-2'>
      <div className='relative rounded-lg overflow-hidden w-full md:h-[250px] h-[150px] bg-cover bg-center hover:scale-105 transition-transform duration-300'>
        {!isImageLoaded && (
          <div className='absolute inset-0 bg-gray-800 animate-pulse'></div>
        )}
        <img 
          src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {doesExist(tvShowsObj) ? (
          <button onClick={() => handleRemoveFromWatchlist(tvShowsObj)} className='flex justify-center items-center absolute top-0 right-0 text-red-600 bg-gray-800 p-1 rounded-bl-lg'>
            <X strokeWidth={3} />
          </button>
        ) : (
          <button onClick={() => handleAddToWatchlist(tvShowsObj)} className='flex justify-center items-center absolute top-0 right-0 text-sky-600 bg-gray-800 p-1 rounded-bl-lg'>
            <PlusIcon strokeWidth={3} />
          </button>
        )}
      </div>
      <div className='text-gray-300 md:text-sm text-xs px-2 pt-2 flex justify-items-start truncate'>
        {name.length > 10 ? name.slice(0, 10) + '...' : name}
      </div>
      <div className='text-sky-600 md:text-sm text-xs px-2 pt-2 flex justify-items-start'>
        {year}
      </div>
    </div>
  )
}

export default TVShowsCard
