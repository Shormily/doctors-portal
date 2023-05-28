import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import swip1 from "../assets/images/swip1.jpg";
import swip2 from "../assets/images/swip2.jpg";
import swip3 from "../assets/images/swip3.jpg";
import swip4 from "../assets/images/swip4.jpg";
import swip5 from "../assets/images/swip5.jpg";
import swip6 from "../assets/images/swip6.jpg";
import swip7 from "../assets/images/swip7.jpg";

const Love = () => {
    return (
        <div className='max-w-[1440px] mx-auto ' >
            <Swiper
                slidesPerView={3}
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
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  847: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  914: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  2066: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mt-8"
              >
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800 " src={swip1} alt="" />
                  <hr />
                  <h4 className=" text-2xl font-medium my-2 text-indigo-800">
                    7 Ways to Get More Sleep Naturely{" "}
                  </h4>
                  <p className="mb-3 er ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip2} alt="" />
                  <hr />
                  <h4 className=" text-2xl font-medium  my-2 font-medium  text-indigo-800">
                    Healping Children Deal With Trauma
                  </h4>
                  <p className="mb-3 ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip3} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                   Our Definitive Guide to Cold and Ful
                  </h4>
                  <p className="mb-3 ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip4} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                    How to Handle Your Kid's Mystery 
                  </h4>
                  <p className="mb-3 ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip5} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                   Do You Known the ABCs of Health Care
                  </h4>
                  <p className="mb-3">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip6} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                    Kid's Health Care
                  </h4>
                  <p className="mb-3 ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip7} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                    7 Ways to Get More Sleep Naturely{" "}
                  </h4>
                  <p className="mb-3 ">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip1} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                  Our Definitive Guide to Cold and Ful
                  </h4>
                  <p className="mb-3">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-98 scale-75 border-8 font-medium  text-indigo-800" src={swip1} alt="" />
                  <hr />
                  <h4 className=" text-2xl  my-2 font-medium  text-indigo-800">
                    Health Care
                  </h4>
                  <p className="mb-8 footer-weight">
                    At sed invidunt sea eirmod aliquyam eos elitr dolore,
                    sadipscing sadipscing vero at sed no dolore ea. Sed labore
                    no.
                  </p>
                </SwiperSlide>
              </Swiper>
        </div>
    );
};

export default Love;