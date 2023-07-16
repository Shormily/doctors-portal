import React from "react";
import chair from "../assets/images/chair.png";
import j from "../assets/images/j.jpg";
import jw from "../assets/images/jw.jpg";
import je from "../assets/images/je.jpg";

const Banner = () => {
  return (
    <>
      <p className="text-center pt-24  ">
        What’s going on
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
      <p className="text-5xl    font-bold text-center mt-2 text-[#06b6d4]">
        Latest news
      </p>
      <p className="text-6xl font-normal text-center">from Medicare</p>
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 p-2 gap-4 max-w-[1240px] m-auto mt-12 pb-12">
        <img src={j} className="h-80 w-96 rounded-sm shadow-2xl" alt="" />
        <img src={jw} className=" h-80 w-96 rounded-sm shadow-2xl" alt="" />
        <img src={je} className="h-80 w-96 rounded-sm shadow-2xl" alt="" />
      </div>
      <button className="bg-[#06b6d4] hover:bg-[#f8fafc] mb-12 hover:text-[#020617] shadow-2xl  flex justify-center items-center m-auto border-none text-white btn-md    border border-blue-700 rounded-[3px] font-semibold ">
        View all lates news
      </button>
    </>
  );
};

export default Banner;
