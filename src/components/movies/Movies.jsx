import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Moviesitem from "./Moviesitem";
import "./swiper.css"

const Movies = ({ data }) => {

  if (!data || !data.results) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      </div>
    );
}

  
  return (
    <div className="container py-4 min-h-[400px]">
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
