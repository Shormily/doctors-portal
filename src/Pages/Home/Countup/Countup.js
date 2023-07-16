import React from "react";
import um from "../assets/images/doctor.png";
import CountUp from "react-countup";
import "./Countup.css";
const Countup = () => {
  return (
    <>
    
      <div className="story-section mt-64 ">
        <div className="container hero">
          <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
            <div className="">
            <div className=""><img src={um} className=" lg:max-w-lg -mt-96 " alt="" /></div>
            
            
            </div>
            <p className="text-white  text-center mx-24  -mt-[20px]  sm:text-[15px] m-auto">
                Get in touch Come and visit our quarters or simply send us an
                email anytime you want. We are open to all suggestions from our
                audience.
              </p>
          </div>
        </div>
      </div>
      <div className=" p-5 bg-color -mt-[86px]">
        <div className=" flex justify-center items-center m-auto max-w-[1200px]  ">
          <div className=" text-white grid gap-6  lg:grid-cols-6 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={1} end={100} />
              </h1>
              <p>Quality</p>
            </div>
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={1} end={2480} />
              </h1>
              <p>Patients a year</p>
            </div>
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={1} end={100} />
              </h1>
              <p>People working</p>
            </div>
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={1} end={50} />
              </h1>
              <p>Years of experience</p>
            </div>
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={100} end={7856} />
              </h1>
              <p>Happy Smiles</p>
            </div>
            <div className="">
              <h1 className=" countup-width text-white">
                <CountUp duration={100} end={10000} />
              </h1>
              <p>Quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countup;
