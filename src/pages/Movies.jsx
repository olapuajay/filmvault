import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";

function Movies({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [pageNumber, setPageNumber] = useState(1);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handlePagePrev = () => {
    if (pageNumber === 1) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePageNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const { data: movies, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
  if(loading) return <p className='text-white text-center'>Loading...</p>
  if(error) return <p className='text-red-500 text-center'>{error}</p>
  
  return (
    <>
      <div className="mt-8 p-2">
        <h5 className="text-white font-semibold md:text-xl text-lg text-left">Trending Movies</h5>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 gap-2 lg:gap-4 p-4 place-items-center">
        {movies.map((movieObj) => (
          <div key={movieObj.id} className="mb-4">
            <MovieCard
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          </div>
        ))}
      </div>
      <Pagination
        pageNumber={pageNumber}
        handlePagePrev={handlePagePrev}
        handlePageNext={handlePageNext}
      />
    </>
  );
}

export default Movies;