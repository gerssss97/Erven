import React, {useRef,useState} from 'react';
import './Carrusel.css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Carrusel() {

  return (
    <Swiper
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={3}
      centeredSlides={true}
      initialSlide={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      // loop={true}
      navigation={true}
      className="mySwiper"
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
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
      <SwiperSlide>Slide 11</SwiperSlide>
    </Swiper>
  );
}

export default Carrusel;