import React from "react";
import "./Contact.css";
import { Input } from "antd";
import Footer from "../Footer/Footer";

const Contact = () => {
  const { TextArea } = Input;
  return (
    <div className="">
      <div className="bg-colors p-5">
        <h1 className="pt-32 text-5xl text-center text-white">Contact us</h1>
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
        <p className=" max-w-[2200px] p-3 m-auto text-[14px] text-white text-center justify-center items-center  ">
          Globally incubate standards compliant channels before scalable
          benefits. Quickly disseminate superior deliverables whereas web-
          <p className="mb-8">
            enabled applications. Quickly drive clicks-and-mortar catalysts for
            change before vertical architectures.
          </p>
        </p>
      </div>
    
      <div className="max-w-[1200px] p-3 m-auto ">
        <p className=" text-[18px] mt-24">Email us with ease</p>

        <p className="text-6xl text-bold">
          Get in <span className="text-sky-500 font-bold">touch</span>{" "}
        </p>
        <p className="max-w-[2200px] mt-3 m-auto  ">
          Proactively envisioned multimedia based expertise and cross-media
          growth strategies.{" "}
          <p>Seamlessly visualize quality intellectual capital.</p>
        </p>
      </div>

      <div className="mt-5 grid gap-7 lg:ml-64 p-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* <div className="grid gap-7  mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-64 p-4 flex justify-center items-center"> */}
        <div>
          <p className="text-[12px]">Your Name (required)</p>
          <Input type="text" className="p-2 mb-5 rounded-none " />
          <p className="text-[12px]">Your Email (required)</p>
          <Input type="text" className="p-2 mb-5 rounded-none" />
          <p className="text-[12px]">Subject </p>
          <Input type="text" className="p-2 mb-5 rounded-none" />
          <p className="text-[12px]">Your Message </p>
          <TextArea
            rows={4}
            placeholder=""
            className="rounded-none"
            maxLength={6}
          />
           <button className="bg-[#06b6d4] hover:bg-[#f8fafc] mt-5 hover:text-[#020617] shadow-2xl  m-auto border-none text-white btn-md  w-40   border border-blue-700 rounded-[3px] font-semibold ">
        Submit form
      </button>
        </div>
        <div>
        <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.544153666492!2d-74.01101428500574!3d40.70603607933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649877573625!5m2!1sen!2sbd"
              width="100%"
              height="600"
              allowFullScreen=""
              loading="lazy"
              className="w-[2000] h-96 "
            ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
