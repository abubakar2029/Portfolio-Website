"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SwiperPaginationProps {
  children: React.ReactNode[];
}

export default function SwiperPagination({ children }: SwiperPaginationProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      
      breakpoints={{
        970: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
