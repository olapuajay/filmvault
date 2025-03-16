import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

function Movies({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
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
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=046fe2fc2837b61daa04eff77cc7f888&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNumber]);
  return (
    <>
      <div className="py-4">
        <h5 className="text-white font-semibold text-xl text-center">Trending Movies</h5>
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