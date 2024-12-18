import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <>
      <div className='p-4'>
        <h5 className='text-dark text-center fw-bold'>Trending Movies</h5>
      </div>
      <div className='movie-container row justify-content-center mx-auto mb-4'>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-6 col-lg-2 col-sm-3'>
          <MovieCard />
        </div>
      </div>
    </>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=046fe2fc2837b61daa04eff77cc7f888&language=en-US&page=1