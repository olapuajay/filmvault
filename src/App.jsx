import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import TopRatedMovies from "./components/TopRatedMovies";
import PopularMovies from "./pages/PopularMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import TrendingTVShows from "./components/TrendingTVShows";
import PopularTVShows from "./components/PopularTVShows";
import TVShows from "./pages/TVShows";
import TopRatedTVShows from "./components/TopRatedTVShows";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    const newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchlist(filteredWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    const movieFromLocalStorage = localStorage.getItem("watchlist");
    if (!movieFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(movieFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <TopRatedMovies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <UpcomingMovies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <TrendingTVShows watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <PopularTVShows watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                <TopRatedTVShows watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
              </>
            }
          />
          <Route path="/popular" element={ <PopularMovies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> } />
          <Route path="/tvshows" element={ <TVShows watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> } />
          <Route path="/watchlist" element={ <WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
