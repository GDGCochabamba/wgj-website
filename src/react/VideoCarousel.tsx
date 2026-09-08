import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
// Swiper estilos base
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface VideoCarouselProps {
  flatVideos: any[];
  onSwiperInit: (swiper: SwiperClass) => void;
  onSlideChange: (swiper: SwiperClass) => void;
}

function VideoCarousel({
  flatVideos,
  onSwiperInit,
  onSlideChange,
}: VideoCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      onSwiper={onSwiperInit}
      onSlideChange={onSlideChange}
      centerInsufficientSlides={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 2 },
      }}
      navigation
      spaceBetween={32}
      pagination={{ clickable: true }}
    >
      {flatVideos.map(({ url }, index) => (
        <SwiperSlide key={index}>
          <iframe
            className="mx-auto h-[250px] w-[400px] md:h-[250px] md:w-[400px] lg:h-[304px] lg:w-[539px]"
            src={url}
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default VideoCarousel;