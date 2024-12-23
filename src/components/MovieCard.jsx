import React from "react";

function MovieCard({ movieObj, poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const movieCard = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "30vh",
    width: "120px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    cursor: "pointer",
  };
  const title = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: "5px",
    borderRadius: "0 0 8px 8px",
    fontWeight: "bold",
  };

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
        <div className="movie-card mb-2 position-relative" style={movieCard}>
          <div
            className="text-light text-center p-2 text-truncate title"
            style={title}
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
