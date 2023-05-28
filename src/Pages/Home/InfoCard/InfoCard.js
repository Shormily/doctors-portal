import React from 'react';

const InfoCard = ({card}) => {
    const {name,description,icon} = card;
    return (
        <>
           <div className="card px-3 card-side  shadow-xl bg-neutral">
  <figure>
    <img src={icon} alt="car!"/>
    </figure>
  <div className="card-body text-white">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> 
        </>
    );
};

export default InfoCard;