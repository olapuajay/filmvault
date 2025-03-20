import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Movies({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { data: movies, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  if(loading) return <p className='text-white text-center'>Loading...</p>
  if(error) return <p className='text-red-500 text-center'>{error}</p>
  
  return (
    <>
      <div className="mt-8 p-2">
        <h5 className="text-white font-semibold md:text-xl text-lg text-left">Popular Movies</h5>
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
        <div className="mb-10">
          <Link to="/popular">
            <div className="rounded-lg overflow-hidden md:h-40 md:w-24 bg-gray-800 h-32 w-20 hover:scale-105 transition-transform duration-300 flex justify-center items-center">
              <span className="text-center text-sky-600 text-sm">View More</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Movies;