import React from 'react'
import './Movies.css'

function MovieCard( { poster_path, name } ) {
  const movieCard = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '160px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    cursor: 'pointer',
    
  }
  const title = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: '5px',
    borderRadius: '0 0 8px 8px',
    fontWeight: 'bold',
  }
  return (
    <>
      <div className="container">
        <div className="movie-card mb-2" style={movieCard}>
          <div className='text-light text-center p-2 text-truncate title' style={title}>
            {name}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default MovieCard
