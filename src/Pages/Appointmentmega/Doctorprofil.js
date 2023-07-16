import React from 'react';
import CountUp from "react-countup";
import { BsHandThumbsUp } from "react-icons/bs";
import { SiWorldhealthorganization } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import um from "../Home/assets/images/doctrpro.jpg";
import "./Doctorprofil.css"
import dc1 from "../Home/assets/images/dc1.jpg"
import dc2 from "../Home/assets/images/dc2.jpg"
import dc3 from "../Home/assets/images/dc3.jpg"
import dc4 from "../Home/assets/images/dc4.jpg"
import dc5 from "../Home/assets/images/dc5.jpg"
import dc6 from "../Home/assets/images/dc6.jpg"
import dc7 from "../Home/assets/images/dc7.jpg"
import dc8 from "../Home/assets/images/dc8.jpg"
import dc9 from "../Home/assets/images/dc9.jpg"
import dc10 from "../Home/assets/images/dc10.jpg"
import dc11 from "../Home/assets/images/dc12.jpg"
import dc13 from "../Home/assets/images/dc13.jpg"
import {
  FaRegCalendarAlt,
  FaRegSmileBeam,
  FaPeopleArrows,
} from "react-icons/fa";
import Footer from '../Home/Footer/Footer';
const Doctorprofil = () => {

   const doctors =[
    {
        img:dc1,
        name:"Dr.Ovik",
        pragraph:"Neourologist"
    },
    {
        img:dc2,
        name:"Dr.Sohidulla",
        pragraph:"Neourologist"
    },
    {
        img:dc3,
        name:"Dr.Ovika",
        pragraph:"Neourologist"
    },
    {
        img:dc4,
        name:"Dr.Ritash",
        pragraph:"Neourologist"
    },
    {
        img:dc5,
        name:"Dr.Vibak",
        pragraph:"Neourologist"
    },
    {
        img:dc6,
        name:"Dr.Naisr",
        pragraph:"Neourologist"
    },
    {
        img:dc7,
        name:"Dr.Rabaka",
        pragraph:"Neourologist"
    },
    {
        img:dc8,
        name:"Dr.Ontorjami",
        pragraph:"Neourologist"
    },
    {
        img:dc9,
        name:"Dr.Rakib",
        pragraph:"Neourologist"
    },
    {
        img:dc10,
        name:"Dr.Saikat",
        pragraph:"Neourologist"
    },
    {
        img:dc11,
        name:"Dr.Nobitan",
        pragraph:"Neourologist"
    },
    {
        img:dc13,
        name:"Dr.Sujuki",
        pragraph:"Neourologist"
    },
   ]

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
        <p className="mt-5 text-5xl text-center text-white ">Doctors Information</p>
        <p className=" max-w-[2200px] p-3 m-auto text-[14px] text-white text-center justify-center items-center  ">
          Proactively envisioned multimedia based expertise and cross-media
          growth strategies. Seamlessly visualize quality intellectual
          <p className="mb-8">
            capital without superior collaboration and idea-sharing.
            Holistically pontificate installed base portals.
          </p>
        </p>
      </div>


      <div className="hero     grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
        <div className="  hero-content flex-col lg:gap-96 sm:gap-8   lg:flex-row-reverse   mt-8">
          <div>
            <p>Great vision within reach</p>
            <div
              style={{
                backgroundColor: "#1e3a8a",
                height: "2px",
                marginTop: "9px",
                marginBottom: "9px",
                marginRight: "80%",
              }}
            />
            <h1 className="text-5xl ">
              Look forward
              <p className="font-bold text-[#0284c7]">Doctors Information</p>
            </h1>
            <p className="py-6 text-base text-[#0f172a]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
          <div><img src={um} className=" lg:max-w-sm p-2 border-1xl w-96 mt-24  shadow-2xl mb-24" alt="" /></div>
          
        </div>
      </div>


      <div className='bg-colors p-8'>
      <div className='max-w-[1440px] m-auto text-white flex grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 justify-center item-center'>
        <div >
              <BsHandThumbsUp className="mb-4" size="40" />
              <h1 >
                <CountUp className='text-5xl' duration={1} end={100} />%
              </h1>
              <p className='text-1xl'>Quality</p>
            </div>
            <div className="">
              <SiWorldhealthorganization className="mb-4" size="40" />
              <h1>
                <CountUp className='text-5xl' duration={1} end={2480} />
              </h1>
              <p>Health Care</p>
            </div>
            <div className="">
              <IoPeopleOutline  className="mb-4" size="40" />
              <h1>
                <CountUp  className='text-5xl' duration={1} end={100} />
              </h1>
              <p>People working</p>
            </div>
            <div className="">
              <FaRegCalendarAlt className="mb-4" size="40" />
              <h1>
                <CountUp  className='text-5xl' duration={1} end={50} />
              </h1>
              <p>Years of experience</p>
            </div>
            <div className="">
              <FaRegSmileBeam className="mb-4" size="40" />
              <h1>
                <CountUp className='text-5xl' duration={100} end={7856} />
              </h1>
              <p>Happy Smiles</p>
            </div>
            <div className="">
              <FaPeopleArrows className="mb-4" size="40" />
              <h1>
                <CountUp className='text-5xl' duration={100} end={10000} />
              </h1>
              <p>Patients a year</p>
            </div>
    
        </div>
      </div>

      <p className=" text-1xl text-center  mt-14 ">Our hospital
       </p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e3a8a",
            height: "2px",
            marginTop: "9px",
            marginBottom: "9px",
          }}
          className="max-w-[100px] m-auto "
        />
         <p className=" text-5xl text-center text-sky-600 font-bold ">Best Doctors </p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-w-[1440px] m-auto justify-centet item-center mt-14 mb-24 gap-5'>
            {doctors?.map((doctor, i) =>
            (

                <div className="">
                <div className="card-container rounded-2">
                  <div className="swiper">
                    <div className="image-container ">
                      <img src={doctor.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-center text-3xl text-blue-700 mt-2 pragraph-weight">{doctor.name}</h3>
                    <p className="text-center pragraph-weight mt-2 mb-3">Neourologist</p>
                  </div>
                </div>
              </div>
            ))}
     
        </div>
     
      

 <Footer/>
        </>
    );
};

export default Doctorprofil;