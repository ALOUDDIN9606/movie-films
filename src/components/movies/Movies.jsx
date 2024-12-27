import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import Moviesitem from "./Moviesitem";
import { useFavorites } from "../saved/FavoritesContext";

const Movies = ({ data }) => {
  const { addToFavorites } = useFavorites();

  return (
    <div className="bg-white dark:bg-black text-white dark:text-white">
      <div className="container py-4">
        <Swiper
          loop={true}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            350: {
              slidesPerView: 2, // 500px va undan kichik ekranlar uchun 2ta slayd
            },
            500: {
              slidesPerView: 3, // 800px va undan kichik ekranlar uchun 3ta slayd
            },
            1024: {
              slidesPerView: 4, // 1024px va undan katta ekranlar uchun 4ta slayd
            },
          }}
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
    </div>
  );
};

export default Movies;
