import React from 'react';
import Love from '../Home/Love/Love';
import InfoCards from '../Home/InfoCard/InfoCards';
import Footer from '../Home/Footer/Footer';
import Testimonial from '../Services/Testimonial';

const Generalinfo = () => {
    return (
        <>
            <div className="bg-colors p-5">
        <p className="pt-32 text-2xl text-center text-white ">Appointment</p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e3a8a",
            height: "2px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
          className="max-w-[100px] m-auto"
        />
        <p className="mt-5 text-5xl text-center text-white ">General Information</p>
        <p className=" max-w-[2200px] p-3 m-auto text-[14px] text-white text-center justify-center items-center  ">
          Proactively envisioned multimedia based expertise and cross-media
          growth strategies. Seamlessly visualize quality intellectual
          <p className="mb-8">
            capital without superior collaboration and idea-sharing.
            Holistically pontificate installed base portals.
          </p>
        </p>
      </div>
      <Love/>
      <div className="eye-section mt-8">
        <div className=" ">
          <p className=" text-[20px]  text-zinc-500 text-center text-white ">
            Vision screenings vs. eye exams: Why are
          </p>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1e3a8a",
              height: "1px",
              marginTop: "9px",
              marginBottom: "9px",
            }}
            className="max-w-[100px] m-auto"
          />
          <p className="text-7xl text-center">Why are</p>
          <p className="mt-5 text-5xl text-center text-cyan-500 font-bold ">
            eye exams important?
          </p>
          <p className=" max-w-[2200px]  m-auto  text-[20px] text-zinc-700 text-center justify-center items-center  ">
            Dynamically target high-payoff intellectual capital for customized
            technologies. Objectively integrate emerging core competencies.
            <p className="">
              capital without superior collaboration and idea-sharing.
              Holistically pontificate installed base portals.
            </p>
          </p>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#a1a1aa",
              height: "1px",
              marginTop: "9px",
              marginBottom: "9px",
            }}
            className="max-w-[1500px] m-auto "
          />
          <Testimonial />
        </div>
      </div>
      <div className='mb-24'>
      <InfoCards />
      </div>
    
      <Footer/>
        </>
    );
};

export default Generalinfo;