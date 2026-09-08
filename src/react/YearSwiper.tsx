import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Swiper estilos base
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface YearSwiperProps {
  years: number[];
  onSwiperInit: (swiper: SwiperClass) => void;
  onSlideChange: (swiper: SwiperClass) => void;
}

function YearSwiper({ years, onSwiperInit, onSlideChange }: YearSwiperProps) {
  return (
    <Swiper                                       // ← component used here
      modules={[Navigation, Pagination]}
      onSwiper={onSwiperInit}
      onSlideChange={onSlideChange}
      centerInsufficientSlides={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1280: { slidesPerView: 1 },
      }}
      
      navigation
      spaceBetween={32}
      className="w-[160px] md:w-[180px] mb-36 md:mb-10 [--swiper-navigation-size:14px] md:[--swiper-navigation-size:20px]"
      
    >
      {years.map((year, i) => (
        <SwiperSlide key={year}>
          <p className="font-bold text-[36px] md:text-[48px] leading-[100%] text-center text-yellow-title font-display-title text-border">{year}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default YearSwiper;