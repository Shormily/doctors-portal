import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Progressbar from './Progressbar/Progressbar';
import Love from './Love/Love';
import Love1 from '../Love1/Love1';
import Banner1 from './Banner1/Banner1';
import Countup from './Countup/Countup';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <>
        <div >
        <Love1 />
        <Banner1/>
      
       
        <InfoCards/>
        {/* <Love/> */}
       
       <Countup/>
       <Banner/>
      
       <Footer/>
       {/* <Progressbar/> */}
        
        </div>
          
        </>
    );
};

export default Home;