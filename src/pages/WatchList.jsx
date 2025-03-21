import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";

function WatchList({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncrease = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  const sortDecrease = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <div className="mt-16">
      <h3 className="text-center text-white text-xl font-bold">Watch List</h3>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {genreList.map((genre, index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre ? "bg-sky-400 md:px-4 md:py-2 p-2 rounded-lg md:text-sm text-xs text-white font-semibold" : "bg-gray-800 md:py-2 md:px-4 p-2 rounded-lg md:text-sm text-xs text-white"
              }
            >
              {" "}
              {genre}{" "}
            </button>
          );
        })}
      </div>
      <div className="text-center mx-auto my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="p-2 rounded-xl md:w-1/2 border-2 border-gray-300 bg-gray-800 text-white active:outline-none focus:outline-none"
          placeholder="Search Movies"
        />
      </div>
      <div>
        {watchlist.length === 0 && (
          <div className="text-center text-gray-300 text-lg">No Movies in Watchlist</div> 
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto text-white mx-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 flex justify-center items-center gap-2">
                <div onClick={sortDecrease}>
                  <ArrowUp size={20} />
                </div>
                <div>Ratings</div>
                <div onClick={sortIncrease}>
                  <ArrowDown size={20} />
                </div>
              </th>
              <th className="px-4 py-2">Popularity</th>
              <th className="px-4 py-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return (
                  (movieObj.title && movieObj.title.toLowerCase().includes(search.toLowerCase())) || 
                  (movieObj.name && movieObj.name.toLowerCase().includes(search.toLowerCase())
                  )
                ) 
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2 border-gray-800 py-2">
                    <td className="flex items-center gap-2 my-2 px-4 py-2">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="Movie Poster"
                        className="w-16 h-24 rounded-lg"
                      />
                      <p className="text-gray-300"> {movieObj.title || movieObj.name} </p>
                    </td>
                    <td className="text-center text-gray-300 px-4 py-2"> {movieObj.vote_average} </td>
                    <td className="text-center text-gray-300 px-4 py-2"> {movieObj.popularity} </td>
                    <td className="text-center text-gray-300 px-4 py-2"> {genreIds[movieObj.genre_ids?.[0]]} </td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-500 cursor-pointer px-4 py-2"
                    >
                      <Trash size={20} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
