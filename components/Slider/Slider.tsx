'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import SliderItem, { SliderItemProps } from './SliderItem';
import { FC } from 'react';

import ArrowIcon from '@/assets/icons/arrow.svg';

type SliderProps = {
  slides?: SliderItemProps[];
};

const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={{ prevEl: '#swiper_prev', nextEl: '#swiper_next' }}
      loop={true}
      modules={[EffectFade, Navigation, Autoplay]}
      className='relative'
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <SliderItem {...slide} />
        </SwiperSlide>
      ))}
      <div
        className='absolute left-0 top-0 z-20 flex h-full items-center'
        id='swiper_prev'
      >
        <ArrowIcon className='h-10 w-10 rotate-180 cursor-pointer lg:h-14 lg:w-14' />
      </div>

      <div
        id='swiper_next'
        className='absolute right-0 top-0 z-20 flex h-full items-center'
      >
        <ArrowIcon className='h-10 w-10 cursor-pointer lg:h-14 lg:w-14' />
      </div>
    </Swiper>
  );
};

export default Slider;
