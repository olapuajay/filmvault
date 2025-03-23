import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useFetch from '../hooks/useFetch';
import TVShowsCard from './TVShowsCard';
import DetailsModal from './DetailsModal';

function TrendingTVShows({ watchlist, handleAddToWatchlist, handleRemoveFromWatchlist }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data: tvShows, loading, error } = useFetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='mt-2 p-2'>
      <h3 className='text-white font-semibold md:text-xl text-lg text-left'>Trending TV Shows</h3>
      <Swiper 
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={8}
        slidesPerGroup={4}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true, pauseOnMouseLeave: true }}
        loop={false}
        breakpoints={{
          1024: { slidesPerView: 8 },
          768: { slidesPerView: 6 },
          640: { slidesPerView: 4 },
          320: { slidesPerView: 3, slidesPerGroup: 2 }
        }}
        className='rounded-lg mt-2'
      >
        {loading && <p className='text-white text-center col-span-full'>Loading...</p>}
        {error && <p className='text-red-500 text-center col-span-full'>{error}</p>}
        {!loading && !error && tvShows && tvShows.length === 0 && <p className='text-white text-center col-span-full'>No TV Shows available</p>}
        {tvShows.map((tvShow) => (
          <SwiperSlide key={tvShow.id} className='cursor-pointer' onClick={() => setSelectedItem(tvShow)}>
            <TVShowsCard 
              tvShowsObj={tvShow}
              poster_path={tvShow.poster_path}
              name={tvShow.original_name}
              year={new Date(tvShow.first_air_date).getFullYear()}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedItem && <DetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
    </div>
  )
}

export default TrendingTVShows
