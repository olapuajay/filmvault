import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "046fe2fc2837b61daa04eff77cc7f888";
  const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  useEffect(() => {
    axios.get(TRENDING_URL).then((res) => {
      setMovies(res.data.results);
    }
    );
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={movies.length > 1}
        className="rounded-lg"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[400px]">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold text-center px-4">{movie.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
