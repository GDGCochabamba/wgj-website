import { useRef } from "react";
import YearSwiper from "./YearSwiper";
import VideoCarousel from "./VideoCarousel";
import type Swiper from "swiper";
import type { SwiperClass } from "swiper/react";

export interface VideoYearGroup {
  year: number;
  videos: string[];
}

export interface FlatVideo {
  url: string;
  yearIndex: number;
}

interface VideoSectionProps {
  videosByYear: VideoYearGroup[];
}

function VideoSection({ videosByYear } : VideoSectionProps) {
  const yearSwiperRef = useRef<SwiperClass | null>(null);
  const videoSwiperRef = useRef<SwiperClass | null>(null);
  const isSyncing = useRef(false);

  const flatVideos = videosByYear.flatMap((group, yearIndex) =>
    group.videos.map((url) => ({ url, yearIndex }))
  );
  console.log("video", flatVideos)
  
  const years = videosByYear.map((g) => g.year);

  const handleVideoSlideChange = (swiper : Swiper) => {
    if (isSyncing.current) return;
    const current = flatVideos[swiper.activeIndex];
    if (!current) return;
    if (yearSwiperRef.current && yearSwiperRef.current.activeIndex !== current.yearIndex) {
      isSyncing.current = true;
      yearSwiperRef.current.slideTo(current.yearIndex);
      isSyncing.current = false;
    }
  };

  const handleYearSlideChange = (swiper : Swiper) => {
    if (isSyncing.current) return;
    const current = years[swiper.activeIndex];
    if (!current) return;
    if (videoSwiperRef.current && videoSwiperRef.current.activeIndex !== current) {
      isSyncing.current = true;
      console.log(flatVideos);
      const targetIndex = flatVideos.findIndex((v) => v.yearIndex === swiper.activeIndex);
      console.log(targetIndex);
      if (targetIndex !== -1 && videoSwiperRef.current) {
        videoSwiperRef.current.slideTo(targetIndex);
      }
      isSyncing.current = false;
    }
  };

  return (
    <>
    <div className="absolute  right-0 md:-translate-y-[100%] sm:-translate-y-[80%] max-[363px]:-translate-y-[100%] min-[364px]:-translate-y-[80%]  mb-4 md:mb-0">
    <YearSwiper years={years}
     onSwiperInit = {(swiper) => (yearSwiperRef.current = swiper)}
     onSlideChange = {handleYearSlideChange}
     />
    
    </div>
    <div>
    <VideoCarousel flatVideos={flatVideos} 
      onSwiperInit={(swiper) => (videoSwiperRef.current = swiper)}
      onSlideChange={handleVideoSlideChange}></VideoCarousel>
    </div>
    </>
  );
}

export default VideoSection;