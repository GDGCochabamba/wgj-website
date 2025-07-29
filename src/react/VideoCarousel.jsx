import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper estilos base
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoCarousel({ videos }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 2 },
      }}
      navigation
      spaceBetween={4}
      pagination={{ clickable: true }}
    >
      {videos.map((url, index) => (
        <SwiperSlide key={index}>
          <iframe
            className="px-8 py-8 h-[250px] w-[400px] md:h-[310px] md:w-[540px] lg:h-[340px] lg:w-[590px]"
            src={url}
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
