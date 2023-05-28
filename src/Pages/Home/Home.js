import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Progressbar from './Progressbar/Progressbar';
import Love from './Love/Love';
import Love1 from '../Love1/Love1';

const Home = () => {
    return (
        <>
        <div >
        <Love1 />
        <Love/>
     
       <Banner/>
       <InfoCards/>
       <Progressbar/>
        
        </div>
          
        </>
    );
};

export default Home;