import React from 'react';
import chair from '../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const   AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
        <header >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse mt-24">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-8 sm:w-full w-96 '>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='w-96 '
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;