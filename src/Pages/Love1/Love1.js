import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";
import "./Love1.css";
import swip1 from "../Home/assets/images/swip1.jpg";
import swip2 from "../Home/assets/images/swip2.jpg";
import swip3 from "../Home/assets/images/swip3.jpg";
import swip4 from "../Home/assets/images/swip4.jpg";
import swip5 from "../Home/assets/images/swip5.jpg";
import swip6 from "../Home/assets/images/swip6.jpg";
import swip7 from "../Home/assets/images/swip7.jpg";

const Love1 = () => {
  return (
    <>
    <div >
    {/* className="grid grid-cols-2  justify-center items-center bg-sky-200  m-auto w-full" */}
{/* <div>
<p className="text-2xl text-center text-gray-500">For a clearer tommorow</p>
<p className="text-2xl text-center">For a clearer tommorow</p>
</div> */}
<div className="w-full pt-8  text-white h-100%  bg-[#e0f2fe] ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 4,
            loop: true,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swipers "
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl  border-4 font-medium  text-indigo-800"
              src={swip1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip6}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip7}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <img
              className=" lg:w-full h-full mx-auto shadow-2xl border-4 font-medium  text-indigo-800"
              src={swip3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
      
    </>
  );
};

export default Love1;
