import React from "react";
import um from "../assets/images/rb.png";
import { FaHandHoldingMedical, FaFulcrum } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { MdOutlineEmergency } from "react-icons/md";
import Love from "../Love/Love";
import Cards from "../Cards/Cards";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="hero  bg-[#e0f2fe]   grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
        <div className="  hero-content flex-col lg:gap-96 sm:gap-8   lg:flex-row-reverse   mt-24">
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
              <p className="font-bold text-[#0284c7]">to your future</p>
            </h1>
            <p className="py-6 text-base text-[#0f172a]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
          <div><img src={um} className=" lg:max-w-sm rounded-lg shadow-2xl" alt="" /></div>
          
        </div>
      </div>
      <p className="text-center pt-24  ">
      Your vision is our focus
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
      </p>
      <p className="text-5xl    font-bold text-center mt-2 text-[#0284c7]">
      Better eyes
      </p>
      <p className="text-6xl font-normal text-center">for a better life</p>
      <div className="grid  gap-6 mt-24 lg:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 text-white  max-w-[1240px] m-auto" >
            <div>
            <FaFulcrum color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Medical Treatment</h3>
            <p className="mt-4 footer-weight text-[#0f172a]">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
            </div>
           
            <div className="" >
            <FaHandHoldingMedical color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Medical professionals</h3>
            <p className="mt-4 footer-weight text-[#0f172a]">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="" >
            <MdOutlineEmergency color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Emergency Help</h3>
            <p className="mt-4 footer-weight text-[#0f172a]">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="" >
            <BiGitRepoForked color="cornflowerblue" size={60} />
            <h3 className="footer-weight mt-3">Qualified Doctors</h3>
            <p className="mt-4 footer-weight text-[#0f172a]">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          </div>
          
          <Cards/>
          {/* <Map/> */}
          {/* <Love /> */}
          <Footer/>
     
    </>
  );
};

export default About;
