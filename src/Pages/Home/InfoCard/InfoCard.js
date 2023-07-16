import React from "react";


const InfoCard = ({ card }) => {
  const { name, description, price } = card;

  const names = [
    {
      one: "Glasses tryout",
    },
    {
      one: "Lenses tryout",
    },
    {
      one: "Surgery preparation",
    },
    {
      one: "Glasses box & wiping cloth",
    },
    {
      one: "Free shipping",
    },
  ];
  return (
    <>
      <div className="card px-3 card-side  rounded-2px ">
        <div className=" bg-[#e2e8f0] text-white ">
          <div className="bg-[#06b6d4] p-5 ">
            {" "}
            <h2 className="text-center font-semibold">{name}</h2>
            <div
              style={{
                backgroundColor: "white",
                height: "2px",
                marginTop: "9px",
                marginBottom: "9px",
              }}
              className="max-w-[100px] m-auto"
            />
            <p className=" text-center text-4xl mt-4 mb-4">
              $<span className="font-bold text-6xl ">{price}</span>
            </p>
            <p className="text-center">{description}</p>
          </div>

          {names?.map((names, i) => (
            <>
              <p className="text-[#020617] flex  p-2">
                {names?.one}{" "}
                <p className=" justify-end mx-2 font-semibold">$100</p>{" "}
              </p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#d4d4d4",
                  height: "1px",
                }}
              ></div>
              
            </>
          ))}
        </div>
        
      </div>
     
    </>
  );
};

export default InfoCard;
