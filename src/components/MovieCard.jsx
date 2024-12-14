import React from 'react'
import './Movies.css'

function MovieCard() {
  const movieCard = {
    backgroundImage: `url(https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '160px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  }
  return (
    <>
      <div className="container">
        <div className="movie-card mb-2" style={movieCard}></div>
      </div>
    </>
  )
}

export default MovieCard
