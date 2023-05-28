import React from 'react';
import chair from '../assets/images/chair.png';

const Banner = () => {
    return (
        <>
        <div className='p-5'>
        <div className="hero  pb-5 bg-base-200  ">
  <div className="hero-content flex-col lg:flex-row pt-5 ">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-gradient-to-r from-sky-500 to-indigo-500 border-none">Get Started</button>
    </div>
  </div>
</div>  
        </div>
          
        </>
    );
};

export default Banner;