import React from "react";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Find your glasses",
      description: "Branded glasses & examination ",
      title:"Professional examination",
      icon: clock,
      price:'149',
      color: "bg-primary",
    },
    {
      id: 2,
      name: "Contact Lenses",
      description: "Professional examination & lenses",
      icon: marker,
      price:'189',
      title:"Glasses tryout",
      color: "bg-accent",
    },
    {
      id: 3,
      name: "Lasik surgery",
      description: "Your vision permanently healed",
      icon: phone,
      price:"449",
      color: "bg-error",
      title:"Glasses tryout",
    },
  ];
  return (
    <>
     <p className="text-center pt-24  ">
     Your health is most important
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
      With great prices
      </p>
      <p className="text-6xl font-normal text-center">& special offers</p>
    <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-[1240px] m-auto">
    
    {cardData.map((card) => 
        <InfoCard key={card.id} card={card}></InfoCard>
      )}
    </div>
    <button className="bg-[#06b6d4] hover:bg-[#f8fafc] mt-12 hover:text-[#020617] shadow-2xl  flex justify-center items-center m-auto border-none text-white btn-md     border border-blue-700 rounded-[3px] font-semibold ">
        View all lates news
      </button>
    </>
  );
};

export default InfoCards;
