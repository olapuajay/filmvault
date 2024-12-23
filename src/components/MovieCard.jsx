import React from "react";
import './MovieCard.css'

function MovieCard({ movieObj, poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {

  const doesExist = (movieObj) => {
    for(let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  } 

  return (
    <>
      <div className="container">
        <div className="movie-card mb-2 position-relative" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
          <div
            className="text-light text-center p-2 text-truncate movie-card-title"
          >
            {name}
          </div>
          {
            doesExist(movieObj) ? (
              <button onClick={() => handleRemoveFromWatchlist(movieObj)} className="btn btn-dark
               d-flex justify-content-center align-items-center position-absolute" style={{top: "10px",right: "10px",zIndex: "10",height: "1.5rem",width: "1.5rem",}}>❌</button>
            ) : (
              <button onClick={() => handleAddToWatchlist(movieObj)} className="btn btn-dark d-flex justify-content-center align-items-center position-absolute" style={{top: "10px",right: "10px",zIndex: "10",height: "1.5rem",width: "1.5rem",}}>🤩</button>
            )
          }

        </div>
      </div>
    </>
  );
}

export default MovieCard;
