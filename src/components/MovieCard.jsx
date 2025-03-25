import { PlusIcon, X } from "lucide-react";
import React, { useState } from "react";

function MovieCard({ movieObj, poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
      <div className="">
        <div className="movie-card relative rounded-lg overflow-hidden md:h-40 md:w-24 bg-cover bg-center h-32 w-20 hover:scale-105 transition-transform duration-300">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
          )}
          <img 
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsImageLoaded(true)}
          />
          {
            doesExist(movieObj) ? (
              <button onClick={() => handleRemoveFromWatchlist(movieObj)} className="flex justify-center items-center absolute top-0 right-0 text-red-600 bg-gray-800 p-1 rounded-bl-lg">
                <X strokeWidth={3} />
              </button>
            ) : (
              <button onClick={() => handleAddToWatchlist(movieObj)} className="flex justify-center items-center absolute top-0 right-0 text-sky-600 bg-gray-800 p-1 rounded-bl-lg">
                <PlusIcon strokeWidth={3} />
              </button>
            )
          }
        </div>
        <div className="text-white md:text-sm text-xs px-2 pt-2 flex justify-items-start">
          {name.length > 10 ? name.slice(0, 10) + "..." : name}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
