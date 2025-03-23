import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, CalendarDays, Plus, X } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import DetailsModal from "./DetailsModal";

const Banner = ({ watchlist, handleAddToWatchlist, handleRemoveFromWatchlist }) => {

  const doesExist = (movieObj) => {
    for(let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }

  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data: movies, loading, error } = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true, pauseOnMouseLeave: true }}
        loop={movies.length > 1}
        className="rounded-lg custom-swiper"
      >
        {loading && <p className="text-white text-center col-span-full">Loading...</p>}
        {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
        {!loading && !error && movies && movies.length === 0 && <p className="text-white text-center col-span-full">No Movies available</p>}
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[500px] rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedItem(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col md:justify-center justify-end px-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                <h2 className="text-white md:text-3xl text-2xl font-bold mb-2 ml-2">{movie.title}</h2>
                <p className="text-gray-300 text-lg max-w-2xl mb-4 ml-2 hidden sm:block">
                  {movie.overview.length > 150 ? movie.overview.slice(0, 150) + "..." : movie.overview}
                </p>
                <div className="flex items-center space-x-4 text-gray-300 ml-2">
                  <span className="bg-orange-500 px-3 py-1 text-white font-bold rounded-md flex items-center gap-1">
                    <Star size={16} />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="bg-gray-800 px-3 py-1 text-white rounded-md font-bold flex items-center gap-1">
                    <CalendarDays size={16} />
                    {movie.release_date}
                  </span>
                </div>
                {doesExist(movie) ? (
                  <button onClick={() => handleRemoveFromWatchlist(movie)} className="bg-red-600 px-4 py-2 text-white font-semibold rounded-md flex items-center gap-1 w-max ml-2 mt-2 md:mb-0 mb-8">
                    <X size={24} /> Remove from Watchlist
                  </button>
                ) : (
                  <button onClick={(() => handleAddToWatchlist(movie))} className="bg-sky-600 px-4 py-2 text-white font-semibold rounded-md flex items-center gap-1 w-max ml-2 mt-2 md:mb-0 mb-8">
                    <Plus size={24} /> Add to Watchlist
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedItem && <DetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Banner;
