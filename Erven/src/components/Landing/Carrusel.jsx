import React, {useState} from 'react';
import './Carrusel.css';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide ,cardsEffect} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-cards';


  export default ()=> (
    <Swiper
      modules={[Navigation, cardsEffect]} //modulos cargados
      spaceBetween={100} 
      slidesPerView={3} //parametro
      navigation
      cardsEffect={{perSlideRotate: 40}}
      allowSlideNext={true}
      perSlideRotate={40}
      rotate={true}
     
     
  >
    <SwiperSlide className='card'>Slide 1</SwiperSlide>
    <SwiperSlide className='card2'>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
  );



// export default Carrusel;

  {/* // <div className="carousel">
    //   <button className="arrow left" onClick={prevSlide}>❮</button>
    //   <div className="carousel-container">
    //     <div className={`card left`} key={items[leftIndex].id}>
    //       {items[leftIndex].content}
    //     </div>
    //     <div className={`card active`} key={items[currentIndex].id}>
    //       {items[currentIndex].content}
    //     </div>
    //     <div className={`card right`} key={items[rightIndex].id}>
    //       {items[rightIndex].content}
    //     </div>
    //   </div>
    //   <button className="arrow right" onClick={nextSlide}>❯</button>
    // </div> */}