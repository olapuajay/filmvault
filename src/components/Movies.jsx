import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <>
      <div className='p-4'>
        <h5 className='text-dark text-center fw-bold'>Trending Movies</h5>
      </div>
      <div className='movie-container row'> 
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        <div className='col-6 col-md-3 col-lg-2 mb-4'>
          <MovieCard />
        </div>
        
      </div>
    </>
    
  )
}

export default Movies
