import React from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const handlePagePrev = () => {
    if(pageNumber === 1) {
      setPageNumber(1)
    } else {
      setPageNumber(pageNumber - 1)
    }
  }

  const handlePageNext = () => {
    setPageNumber(pageNumber + 1)
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=046fe2fc2837b61daa04eff77cc7f888&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        console.log(res.data.results)
        setMovies(res.data.results)
      });
  }, [pageNumber]);
  return (
    <>
      <div className="p-4">
        <h5 className="text-dark text-center fw-bold">Trending Movies</h5>
      </div>
      <div className="movie-container row justify-content-center mx-auto mb-4">
        {
          movies.map((movieObj) => {
            return <>
              <div className="col-6 col-md-6 col-lg-2 col-sm-3 mb-2">
                <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title} />
              </div>
            </>
          })
        }
      </div>
      <Pagination pageNumber={pageNumber} handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} />
    </>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=046fe2fc2837b61daa04eff77cc7f888&language=en-US&page=1
