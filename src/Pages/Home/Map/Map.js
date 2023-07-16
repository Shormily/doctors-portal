import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.544153666492!2d-74.01101428500574!3d40.70603607933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649877573625!5m2!1sen!2sbd"
        width="100%"
        height="600"
        allowFullScreen=""
        loading="lazy"
        className="h-96 mt-24 "
      ></iframe>
  
      <div className="footer">
        {/* <div className="ml-[20%] justify-center item-center m-auto"> <button className="bg-[#1e3a8a] -mt-6   hover:bg-[#1e40af] border-none text-white btn-md    border border-blue-700 rounded-[3px] font-semibold ">
           View of our  service
            </button></div> */}
     
        <div className="max-w-[1440px]  m-auto flex justify-center item-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
         
          <div className=" hero-content flex-col lg:gap-96 sm:gap-8   lg:flex-row-reverse   mt-24">
            <div className="mb-8">
              <h1 className="text-6xl ">
                Get in <span className="font-bold text-[#0284c7]">touch</span>
              </h1>
              <div
                style={{
                  backgroundColor: "#1e3a8a",
                  height: "2px",
                  marginTop: "9px",
                  marginBottom: "9px",
                  marginRight: "90%",
                }}
              />

              <p className="py-6 text-base text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-24 text-white  gap-24 justify-center items-center mt-16  max-w-[1240px] m-auto w-full">
            <p>
              <i className="fa-solid fa-eye icns bg-white hover:bg-[#a3a3a3] "></i>

              <p className=" mt-2 text-[12px]">27th Avenus</p>
              <p className=" mt-2 text-[12px]"> W2 3XE, Nwe Work</p>
            </p>
            <p>
              <i className="fa-solid fa-biohazard icns bg-[#a3a3a3]"></i>
              <p className=" mt-2 text-[12px]">27th Avenus</p>
              <p className=" mt-2 text-[12px]"> W2 3XE, Nwe Work</p>
            </p>
            <p>
            <i className="fa-sharp fa-solid fa-arrows-to-eye icns bg-[#a3a3a3]"></i>
              <p className=" mt-2 text-[12px]">27th Avenus</p>
              <p className=" mt-2 text-[12px]"> W2 3XE, Nwe Work</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
