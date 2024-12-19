import React, { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "./swipper.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Carousel = ({ data = { results: [] } }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!data || !data.results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
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
            <img className=" relative" src={`${import.meta.env.VITE_IMAGE_URL}${item?.backdrop_path}`} alt={item.title} />
            <h2 className="absolute bottom-20 left-4 text-[35px]">{item.title}</h2>
            <button className="bg-red-600 px-12 py-2 absolute bottom-4 left-4 rounded-md">Online</button>
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
            <img src={`${import.meta.env.VITE_IMAGE_URL}${item?.backdrop_path}`} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
