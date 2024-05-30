import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import CartProfesoresTop from './CartProfesoresTop';

export default function SwiperProfesores({
    profesores
}) {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {profesores.map(  (profesor , index) => (
          <SwiperSlide key={profesor.id} virtualIndex={index}>
                <CartProfesoresTop
                    imagen_cart={"https://d22yb2tbj8zopv.cloudfront.net/src/school/bg-btns-menu-foreing-fex.png"}
                    color_resena={"#229954"}
                    colorBorder={"#229954"}
                    avatar={"https://d22yb2tbj8zopv.cloudfront.net/src/user/nengels.jpeg"}
                />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </>
  );
}
