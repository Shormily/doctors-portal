import React from 'react';
import Love from '../Home/Love/Love';
import Footer from '../Home/Footer/Footer';
import Map from '../Home/Map/Map';

const Service = () => {
    return (
        <>
             <div div className="color text-white p-3">
      <p className="text-center pt-32   ">
        Your service is our vision
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
      <p className="text-5xl font-normal  text-center mt-2 px-2">A wide range of</p>
      <p className="text-6xl font-semibold text-center px-2">optometry services</p>
  
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-24 justify-center items-center mt-16  max-w-[1240px] m-auto w-full">
      
        <p >
        <i className="fa-solid fa-eye icns hover:bg-[#a3a3a3] "></i>
      
          Eye examination
       
          <p className=" mt-2 text-[12px]">
            Globally harness multimedia based collaboration and idea-sharing
            with backend products. Continually whiteboard superior
            opportunities.
          </p>
        </p>
        <p>
        <i className="fa-solid fa-biohazard icns bg-[#a3a3a3]"></i>
          Diagnosis and treatment
          <p className=" mt-2 text-[12px]">
            Diagnosis and treatment Leverage agile frameworks to provide a
            robust synopsis for high level overviews. Iterative approaches to
            corporate strategy proposition.
          </p>
        </p>
        <p>
        <i className="fa-solid fa-diagram-project icns"></i>
          Evaluating eye coordination
          <p className=" mt-2 text-[12px]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs.
          </p>
        </p>
       
      </div>
      <div className="grid mb-24  sm:grid-cols-1 lg:grid-cols-3 gap-24 mt-12 justify-center items-center  max-w-[1240px] m-auto w-full">
        <p>
        <i className="fa-brands fa-skyatlas icns bg-[#a3a3a3]"></i>
      
    
          Laser eye correction
          <p className=" mt-2 text-[12px]">
            Taking seamless key performance indicators offline to maximise the
            long tail. Keeping your eye on the ball while performing a deep
            dive.
          </p>
        </p>
        <p>
        <i className="fa-sharp fa-solid fa-arrows-to-eye icns bg-[#a3a3a3]"></i>
          Contact lenses
          <p className=" mt-2 text-[12px]">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service.
          </p>
        </p>
       
        <p>
           <i className="fa-solid fa-glasses icns "></i>
          Glasses
          <p className=" mt-2 text-[12px]">
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Objectively seize scalable metrics whereas proactive
            services.
          </p>
        </p>
         
        
      </div>
   
    </div>
    <Love/>
   
  
    <Map/>
    <Footer/>
        </>
    );
};

export default Service;