import React, { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Carousel = ({ data = { results: [] } }) => {
  console.log(data);
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!data || !data.results) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }
  

  const handleOnlineClick = (title) => {
    if (title) {
      const searchQuery = encodeURIComponent(`${title} trailer`); // Nomga "trailer" qo'shiladi
      const youtubeSearchURL = `https://www.youtube.com/results?search_query=${searchQuery}`;
      window.open(youtubeSearchURL, "_blank");
    }
  };

  const handleOnlineClick2 = (title) => {
    if (title) {
      const searchQuery = encodeURIComponent(title);
      const googleSearchURL = `https://www.google.com/search?q=${searchQuery}`;
      window.open(googleSearchURL, "_blank"); 
    }
  };

  return (
    <div className="container pb-16">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className="relative"
              src={`${import.meta.env.VITE_IMAGE_URL}${item?.backdrop_path}`}
              alt={item.title}
            />
            <h2 className="absolute bottom-20 left-4 text-[35px]">
              {item.title}
            </h2>
            <button
              className="bg-red-600 hover:bg-red-800 text-[18px] px-12 py-2 absolute bottom-6 left-4 rounded-md"
              onClick={() => handleOnlineClick(item.title)} 
            >
              Trailer
            </button>
            <button
              className="bg-indigo-600 text-[18px] px-12 py-2 absolute bottom-6 left-44 rounded-md hover:bg-indigo-900"
              onClick={() => handleOnlineClick2(item.title)} 
            >
              Online
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}${item?.backdrop_path}`}
              alt={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
