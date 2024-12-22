import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Moviesitem from "./Moviesitem";
import "./swiper.css"

const Movies = ({ data }) => {
  console.log(data);
  
  return (
    <div className="container py-20">
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
            <Moviesitem {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Movies);
