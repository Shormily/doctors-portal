import React from 'react';
import Navbar from '../Pages/Home/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
       
 <Navbar />
       
          
          <Outlet/>
         
         
        </div>
    );
};

export default Main;