import React from "react";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      color: "bg-primary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: marker,
      color: "bg-accent",
    },
    {
      id: 3,
      name: "Contact US",
      description: "Open 9.00 am to 5.00 pm everyday",
      icon: phone,
      color: "bg-error",
    },
  ];
  return (
    <>
    <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cardData.map((card) => 
        <InfoCard key={card.id} card={card}></InfoCard>
      )}
    </div>
      
    </>
  );
};

export default InfoCards;
