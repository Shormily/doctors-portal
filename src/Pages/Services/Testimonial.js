import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <>
            <div className='max-w-[1600px]   text-center mx-auto justify-center item-center ' >
        
      
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              847: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              914: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              2066: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[ Pagination,Autoplay]}
            className="mt-12  text-center "
          >
            <SwiperSlide className='mb-12 '>
              <h4 className=" text-2xl font-medium my-2 text-indigo-800">
                7 Ways to Get More Sleep Naturely{" "}
              </h4>
              <p className="mb-3  ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                sadipscing sadipscing vero at sed no dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl font-medium  my-2 font-medium  text-indigo-800">
                Healping Children Deal With Trauma
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
               Our Definitive Guide to Cold and Ful
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                How to Handle Your Kid's Mystery 
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
               Do You Known the ABCs of Health Care
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                Kid's Health Care
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                7 Ways to Get More Sleep Naturely{" "}
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
              Our Definitive Guide to Cold and Ful
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                Health Care
              </h4>
              <p className="mb-3 mt-3 ">
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing  ea. Sed labore
                no.
                <p>
                At sed invidunt sea eirmod aliquyam eos elitr dolore,
                sadipscing sadipscing vero at sed no dolore ea. Sed labore
                no.</p>
                <p>
                At sed invidunt sea eirmod aliquyam dolore,
                s dolore ea. </p>
              </p>
            </SwiperSlide>
          </Swiper>
    </div>  
        </>
    );
};

export default Testimonial;