'use client'
import { type FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
// import { EffectFade } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css/bundle'

const ImageSlider: FC = () => {
  return (
    <Swiper
    //   modules={[EffectFade]}
      effect='fade'
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 1000 }}
      onSlideChange={() => {
        console.log('slide change')
      }}
      onSwiper={swiper => {
        console.log(swiper)
      }}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default ImageSlider
