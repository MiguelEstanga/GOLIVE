import React, {  useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import CartProfesoresTop from './CartProfesoresTop';
import { GetStorageObjet } from '../../../helper/LocalStorage';

export default function SwiperProfesores({
    profesores,
    avatar,
    colorBorder,
    imagen_cart,
    ctext
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
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={5}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual

        style={{
          '--swiper-navigation-color': '#fff', // Change to your preferred color
          '--navigation-background-color':colorBorder,
        }}
      >
        {profesores?.map(  (profesor , index) => (
          <SwiperSlide key={profesor.id} virtualIndex={index}>
                <CartProfesoresTop
                    imagen_cart={GetStorageObjet('school')?.bg_commun ?? ''}
                    color_resena={ctext}
                   
                    colorBorder={GetStorageObjet('school')?.cl_border ?? 'black'}
                   
                   
                    data={profesor}
                />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </>
  );
}
