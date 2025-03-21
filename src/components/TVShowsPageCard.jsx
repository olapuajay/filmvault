import { PlusIcon, X } from "lucide-react";
import React from "react";

function TVShowsPageCard({ tvShowsObj, poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {

  const doesExist = (tvShowsObj) => {
    for(let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id == tvShowsObj.id) {
        return true
      }
    }
    return false
  } 

  return (
    <>
      <div className="">
        <div className="movie-card relative rounded-lg overflow-hidden md:h-40 md:w-24 bg-cover bg-center h-32 w-20 hover:scale-105 transition-transform duration-300" 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
          {
            doesExist(tvShowsObj) ? (
              <button onClick={() => handleRemoveFromWatchlist(tvShowsObj)} className="flex justify-center items-center absolute top-0 right-0 text-red-600 bg-gray-800 p-1 rounded-bl-lg">
                <X strokeWidth={3} />
              </button>
            ) : (
              <button onClick={() => handleAddToWatchlist(tvShowsObj)} className="flex justify-center items-center absolute top-0 right-0 text-sky-600 bg-gray-800 p-1 rounded-bl-lg">
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

export default TVShowsPageCard;
