import React from 'react';
import doctor from '../assets/images/doctor.png';
import Love from '../Love/Love';

const About = () => {
    return (
        <>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse  mt-24">
    <img src={doctor} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
<Love/>
        </>
    );
};

export default About;