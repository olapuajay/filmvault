import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import TVShowsPageCard from '../components/TVShowsPageCard';
import Pagination from '../components/Pagination';
import DetailsModal from '../components/DetailsModal';

function TVShows({ watchlist, handleAddToWatchlist, handleRemoveFromWatchlist }) {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePagePrev = () => {
    if(pageNumber === 1) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  }
  const handlePageNext = () => {
    setPageNumber(pageNumber + 1);
  }

  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data: tvShows, loading, error } = useFetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);

  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className='mt-16 p-2'>
      <h5 className="text-white font-semibold md:text-xl text-lg text-center">TV Shows</h5>
      <div className='grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 gap-2 lg:gap-4 p-4 place-items-center'>
        {loading && <p className='text-white text-center col-span-full'>Loading...</p>}
        {error && <p className='text-red-500 text-center col-span-full'>{error}</p>}
        {!loading && !error && tvShows && tvShows.length === 0 && <p className='text-white text-center col-span-full'>No TV Shows available</p>}
        {tvShows.map((tvShow) => (
          <div key={tvShow.id} className='mb-4 cursor-pointer' onClick={() => setSelectedItem(tvShow)}>
            <TVShowsPageCard
              tvShowsObj={tvShow}
              poster_path={tvShow.poster_path}
              name={tvShow.original_name}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          </div>
        ))}
      </div>
      <Pagination pageNumber={pageNumber} handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} />
      {selectedItem && <DetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
    </div>
  )
}

export default TVShows
