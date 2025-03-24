import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import DetailsModal from "../components/DetailsModal";

function PopularMovies({
  watchlist,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
}) {
  const [pageNumber, setPageNumber] = useState(1);
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
  const API_KEY = import.meta.env.VITE_API_KEY;
  const {
    data: movies,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  );
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="mt-16 p-2">
        <h5 className="text-white font-semibold md:text-xl text-lg text-center">
          Popular Movies
        </h5>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 gap-2 lg:gap-4 p-4 place-items-center">
        {loading &&
          Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden md:h-40 md:w-24 bg-gray-800 h-32 w-20 mb-4 animate-pulse"
            >
              <div className="w-full h-full bg-gray-800 animate-pulse"></div>
            </div>
          ))}
        {error && (
          <p className="text-red-500 text-center col-span-full">{error}</p>
        )}
        {!loading && !error && movies && movies.length === 0 && (
          <p className="text-white text-center col-span-full">
            No Movies available
          </p>
        )}
        {movies.map((movieObj) => (
          <div
            key={movieObj.id}
            className="mb-4 cursor-pointer"
            onClick={() => setSelectedItem(movieObj)}
          >
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
      {selectedItem && (
        <DetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          watchlist={watchlist}
          handleAddToWatchlist={handleAddToWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
        />
      )}
    </>
  );
}

export default PopularMovies;
