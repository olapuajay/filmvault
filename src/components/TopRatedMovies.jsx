import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TopRatedMovieCard from './TopRatedMovieCard';
import useFetch from '../hooks/useFetch';

function TopRatedMovies({  handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data: movies, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

  if(loading) return <p className='text-white text-center'>Loading...</p>
  if(error) return <p className='text-red-500 text-center'>{error}</p>

  return (
    <section id='toprated' className='mt-2 p-2'>
      <h3 className='text-white font-semibold md:text-xl text-lg text-left'>Top Rated Movies</h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={8}
        slidesPerGroup={4}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true, pauseOnMouseLeave: true}}
        loop={false}
        breakpoints={{
          1024: { slidesPerView: 8 },
          768: { slidesPerView: 6 },
          640: { slidesPerView: 4 },
          320: { slidesPerView: 3, slidesPerGroup: 2 }
        }}
        className='rounded-lg mt-2'
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <TopRatedMovieCard
              movieObj={movie}
              poster_path={movie.poster_path}
              name={movie.original_title}
              year={new Date(movie.release_date).getFullYear()}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TopRatedMovies
