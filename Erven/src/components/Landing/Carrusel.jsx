import React, {useState} from 'react';
import './Carrusel.css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-cards';


function Carrusel() {

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      className="carrusel"
    >
      <SwiperSlide>
        Slide 1
      </SwiperSlide>
      <SwiperSlide>
        Slide 2
      </SwiperSlide>
      <SwiperSlide>
        Slide 3
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
  );
}

export default Carrusel;