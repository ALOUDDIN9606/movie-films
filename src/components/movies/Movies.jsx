import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css"
import Moviesitem from "./Moviesitem";
import { useFavorites } from "../saved/FavoritesContext";

const Movies = ({ data }) => {
  const { addToFavorites } = useFavorites();

  return (
    <div className="container py-4">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        className="MoviesSwiper"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Moviesitem {...movie} onAddToFavorites={addToFavorites} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Movies;
