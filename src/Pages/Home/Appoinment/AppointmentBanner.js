import React from 'react';
import je from '../assets/images/je.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const   AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
      
       
            <div className='hero   grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
                <div className="hero-content flex-col lg:gap-96 sm:gap-8  lg:flex-row-reverse   mt-24   ">
                    <div>   <img src={je} className=" lg:max-w-sm rounded-lg shadow-2xl animate__animated animate__fadeInLeft " alt=""  /></div>
                 
                    <div className=' w-full animate__animated animate__fadeInRight'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className=' '
                        />
                    </div>
                </div>
            </div>
       
    );
};

export default AppointmentBanner;