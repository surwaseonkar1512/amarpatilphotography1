import React from 'react'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import    'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import w7 from '../assets/wed (5).jpg'


const Graph = () => {
  return (
    <div className='flex flex-col'>
    <div className='p-[10px] w-[100%] items-center justify-center h-screen bg-fixed '>
<p className='text-black pt-20 text-3xl flex items-center justify-center z-10'>wedding</p>
<Swiper  className='bg-black'
modules={[Navigation, Pagination, Scrollbar, A11y]}
 spaceBetween={50}
 
 loop='true'
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
 scrollbar={{ draggable: true }}
 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
>
   
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>

  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>
  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  </Swiper>
</div>
<div className='p-[10px] w-[100%] items-center justify-center h-screen bg-fixed '>
<p className='text-black pt-20 text-3xl flex items-center justify-center z-10'>wedding</p>
<Swiper  className='bg-black'
modules={[Navigation, Pagination, Scrollbar, A11y]}
 spaceBetween={50}
 
 loop='true'
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
 scrollbar={{ draggable: true }}
 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
>
   
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>

  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>
  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  </Swiper>
</div>
<div className='p-[10px] w-[100%] items-center justify-center h-screen bg-fixed '>
<p className='text-black pt-20 text-3xl flex items-center justify-center z-50'>wedding</p>
<Swiper  className='bg-black'
modules={[Navigation, Pagination, Scrollbar, A11y]}
 spaceBetween={50}
 
 loop='true'
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
 scrollbar={{ draggable: true }}
 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
>
   
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>

  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>
  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  </Swiper>
</div>
<div className='p-[10px] w-[100%] items-center justify-center h-screen bg-fixed '>
<p className='text-black pt-20 text-3xl flex items-center justify-center z-10'>wedding</p>
<Swiper  className='bg-black'
modules={[Navigation, Pagination, Scrollbar, A11y]}
 spaceBetween={50}
 
 loop='true'
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
 scrollbar={{ draggable: true }}
 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
>
   
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>

  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  <SwiperSlide className=''>
  <div className='m-10 min-h-screen bg-center   flex items-center p-[9%] '>
  <img className='  w-[120%] h-auto'  src={w7} alt="/" />
           </div>
  </SwiperSlide>
  </Swiper>
</div>
  </div>
  )
}

export default Graph