import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { Star, CalendarDays } from "lucide-react";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  useEffect(() => {
    axios.get(TRENDING_URL).then((res) => {
      setMovies(res.data.results);
    }
    );
  }, []);

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
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
                <div className="flex items-center space-x-4 text-gray-300 ml-2 md:mb-0 mb-8">
                  <span className="bg-orange-500 px-3 py-1 text-white font-bold rounded-md flex items-center gap-1">
                    <Star size={16} />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="bg-gray-800 px-3 py-1 text-white rounded-md font-bold flex items-center gap-1">
                    <CalendarDays size={16} />
                    {movie.release_date}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
